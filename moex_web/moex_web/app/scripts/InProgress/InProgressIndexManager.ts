import { NetSender } from "../NetSender";
import { InProgressIndexModel } from "../Models/InProgressIndexModel";
//import { TooltipBuyManager } from "./TooltipBuyManager";

export class InProgressIndexManager {
    private createBtnSelector: JQuery;
    private tableBodySelector: JQuery;
    private creationFromSelector: JQuery;
    private creationOkSelector: JQuery;
    private creationInputSelector: JQuery;
    private inProgresses: InProgressIndexModel[];
    //private buyTooltip: TooltipBuyManager;

    constructor(inProgresses: InProgressIndexModel[]) {
        this.inProgresses = inProgresses;
        this.createBtnSelector = $(".create-button");
        this.creationFromSelector = $(".creation-form");
        this.creationOkSelector = $(".creation-submit");
        this.creationInputSelector = $(".creation-form input");
        this.tableBodySelector = $(".inprogress-index-table tbody");
        //this.buyTooltip = new TooltipBuyManager(buySecurityUrl);
        this.initTable();
        //this.initCreation();
    }

    private initTable() {
        this.inProgresses.forEach(inprogress => {
            this.addElement(inprogress);
        });
    }

    private updateMonitoring(monitoring: InProgressIndexModel) {
        // NetSender.post(this.editUrl, monitoring, () => { });
    }

    private addElement(inprogress: InProgressIndexModel) {
        const tr = document.createElement("tr");
        this.tableBodySelector.append(tr);
        inprogress.rowSelector = $(tr);
        const secId = document.createElement("td");
        secId.innerText = inprogress.SecId + "";
        inprogress.rowSelector.append(secId);
        const secName = document.createElement("td");
        secName.innerText = inprogress.SecName + "";
        inprogress.rowSelector.append(secName);
        const BuyPrice = document.createElement("td");
        BuyPrice.innerText = inprogress.BuyPrice + "";
        inprogress.rowSelector.append(BuyPrice);
        const currentClose = document.createElement("td");
        currentClose.innerText = inprogress.CurrentClose + "";
        inprogress.rowSelector.append(currentClose);
        const BuyDate = document.createElement("td");
        BuyDate.innerText = new Intl.DateTimeFormat('ru', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date(inprogress.BuyDate));
        inprogress.rowSelector.append(BuyDate);
        const DaysToSell = document.createElement("td");
        DaysToSell.innerText = inprogress.DaysToSell + "";
        inprogress.rowSelector.append(DaysToSell);
        const percent = document.createElement("td");
        percent.innerText = inprogress.Percent + "";
        inprogress.rowSelector.append(percent);
        const manageTd = document.createElement("td");
        inprogress.rowSelector.append(manageTd);
        this.setManangeButtons(inprogress, $(manageTd));
    }

    private setManangeButtons(inprogress: InProgressIndexModel, tdSelector: JQuery) {
        //let showBuyTooltip = document.createElement("button");
        //showBuyTooltip.name = inprogress.SecId;
        //showBuyTooltip.innerText = "Buy";
        //showBuyTooltip.classList.add("monitoring-button-buy");
        //tdSelector.append(showBuyTooltip);
        //$(showBuyTooltip).on("click", () => this.buyTooltip.show(inprogress));

        //let showBuyTooltip = document.createElement("a");
        //showBuyTooltip.href = this.monitoringUrl + monitoring.SecId;
        //tdSelector.append(showBuyTooltip);
        //let element = document.createElement("span");
        //element.classList.add("mid-icon", "list-span");
        //showBuyTooltip.append(element);

        //element = document.createElement("span");
        //element.classList.add("mid-icon", "edit-span");
        //tdSelector.append(element);
        //monitoring.editSelector = $(element);
        //if (monitoring.PatternCount !== 0) return;
        //element = document.createElement("span");
        //element.classList.add("mid-icon", "delete-span");
        //tdSelector.append(element);
        //monitoring.deleteSelector = $(element);
    }

    /*private initCreation() {
        this.creationInputSelector.val("");
        const theme = new ThemeIndexModel();
        theme.Name = "";
        theme.PatternCount = 0;
        this.creationInputSelector.on("input", () => theme.Name = this.creationInputSelector.val() as string);
        this.createBtnSelector.on("click", () => {
            this.creationFromSelector.removeClass("hidden-element");
            this.createBtnSelector.addClass("hidden-element");
        });
        this.creationOkSelector.on("click", () => {
            if (theme.Name.length === 0) return;
            this.creationFromSelector.addClass("hidden-element");
            this.createBtnSelector.removeClass("hidden-element");
            NetSender.post(this.createUrl, theme, (res) => {
                theme.Id = Number(res);
                this.addElement(theme);
            });
        });
    }

    private deleteTheme(theme: ThemeIndexModel) {
        const conf = confirm(`Delete "${theme.Name}"?`);
        if (conf) {
            NetSender.post(this.deleteUrl + theme.Id, {}, (r) => {
                theme.rowSelector.remove();
                this.themes = this.themes.filter(t => t.Id !== theme.Id);
            });
        }
    }*/
}