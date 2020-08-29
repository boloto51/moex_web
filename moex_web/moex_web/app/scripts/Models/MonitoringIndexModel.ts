import { data } from "jquery";

export class MonitoringIndexModel {
    SecId: string;
    SecName: string;
    InitClose: number;
    CurrentClose: number;
    Percent: number;
    ToBuyDate: Date;
    rowSelector: JQuery;
    buySelector: JQuery;
}