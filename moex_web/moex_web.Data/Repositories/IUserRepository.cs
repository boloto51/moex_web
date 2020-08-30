using System.Collections.Generic;
using System.Threading.Tasks;
using moex_web.Data.Entities;

namespace moex_web.Data.Repositories
{
    public interface IUserRepository
    {
        Task<List<User>> Get();
        Task<User> Get(string email, string pass);
        Task Add(User user);
        Task<bool> CheckExisting(string email);
        Task<User> Get(string email);
        Task<string> Forgot(int userId);
        Task<bool> Reset(string token, string password);
        Task<bool> AllowLogin(int userId);
        Task AttemptReset(int userId);
        //int[] GetThemes(string? mail);
        //Task SetLearnedState(int userId, int themeId, bool state);
    }
}