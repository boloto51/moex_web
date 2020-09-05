import { data } from "jquery";

export class TradeHistoryIndexModel {
    Id: number;
    SecurityId: string;
    //SecName: string;
    LotCount: number;
    BuyPrice: number;
    BuyDate: Date;
    SellPrice: number;
    SellDate: Date;
    UserId: number;
    rowSelector: JQuery;
    //buySelectorBuyPrice: JQuery;
}
