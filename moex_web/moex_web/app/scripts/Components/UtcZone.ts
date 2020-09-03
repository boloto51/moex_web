export class UtcZone {
    public static dateInZone(offset:number) {
        const currentDate = new Date();
        const utc = currentDate.getTime() + (currentDate.getTimezoneOffset() * 60000);
        return new Date(utc + (3600000*offset));
    }
    public static getUtc(date: Date) {
        return new Date(date.getTime() - (date.getTimezoneOffset() * 60000));
    }
}