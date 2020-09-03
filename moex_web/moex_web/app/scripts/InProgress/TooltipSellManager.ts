import { InProgressIndexModel } from "../Models/InProgressIndexModel";
import { NetSender } from "../NetSender";
import { UtcZone } from "../Components/UtcZone";

export class TooltipSellManager {
    wrapperSelector: JQuery;
    cancelSelector: JQuery;
    confirmSelector: JQuery;
    dateSelector: JQuery;
    priceSelector: JQuery;
    numberSelector: JQuery;
    titleSelector: JQuery;
    currentEntity: InProgressIndexModel;
    private sellSecurityUrl: string;

    constructor(sellSecurityUrl: string) {
        this.sellSecurityUrl = sellSecurityUrl;
        this.wrapperSelector = $(".sell-tooltip-wrapper");
        this.cancelSelector = this.wrapperSelector.find(".cancel");
        this.confirmSelector = this.wrapperSelector.find(".confirm");
        this.dateSelector = this.wrapperSelector.find(".date-input");
        this.priceSelector = this.wrapperSelector.find(".price-input");
        this.numberSelector = this.wrapperSelector.find(".number-input");
        this.titleSelector = this.wrapperSelector.find(".title");
        this.initEvents();
    }

    public show(entity: InProgressIndexModel): void {
        this.currentEntity = entity;
        this.titleSelector.text(entity.SecName);
        this.wrapperSelector.removeClass("hidden-element");
    }

    private initEvents() {
        this.cancelSelector.on("click", () => {
            this.closeTooltip();
        })
        this.confirmSelector.on("click", () => {
            this.closeTooltip();
            NetSender.post(this.sellSecurityUrl, {
                Id: this.currentEntity.SecId,
                Date: UtcZone.getUtc(new Date(this.dateSelector.val() as string)),
                Price: Number(this.priceSelector.val()),
                Number: Number(this.numberSelector.val()),
            },
                () => {
                    this.currentEntity.rowSelector.remove();
                })
        })
    }

    private closeTooltip() {
        this.wrapperSelector.addClass("hidden-element");
    }
}