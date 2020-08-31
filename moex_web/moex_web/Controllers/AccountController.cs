using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using moex_web.Core.RemoteAgents;
using moex_web.Core.Utils;
using moex_web.Data.Entities;
using moex_web.Data.Repositories;
using moex_web.Models;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace moex_web.Controllers
{
    public class AccountController : Controller
    {
        private readonly IUserRepository _userRepository;
        private readonly IMailAgent _mail;

        public AccountController(IUserRepository userRepository, IMailAgent mail)
        {
            _userRepository = userRepository;
            _mail = mail;
        }

        [HttpGet]
        public IActionResult Login()
        {
            return View(new LoginModel());
        }

        [HttpPost]
        public async Task<string> Login([FromBody] LoginModel model)
        {
            var userByMail = await _userRepository.Get(model.Email);
            if (userByMail == null) return "Некорректные логин и(или) пароль";
            var allow = await _userRepository.AllowLogin(userByMail.Id);
            if (!allow)
                return "Превышено количество попыток. Попробуйте зайти через 15 минут.";
            var user = await _userRepository.Get(model.Email, model.Password);
            if (user == null) return "Некорректные логин и(или) пароль";
            await Authenticate(model.Email, user.Role);
            await _userRepository.AttemptReset(user.Id);
            return string.Empty;
        }

        [HttpGet]
        public IActionResult Register()
        {
            return View();
        }

        [HttpPost]
        public async Task<string> Register([FromBody] RegisterModel model)
        {
            if (ModelState.IsValid)
            {
                var existing = await _userRepository.CheckExisting(model.Email);
                if (!existing)
                {
                    _userRepository.Add(new User { Email = model.Email, Password = model.Password, Name = model.Name });
                    await Authenticate(model.Email, Role.User);
                    return string.Empty;
                }

                return "Пользователь с таким логином уже зарегистрирован";
            }

            return string.Join(". ", ModelState.Select(m => m.Value.Errors));
        }

        private async Task Authenticate(string name, Role role)
        {
            var claims = new List<Claim>
            {
                new Claim(ClaimsIdentity.DefaultNameClaimType, name),
                new Claim(ClaimsIdentity.DefaultRoleClaimType, role.GetDisplayName())
            };
            ClaimsIdentity id = new ClaimsIdentity(claims, "ApplicationCookie", ClaimsIdentity.DefaultNameClaimType,
                ClaimsIdentity.DefaultRoleClaimType);
            await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, new ClaimsPrincipal(id),
                new AuthenticationProperties { IsPersistent = true });
        }

        [Authorize]
        public async Task<IActionResult> Logout()
        {
            await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
            return RedirectToAction("Login", "Account");
        }

        [AllowAnonymous]
        [HttpGet]
        public IActionResult ForgotPassword()
        {
            return View();
        }

        [AllowAnonymous]
        [HttpPost]
        public async Task<string> ForgotPassword([FromBody] string mail)
        {
            var user = await _userRepository.Get(mail);
            if (user == null) return "Пользователь не найден.";
            var token = await _userRepository.Forgot(user.Id);
            _mail.SendMail(user.Email, "Восстановление пароля",
                $"Для смены пароля перейдите <a href=\"https://patterns.artstesh.ru/account/reset?token={token}\">по ссылке</a>.");
            return string.Empty;
        }

        [AllowAnonymous]
        [HttpGet]
        public IActionResult Reset(string token)
        {
            return View(new ResetModel { Token = token });
        }

        [AllowAnonymous]
        [HttpPost]
        public async Task<string> Reset([FromBody] ResetModel model)
        {
            if (await _userRepository.Reset(model.Token, model.Password))
                return string.Empty;
            return "Вероятно прошло слишком много времени с запроса на смену пароля. Попробуйте еще раз.";
        }
    }
}