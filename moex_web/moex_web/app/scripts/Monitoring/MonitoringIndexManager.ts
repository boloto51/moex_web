import { NetSender } from "../NetSender";
import { MonitoringIndexModel } from "../Models/MonitoringIndexModel";

export class MonitoringIndexManager {
    createBtnSelector: JQuery;
    tableBodySelector: JQuery;
    creationFromSelector: JQuery;
    creationOkSelector: JQuery;
    creationInputSelector: JQuery;
    monitorings: MonitoringIndexModel[];

    constructor(monitorings: MonitoringIndexModel[],monitoringUrl: string) {
        this.monitorings = monitorings;
        this.createBtnSelector = $(".create-button");
        this.creationFromSelector = $(".creation-form");
        this.creationOkSelector = $(".creation-submit");
        this.creationInputSelector = $(".creation-form input");
        this.tableBodySelector = $(".monitoring-index-table tbody");
        this.initTable();
        //this.initCreation();
    }

    private initTable() {
        this.monitorings.forEach(monitoring => {
            this.addElement(monitoring);
        });
    }

    private updateMonitoring(monitoring: MonitoringIndexModel) {
       // NetSender.post(this.editUrl, monitoring, () => { });
    }

    private addElement(monitoring: MonitoringIndexModel) {
        const tr = document.createElement("tr");
        this.tableBodySelector.append(tr);
        monitoring.rowSelector = $(tr);
        const secId = document.createElement("td");
        secId.innerText = monitoring.SecId + "";
        monitoring.rowSelector.append(secId);
        const secName = document.createElement("td");
        secName.innerText = monitoring.SecName + "";
        monitoring.rowSelector.append(secName);
        const initClose = document.createElement("td");
        initClose.innerText = monitoring.InitClose + "";
        monitoring.rowSelector.append(initClose);
        const currentClose = document.createElement("td");
        currentClose.innerText = monitoring.CurrentClose + "";
        monitoring.rowSelector.append(currentClose);
        const percent = document.createElement("td");
        percent.innerText = monitoring.Percent + "";
        monitoring.rowSelector.append(percent);
        const toByDateDate = document.createElement("td");
        toByDateDate.innerText = new Intl.DateTimeFormat('ru', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date(monitoring.ToBuyDate));
        monitoring.rowSelector.append(toByDateDate);
        const manageTd = document.createElement("td");
        monitoring.rowSelector.append(manageTd);
        this.setManangeButtons(monitoring, $(manageTd));
    }

    private setManangeButtons(monitoring: MonitoringIndexModel, tdSelector: JQuery) {
        let toInProgress = document.createElement("button");
        toInProgress.name = monitoring.SecId;
        toInProgress.innerText = "Buy";
        toInProgress.classList.add("monitoring-button-buy");
        tdSelector.append(toInProgress);

        //let toInProgress = document.createElement("a");
        //toInProgress.href = this.monitoringUrl + monitoring.SecId;
        //tdSelector.append(toInProgress);
        //let element = document.createElement("span");
        //element.classList.add("mid-icon", "list-span");
        //toInProgress.append(element);

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