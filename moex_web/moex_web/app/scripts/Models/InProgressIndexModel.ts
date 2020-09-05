import { data } from "jquery";

export class InProgressIndexModel {
    SecId: string;
    SecName: string;
    LotCount: number;
    BuyPrice: number;
    CurrentClose: number;
    Percent: number;
    BuyDate: Date;
    DaysToSell: number;
    rowSelector: JQuery;
    buySelector: JQuery;
}