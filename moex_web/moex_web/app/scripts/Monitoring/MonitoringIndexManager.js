var MonitoringIndexManager = /** @class */ (function () {
    function MonitoringIndexManager(monitorings, monitoringUrl) {
        this.monitorings = monitorings;
        this.createBtnSelector = $(".create-button");
        this.creationFromSelector = $(".creation-form");
        this.creationOkSelector = $(".creation-submit");
        this.creationInputSelector = $(".creation-form input");
        this.tableBodySelector = $(".monitoring-index-table tbody");
        this.initTable();
        //this.initCreation();
    }
    MonitoringIndexManager.prototype.initTable = function () {
        var _this = this;
        this.monitorings.forEach(function (monitoring) {
            _this.addElement(monitoring);
        });
    };
    MonitoringIndexManager.prototype.updateMonitoring = function (monitoring) {
        // NetSender.post(this.editUrl, monitoring, () => { });
    };
    MonitoringIndexManager.prototype.addElement = function (monitoring) {
        var tr = document.createElement("tr");
        this.tableBodySelector.append(tr);
        monitoring.rowSelector = $(tr);
        var secId = document.createElement("td");
        secId.innerText = monitoring.SecId + "";
        monitoring.rowSelector.append(secId);
        var secName = document.createElement("td");
        secName.innerText = monitoring.SecName + "";
        monitoring.rowSelector.append(secName);
        var initClose = document.createElement("td");
        initClose.innerText = monitoring.InitClose + "";
        monitoring.rowSelector.append(initClose);
        var currentClose = document.createElement("td");
        currentClose.innerText = monitoring.CurrentClose + "";
        monitoring.rowSelector.append(currentClose);
        var percent = document.createElement("td");
        percent.innerText = monitoring.Percent + "";
        monitoring.rowSelector.append(percent);
        var toByDateDate = document.createElement("td");
        toByDateDate.innerText = new Intl.DateTimeFormat('ru', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date(monitoring.ToBuyDate));
        monitoring.rowSelector.append(toByDateDate);
        var manageTd = document.createElement("td");
        monitoring.rowSelector.append(manageTd);
        //this.setManangeButtons(monitoring, $(manageTd));
    };
    return MonitoringIndexManager;
}());
export { MonitoringIndexManager };
//# sourceMappingURL=MonitoringIndexManager.js.map