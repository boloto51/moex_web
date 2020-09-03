import {ResetModel} from "./ResetModel";
import {NetSender} from "./NetSender";

export class ResetManager {
    model: ResetModel;
    passSelector: JQuery;
    passValidationSelector: JQuery;
    generalValidationSelector: JQuery;
    loginButtonSelector: JQuery;
    url: string;

    constructor(url: string, token: string) {
        this.url = url;
        this.initModel(token);
        this.initSelectors();

        this.initEvents();
    }

    private initSelectors() {
        this.passSelector = $("#Password");
        this.passValidationSelector = $(".validation-password");
        this.generalValidationSelector = $(".validation-login");
        this.loginButtonSelector = $(".reset-button");
    }

    private initModel(token : string) {
        this.model = new ResetModel();
        this.model.Token = token;
        this.model.Password = "";
        this.model.Confirm = "";
    }

    private initEvents() {
        this.passSelector.on("input", () => {
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

    private modelIsValid(){
        return this.checkPass();
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
        NetSender.post(this.url, this.model,
            result => {
                if((result +"").length === 0)
                    window.location.href = "/";
                this.generalValidationSelector.text(result);
                this.generalValidationSelector.removeClass("hidden-element");
            },
            () => {
                this.generalValidationSelector.text("Что-то сломалось... Попробуйте зайти попозже, наверняка мы все скоро починим.");
                this.generalValidationSelector.removeClass("hidden-element");
            }
            );
    }
}