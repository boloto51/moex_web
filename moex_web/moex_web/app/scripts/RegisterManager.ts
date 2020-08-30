import {LoginModel} from "./LoginModel";
import {RegisterModel} from "./RegisterModel";

export class RegisterManager {
    model: RegisterModel;
    emailSelector: JQuery;
    passSelector: JQuery;
    nameSelector: JQuery;
    passConfirmSelector: JQuery;
    emailValidationSelector: JQuery;
    passValidationSelector: JQuery;
    nameValidationSelector: JQuery;
    passConfirmValidationSelector: JQuery;
    generalValidationSelector: JQuery;
    passStrengthValidationSelector: JQuery;
    registerButtonSelector: JQuery;
    registerUrl: string;

    constructor(registerUrl: string) {
        this.registerUrl = registerUrl;
        this.initModel();
        this.initSelectors();

        this.initEvents();
    }

    private initSelectors() {
        this.passSelector = $("#Password");
        this.passValidationSelector = $(".validation-password");
        this.passStrengthValidationSelector = $(".validation-password-strength");
        this.nameSelector = $("#Name");
        this.nameValidationSelector = $(".validation-name");
        this.passConfirmSelector = $("#ConfirmPassword");
        this.passConfirmValidationSelector = $(".validation-confirm-password");
        this.emailSelector = $("#Email");
        this.emailValidationSelector = $(".validation-email");
        this.generalValidationSelector = $(".validation-register");
        this.registerButtonSelector = $(".register-button");
    }

    private initModel() {
        this.model = new RegisterModel();
        this.model.Email = "";
        this.model.Password = "";
        this.model.Name = "";
        this.model.ConfirmPassword = "";
    }

    private initEvents() {
        this.emailSelector.on("input", () => {
            this.model.Email = this.emailSelector.val() as string;
            this.checkFilled(this.emailSelector, this.emailValidationSelector);
        });
        this.passSelector.on("input", () => {
            this.model.Password = this.passSelector.val() as string;
            this.checkFilled(this.passSelector, this.passValidationSelector);
        });
        this.passConfirmSelector.on("input", () => {
            this.model.ConfirmPassword = this.passConfirmSelector.val() as string;
            this.checkFilled(this.passConfirmSelector, this.passConfirmValidationSelector);
        });
        this.nameSelector.on("input", () => {
            this.model.Name = this.nameSelector.val() as string;
            this.checkFilled(this.nameSelector, this.nameValidationSelector);
        });
        this.registerButtonSelector.on("click", () => {
            if(this.modelIsValid())
                this.tryRegister();
        })
    }
    
    private checkPasswordStrength(pass: string){
        this.clearValidation(this.passStrengthValidationSelector);
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        if(pass.match(regex))
            return true;
        this.showValidation(this.passStrengthValidationSelector);
        return false;
            }

    private modelIsValid(){
        return this.checkName() && this.checkEmail()
            && this.checkPasswordStrength(this.model.Password)
            && this.checkPassEquality();
    }
    
    private checkPassEquality(){
        if(!this.checkPass() || !this.checkConfirmPass()) return false;
        let areEqual = this.model.ConfirmPassword === this.model.Password;
        if(areEqual){
            this.generalValidationSelector.addClass("hidden-element");        
        }else {
            this.generalValidationSelector.removeClass("hidden-element");
            this.generalValidationSelector.text("Пароли не совпадают");
        }
        return areEqual;
    }

    private checkFilled(selector: JQuery, validationSelector: JQuery) : boolean{
        this.clearValidation(validationSelector);
        const text = selector.val() as string;
        if(!text || text.length === 1)
        {
            this.showValidation(validationSelector);
            return false;
        }
        return true;
    }

    private showValidation(selector: JQuery){
        selector.removeClass("hidden-element");
    }

    private clearValidation(selector: JQuery) {
        selector.addClass("hidden-element");
    }

    private tryRegister(){
        $.ajax({
            type: "POST",
            url: this.registerUrl,
            data: JSON.stringify(this.model),
            contentType: 'application/json'
        })
            .done(result => {
                if((result +"").length === 0)
                    window.location.href = "/";
                this.generalValidationSelector.text(result+"");
            })
            .fail(() => {
                this.generalValidationSelector.text("Что-то сломалось... Попробуйте зайти попозже, наверняка мы все скоро починим.");
            });
    }

    private checkPass(){
        this.model.Password = this.passSelector.val() as string;
        this.checkFilled(this.passSelector, this.passValidationSelector);
        return this.model.Password && this.model.Password.length;
    }

    private checkEmail(){
        this.model.Email = this.emailSelector.val() as string;
        this.checkFilled(this.emailSelector, this.emailValidationSelector);
        return this.model.Email && this.model.Email.length;
    }

    private checkConfirmPass(){
        this.model.ConfirmPassword = this.passConfirmSelector.val() as string;
        this.checkFilled(this.passConfirmSelector, this.passConfirmValidationSelector);
        return this.model.ConfirmPassword && this.model.ConfirmPassword.length;
    }

    private checkName(){
        this.model.Name = this.nameSelector.val() as string;
        this.checkFilled(this.nameSelector, this.nameValidationSelector);
        return this.model.Name && this.model.Name.length;
    }
}