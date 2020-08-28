export class NetSender {
    static async get(url: string,
                     done: (result: string) => void,
                     fail: () => void = null,
                     always: () => void = null): Promise<any> {
        const request = $.ajax({
            type: "GET",
            url: url,
            async: true,
            data: {},
            contentType: 'application/json',
            headers: {
                "X-XSRF-TOKEN": NetSender.getToken(),
                RequestVerificationToken: NetSender.getToken()
            }
        });
        this.fireAfterEvents(request, done, fail, always);
        return request.promise().catch(error => {});
    }

    static async post(url: string, value: object,
                      done: (result: string) => void,
                      fail: () => void = null,
                      always: () => void = null): Promise<any> {
        const request = $.ajax({
            type: "POST",
            url: url,
            async: true,
            data: JSON.stringify(value),
            contentType: 'application/json',
            headers: {
                "X-XSRF-TOKEN": NetSender.getToken(),
                RequestVerificationToken: NetSender.getToken()
            }
        });
        this.fireAfterEvents(request, done, fail, always);
        return request.promise().catch(error => {});
    }

    private static fireAfterEvents(request: JQuery.jqXHR<any>,
                                   done: (result: string) => void,
                                   fail: () => void = null,
                                   always: () => void = null) {
        request.done(result => {
            done(result);
        });
        if (fail != null) {
            request.fail((err) => {
                fail();
            });
        }
        if (always != null) {
            request.always((err) => {
                always();
            });
        }

    }

    private static getToken() {
        const name = "XSRF-TOKEN=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
}