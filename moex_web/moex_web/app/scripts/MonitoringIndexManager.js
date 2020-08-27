/*import { NetSender } from "./NetSender";
import { MonitoringIndexModel } from "./MonitoringIndexModel";

export class MonitoringIndexManager {
    deleteUrl: string;
    editUrl: string;
    createUrl: string;
    monitoringUrl: string;
    createBtnSelector: JQuery;
    tableBodySelector: JQuery;
    creationFromSelector: JQuery;
    creationOkSelector: JQuery;
    creationInputSelector: JQuery;
    monitorings: MonitoringIndexModel[];

    constructor(monitorings: MonitoringIndexModel[], deleteUrl: string, editUrl: string, createUrl: string, monitoringUrl: string) {
        this.deleteUrl = deleteUrl;
        this.editUrl = editUrl;
        this.createUrl = createUrl;
        this.monitoringUrl = monitoringUrl;
        this.createBtnSelector = $(".create-button");
        this.creationFromSelector = $(".creation-form");
        this.creationOkSelector = $(".creation-submit");
        this.creationInputSelector = $(".creation-form input");
        this.tableBodySelector = $(".admin-theme-index-page table tbody");
        this.initTable();
        this.initCreation();
    }

    private initTable() {
        this.monitorings.forEach(monitoring => {
            this.addElement(monitoring);
            monitoring.editSelector.on("click", () => {
                new EditFieldManager(monitoring.nameSelector, monitoring.editSelector, (val) => {
                    monitoring.Name = val;
                    this.updateTheme(monitoring);
                });
            });
            if (monitoring.deleteSelector)
                monitoring.deleteSelector.on("click", () => this.deleteTheme(monitoring));
        });
    }

    private updateTheme(theme: ThemeIndexModel) {
        NetSender.post(this.editUrl, theme, () => { });
    }

    private addElement(theme: ThemeIndexModel) {
        const tr = document.createElement("tr");
        this.tableBodySelector.append(tr);
        theme.rowSelector = $(tr);
        const idTd = document.createElement("td");
        idTd.innerText = theme.Id + "";
        theme.rowSelector.append(idTd);
        const nameTd = document.createElement("td");
        nameTd.innerText = theme.Name;
        theme.rowSelector.append(nameTd);
        theme.nameSelector = $(nameTd);
        const patternsCountTd = document.createElement("td");
        patternsCountTd.innerText = theme.PatternCount + "";
        theme.rowSelector.append(patternsCountTd);
        const manageTd = document.createElement("td");
        theme.rowSelector.append(manageTd);
        this.setManangeButtons(theme, $(manageTd));
    }

    private setManangeButtons(theme: ThemeIndexModel, tdSelector: JQuery) {
        let toPatterns = document.createElement("a");
        toPatterns.href = this.monitoringUrl + theme.Id;
        tdSelector.append(toPatterns);
        let element = document.createElement("span");
        element.classList.add("mid-icon", "list-span");
        toPatterns.append(element);

        element = document.createElement("span");
        element.classList.add("mid-icon", "edit-span");
        tdSelector.append(element);
        theme.editSelector = $(element);
        if (theme.PatternCount !== 0) return;
        element = document.createElement("span");
        element.classList.add("mid-icon", "delete-span");
        tdSelector.append(element);
        theme.deleteSelector = $(element);
    }

    private initCreation() {
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
    }
}*/ 
//# sourceMappingURL=MonitoringIndexManager.js.map