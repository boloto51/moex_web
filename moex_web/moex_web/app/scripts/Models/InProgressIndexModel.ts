import { data } from "jquery";

export class InProgressIndexModel {
    SecId: string;
    SecName: string;
    Number: number;
    BuyPrice: number;
    CurrentClose: number;
    Percent: number;
    BuyDate: Date;
    DaysToSell: number;
    rowSelector: JQuery;
    buySelector: JQuery;
}