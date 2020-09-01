import { data } from "jquery";

export class InProgressIndexModel {
    SecId: string;
    SecName: string;
    BuyPrice: number;
    CurrentClose: number;
    BuyDate: Date;
    DaysToSell: number;
    Percent: number;
    rowSelector: JQuery;
    buySelector: JQuery;
}