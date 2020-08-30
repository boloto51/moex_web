import {LoginModel} from "./LoginModel";

export class LoginManager {
    model: LoginModel;
    emailSelector: JQuery;
    passSelector: JQuery;
    emailValidationSelector: JQuery;
    passValidationSelector: JQuery;
    generalValidationSelector: JQuery;
    loginButtonSelector: JQuery;
    forgotButtonSelector: JQuery;
    loginUrl: string;
    
    constructor(loginUrl: string) {
        this.loginUrl = loginUrl;
        this.initModel();
        this.initSelectors();

        this.initEvents();
    }

    private initSelectors() {
        this.passSelector = $("#Password");
        this.passValidationSelector = $(".validation-password");
        this.emailSelector = $("#Email");
        this.emailValidationSelector = $(".validation-email");
        this.generalValidationSelector = $(".validation-login");
        this.loginButtonSelector = $(".login-button");
        this.forgotButtonSelector = $(".forgot-button");
    }

    private initModel() {
        this.model = new LoginModel();
        this.model.Email = "";
        this.model.Password = "";
    }

    private initEvents() {
        this.emailSelector.on("input", () => {
            this.model.Email = this.emailSelector.val() as string;
            this.checkFilled(this.emailSelector, this.emailValidationSelector);
        });
        this.passSelector.on("input", () => {
            this.loginButtonSelector.removeClass("hidden-element");
            this.forgotButtonSelector.addClass("hidden-element");
            this.model.Password = this.passSelector.val() as string;
            this.checkFilled(this.passSelector, this.passValidationSelector);
        });
        this.loginButtonSelector.on("click", () => {
            if(this.modelIsValid())
                this.tryLogin();
        })
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
    
    private modelIsValid(){
        return this.checkEmail() && this.checkPass();
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
    
    private tryLogin(){
        this.generalValidationSelector.addClass("hidden-element");
        $.ajax({
            type: "POST",
            url: this.loginUrl,
            data: JSON.stringify(this.model),
            contentType: 'application/json'
        })
            .done(result => {
                if((result +"").length === 0)
                    window.location.href = "/";
                this.generalValidationSelector.text(result+"");
                this.generalValidationSelector.removeClass("hidden-element");
                this.loginButtonSelector.addClass("hidden-element");
                this.forgotButtonSelector.removeClass("hidden-element");
            })
            .fail(() => {
                this.generalValidationSelector.text("Что-то сломалось... Попробуйте зайти попозже, наверняка мы все скоро починим.");
                this.generalValidationSelector.removeClass("hidden-element");
            });
    }
}