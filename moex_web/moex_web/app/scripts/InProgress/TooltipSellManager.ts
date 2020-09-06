import { InProgressIndexModel } from "../Models/InProgressIndexModel";
import { NetSender } from "../NetSender";
import { UtcZone } from "../Components/UtcZone";
import { isDate } from "lodash";

export class TooltipSellManager {
    wrapperSelector: JQuery;
    cancelSelector: JQuery;
    confirmSelector: JQuery;
    dateSelector: JQuery;
    dateValidationSelector: JQuery;
    priceSelector: JQuery;
    priceValidationSelector: JQuery;
    lotCountSelector: JQuery;
    titleSelector: JQuery;
    currentEntity: InProgressIndexModel;
    private sellSecurityUrl: string;

    constructor(sellSecurityUrl: string) {
        this.sellSecurityUrl = sellSecurityUrl;
        this.wrapperSelector = $(".sell-tooltip-wrapper");
        this.cancelSelector = this.wrapperSelector.find(".cancel");
        this.confirmSelector = this.wrapperSelector.find(".confirm");
        this.dateSelector = this.wrapperSelector.find(".date-input");
        this.dateValidationSelector = this.wrapperSelector.find(".date-validation");
        this.priceSelector = this.wrapperSelector.find(".price-input");
        this.priceValidationSelector = this.wrapperSelector.find(".price-validation");
        this.lotCountSelector = this.wrapperSelector.find(".lotcount-input");
        this.titleSelector = this.wrapperSelector.find(".title");
        this.initEvents();
        this.initDatepicker();
    }

    public show(entity: InProgressIndexModel): void {
        this.currentEntity = entity;
        this.titleSelector.text(entity.SecId + " - " + entity.SecName);
        this.wrapperSelector.removeClass("hidden-element");
        this.lotCountSelector.val(entity.LotCount);
        this.dateSelector.val(new Date().toISOString());
        this.dateSelector.datepicker("setDate", new Date());

        if (entity.Percent >= 0) {
            this.confirmSelector.addClass("confirm-color-positive-percent");
            this.confirmSelector.removeClass("confirm-color-negative-percent");
        }
        else {
            this.confirmSelector.addClass("confirm-color-negative-percent");
            this.confirmSelector.removeClass("confirm-color-positive-percent");
        }
    }

    private initEvents() {
        this.cancelSelector.on("click", () => {
            this.closeTooltip();
            this.dateSelector.removeClass("invalid-value");
            this.priceSelector.removeClass("invalid-value");
            this.dateValidationSelector.addClass("hidden-element");
            this.priceValidationSelector.addClass("hidden-element");
        });
        this.dateSelector.on("input", () => {
            this.dateValidationSelector.addClass("hidden-element");
            this.dateSelector.removeClass("invalid-value");
        });
        this.priceSelector.on("input", () => {
            this.priceValidationSelector.addClass("hidden-element");
            this.priceSelector.removeClass("invalid-value");
        });
        this.confirmSelector.on("click", () => {
            const date = this.dateSelector.val();
            if (!date || (Object.prototype.toString.call(date) === "[object Date]") || (date.valueOf() <= new Date().valueOf())) {
                this.dateValidationSelector.removeClass("hidden-element");
                this.dateSelector.addClass("invalid-value");
                return;
            }
            const price = Number(this.priceSelector.val());
            if (!price || price <= 0) {
                this.priceValidationSelector.removeClass("hidden-element");
                this.priceSelector.addClass("invalid-value");
                return;
            }
            this.closeTooltip();
            NetSender.post(this.sellSecurityUrl, {
                Id: this.currentEntity.SecId,
                Date: UtcZone.getUtc(new Date(this.dateSelector.val() as string)),
                Price: Number(this.priceSelector.val()),
                LotCount: Number(this.lotCountSelector.val()),
            },
                () => {
                    this.currentEntity.rowSelector.remove();
                })
        })
    }

    private closeTooltip() {
        this.wrapperSelector.addClass("hidden-element");
    }

    private initDatepicker() {
        let maxDate = new Date();
        this.dateSelector.datepicker({
            format: {
                toDisplay: function (date, format, language) {
                    return new Date(date).toLocaleDateString(navigator.language).replace(/\u200F/g, "");
                },
                toValue: function (date, format, language) {
                    var d = new Date(date);
                    return new Date(d);
                }
            },
            endDate: new Date()
        });
    }

}