import {MonitoringIndexModel} from "../Models/MonitoringIndexModel";
import {NetSender} from "../NetSender";
import {UtcZone} from "../Components/UtcZone";

export class TooltipBuyManager {
    wrapperSelector: JQuery;
    cancelSelector: JQuery;
    confirmSelector: JQuery;
    dateSelector: JQuery;
    priceSelector: JQuery;
    lotCountSelector: JQuery;
    titleSelector: JQuery;
    currentEntity: MonitoringIndexModel;
    private buySecurityUrl: string;

    constructor(buySecurityUrl: string) {
        this.buySecurityUrl = buySecurityUrl;
        this.wrapperSelector = $(".buy-tooltip-wrapper");
        this.cancelSelector = this.wrapperSelector.find(".cancel");
        this.confirmSelector = this.wrapperSelector.find(".confirm");
        this.dateSelector = this.wrapperSelector.find(".date-input");
        this.priceSelector = this.wrapperSelector.find(".price-input");
        this.lotCountSelector = this.wrapperSelector.find(".lotcount-input");
        this.titleSelector = this.wrapperSelector.find(".title");
        this.initEvents();
    }
    
    public show(entity: MonitoringIndexModel): void{
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
            NetSender.post(this.buySecurityUrl, {
                Id: this.currentEntity.SecId,
                Date: UtcZone.getUtc(new Date(this.dateSelector.val() as string)),
                Price: Number(this.priceSelector.val()),
                Number: Number(this.lotCountSelector.val())
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