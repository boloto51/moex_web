import { NetSender } from "../NetSender";
import { TradeHistoryIndexModel } from "../Models/TradeHistoryIndexModel";

export class InProgressIndexManager {
    private tableBodySelector: JQuery;
    private tradeHistories: TradeHistoryIndexModel[];

    constructor(tradeHistories: TradeHistoryIndexModel[], sellSecurityUrl: string) {
        this.tradeHistories = tradeHistories;
        this.initTable();
    }

    private initTable() {
        this.tradeHistories.forEach(inprogress => {
            this.addElement(inprogress);
        });
    }

    private addElement(tradeHistory: TradeHistoryIndexModel) {
        const tr = document.createElement("tr");
        this.tableBodySelector.append(tr);
        tradeHistory.rowSelector = $(tr);
        const secId = document.createElement("td");
        secId.innerText = tradeHistory.SecId + "";
        tradeHistory.rowSelector.append(secId);
        const lotCount = document.createElement("td");
        lotCount.innerText = tradeHistory.LotCount + "";
        tradeHistory.rowSelector.append(lotCount);
        const byuPrice = document.createElement("td");
        byuPrice.innerText = tradeHistory.BuyPrice + "";
        tradeHistory.rowSelector.append(byuPrice);
        const BuyDate = document.createElement("td");
        BuyDate.innerText = new Intl.DateTimeFormat('ru', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date(tradeHistory.BuyDate));
        tradeHistory.rowSelector.append(BuyDate);
        const sellPrice = document.createElement("td");
        sellPrice.innerText = tradeHistory.BuyPrice + "";
        tradeHistory.rowSelector.append(sellPrice);
        const sellDate = document.createElement("td");
        sellDate.innerText = new Intl.DateTimeFormat('ru', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date(tradeHistory.BuyDate));
        tradeHistory.rowSelector.append(sellDate);
    }
}