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
        this.lotCountSelector = this.wrapperSelector.find(".lotcount-input");
        this.titleSelector = this.wrapperSelector.find(".title");
        this.initEvents();
    }
    TooltipBuyManager.prototype.show = function (entity) {
        this.currentEntity = entity;
        this.titleSelector.text(entity.SecName);
        this.wrapperSelector.removeClass("hidden-element");
        //this.lotCountSelector.val(1);
    };
    TooltipBuyManager.prototype.initEvents = function () {
        var _this = this;
        this.cancelSelector.on("click", function () {
            _this.closeTooltip();
        });
        this.confirmSelector.on("click", function () {
            _this.closeTooltip();
            _NetSender__WEBPACK_IMPORTED_MODULE_0__["NetSender"].post(_this.buySecurityUrl, {
                Id: _this.currentEntity.SecId,
                Date: _Components_UtcZone__WEBPACK_IMPORTED_MODULE_1__["UtcZone"].getUtc(new Date(_this.dateSelector.val())),
                Price: Number(_this.priceSelector.val()),
                LotCount: Number(_this.lotCountSelector.val() > 0 ? _this.lotCountSelector.val() : 1)
            }, function () {
                _this.currentEntity.rowSelector.remove();
            });
        });
    };
    TooltipBuyManager.prototype.closeTooltip = function () {
        this.wrapperSelector.addClass("hidden-element");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV1QYWNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1tuYW1lXVBhY2svLi9hcHAvc2NyaXB0cy9Db21wb25lbnRzL1V0Y1pvbmUudHMiLCJ3ZWJwYWNrOi8vW25hbWVdUGFjay8uL2FwcC9zY3JpcHRzL01vbml0b3JpbmcvTW9uaXRvcmluZ0luZGV4TWFuYWdlci50cyIsIndlYnBhY2s6Ly9bbmFtZV1QYWNrLy4vYXBwL3NjcmlwdHMvTW9uaXRvcmluZy9Ub29sdGlwQnV5TWFuYWdlci50cyIsIndlYnBhY2s6Ly9bbmFtZV1QYWNrLy4vYXBwL3NjcmlwdHMvTmV0U2VuZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtJQUFBO0lBU0EsQ0FBQztJQVJpQixrQkFBVSxHQUF4QixVQUF5QixNQUFhO1FBQ2xDLElB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QztTQUNOO0lBRUwsQ0FBQztJQUVjLGtCQUFRLEdBQXZCO1FBQ0ksSUFBTSxJQUFJLEdBQUcsYUFBYSxDQUFDO1FBQzNCLElBQU0sYUFBYSxHQUFHLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxRCxJQUFNLEVBQUUsR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNkLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUU7Z0JBQ3ZCLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3RCO1lBQ0QsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDdEIsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQzdDO1NBQ0o7UUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFDTCxnQkFBQztBQUFELENBQUMiLCJmaWxlIjoiTW9uaXRvcmluZ0luZGV4TWFuYWdlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXBwL3NjcmlwdHMvTW9uaXRvcmluZy9Nb25pdG9yaW5nSW5kZXhNYW5hZ2VyLnRzXCIpO1xuIiwiZXhwb3J0IGNsYXNzIFV0Y1pvbmUge1xyXG4gICAgcHVibGljIHN0YXRpYyBkYXRlSW5ab25lKG9mZnNldDpudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgY29uc3QgdXRjID0gY3VycmVudERhdGUuZ2V0VGltZSgpICsgKGN1cnJlbnREYXRlLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMCk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHV0YyArICgzNjAwMDAwKm9mZnNldCkpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRVdGMoZGF0ZTogRGF0ZSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSAtIChkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMCkpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgTmV0U2VuZGVyIH0gZnJvbSBcIi4uL05ldFNlbmRlclwiO1xyXG5pbXBvcnQgeyBNb25pdG9yaW5nSW5kZXhNb2RlbCB9IGZyb20gXCIuLi9Nb2RlbHMvTW9uaXRvcmluZ0luZGV4TW9kZWxcIjtcclxuaW1wb3J0IHsgVG9vbHRpcEJ1eU1hbmFnZXIgfSBmcm9tIFwiLi9Ub29sdGlwQnV5TWFuYWdlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1vbml0b3JpbmdJbmRleE1hbmFnZXIge1xyXG4gICAgcHJpdmF0ZSBjcmVhdGVCdG5TZWxlY3RvcjogSlF1ZXJ5O1xyXG4gICAgcHJpdmF0ZSB0YWJsZUJvZHlTZWxlY3RvcjogSlF1ZXJ5O1xyXG4gICAgcHJpdmF0ZSBjcmVhdGlvbkZyb21TZWxlY3RvcjogSlF1ZXJ5O1xyXG4gICAgcHJpdmF0ZSBjcmVhdGlvbk9rU2VsZWN0b3I6IEpRdWVyeTtcclxuICAgIHByaXZhdGUgY3JlYXRpb25JbnB1dFNlbGVjdG9yOiBKUXVlcnk7XHJcbiAgICBwcml2YXRlIG1vbml0b3JpbmdzOiBNb25pdG9yaW5nSW5kZXhNb2RlbFtdO1xyXG4gICAgcHJpdmF0ZSBidXlUb29sdGlwOiBUb29sdGlwQnV5TWFuYWdlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihtb25pdG9yaW5nczogTW9uaXRvcmluZ0luZGV4TW9kZWxbXSwgYnV5U2VjdXJpdHlVcmw6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMubW9uaXRvcmluZ3MgPSBtb25pdG9yaW5ncztcclxuICAgICAgICB0aGlzLmNyZWF0ZUJ0blNlbGVjdG9yID0gJChcIi5jcmVhdGUtYnV0dG9uXCIpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRpb25Gcm9tU2VsZWN0b3IgPSAkKFwiLmNyZWF0aW9uLWZvcm1cIik7XHJcbiAgICAgICAgdGhpcy5jcmVhdGlvbk9rU2VsZWN0b3IgPSAkKFwiLmNyZWF0aW9uLXN1Ym1pdFwiKTtcclxuICAgICAgICB0aGlzLmNyZWF0aW9uSW5wdXRTZWxlY3RvciA9ICQoXCIuY3JlYXRpb24tZm9ybSBpbnB1dFwiKTtcclxuICAgICAgICB0aGlzLnRhYmxlQm9keVNlbGVjdG9yID0gJChcIi5tb25pdG9yaW5nLWluZGV4LXRhYmxlIHRib2R5XCIpO1xyXG4gICAgICAgIHRoaXMuYnV5VG9vbHRpcCA9IG5ldyBUb29sdGlwQnV5TWFuYWdlcihidXlTZWN1cml0eVVybCk7XHJcbiAgICAgICAgdGhpcy5pbml0VGFibGUoKTtcclxuICAgICAgICAvL3RoaXMuaW5pdENyZWF0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0VGFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5tb25pdG9yaW5ncy5mb3JFYWNoKG1vbml0b3JpbmcgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFkZEVsZW1lbnQobW9uaXRvcmluZyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVNb25pdG9yaW5nKG1vbml0b3Jpbmc6IE1vbml0b3JpbmdJbmRleE1vZGVsKSB7XHJcbiAgICAgICAgLy8gTmV0U2VuZGVyLnBvc3QodGhpcy5lZGl0VXJsLCBtb25pdG9yaW5nLCAoKSA9PiB7IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkRWxlbWVudChtb25pdG9yaW5nOiBNb25pdG9yaW5nSW5kZXhNb2RlbCkge1xyXG4gICAgICAgIGNvbnN0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICAgIHRoaXMudGFibGVCb2R5U2VsZWN0b3IuYXBwZW5kKHRyKTtcclxuICAgICAgICBtb25pdG9yaW5nLnJvd1NlbGVjdG9yID0gJCh0cik7XHJcbiAgICAgICAgY29uc3Qgc2VjSWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgc2VjSWQuaW5uZXJUZXh0ID0gbW9uaXRvcmluZy5TZWNJZCArIFwiXCI7XHJcbiAgICAgICAgbW9uaXRvcmluZy5yb3dTZWxlY3Rvci5hcHBlbmQoc2VjSWQpO1xyXG4gICAgICAgIGNvbnN0IHNlY05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgc2VjTmFtZS5pbm5lclRleHQgPSBtb25pdG9yaW5nLlNlY05hbWUgKyBcIlwiO1xyXG4gICAgICAgIG1vbml0b3Jpbmcucm93U2VsZWN0b3IuYXBwZW5kKHNlY05hbWUpO1xyXG4gICAgICAgIGNvbnN0IGluaXRDbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICBpbml0Q2xvc2UuaW5uZXJUZXh0ID0gbW9uaXRvcmluZy5Jbml0Q2xvc2UgKyBcIlwiO1xyXG4gICAgICAgIG1vbml0b3Jpbmcucm93U2VsZWN0b3IuYXBwZW5kKGluaXRDbG9zZSk7XHJcbiAgICAgICAgY29uc3QgY3VycmVudENsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgIGN1cnJlbnRDbG9zZS5pbm5lclRleHQgPSBtb25pdG9yaW5nLkN1cnJlbnRDbG9zZSArIFwiXCI7XHJcbiAgICAgICAgbW9uaXRvcmluZy5yb3dTZWxlY3Rvci5hcHBlbmQoY3VycmVudENsb3NlKTtcclxuICAgICAgICBjb25zdCBwZXJjZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgIHBlcmNlbnQuaW5uZXJUZXh0ID0gbW9uaXRvcmluZy5QZXJjZW50ICsgXCIgJVwiO1xyXG4gICAgICAgIG1vbml0b3Jpbmcucm93U2VsZWN0b3IuYXBwZW5kKHBlcmNlbnQpO1xyXG4gICAgICAgIGNvbnN0IHRvQnlEYXRlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICB0b0J5RGF0ZURhdGUuaW5uZXJUZXh0ID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ3J1JywgeyB5ZWFyOiAnbnVtZXJpYycsIG1vbnRoOiAnMi1kaWdpdCcsIGRheTogJzItZGlnaXQnIH0pLmZvcm1hdChuZXcgRGF0ZShtb25pdG9yaW5nLlRvQnV5RGF0ZSkpO1xyXG4gICAgICAgIG1vbml0b3Jpbmcucm93U2VsZWN0b3IuYXBwZW5kKHRvQnlEYXRlRGF0ZSk7XHJcbiAgICAgICAgY29uc3QgbWFuYWdlVGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgbW9uaXRvcmluZy5yb3dTZWxlY3Rvci5hcHBlbmQobWFuYWdlVGQpO1xyXG4gICAgICAgIHRoaXMuc2V0TWFuYW5nZUJ1dHRvbnMobW9uaXRvcmluZywgJChtYW5hZ2VUZCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0TWFuYW5nZUJ1dHRvbnMobW9uaXRvcmluZzogTW9uaXRvcmluZ0luZGV4TW9kZWwsIHRkU2VsZWN0b3I6IEpRdWVyeSkge1xyXG4gICAgICAgIGxldCBzaG93QnV5VG9vbHRpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgc2hvd0J1eVRvb2x0aXAubmFtZSA9IG1vbml0b3JpbmcuU2VjSWQ7XHJcbiAgICAgICAgc2hvd0J1eVRvb2x0aXAuaW5uZXJUZXh0ID0gXCJCdXlcIjtcclxuICAgICAgICBzaG93QnV5VG9vbHRpcC5jbGFzc0xpc3QuYWRkKFwibW9uaXRvcmluZy1idXR0b24tYnV5XCIpO1xyXG4gICAgICAgIHRkU2VsZWN0b3IuYXBwZW5kKHNob3dCdXlUb29sdGlwKTtcclxuICAgICAgICAkKHNob3dCdXlUb29sdGlwKS5vbihcImNsaWNrXCIsICgpID0+IHRoaXMuYnV5VG9vbHRpcC5zaG93KG1vbml0b3JpbmcpKTtcclxuXHJcbiAgICAgICAgLy9sZXQgc2hvd0J1eVRvb2x0aXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICAvL3Nob3dCdXlUb29sdGlwLmhyZWYgPSB0aGlzLm1vbml0b3JpbmdVcmwgKyBtb25pdG9yaW5nLlNlY0lkO1xyXG4gICAgICAgIC8vdGRTZWxlY3Rvci5hcHBlbmQoc2hvd0J1eVRvb2x0aXApO1xyXG4gICAgICAgIC8vbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICAvL2VsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm1pZC1pY29uXCIsIFwibGlzdC1zcGFuXCIpO1xyXG4gICAgICAgIC8vc2hvd0J1eVRvb2x0aXAuYXBwZW5kKGVsZW1lbnQpO1xyXG5cclxuICAgICAgICAvL2VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICAvL2VsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm1pZC1pY29uXCIsIFwiZWRpdC1zcGFuXCIpO1xyXG4gICAgICAgIC8vdGRTZWxlY3Rvci5hcHBlbmQoZWxlbWVudCk7XHJcbiAgICAgICAgLy9tb25pdG9yaW5nLmVkaXRTZWxlY3RvciA9ICQoZWxlbWVudCk7XHJcbiAgICAgICAgLy9pZiAobW9uaXRvcmluZy5QYXR0ZXJuQ291bnQgIT09IDApIHJldHVybjtcclxuICAgICAgICAvL2VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICAvL2VsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm1pZC1pY29uXCIsIFwiZGVsZXRlLXNwYW5cIik7XHJcbiAgICAgICAgLy90ZFNlbGVjdG9yLmFwcGVuZChlbGVtZW50KTtcclxuICAgICAgICAvL21vbml0b3JpbmcuZGVsZXRlU2VsZWN0b3IgPSAkKGVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qcHJpdmF0ZSBpbml0Q3JlYXRpb24oKSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGlvbklucHV0U2VsZWN0b3IudmFsKFwiXCIpO1xyXG4gICAgICAgIGNvbnN0IHRoZW1lID0gbmV3IFRoZW1lSW5kZXhNb2RlbCgpO1xyXG4gICAgICAgIHRoZW1lLk5hbWUgPSBcIlwiO1xyXG4gICAgICAgIHRoZW1lLlBhdHRlcm5Db3VudCA9IDA7XHJcbiAgICAgICAgdGhpcy5jcmVhdGlvbklucHV0U2VsZWN0b3Iub24oXCJpbnB1dFwiLCAoKSA9PiB0aGVtZS5OYW1lID0gdGhpcy5jcmVhdGlvbklucHV0U2VsZWN0b3IudmFsKCkgYXMgc3RyaW5nKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUJ0blNlbGVjdG9yLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0aW9uRnJvbVNlbGVjdG9yLnJlbW92ZUNsYXNzKFwiaGlkZGVuLWVsZW1lbnRcIik7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQnRuU2VsZWN0b3IuYWRkQ2xhc3MoXCJoaWRkZW4tZWxlbWVudFwiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmNyZWF0aW9uT2tTZWxlY3Rvci5vbihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoZW1lLk5hbWUubGVuZ3RoID09PSAwKSByZXR1cm47XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRpb25Gcm9tU2VsZWN0b3IuYWRkQ2xhc3MoXCJoaWRkZW4tZWxlbWVudFwiKTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVCdG5TZWxlY3Rvci5yZW1vdmVDbGFzcyhcImhpZGRlbi1lbGVtZW50XCIpO1xyXG4gICAgICAgICAgICBOZXRTZW5kZXIucG9zdCh0aGlzLmNyZWF0ZVVybCwgdGhlbWUsIChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoZW1lLklkID0gTnVtYmVyKHJlcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEVsZW1lbnQodGhlbWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRlbGV0ZVRoZW1lKHRoZW1lOiBUaGVtZUluZGV4TW9kZWwpIHtcclxuICAgICAgICBjb25zdCBjb25mID0gY29uZmlybShgRGVsZXRlIFwiJHt0aGVtZS5OYW1lfVwiP2ApO1xyXG4gICAgICAgIGlmIChjb25mKSB7XHJcbiAgICAgICAgICAgIE5ldFNlbmRlci5wb3N0KHRoaXMuZGVsZXRlVXJsICsgdGhlbWUuSWQsIHt9LCAocikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhlbWUucm93U2VsZWN0b3IucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRoZW1lcyA9IHRoaXMudGhlbWVzLmZpbHRlcih0ID0+IHQuSWQgIT09IHRoZW1lLklkKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSovXHJcbn0iLCJpbXBvcnQge01vbml0b3JpbmdJbmRleE1vZGVsfSBmcm9tIFwiLi4vTW9kZWxzL01vbml0b3JpbmdJbmRleE1vZGVsXCI7XHJcbmltcG9ydCB7TmV0U2VuZGVyfSBmcm9tIFwiLi4vTmV0U2VuZGVyXCI7XHJcbmltcG9ydCB7VXRjWm9uZX0gZnJvbSBcIi4uL0NvbXBvbmVudHMvVXRjWm9uZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRvb2x0aXBCdXlNYW5hZ2VyIHtcclxuICAgIHdyYXBwZXJTZWxlY3RvcjogSlF1ZXJ5O1xyXG4gICAgY2FuY2VsU2VsZWN0b3I6IEpRdWVyeTtcclxuICAgIGNvbmZpcm1TZWxlY3RvcjogSlF1ZXJ5O1xyXG4gICAgZGF0ZVNlbGVjdG9yOiBKUXVlcnk7XHJcbiAgICBwcmljZVNlbGVjdG9yOiBKUXVlcnk7XHJcbiAgICBsb3RDb3VudFNlbGVjdG9yOiBKUXVlcnk7XHJcbiAgICB0aXRsZVNlbGVjdG9yOiBKUXVlcnk7XHJcbiAgICBjdXJyZW50RW50aXR5OiBNb25pdG9yaW5nSW5kZXhNb2RlbDtcclxuICAgIHByaXZhdGUgYnV5U2VjdXJpdHlVcmw6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihidXlTZWN1cml0eVVybDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5idXlTZWN1cml0eVVybCA9IGJ1eVNlY3VyaXR5VXJsO1xyXG4gICAgICAgIHRoaXMud3JhcHBlclNlbGVjdG9yID0gJChcIi5idXktdG9vbHRpcC13cmFwcGVyXCIpO1xyXG4gICAgICAgIHRoaXMuY2FuY2VsU2VsZWN0b3IgPSB0aGlzLndyYXBwZXJTZWxlY3Rvci5maW5kKFwiLmNhbmNlbFwiKTtcclxuICAgICAgICB0aGlzLmNvbmZpcm1TZWxlY3RvciA9IHRoaXMud3JhcHBlclNlbGVjdG9yLmZpbmQoXCIuY29uZmlybVwiKTtcclxuICAgICAgICB0aGlzLmRhdGVTZWxlY3RvciA9IHRoaXMud3JhcHBlclNlbGVjdG9yLmZpbmQoXCIuZGF0ZS1pbnB1dFwiKTtcclxuICAgICAgICB0aGlzLnByaWNlU2VsZWN0b3IgPSB0aGlzLndyYXBwZXJTZWxlY3Rvci5maW5kKFwiLnByaWNlLWlucHV0XCIpO1xyXG4gICAgICAgIHRoaXMubG90Q291bnRTZWxlY3RvciA9IHRoaXMud3JhcHBlclNlbGVjdG9yLmZpbmQoXCIubG90Y291bnQtaW5wdXRcIik7XHJcbiAgICAgICAgdGhpcy50aXRsZVNlbGVjdG9yID0gdGhpcy53cmFwcGVyU2VsZWN0b3IuZmluZChcIi50aXRsZVwiKTtcclxuICAgICAgICB0aGlzLmluaXRFdmVudHMoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIHNob3coZW50aXR5OiBNb25pdG9yaW5nSW5kZXhNb2RlbCk6IHZvaWR7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50RW50aXR5ID0gZW50aXR5O1xyXG4gICAgICAgIHRoaXMudGl0bGVTZWxlY3Rvci50ZXh0KGVudGl0eS5TZWNOYW1lKTtcclxuICAgICAgICB0aGlzLndyYXBwZXJTZWxlY3Rvci5yZW1vdmVDbGFzcyhcImhpZGRlbi1lbGVtZW50XCIpO1xyXG4gICAgICAgIC8vdGhpcy5sb3RDb3VudFNlbGVjdG9yLnZhbCgxKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRFdmVudHMoKSB7XHJcbiAgICAgICAgdGhpcy5jYW5jZWxTZWxlY3Rvci5vbihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZVRvb2x0aXAoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuY29uZmlybVNlbGVjdG9yLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlVG9vbHRpcCgpO1xyXG4gICAgICAgICAgICBOZXRTZW5kZXIucG9zdCh0aGlzLmJ1eVNlY3VyaXR5VXJsLCB7XHJcbiAgICAgICAgICAgICAgICBJZDogdGhpcy5jdXJyZW50RW50aXR5LlNlY0lkLFxyXG4gICAgICAgICAgICAgICAgRGF0ZTogVXRjWm9uZS5nZXRVdGMobmV3IERhdGUodGhpcy5kYXRlU2VsZWN0b3IudmFsKCkgYXMgc3RyaW5nKSksXHJcbiAgICAgICAgICAgICAgICBQcmljZTogTnVtYmVyKHRoaXMucHJpY2VTZWxlY3Rvci52YWwoKSksXHJcbiAgICAgICAgICAgICAgICBMb3RDb3VudDogTnVtYmVyKHRoaXMubG90Q291bnRTZWxlY3Rvci52YWwoKSA+IDAgPyB0aGlzLmxvdENvdW50U2VsZWN0b3IudmFsKCkgOiAxKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50RW50aXR5LnJvd1NlbGVjdG9yLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2xvc2VUb29sdGlwKCkge1xyXG4gICAgICAgIHRoaXMud3JhcHBlclNlbGVjdG9yLmFkZENsYXNzKFwiaGlkZGVuLWVsZW1lbnRcIik7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgTmV0U2VuZGVyIHtcclxuICAgIHN0YXRpYyBhc3luYyBnZXQodXJsOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgIGRvbmU6IChyZXN1bHQ6IHN0cmluZykgPT4gdm9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgZmFpbDogKCkgPT4gdm9pZCA9IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgIGFsd2F5czogKCkgPT4gdm9pZCA9IG51bGwpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIlgtWFNSRi1UT0tFTlwiOiBOZXRTZW5kZXIuZ2V0VG9rZW4oKSxcclxuICAgICAgICAgICAgICAgIFJlcXVlc3RWZXJpZmljYXRpb25Ub2tlbjogTmV0U2VuZGVyLmdldFRva2VuKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZmlyZUFmdGVyRXZlbnRzKHJlcXVlc3QsIGRvbmUsIGZhaWwsIGFsd2F5cyk7XHJcbiAgICAgICAgcmV0dXJuIHJlcXVlc3QucHJvbWlzZSgpLmNhdGNoKGVycm9yID0+IHt9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYXN5bmMgcG9zdCh1cmw6IHN0cmluZywgdmFsdWU6IG9iamVjdCxcclxuICAgICAgICAgICAgICAgICAgICAgIGRvbmU6IChyZXN1bHQ6IHN0cmluZykgPT4gdm9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgIGZhaWw6ICgpID0+IHZvaWQgPSBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx3YXlzOiAoKSA9PiB2b2lkID0gbnVsbCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9ICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHZhbHVlKSxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJYLVhTUkYtVE9LRU5cIjogTmV0U2VuZGVyLmdldFRva2VuKCksXHJcbiAgICAgICAgICAgICAgICBSZXF1ZXN0VmVyaWZpY2F0aW9uVG9rZW46IE5ldFNlbmRlci5nZXRUb2tlbigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmZpcmVBZnRlckV2ZW50cyhyZXF1ZXN0LCBkb25lLCBmYWlsLCBhbHdheXMpO1xyXG4gICAgICAgIHJldHVybiByZXF1ZXN0LnByb21pc2UoKS5jYXRjaChlcnJvciA9PiB7fSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZmlyZUFmdGVyRXZlbnRzKHJlcXVlc3Q6IEpRdWVyeS5qcVhIUjxhbnk+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbmU6IChyZXN1bHQ6IHN0cmluZykgPT4gdm9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWlsOiAoKSA9PiB2b2lkID0gbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHdheXM6ICgpID0+IHZvaWQgPSBudWxsKSB7XHJcbiAgICAgICAgcmVxdWVzdC5kb25lKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIGRvbmUocmVzdWx0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoZmFpbCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3QuZmFpbCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmYWlsKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYWx3YXlzICE9IG51bGwpIHtcclxuICAgICAgICAgICAgcmVxdWVzdC5hbHdheXMoKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWx3YXlzKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0VG9rZW4oKSB7XHJcbiAgICAgICAgY29uc3QgbmFtZSA9IFwiWFNSRi1UT0tFTj1cIjtcclxuICAgICAgICBjb25zdCBkZWNvZGVkQ29va2llID0gZGVjb2RlVVJJQ29tcG9uZW50KGRvY3VtZW50LmNvb2tpZSk7XHJcbiAgICAgICAgY29uc3QgY2EgPSBkZWNvZGVkQ29va2llLnNwbGl0KCc7Jyk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgYyA9IGNhW2ldO1xyXG4gICAgICAgICAgICB3aGlsZSAoYy5jaGFyQXQoMCkgPT0gJyAnKSB7XHJcbiAgICAgICAgICAgICAgICBjID0gYy5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGMuaW5kZXhPZihuYW1lKSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYy5zdWJzdHJpbmcobmFtZS5sZW5ndGgsIGMubGVuZ3RoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=