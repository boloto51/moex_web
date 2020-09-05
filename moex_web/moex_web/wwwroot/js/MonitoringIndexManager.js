var MonitoringIndexManagerPack =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/scripts/Monitoring/MonitoringIndexManager.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/scripts/Components/UtcZone.ts":
/*!*******************************************!*\
  !*** ./app/scripts/Components/UtcZone.ts ***!
  \*******************************************/
/*! exports provided: UtcZone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtcZone", function() { return UtcZone; });
var UtcZone = /** @class */ (function () {
    function UtcZone() {
    }
    UtcZone.dateInZone = function (offset) {
        var currentDate = new Date();
        var utc = currentDate.getTime() + (currentDate.getTimezoneOffset() * 60000);
        return new Date(utc + (3600000 * offset));
    };
    UtcZone.getUtc = function (date) {
        return new Date(date.getTime() - (date.getTimezoneOffset() * 60000));
    };
    return UtcZone;
}());



/***/ }),

/***/ "./app/scripts/Monitoring/MonitoringIndexManager.ts":
/*!**********************************************************!*\
  !*** ./app/scripts/Monitoring/MonitoringIndexManager.ts ***!
  \**********************************************************/
/*! exports provided: MonitoringIndexManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonitoringIndexManager", function() { return MonitoringIndexManager; });
/* harmony import */ var _TooltipBuyManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TooltipBuyManager */ "./app/scripts/Monitoring/TooltipBuyManager.ts");

var MonitoringIndexManager = /** @class */ (function () {
    function MonitoringIndexManager(monitorings, buySecurityUrl) {
        this.monitorings = monitorings;
        this.createBtnSelector = $(".create-button");
        this.creationFromSelector = $(".creation-form");
        this.creationOkSelector = $(".creation-submit");
        this.creationInputSelector = $(".creation-form input");
        this.tableBodySelector = $(".monitoring-index-table tbody");
        this.buyTooltip = new _TooltipBuyManager__WEBPACK_IMPORTED_MODULE_0__["TooltipBuyManager"](buySecurityUrl);
        this.initTable();
        //this.initCreation();
    }
    MonitoringIndexManager.prototype.initTable = function () {
        var _this = this;
        this.monitorings.forEach(function (monitoring) {
            _this.addElement(monitoring);
        });
    };
    MonitoringIndexManager.prototype.updateMonitoring = function (monitoring) {
        // NetSender.post(this.editUrl, monitoring, () => { });
    };
    MonitoringIndexManager.prototype.addElement = function (monitoring) {
        var tr = document.createElement("tr");
        this.tableBodySelector.append(tr);
        monitoring.rowSelector = $(tr);
        var secId = document.createElement("td");
        secId.innerText = monitoring.SecId + "";
        monitoring.rowSelector.append(secId);
        var secName = document.createElement("td");
        secName.innerText = monitoring.SecName + "";
        monitoring.rowSelector.append(secName);
        var initClose = document.createElement("td");
        initClose.innerText = monitoring.InitClose + "";
        monitoring.rowSelector.append(initClose);
        var currentClose = document.createElement("td");
        currentClose.innerText = monitoring.CurrentClose + "";
        monitoring.rowSelector.append(currentClose);
        var percent = document.createElement("td");
        percent.innerText = monitoring.Percent + " %";
        monitoring.rowSelector.append(percent);
        var toByDateDate = document.createElement("td");
        toByDateDate.innerText = new Intl.DateTimeFormat('ru', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date(monitoring.ToBuyDate));
        monitoring.rowSelector.append(toByDateDate);
        var manageTd = document.createElement("td");
        monitoring.rowSelector.append(manageTd);
        this.setManangeButtons(monitoring, $(manageTd));
    };
    MonitoringIndexManager.prototype.setManangeButtons = function (monitoring, tdSelector) {
        var _this = this;
        var showBuyTooltip = document.createElement("button");
        showBuyTooltip.name = monitoring.SecId;
        showBuyTooltip.innerText = "Buy";
        showBuyTooltip.classList.add("monitoring-button-buy");
        tdSelector.append(showBuyTooltip);
        $(showBuyTooltip).on("click", function () { return _this.buyTooltip.show(monitoring); });
        //let showBuyTooltip = document.createElement("a");
        //showBuyTooltip.href = this.monitoringUrl + monitoring.SecId;
        //tdSelector.append(showBuyTooltip);
        //let element = document.createElement("span");
        //element.classList.add("mid-icon", "list-span");
        //showBuyTooltip.append(element);
        //element = document.createElement("span");
        //element.classList.add("mid-icon", "edit-span");
        //tdSelector.append(element);
        //monitoring.editSelector = $(element);
        //if (monitoring.PatternCount !== 0) return;
        //element = document.createElement("span");
        //element.classList.add("mid-icon", "delete-span");
        //tdSelector.append(element);
        //monitoring.deleteSelector = $(element);
    };
    return MonitoringIndexManager;
}());



/***/ }),

/***/ "./app/scripts/Monitoring/TooltipBuyManager.ts":
/*!*****************************************************!*\
  !*** ./app/scripts/Monitoring/TooltipBuyManager.ts ***!
  \*****************************************************/
/*! exports provided: TooltipBuyManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipBuyManager", function() { return TooltipBuyManager; });
/* harmony import */ var _NetSender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../NetSender */ "./app/scripts/NetSender.ts");
/* harmony import */ var _Components_UtcZone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/UtcZone */ "./app/scripts/Components/UtcZone.ts");


var TooltipBuyManager = /** @class */ (function () {
    function TooltipBuyManager(buySecurityUrl) {
        this.buySecurityUrl = buySecurityUrl;
        this.wrapperSelector = $(".buy-tooltip-wrapper");
        this.cancelSelector = this.wrapperSelector.find(".cancel");
        this.confirmSelector = this.wrapperSelector.find(".confirm");
        this.dateSelector = this.wrapperSelector.find(".date-input");
        this.priceSelector = this.wrapperSelector.find(".price-input");
        this.priceValidationSelector = this.wrapperSelector.find(".price-validation");
        this.lotCountSelector = this.wrapperSelector.find(".lotcount-input");
        this.titleSelector = this.wrapperSelector.find(".title");
        this.initEvents();
        this.initDatepicker();
    }
    TooltipBuyManager.prototype.show = function (entity) {
        this.currentEntity = entity;
        this.titleSelector.text(entity.SecName);
        this.wrapperSelector.removeClass("hidden-element");
        this.dateSelector.datepicker("setDate", new Date());
    };
    TooltipBuyManager.prototype.initEvents = function () {
        var _this = this;
        this.cancelSelector.on("click", function () {
            _this.closeTooltip();
        });
        this.priceSelector.on("input", function () {
            _this.priceValidationSelector.addClass("hidden-element");
            _this.priceSelector.removeClass("invalid-value");
        });
        this.confirmSelector.on("click", function () {
            var price = Number(_this.priceSelector.val());
            if (!price || price < 0) {
                _this.priceValidationSelector.removeClass("hidden-element");
                _this.priceSelector.addClass("invalid-value");
                return;
            }
            _this.closeTooltip();
            _NetSender__WEBPACK_IMPORTED_MODULE_0__["NetSender"].post(_this.buySecurityUrl, {
                Id: _this.currentEntity.SecId,
                Date: _Components_UtcZone__WEBPACK_IMPORTED_MODULE_1__["UtcZone"].getUtc(new Date(_this.dateSelector.val())),
                Price: price,
                LotCount: Number(_this.lotCountSelector.val() > 0 ? _this.lotCountSelector.val() : 1)
            }, function () {
                _this.currentEntity.rowSelector.remove();
            });
        });
    };
    TooltipBuyManager.prototype.closeTooltip = function () {
        this.wrapperSelector.addClass("hidden-element");
    };
    TooltipBuyManager.prototype.initDatepicker = function () {
        var maxDate = new Date();
        this.dateSelector.datepicker({
            format: {
                toDisplay: function (date, format, language) {
                    return new Date(date).toLocaleDateString(navigator.language).replace(/\u200F/g, "");
                },
                toValue: function (date, format, language) {
                    var d = new Date(date);
                    //d.setDate(d.getDate() + 7);
                    return new Date(d);
                }
            },
            endDate: new Date()
        });
        //this.dateSelector.datepicker("setEndDate", new Date());
    };
    return TooltipBuyManager;
}());



/***/ }),

/***/ "./app/scripts/NetSender.ts":
/*!**********************************!*\
  !*** ./app/scripts/NetSender.ts ***!
  \**********************************/
/*! exports provided: NetSender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetSender", function() { return NetSender; });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var NetSender = /** @class */ (function () {
    function NetSender() {
    }
    NetSender.get = function (url, done, fail, always) {
        if (fail === void 0) { fail = null; }
        if (always === void 0) { always = null; }
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = $.ajax({
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
                return [2 /*return*/, request.promise().catch(function (error) { })];
            });
        });
    };
    NetSender.post = function (url, value, done, fail, always) {
        if (fail === void 0) { fail = null; }
        if (always === void 0) { always = null; }
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                request = $.ajax({
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
                return [2 /*return*/, request.promise().catch(function (error) { })];
            });
        });
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
    NetSender.getToken = function () {
        var name = "XSRF-TOKEN=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    };
    return NetSender;
}());



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV1QYWNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1tuYW1lXVBhY2svLi9hcHAvc2NyaXB0cy9Db21wb25lbnRzL1V0Y1pvbmUudHMiLCJ3ZWJwYWNrOi8vW25hbWVdUGFjay8uL2FwcC9zY3JpcHRzL01vbml0b3JpbmcvTW9uaXRvcmluZ0luZGV4TWFuYWdlci50cyIsIndlYnBhY2s6Ly9bbmFtZV1QYWNrLy4vYXBwL3NjcmlwdHMvTW9uaXRvcmluZy9Ub29sdGlwQnV5TWFuYWdlci50cyIsIndlYnBhY2s6Ly9bbmFtZV1QYWNrLy4vYXBwL3NjcmlwdHMvTmV0U2VuZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtJQUFBO0lBU0EsQ0FBQztJQVJpQixrQkFBVSxHQUF4QixVQUF5QixNQUFhO1FBQ2xDLElB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QyxHQUFHO2dCQUNiLElBQUksRUFBRSxDQUFDO1lBQ1gsQ0FBQyxDQUFDLENBQUM7U0FDTjtRQUNELElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtZQUNoQixPQUFPLENBQUMsTUFBTSxDQUFDLFVBQUMsR0FBRztnQkFDZixNQUFNLEVBQUUsQ0FBQztZQUNiLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFFTCxDQUFDO0lBRWMsa0JBQVEsR0FBdkI7UUFDSSxJQUFNLElBQUksR0FBRyxhQUFhLENBQUM7UUFDM0IsSUFBTSxhQUFhLEdBQUcsa0JBQWtCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFELElBQU0sRUFBRSxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDaEMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2QsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsRUFBRTtnQkFDdkIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDdEI7WUFDRCxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN0QixPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDN0M7U0FDSjtRQUNELE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FBQyIsImZpbGUiOiJNb25pdG9yaW5nSW5kZXhNYW5hZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hcHAvc2NyaXB0cy9Nb25pdG9yaW5nL01vbml0b3JpbmdJbmRleE1hbmFnZXIudHNcIik7XG4iLCJleHBvcnQgY2xhc3MgVXRjWm9uZSB7XHJcbiAgICBwdWJsaWMgc3RhdGljIGRhdGVJblpvbmUob2Zmc2V0Om51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICBjb25zdCB1dGMgPSBjdXJyZW50RGF0ZS5nZXRUaW1lKCkgKyAoY3VycmVudERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwMDAwKTtcclxuICAgICAgICByZXR1cm4gbmV3IERhdGUodXRjICsgKDM2MDAwMDAqb2Zmc2V0KSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFV0YyhkYXRlOiBEYXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpIC0gKGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwMDAwKSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBOZXRTZW5kZXIgfSBmcm9tIFwiLi4vTmV0U2VuZGVyXCI7XHJcbmltcG9ydCB7IE1vbml0b3JpbmdJbmRleE1vZGVsIH0gZnJvbSBcIi4uL01vZGVscy9Nb25pdG9yaW5nSW5kZXhNb2RlbFwiO1xyXG5pbXBvcnQgeyBUb29sdGlwQnV5TWFuYWdlciB9IGZyb20gXCIuL1Rvb2x0aXBCdXlNYW5hZ2VyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTW9uaXRvcmluZ0luZGV4TWFuYWdlciB7XHJcbiAgICBwcml2YXRlIGNyZWF0ZUJ0blNlbGVjdG9yOiBKUXVlcnk7XHJcbiAgICBwcml2YXRlIHRhYmxlQm9keVNlbGVjdG9yOiBKUXVlcnk7XHJcbiAgICBwcml2YXRlIGNyZWF0aW9uRnJvbVNlbGVjdG9yOiBKUXVlcnk7XHJcbiAgICBwcml2YXRlIGNyZWF0aW9uT2tTZWxlY3RvcjogSlF1ZXJ5O1xyXG4gICAgcHJpdmF0ZSBjcmVhdGlvbklucHV0U2VsZWN0b3I6IEpRdWVyeTtcclxuICAgIHByaXZhdGUgbW9uaXRvcmluZ3M6IE1vbml0b3JpbmdJbmRleE1vZGVsW107XHJcbiAgICBwcml2YXRlIGJ1eVRvb2x0aXA6IFRvb2x0aXBCdXlNYW5hZ2VyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1vbml0b3JpbmdzOiBNb25pdG9yaW5nSW5kZXhNb2RlbFtdLCBidXlTZWN1cml0eVVybDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5tb25pdG9yaW5ncyA9IG1vbml0b3JpbmdzO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlQnRuU2VsZWN0b3IgPSAkKFwiLmNyZWF0ZS1idXR0b25cIik7XHJcbiAgICAgICAgdGhpcy5jcmVhdGlvbkZyb21TZWxlY3RvciA9ICQoXCIuY3JlYXRpb24tZm9ybVwiKTtcclxuICAgICAgICB0aGlzLmNyZWF0aW9uT2tTZWxlY3RvciA9ICQoXCIuY3JlYXRpb24tc3VibWl0XCIpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRpb25JbnB1dFNlbGVjdG9yID0gJChcIi5jcmVhdGlvbi1mb3JtIGlucHV0XCIpO1xyXG4gICAgICAgIHRoaXMudGFibGVCb2R5U2VsZWN0b3IgPSAkKFwiLm1vbml0b3JpbmctaW5kZXgtdGFibGUgdGJvZHlcIik7XHJcbiAgICAgICAgdGhpcy5idXlUb29sdGlwID0gbmV3IFRvb2x0aXBCdXlNYW5hZ2VyKGJ1eVNlY3VyaXR5VXJsKTtcclxuICAgICAgICB0aGlzLmluaXRUYWJsZSgpO1xyXG4gICAgICAgIC8vdGhpcy5pbml0Q3JlYXRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRUYWJsZSgpIHtcclxuICAgICAgICB0aGlzLm1vbml0b3JpbmdzLmZvckVhY2gobW9uaXRvcmluZyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkRWxlbWVudChtb25pdG9yaW5nKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZU1vbml0b3JpbmcobW9uaXRvcmluZzogTW9uaXRvcmluZ0luZGV4TW9kZWwpIHtcclxuICAgICAgICAvLyBOZXRTZW5kZXIucG9zdCh0aGlzLmVkaXRVcmwsIG1vbml0b3JpbmcsICgpID0+IHsgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRFbGVtZW50KG1vbml0b3Jpbmc6IE1vbml0b3JpbmdJbmRleE1vZGVsKSB7XHJcbiAgICAgICAgY29uc3QgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgICAgdGhpcy50YWJsZUJvZHlTZWxlY3Rvci5hcHBlbmQodHIpO1xyXG4gICAgICAgIG1vbml0b3Jpbmcucm93U2VsZWN0b3IgPSAkKHRyKTtcclxuICAgICAgICBjb25zdCBzZWNJZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICBzZWNJZC5pbm5lclRleHQgPSBtb25pdG9yaW5nLlNlY0lkICsgXCJcIjtcclxuICAgICAgICBtb25pdG9yaW5nLnJvd1NlbGVjdG9yLmFwcGVuZChzZWNJZCk7XHJcbiAgICAgICAgY29uc3Qgc2VjTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICBzZWNOYW1lLmlubmVyVGV4dCA9IG1vbml0b3JpbmcuU2VjTmFtZSArIFwiXCI7XHJcbiAgICAgICAgbW9uaXRvcmluZy5yb3dTZWxlY3Rvci5hcHBlbmQoc2VjTmFtZSk7XHJcbiAgICAgICAgY29uc3QgaW5pdENsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgIGluaXRDbG9zZS5pbm5lclRleHQgPSBtb25pdG9yaW5nLkluaXRDbG9zZSArIFwiXCI7XHJcbiAgICAgICAgbW9uaXRvcmluZy5yb3dTZWxlY3Rvci5hcHBlbmQoaW5pdENsb3NlKTtcclxuICAgICAgICBjb25zdCBjdXJyZW50Q2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgY3VycmVudENsb3NlLmlubmVyVGV4dCA9IG1vbml0b3JpbmcuQ3VycmVudENsb3NlICsgXCJcIjtcclxuICAgICAgICBtb25pdG9yaW5nLnJvd1NlbGVjdG9yLmFwcGVuZChjdXJyZW50Q2xvc2UpO1xyXG4gICAgICAgIGNvbnN0IHBlcmNlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgcGVyY2VudC5pbm5lclRleHQgPSBtb25pdG9yaW5nLlBlcmNlbnQgKyBcIiAlXCI7XHJcbiAgICAgICAgbW9uaXRvcmluZy5yb3dTZWxlY3Rvci5hcHBlbmQocGVyY2VudCk7XHJcbiAgICAgICAgY29uc3QgdG9CeURhdGVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgIHRvQnlEYXRlRGF0ZS5pbm5lclRleHQgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgncnUnLCB7IHllYXI6ICdudW1lcmljJywgbW9udGg6ICcyLWRpZ2l0JywgZGF5OiAnMi1kaWdpdCcgfSkuZm9ybWF0KG5ldyBEYXRlKG1vbml0b3JpbmcuVG9CdXlEYXRlKSk7XHJcbiAgICAgICAgbW9uaXRvcmluZy5yb3dTZWxlY3Rvci5hcHBlbmQodG9CeURhdGVEYXRlKTtcclxuICAgICAgICBjb25zdCBtYW5hZ2VUZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICBtb25pdG9yaW5nLnJvd1NlbGVjdG9yLmFwcGVuZChtYW5hZ2VUZCk7XHJcbiAgICAgICAgdGhpcy5zZXRNYW5hbmdlQnV0dG9ucyhtb25pdG9yaW5nLCAkKG1hbmFnZVRkKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRNYW5hbmdlQnV0dG9ucyhtb25pdG9yaW5nOiBNb25pdG9yaW5nSW5kZXhNb2RlbCwgdGRTZWxlY3RvcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgbGV0IHNob3dCdXlUb29sdGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBzaG93QnV5VG9vbHRpcC5uYW1lID0gbW9uaXRvcmluZy5TZWNJZDtcclxuICAgICAgICBzaG93QnV5VG9vbHRpcC5pbm5lclRleHQgPSBcIkJ1eVwiO1xyXG4gICAgICAgIHNob3dCdXlUb29sdGlwLmNsYXNzTGlzdC5hZGQoXCJtb25pdG9yaW5nLWJ1dHRvbi1idXlcIik7XHJcbiAgICAgICAgdGRTZWxlY3Rvci5hcHBlbmQoc2hvd0J1eVRvb2x0aXApO1xyXG4gICAgICAgICQoc2hvd0J1eVRvb2x0aXApLm9uKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5idXlUb29sdGlwLnNob3cobW9uaXRvcmluZykpO1xyXG5cclxuICAgICAgICAvL2xldCBzaG93QnV5VG9vbHRpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgIC8vc2hvd0J1eVRvb2x0aXAuaHJlZiA9IHRoaXMubW9uaXRvcmluZ1VybCArIG1vbml0b3JpbmcuU2VjSWQ7XHJcbiAgICAgICAgLy90ZFNlbGVjdG9yLmFwcGVuZChzaG93QnV5VG9vbHRpcCk7XHJcbiAgICAgICAgLy9sZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIC8vZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibWlkLWljb25cIiwgXCJsaXN0LXNwYW5cIik7XHJcbiAgICAgICAgLy9zaG93QnV5VG9vbHRpcC5hcHBlbmQoZWxlbWVudCk7XHJcblxyXG4gICAgICAgIC8vZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIC8vZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibWlkLWljb25cIiwgXCJlZGl0LXNwYW5cIik7XHJcbiAgICAgICAgLy90ZFNlbGVjdG9yLmFwcGVuZChlbGVtZW50KTtcclxuICAgICAgICAvL21vbml0b3JpbmcuZWRpdFNlbGVjdG9yID0gJChlbGVtZW50KTtcclxuICAgICAgICAvL2lmIChtb25pdG9yaW5nLlBhdHRlcm5Db3VudCAhPT0gMCkgcmV0dXJuO1xyXG4gICAgICAgIC8vZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIC8vZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibWlkLWljb25cIiwgXCJkZWxldGUtc3BhblwiKTtcclxuICAgICAgICAvL3RkU2VsZWN0b3IuYXBwZW5kKGVsZW1lbnQpO1xyXG4gICAgICAgIC8vbW9uaXRvcmluZy5kZWxldGVTZWxlY3RvciA9ICQoZWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgLypwcml2YXRlIGluaXRDcmVhdGlvbigpIHtcclxuICAgICAgICB0aGlzLmNyZWF0aW9uSW5wdXRTZWxlY3Rvci52YWwoXCJcIik7XHJcbiAgICAgICAgY29uc3QgdGhlbWUgPSBuZXcgVGhlbWVJbmRleE1vZGVsKCk7XHJcbiAgICAgICAgdGhlbWUuTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgdGhlbWUuUGF0dGVybkNvdW50ID0gMDtcclxuICAgICAgICB0aGlzLmNyZWF0aW9uSW5wdXRTZWxlY3Rvci5vbihcImlucHV0XCIsICgpID0+IHRoZW1lLk5hbWUgPSB0aGlzLmNyZWF0aW9uSW5wdXRTZWxlY3Rvci52YWwoKSBhcyBzdHJpbmcpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlQnRuU2VsZWN0b3Iub24oXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRpb25Gcm9tU2VsZWN0b3IucmVtb3ZlQ2xhc3MoXCJoaWRkZW4tZWxlbWVudFwiKTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVCdG5TZWxlY3Rvci5hZGRDbGFzcyhcImhpZGRlbi1lbGVtZW50XCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuY3JlYXRpb25Pa1NlbGVjdG9yLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhlbWUuTmFtZS5sZW5ndGggPT09IDApIHJldHVybjtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGlvbkZyb21TZWxlY3Rvci5hZGRDbGFzcyhcImhpZGRlbi1lbGVtZW50XCIpO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUJ0blNlbGVjdG9yLnJlbW92ZUNsYXNzKFwiaGlkZGVuLWVsZW1lbnRcIik7XHJcbiAgICAgICAgICAgIE5ldFNlbmRlci5wb3N0KHRoaXMuY3JlYXRlVXJsLCB0aGVtZSwgKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhlbWUuSWQgPSBOdW1iZXIocmVzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkRWxlbWVudCh0aGVtZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZGVsZXRlVGhlbWUodGhlbWU6IFRoZW1lSW5kZXhNb2RlbCkge1xyXG4gICAgICAgIGNvbnN0IGNvbmYgPSBjb25maXJtKGBEZWxldGUgXCIke3RoZW1lLk5hbWV9XCI/YCk7XHJcbiAgICAgICAgaWYgKGNvbmYpIHtcclxuICAgICAgICAgICAgTmV0U2VuZGVyLnBvc3QodGhpcy5kZWxldGVVcmwgKyB0aGVtZS5JZCwge30sIChyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGVtZS5yb3dTZWxlY3Rvci5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGhlbWVzID0gdGhpcy50aGVtZXMuZmlsdGVyKHQgPT4gdC5JZCAhPT0gdGhlbWUuSWQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9Ki9cclxufSIsImltcG9ydCB7TW9uaXRvcmluZ0luZGV4TW9kZWx9IGZyb20gXCIuLi9Nb2RlbHMvTW9uaXRvcmluZ0luZGV4TW9kZWxcIjtcclxuaW1wb3J0IHtOZXRTZW5kZXJ9IGZyb20gXCIuLi9OZXRTZW5kZXJcIjtcclxuaW1wb3J0IHtVdGNab25lfSBmcm9tIFwiLi4vQ29tcG9uZW50cy9VdGNab25lXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVG9vbHRpcEJ1eU1hbmFnZXIge1xyXG4gICAgd3JhcHBlclNlbGVjdG9yOiBKUXVlcnk7XHJcbiAgICBjYW5jZWxTZWxlY3RvcjogSlF1ZXJ5O1xyXG4gICAgY29uZmlybVNlbGVjdG9yOiBKUXVlcnk7XHJcbiAgICBkYXRlU2VsZWN0b3I6IEpRdWVyeTtcclxuICAgIHByaWNlU2VsZWN0b3I6IEpRdWVyeTtcclxuICAgIHByaWNlVmFsaWRhdGlvblNlbGVjdG9yOiBKUXVlcnk7XHJcbiAgICBsb3RDb3VudFNlbGVjdG9yOiBKUXVlcnk7XHJcbiAgICB0aXRsZVNlbGVjdG9yOiBKUXVlcnk7XHJcbiAgICBjdXJyZW50RW50aXR5OiBNb25pdG9yaW5nSW5kZXhNb2RlbDtcclxuICAgIHByaXZhdGUgYnV5U2VjdXJpdHlVcmw6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihidXlTZWN1cml0eVVybDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5idXlTZWN1cml0eVVybCA9IGJ1eVNlY3VyaXR5VXJsO1xyXG4gICAgICAgIHRoaXMud3JhcHBlclNlbGVjdG9yID0gJChcIi5idXktdG9vbHRpcC13cmFwcGVyXCIpO1xyXG4gICAgICAgIHRoaXMuY2FuY2VsU2VsZWN0b3IgPSB0aGlzLndyYXBwZXJTZWxlY3Rvci5maW5kKFwiLmNhbmNlbFwiKTtcclxuICAgICAgICB0aGlzLmNvbmZpcm1TZWxlY3RvciA9IHRoaXMud3JhcHBlclNlbGVjdG9yLmZpbmQoXCIuY29uZmlybVwiKTtcclxuICAgICAgICB0aGlzLmRhdGVTZWxlY3RvciA9IHRoaXMud3JhcHBlclNlbGVjdG9yLmZpbmQoXCIuZGF0ZS1pbnB1dFwiKTtcclxuICAgICAgICB0aGlzLnByaWNlU2VsZWN0b3IgPSB0aGlzLndyYXBwZXJTZWxlY3Rvci5maW5kKFwiLnByaWNlLWlucHV0XCIpO1xyXG4gICAgICAgIHRoaXMucHJpY2VWYWxpZGF0aW9uU2VsZWN0b3IgPSB0aGlzLndyYXBwZXJTZWxlY3Rvci5maW5kKFwiLnByaWNlLXZhbGlkYXRpb25cIik7XHJcbiAgICAgICAgdGhpcy5sb3RDb3VudFNlbGVjdG9yID0gdGhpcy53cmFwcGVyU2VsZWN0b3IuZmluZChcIi5sb3Rjb3VudC1pbnB1dFwiKTtcclxuICAgICAgICB0aGlzLnRpdGxlU2VsZWN0b3IgPSB0aGlzLndyYXBwZXJTZWxlY3Rvci5maW5kKFwiLnRpdGxlXCIpO1xyXG4gICAgICAgIHRoaXMuaW5pdEV2ZW50cygpO1xyXG4gICAgICAgIHRoaXMuaW5pdERhdGVwaWNrZXIoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIHNob3coZW50aXR5OiBNb25pdG9yaW5nSW5kZXhNb2RlbCk6IHZvaWR7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50RW50aXR5ID0gZW50aXR5O1xyXG4gICAgICAgIHRoaXMudGl0bGVTZWxlY3Rvci50ZXh0KGVudGl0eS5TZWNOYW1lKTtcclxuICAgICAgICB0aGlzLndyYXBwZXJTZWxlY3Rvci5yZW1vdmVDbGFzcyhcImhpZGRlbi1lbGVtZW50XCIpO1xyXG4gICAgICAgIHRoaXMuZGF0ZVNlbGVjdG9yLmRhdGVwaWNrZXIoXCJzZXREYXRlXCIsIG5ldyBEYXRlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdEV2ZW50cygpIHtcclxuICAgICAgICB0aGlzLmNhbmNlbFNlbGVjdG9yLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlVG9vbHRpcCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5wcmljZVNlbGVjdG9yLm9uKFwiaW5wdXRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnByaWNlVmFsaWRhdGlvblNlbGVjdG9yLmFkZENsYXNzKFwiaGlkZGVuLWVsZW1lbnRcIik7XHJcbiAgICAgICAgICAgIHRoaXMucHJpY2VTZWxlY3Rvci5yZW1vdmVDbGFzcyhcImludmFsaWQtdmFsdWVcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jb25maXJtU2VsZWN0b3Iub24oXCJjbGlja1wiLCAoKSA9PiB7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHByaWNlID0gTnVtYmVyKHRoaXMucHJpY2VTZWxlY3Rvci52YWwoKSk7XHJcbiAgICAgICAgICAgIGlmKCFwcmljZSB8fCBwcmljZSA8IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJpY2VWYWxpZGF0aW9uU2VsZWN0b3IucmVtb3ZlQ2xhc3MoXCJoaWRkZW4tZWxlbWVudFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJpY2VTZWxlY3Rvci5hZGRDbGFzcyhcImludmFsaWQtdmFsdWVcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jbG9zZVRvb2x0aXAoKTtcclxuICAgICAgICAgICAgTmV0U2VuZGVyLnBvc3QodGhpcy5idXlTZWN1cml0eVVybCwge1xyXG4gICAgICAgICAgICAgICAgSWQ6IHRoaXMuY3VycmVudEVudGl0eS5TZWNJZCxcclxuICAgICAgICAgICAgICAgIERhdGU6IFV0Y1pvbmUuZ2V0VXRjKG5ldyBEYXRlKHRoaXMuZGF0ZVNlbGVjdG9yLnZhbCgpIGFzIHN0cmluZykpLFxyXG4gICAgICAgICAgICAgICAgUHJpY2U6IHByaWNlLFxyXG4gICAgICAgICAgICAgICAgTG90Q291bnQ6IE51bWJlcih0aGlzLmxvdENvdW50U2VsZWN0b3IudmFsKCkgPiAwID8gdGhpcy5sb3RDb3VudFNlbGVjdG9yLnZhbCgpIDogMSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEVudGl0eS5yb3dTZWxlY3Rvci5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNsb3NlVG9vbHRpcCgpIHtcclxuICAgICAgICB0aGlzLndyYXBwZXJTZWxlY3Rvci5hZGRDbGFzcyhcImhpZGRlbi1lbGVtZW50XCIpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcml2YXRlIGluaXREYXRlcGlja2VyKCl7XHJcbiAgICAgICAgbGV0IG1heERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuZGF0ZVNlbGVjdG9yLmRhdGVwaWNrZXIoe1xyXG4gICAgICAgICAgICBmb3JtYXQ6IHtcclxuICAgICAgICAgICAgICAgIHRvRGlzcGxheTogZnVuY3Rpb24gKGRhdGUsIGZvcm1hdCwgbGFuZ3VhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKG5hdmlnYXRvci5sYW5ndWFnZSkucmVwbGFjZSgvXFx1MjAwRi9nLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0b1ZhbHVlOiBmdW5jdGlvbiAoZGF0ZSwgZm9ybWF0LCBsYW5ndWFnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkID0gbmV3IERhdGUoZGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9kLnNldERhdGUoZC5nZXREYXRlKCkgKyA3KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gICAgLFxyXG4gICAgICAgICAgICBlbmREYXRlOiAgbmV3IERhdGUoKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vdGhpcy5kYXRlU2VsZWN0b3IuZGF0ZXBpY2tlcihcInNldEVuZERhdGVcIiwgbmV3IERhdGUoKSk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgTmV0U2VuZGVyIHtcclxuICAgIHN0YXRpYyBhc3luYyBnZXQodXJsOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgIGRvbmU6IChyZXN1bHQ6IHN0cmluZykgPT4gdm9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgZmFpbDogKCkgPT4gdm9pZCA9IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgIGFsd2F5czogKCkgPT4gdm9pZCA9IG51bGwpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIlgtWFNSRi1UT0tFTlwiOiBOZXRTZW5kZXIuZ2V0VG9rZW4oKSxcclxuICAgICAgICAgICAgICAgIFJlcXVlc3RWZXJpZmljYXRpb25Ub2tlbjogTmV0U2VuZGVyLmdldFRva2VuKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZmlyZUFmdGVyRXZlbnRzKHJlcXVlc3QsIGRvbmUsIGZhaWwsIGFsd2F5cyk7XHJcbiAgICAgICAgcmV0dXJuIHJlcXVlc3QucHJvbWlzZSgpLmNhdGNoKGVycm9yID0+IHt9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYXN5bmMgcG9zdCh1cmw6IHN0cmluZywgdmFsdWU6IG9iamVjdCxcclxuICAgICAgICAgICAgICAgICAgICAgIGRvbmU6IChyZXN1bHQ6IHN0cmluZykgPT4gdm9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgIGZhaWw6ICgpID0+IHZvaWQgPSBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx3YXlzOiAoKSA9PiB2b2lkID0gbnVsbCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9ICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHZhbHVlKSxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJYLVhTUkYtVE9LRU5cIjogTmV0U2VuZGVyLmdldFRva2VuKCksXHJcbiAgICAgICAgICAgICAgICBSZXF1ZXN0VmVyaWZpY2F0aW9uVG9rZW46IE5ldFNlbmRlci5nZXRUb2tlbigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmZpcmVBZnRlckV2ZW50cyhyZXF1ZXN0LCBkb25lLCBmYWlsLCBhbHdheXMpO1xyXG4gICAgICAgIHJldHVybiByZXF1ZXN0LnByb21pc2UoKS5jYXRjaChlcnJvciA9PiB7fSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZmlyZUFmdGVyRXZlbnRzKHJlcXVlc3Q6IEpRdWVyeS5qcVhIUjxhbnk+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbmU6IChyZXN1bHQ6IHN0cmluZykgPT4gdm9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWlsOiAoKSA9PiB2b2lkID0gbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHdheXM6ICgpID0+IHZvaWQgPSBudWxsKSB7XHJcbiAgICAgICAgcmVxdWVzdC5kb25lKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIGRvbmUocmVzdWx0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoZmFpbCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3QuZmFpbCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmYWlsKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYWx3YXlzICE9IG51bGwpIHtcclxuICAgICAgICAgICAgcmVxdWVzdC5hbHdheXMoKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWx3YXlzKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0VG9rZW4oKSB7XHJcbiAgICAgICAgY29uc3QgbmFtZSA9IFwiWFNSRi1UT0tFTj1cIjtcclxuICAgICAgICBjb25zdCBkZWNvZGVkQ29va2llID0gZGVjb2RlVVJJQ29tcG9uZW50KGRvY3VtZW50LmNvb2tpZSk7XHJcbiAgICAgICAgY29uc3QgY2EgPSBkZWNvZGVkQ29va2llLnNwbGl0KCc7Jyk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgYyA9IGNhW2ldO1xyXG4gICAgICAgICAgICB3aGlsZSAoYy5jaGFyQXQoMCkgPT0gJyAnKSB7XHJcbiAgICAgICAgICAgICAgICBjID0gYy5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGMuaW5kZXhPZihuYW1lKSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYy5zdWJzdHJpbmcobmFtZS5sZW5ndGgsIGMubGVuZ3RoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=