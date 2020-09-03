import { data } from "jquery";

export class InProgressIndexModel {
    SecId: string;
    SecName: string;
    BuyPrice: number;
    CurrentClose: number;
    Percent: number;
    BuyDate: Date;
    DaysToSell: number;
    rowSelector: JQuery;
    buySelector: JQuery;
}