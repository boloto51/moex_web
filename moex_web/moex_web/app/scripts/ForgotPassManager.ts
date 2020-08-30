import {NetSender} from "./NetSender";

export class ForgotPassManager {
    inputSelector: JQuery;
    submitSelector: JQuery;
    validationSelector: JQuery;
    mail: string;
    url: string;
    
    constructor(url: string) {
        this.url = url;
        this.submitSelector = $(".forgot-button");
        this.inputSelector = $(".forgot-form input");
        this.validationSelector =$(".validation");
        this.inputSelector.trigger("focus");
        this.initEvents();
    }

    private initEvents() {
        this.inputSelector.on("input", () => {            
            this.onInput();
        });
        
        this.submitSelector.on("click", () => {
            this.submitSelector.prop("disabled", true);
            if(this.mail.length === 0) {
                this.validationSelector.removeClass("hidden-element");
                this.validationSelector.text("Необходимо указать e-mail");
                return;
            }
            NetSender.post(this.url, this.mail as any, (r) => {
                if(r.length === 0)
                {
                    this.validationSelector.removeClass("hidden-element");
                    this.validationSelector.text("Проверьте почту!");
                    setTimeout(() => window.location.href = "/", 500);
                }
                else 
                {
                    this.validationSelector.removeClass("hidden-element");
                    this.validationSelector.text(r);
                }
            })
        });
    }
    
    private onInput(){
        this.validationSelector.addClass("hidden-element");
        this.mail = this.inputSelector.val() as string;
        this.submitSelector.prop("disabled", false);
    }
}