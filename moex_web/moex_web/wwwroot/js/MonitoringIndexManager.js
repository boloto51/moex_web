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
        percent.innerText = monitoring.Percent + "";
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
        this.titleSelector = this.wrapperSelector.find(".title");
        this.initEvents();
    }
    TooltipBuyManager.prototype.show = function (entity) {
        this.currentEntity = entity;
        this.titleSelector.text(entity.SecName);
        this.wrapperSelector.removeClass("hidden-element");
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
                Price: Number(_this.priceSelector.val())
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV1QYWNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1tuYW1lXVBhY2svLi9hcHAvc2NyaXB0cy9Db21wb25lbnRzL1V0Y1pvbmUudHMiLCJ3ZWJwYWNrOi8vW25hbWVdUGFjay8uL2FwcC9zY3JpcHRzL01vbml0b3JpbmcvTW9uaXRvcmluZ0luZGV4TWFuYWdlci50cyIsIndlYnBhY2s6Ly9bbmFtZV1QYWNrLy4vYXBwL3NjcmlwdHMvTW9uaXRvcmluZy9Ub29sdGlwQnV5TWFuYWdlci50cyIsIndlYnBhY2s6Ly9bbmFtZV1QYWNrLy4vYXBwL3NjcmlwdHMvTmV0U2VuZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtJQUFBO0lBU0EsQ0FBQztJQVJpQixrQkFBVSxHQUF4QixVQUF5QixNQUFhO1FBQ2xDLElB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QUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNoQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZCxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFO2dCQUN2QixDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN0QjtZQUNELElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3RCLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUM3QztTQUNKO1FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDZCxDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQUFDIiwiZmlsZSI6Ik1vbml0b3JpbmdJbmRleE1hbmFnZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2FwcC9zY3JpcHRzL01vbml0b3JpbmcvTW9uaXRvcmluZ0luZGV4TWFuYWdlci50c1wiKTtcbiIsImV4cG9ydCBjbGFzcyBVdGNab25lIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgZGF0ZUluWm9uZShvZmZzZXQ6bnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGNvbnN0IHV0YyA9IGN1cnJlbnREYXRlLmdldFRpbWUoKSArIChjdXJyZW50RGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpICogNjAwMDApO1xyXG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSh1dGMgKyAoMzYwMDAwMCpvZmZzZXQpKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0VXRjKGRhdGU6IERhdGUpIHtcclxuICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkgLSAoZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpICogNjAwMDApKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IE5ldFNlbmRlciB9IGZyb20gXCIuLi9OZXRTZW5kZXJcIjtcclxuaW1wb3J0IHsgTW9uaXRvcmluZ0luZGV4TW9kZWwgfSBmcm9tIFwiLi4vTW9kZWxzL01vbml0b3JpbmdJbmRleE1vZGVsXCI7XHJcbmltcG9ydCB7IFRvb2x0aXBCdXlNYW5hZ2VyIH0gZnJvbSBcIi4vVG9vbHRpcEJ1eU1hbmFnZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNb25pdG9yaW5nSW5kZXhNYW5hZ2VyIHtcclxuICAgIHByaXZhdGUgY3JlYXRlQnRuU2VsZWN0b3I6IEpRdWVyeTtcclxuICAgIHByaXZhdGUgdGFibGVCb2R5U2VsZWN0b3I6IEpRdWVyeTtcclxuICAgIHByaXZhdGUgY3JlYXRpb25Gcm9tU2VsZWN0b3I6IEpRdWVyeTtcclxuICAgIHByaXZhdGUgY3JlYXRpb25Pa1NlbGVjdG9yOiBKUXVlcnk7XHJcbiAgICBwcml2YXRlIGNyZWF0aW9uSW5wdXRTZWxlY3RvcjogSlF1ZXJ5O1xyXG4gICAgcHJpdmF0ZSBtb25pdG9yaW5nczogTW9uaXRvcmluZ0luZGV4TW9kZWxbXTtcclxuICAgIHByaXZhdGUgYnV5VG9vbHRpcDogVG9vbHRpcEJ1eU1hbmFnZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IobW9uaXRvcmluZ3M6IE1vbml0b3JpbmdJbmRleE1vZGVsW10sIGJ1eVNlY3VyaXR5VXJsOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLm1vbml0b3JpbmdzID0gbW9uaXRvcmluZ3M7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVCdG5TZWxlY3RvciA9ICQoXCIuY3JlYXRlLWJ1dHRvblwiKTtcclxuICAgICAgICB0aGlzLmNyZWF0aW9uRnJvbVNlbGVjdG9yID0gJChcIi5jcmVhdGlvbi1mb3JtXCIpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRpb25Pa1NlbGVjdG9yID0gJChcIi5jcmVhdGlvbi1zdWJtaXRcIik7XHJcbiAgICAgICAgdGhpcy5jcmVhdGlvbklucHV0U2VsZWN0b3IgPSAkKFwiLmNyZWF0aW9uLWZvcm0gaW5wdXRcIik7XHJcbiAgICAgICAgdGhpcy50YWJsZUJvZHlTZWxlY3RvciA9ICQoXCIubW9uaXRvcmluZy1pbmRleC10YWJsZSB0Ym9keVwiKTtcclxuICAgICAgICB0aGlzLmJ1eVRvb2x0aXAgPSBuZXcgVG9vbHRpcEJ1eU1hbmFnZXIoYnV5U2VjdXJpdHlVcmwpO1xyXG4gICAgICAgIHRoaXMuaW5pdFRhYmxlKCk7XHJcbiAgICAgICAgLy90aGlzLmluaXRDcmVhdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdFRhYmxlKCkge1xyXG4gICAgICAgIHRoaXMubW9uaXRvcmluZ3MuZm9yRWFjaChtb25pdG9yaW5nID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hZGRFbGVtZW50KG1vbml0b3JpbmcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlTW9uaXRvcmluZyhtb25pdG9yaW5nOiBNb25pdG9yaW5nSW5kZXhNb2RlbCkge1xyXG4gICAgICAgIC8vIE5ldFNlbmRlci5wb3N0KHRoaXMuZWRpdFVybCwgbW9uaXRvcmluZywgKCkgPT4geyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZEVsZW1lbnQobW9uaXRvcmluZzogTW9uaXRvcmluZ0luZGV4TW9kZWwpIHtcclxuICAgICAgICBjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgICB0aGlzLnRhYmxlQm9keVNlbGVjdG9yLmFwcGVuZCh0cik7XHJcbiAgICAgICAgbW9uaXRvcmluZy5yb3dTZWxlY3RvciA9ICQodHIpO1xyXG4gICAgICAgIGNvbnN0IHNlY0lkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgIHNlY0lkLmlubmVyVGV4dCA9IG1vbml0b3JpbmcuU2VjSWQgKyBcIlwiO1xyXG4gICAgICAgIG1vbml0b3Jpbmcucm93U2VsZWN0b3IuYXBwZW5kKHNlY0lkKTtcclxuICAgICAgICBjb25zdCBzZWNOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgIHNlY05hbWUuaW5uZXJUZXh0ID0gbW9uaXRvcmluZy5TZWNOYW1lICsgXCJcIjtcclxuICAgICAgICBtb25pdG9yaW5nLnJvd1NlbGVjdG9yLmFwcGVuZChzZWNOYW1lKTtcclxuICAgICAgICBjb25zdCBpbml0Q2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgaW5pdENsb3NlLmlubmVyVGV4dCA9IG1vbml0b3JpbmcuSW5pdENsb3NlICsgXCJcIjtcclxuICAgICAgICBtb25pdG9yaW5nLnJvd1NlbGVjdG9yLmFwcGVuZChpbml0Q2xvc2UpO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRDbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICBjdXJyZW50Q2xvc2UuaW5uZXJUZXh0ID0gbW9uaXRvcmluZy5DdXJyZW50Q2xvc2UgKyBcIlwiO1xyXG4gICAgICAgIG1vbml0b3Jpbmcucm93U2VsZWN0b3IuYXBwZW5kKGN1cnJlbnRDbG9zZSk7XHJcbiAgICAgICAgY29uc3QgcGVyY2VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICBwZXJjZW50LmlubmVyVGV4dCA9IG1vbml0b3JpbmcuUGVyY2VudCArIFwiXCI7XHJcbiAgICAgICAgbW9uaXRvcmluZy5yb3dTZWxlY3Rvci5hcHBlbmQocGVyY2VudCk7XHJcbiAgICAgICAgY29uc3QgdG9CeURhdGVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgIHRvQnlEYXRlRGF0ZS5pbm5lclRleHQgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgncnUnLCB7IHllYXI6ICdudW1lcmljJywgbW9udGg6ICcyLWRpZ2l0JywgZGF5OiAnMi1kaWdpdCcgfSkuZm9ybWF0KG5ldyBEYXRlKG1vbml0b3JpbmcuVG9CdXlEYXRlKSk7XHJcbiAgICAgICAgbW9uaXRvcmluZy5yb3dTZWxlY3Rvci5hcHBlbmQodG9CeURhdGVEYXRlKTtcclxuICAgICAgICBjb25zdCBtYW5hZ2VUZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICBtb25pdG9yaW5nLnJvd1NlbGVjdG9yLmFwcGVuZChtYW5hZ2VUZCk7XHJcbiAgICAgICAgdGhpcy5zZXRNYW5hbmdlQnV0dG9ucyhtb25pdG9yaW5nLCAkKG1hbmFnZVRkKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRNYW5hbmdlQnV0dG9ucyhtb25pdG9yaW5nOiBNb25pdG9yaW5nSW5kZXhNb2RlbCwgdGRTZWxlY3RvcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgbGV0IHNob3dCdXlUb29sdGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBzaG93QnV5VG9vbHRpcC5uYW1lID0gbW9uaXRvcmluZy5TZWNJZDtcclxuICAgICAgICBzaG93QnV5VG9vbHRpcC5pbm5lclRleHQgPSBcIkJ1eVwiO1xyXG4gICAgICAgIHNob3dCdXlUb29sdGlwLmNsYXNzTGlzdC5hZGQoXCJtb25pdG9yaW5nLWJ1dHRvbi1idXlcIik7XHJcbiAgICAgICAgdGRTZWxlY3Rvci5hcHBlbmQoc2hvd0J1eVRvb2x0aXApO1xyXG4gICAgICAgICQoc2hvd0J1eVRvb2x0aXApLm9uKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5idXlUb29sdGlwLnNob3cobW9uaXRvcmluZykpO1xyXG5cclxuICAgICAgICAvL2xldCBzaG93QnV5VG9vbHRpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgIC8vc2hvd0J1eVRvb2x0aXAuaHJlZiA9IHRoaXMubW9uaXRvcmluZ1VybCArIG1vbml0b3JpbmcuU2VjSWQ7XHJcbiAgICAgICAgLy90ZFNlbGVjdG9yLmFwcGVuZChzaG93QnV5VG9vbHRpcCk7XHJcbiAgICAgICAgLy9sZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIC8vZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibWlkLWljb25cIiwgXCJsaXN0LXNwYW5cIik7XHJcbiAgICAgICAgLy9zaG93QnV5VG9vbHRpcC5hcHBlbmQoZWxlbWVudCk7XHJcblxyXG4gICAgICAgIC8vZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIC8vZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibWlkLWljb25cIiwgXCJlZGl0LXNwYW5cIik7XHJcbiAgICAgICAgLy90ZFNlbGVjdG9yLmFwcGVuZChlbGVtZW50KTtcclxuICAgICAgICAvL21vbml0b3JpbmcuZWRpdFNlbGVjdG9yID0gJChlbGVtZW50KTtcclxuICAgICAgICAvL2lmIChtb25pdG9yaW5nLlBhdHRlcm5Db3VudCAhPT0gMCkgcmV0dXJuO1xyXG4gICAgICAgIC8vZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIC8vZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibWlkLWljb25cIiwgXCJkZWxldGUtc3BhblwiKTtcclxuICAgICAgICAvL3RkU2VsZWN0b3IuYXBwZW5kKGVsZW1lbnQpO1xyXG4gICAgICAgIC8vbW9uaXRvcmluZy5kZWxldGVTZWxlY3RvciA9ICQoZWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgLypwcml2YXRlIGluaXRDcmVhdGlvbigpIHtcclxuICAgICAgICB0aGlzLmNyZWF0aW9uSW5wdXRTZWxlY3Rvci52YWwoXCJcIik7XHJcbiAgICAgICAgY29uc3QgdGhlbWUgPSBuZXcgVGhlbWVJbmRleE1vZGVsKCk7XHJcbiAgICAgICAgdGhlbWUuTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgdGhlbWUuUGF0dGVybkNvdW50ID0gMDtcclxuICAgICAgICB0aGlzLmNyZWF0aW9uSW5wdXRTZWxlY3Rvci5vbihcImlucHV0XCIsICgpID0+IHRoZW1lLk5hbWUgPSB0aGlzLmNyZWF0aW9uSW5wdXRTZWxlY3Rvci52YWwoKSBhcyBzdHJpbmcpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlQnRuU2VsZWN0b3Iub24oXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRpb25Gcm9tU2VsZWN0b3IucmVtb3ZlQ2xhc3MoXCJoaWRkZW4tZWxlbWVudFwiKTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVCdG5TZWxlY3Rvci5hZGRDbGFzcyhcImhpZGRlbi1lbGVtZW50XCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuY3JlYXRpb25Pa1NlbGVjdG9yLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhlbWUuTmFtZS5sZW5ndGggPT09IDApIHJldHVybjtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGlvbkZyb21TZWxlY3Rvci5hZGRDbGFzcyhcImhpZGRlbi1lbGVtZW50XCIpO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUJ0blNlbGVjdG9yLnJlbW92ZUNsYXNzKFwiaGlkZGVuLWVsZW1lbnRcIik7XHJcbiAgICAgICAgICAgIE5ldFNlbmRlci5wb3N0KHRoaXMuY3JlYXRlVXJsLCB0aGVtZSwgKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhlbWUuSWQgPSBOdW1iZXIocmVzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkRWxlbWVudCh0aGVtZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZGVsZXRlVGhlbWUodGhlbWU6IFRoZW1lSW5kZXhNb2RlbCkge1xyXG4gICAgICAgIGNvbnN0IGNvbmYgPSBjb25maXJtKGBEZWxldGUgXCIke3RoZW1lLk5hbWV9XCI/YCk7XHJcbiAgICAgICAgaWYgKGNvbmYpIHtcclxuICAgICAgICAgICAgTmV0U2VuZGVyLnBvc3QodGhpcy5kZWxldGVVcmwgKyB0aGVtZS5JZCwge30sIChyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGVtZS5yb3dTZWxlY3Rvci5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGhlbWVzID0gdGhpcy50aGVtZXMuZmlsdGVyKHQgPT4gdC5JZCAhPT0gdGhlbWUuSWQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9Ki9cclxufSIsImltcG9ydCB7TW9uaXRvcmluZ0luZGV4TW9kZWx9IGZyb20gXCIuLi9Nb2RlbHMvTW9uaXRvcmluZ0luZGV4TW9kZWxcIjtcclxuaW1wb3J0IHtOZXRTZW5kZXJ9IGZyb20gXCIuLi9OZXRTZW5kZXJcIjtcclxuaW1wb3J0IHtVdGNab25lfSBmcm9tIFwiLi4vQ29tcG9uZW50cy9VdGNab25lXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVG9vbHRpcEJ1eU1hbmFnZXIge1xyXG4gICAgd3JhcHBlclNlbGVjdG9yOiBKUXVlcnk7XHJcbiAgICBjYW5jZWxTZWxlY3RvcjogSlF1ZXJ5O1xyXG4gICAgY29uZmlybVNlbGVjdG9yOiBKUXVlcnk7XHJcbiAgICBkYXRlU2VsZWN0b3I6IEpRdWVyeTtcclxuICAgIHByaWNlU2VsZWN0b3I6IEpRdWVyeTtcclxuICAgIHRpdGxlU2VsZWN0b3I6IEpRdWVyeTtcclxuICAgIGN1cnJlbnRFbnRpdHk6IE1vbml0b3JpbmdJbmRleE1vZGVsO1xyXG4gICAgcHJpdmF0ZSBidXlTZWN1cml0eVVybDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGJ1eVNlY3VyaXR5VXJsOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmJ1eVNlY3VyaXR5VXJsID0gYnV5U2VjdXJpdHlVcmw7XHJcbiAgICAgICAgdGhpcy53cmFwcGVyU2VsZWN0b3IgPSAkKFwiLmJ1eS10b29sdGlwLXdyYXBwZXJcIik7XHJcbiAgICAgICAgdGhpcy5jYW5jZWxTZWxlY3RvciA9IHRoaXMud3JhcHBlclNlbGVjdG9yLmZpbmQoXCIuY2FuY2VsXCIpO1xyXG4gICAgICAgIHRoaXMuY29uZmlybVNlbGVjdG9yID0gdGhpcy53cmFwcGVyU2VsZWN0b3IuZmluZChcIi5jb25maXJtXCIpO1xyXG4gICAgICAgIHRoaXMuZGF0ZVNlbGVjdG9yID0gdGhpcy53cmFwcGVyU2VsZWN0b3IuZmluZChcIi5kYXRlLWlucHV0XCIpO1xyXG4gICAgICAgIHRoaXMucHJpY2VTZWxlY3RvciA9IHRoaXMud3JhcHBlclNlbGVjdG9yLmZpbmQoXCIucHJpY2UtaW5wdXRcIik7XHJcbiAgICAgICAgdGhpcy50aXRsZVNlbGVjdG9yID0gdGhpcy53cmFwcGVyU2VsZWN0b3IuZmluZChcIi50aXRsZVwiKTtcclxuICAgICAgICB0aGlzLmluaXRFdmVudHMoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIHNob3coZW50aXR5OiBNb25pdG9yaW5nSW5kZXhNb2RlbCk6IHZvaWR7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50RW50aXR5ID0gZW50aXR5O1xyXG4gICAgICAgIHRoaXMudGl0bGVTZWxlY3Rvci50ZXh0KGVudGl0eS5TZWNOYW1lKTtcclxuICAgICAgICB0aGlzLndyYXBwZXJTZWxlY3Rvci5yZW1vdmVDbGFzcyhcImhpZGRlbi1lbGVtZW50XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdEV2ZW50cygpIHtcclxuICAgICAgICB0aGlzLmNhbmNlbFNlbGVjdG9yLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlVG9vbHRpcCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5jb25maXJtU2VsZWN0b3Iub24oXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VUb29sdGlwKCk7XHJcbiAgICAgICAgICAgIE5ldFNlbmRlci5wb3N0KHRoaXMuYnV5U2VjdXJpdHlVcmwsIHtcclxuICAgICAgICAgICAgICAgIElkOiB0aGlzLmN1cnJlbnRFbnRpdHkuU2VjSWQsXHJcbiAgICAgICAgICAgICAgICBEYXRlOiBVdGNab25lLmdldFV0YyhuZXcgRGF0ZSh0aGlzLmRhdGVTZWxlY3Rvci52YWwoKSBhcyBzdHJpbmcpKSxcclxuICAgICAgICAgICAgICAgIFByaWNlOiBOdW1iZXIodGhpcy5wcmljZVNlbGVjdG9yLnZhbCgpKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50RW50aXR5LnJvd1NlbGVjdG9yLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2xvc2VUb29sdGlwKCkge1xyXG4gICAgICAgIHRoaXMud3JhcHBlclNlbGVjdG9yLmFkZENsYXNzKFwiaGlkZGVuLWVsZW1lbnRcIik7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgTmV0U2VuZGVyIHtcclxuICAgIHN0YXRpYyBhc3luYyBnZXQodXJsOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgIGRvbmU6IChyZXN1bHQ6IHN0cmluZykgPT4gdm9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgZmFpbDogKCkgPT4gdm9pZCA9IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgIGFsd2F5czogKCkgPT4gdm9pZCA9IG51bGwpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIlgtWFNSRi1UT0tFTlwiOiBOZXRTZW5kZXIuZ2V0VG9rZW4oKSxcclxuICAgICAgICAgICAgICAgIFJlcXVlc3RWZXJpZmljYXRpb25Ub2tlbjogTmV0U2VuZGVyLmdldFRva2VuKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZmlyZUFmdGVyRXZlbnRzKHJlcXVlc3QsIGRvbmUsIGZhaWwsIGFsd2F5cyk7XHJcbiAgICAgICAgcmV0dXJuIHJlcXVlc3QucHJvbWlzZSgpLmNhdGNoKGVycm9yID0+IHt9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYXN5bmMgcG9zdCh1cmw6IHN0cmluZywgdmFsdWU6IG9iamVjdCxcclxuICAgICAgICAgICAgICAgICAgICAgIGRvbmU6IChyZXN1bHQ6IHN0cmluZykgPT4gdm9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgIGZhaWw6ICgpID0+IHZvaWQgPSBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx3YXlzOiAoKSA9PiB2b2lkID0gbnVsbCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9ICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHZhbHVlKSxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJYLVhTUkYtVE9LRU5cIjogTmV0U2VuZGVyLmdldFRva2VuKCksXHJcbiAgICAgICAgICAgICAgICBSZXF1ZXN0VmVyaWZpY2F0aW9uVG9rZW46IE5ldFNlbmRlci5nZXRUb2tlbigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmZpcmVBZnRlckV2ZW50cyhyZXF1ZXN0LCBkb25lLCBmYWlsLCBhbHdheXMpO1xyXG4gICAgICAgIHJldHVybiByZXF1ZXN0LnByb21pc2UoKS5jYXRjaChlcnJvciA9PiB7fSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZmlyZUFmdGVyRXZlbnRzKHJlcXVlc3Q6IEpRdWVyeS5qcVhIUjxhbnk+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbmU6IChyZXN1bHQ6IHN0cmluZykgPT4gdm9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWlsOiAoKSA9PiB2b2lkID0gbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHdheXM6ICgpID0+IHZvaWQgPSBudWxsKSB7XHJcbiAgICAgICAgcmVxdWVzdC5kb25lKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIGRvbmUocmVzdWx0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoZmFpbCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3QuZmFpbCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmYWlsKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYWx3YXlzICE9IG51bGwpIHtcclxuICAgICAgICAgICAgcmVxdWVzdC5hbHdheXMoKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWx3YXlzKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0VG9rZW4oKSB7XHJcbiAgICAgICAgY29uc3QgbmFtZSA9IFwiWFNSRi1UT0tFTj1cIjtcclxuICAgICAgICBjb25zdCBkZWNvZGVkQ29va2llID0gZGVjb2RlVVJJQ29tcG9uZW50KGRvY3VtZW50LmNvb2tpZSk7XHJcbiAgICAgICAgY29uc3QgY2EgPSBkZWNvZGVkQ29va2llLnNwbGl0KCc7Jyk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgYyA9IGNhW2ldO1xyXG4gICAgICAgICAgICB3aGlsZSAoYy5jaGFyQXQoMCkgPT0gJyAnKSB7XHJcbiAgICAgICAgICAgICAgICBjID0gYy5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGMuaW5kZXhPZihuYW1lKSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYy5zdWJzdHJpbmcobmFtZS5sZW5ndGgsIGMubGVuZ3RoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=