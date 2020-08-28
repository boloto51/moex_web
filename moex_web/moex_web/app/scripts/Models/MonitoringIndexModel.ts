import { data } from "jquery";

export class MonitoringIndexModel {
    SecId: string;
    InitClose: number;
    CurrentClose: number;
    Percent: number;
    DeleteDate: Date;
    rowSelector: JQuery;
    buySelector: JQuery;
}