var NetSender = /** @class */ (function () {
    function NetSender() {
    }
    NetSender.get = function (url, done, fail, always) {
        if (fail === void 0) { fail = null; }
        if (always === void 0) { always = null; }
        var request = $.ajax({
            type: "GET",
            url: url,
            data: {},
            contentType: 'application/json'
        });
        this.fireAfterEvents(request, done, fail, always);
    };
    NetSender.post = function (url, value, done, fail, always) {
        if (fail === void 0) { fail = null; }
        if (always === void 0) { always = null; }
        var request = $.ajax({
            type: "POST",
            url: url,
            data: JSON.stringify(value),
            contentType: 'application/json'
        });
        this.fireAfterEvents(request, done, fail, always);
    };
    NetSender.fireAfterEvents = function (request, done, fail, always) {
        if (fail === void 0) { fail = null; }
        if (always === void 0) { always = null; }
        request.done(function (result) {
            done(result);
        });
        if (fail != null) {
            request.fail(function (err) {
                fail();
            });
        }
        if (always != null) {
            request.always(function (err) {
                always();
            });
        }
    };
    return NetSender;
}());
export { NetSender };
//# sourceMappingURL=NetSender.js.map