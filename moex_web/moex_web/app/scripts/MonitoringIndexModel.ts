import { data } from "jquery";

export class MonitoringIndexModel {
    SecId: string;
    InitClose: number;
    CurrentClose: number;
    Percent: number;
    DeleteDate: Date = new Date();
    rowSelector: JQuery;
    editSelector: JQuery;
    deleteSelector: JQuery;
    nameSelector: JQuery;
}