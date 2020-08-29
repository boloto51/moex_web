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

/***/ "./app/scripts/Monitoring/MonitoringIndexManager.ts":
/*!**********************************************************!*\
  !*** ./app/scripts/Monitoring/MonitoringIndexManager.ts ***!
  \**********************************************************/
/*! exports provided: MonitoringIndexManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonitoringIndexManager", function() { return MonitoringIndexManager; });
var MonitoringIndexManager = /** @class */ (function () {
    function MonitoringIndexManager(monitorings, monitoringUrl) {
        this.monitorings = monitorings;
        this.createBtnSelector = $(".create-button");
        this.creationFromSelector = $(".creation-form");
        this.creationOkSelector = $(".creation-submit");
        this.creationInputSelector = $(".creation-form input");
        this.tableBodySelector = $(".monitoring-index-table tbody");
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
        var toInProgress = document.createElement("button");
        tdSelector.append(toInProgress);
        //let toInProgress = document.createElement("a");
        //toInProgress.href = this.monitoringUrl + monitoring.SecId;
        //tdSelector.append(toInProgress);
        //let element = document.createElement("span");
        //element.classList.add("mid-icon", "list-span");
        //toInProgress.append(element);
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



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV1QYWNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1tuYW1lXVBhY2svLi9hcHAvc2NyaXB0cy9Nb25pdG9yaW5nL01vbml0b3JpbmdJbmRleE1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMvRUE7QUFBQTtBQUFBO0lBUUksZ0NBQVksV0FBbUMsRUFBQyxhQUFxQjtRQUNqRSxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLG9CQUFvQixHQUFHLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQztR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LEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVPLGtEQUFpQixHQUF6QixVQUEwQixVQUFnQyxFQUFFLFVBQWtCO1FBQzFFLElBQUksWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEQsVUFBVSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUVoQyxpREFBaUQ7UUFDakQsNERBQTREO1FBQzVELGtDQUFrQztRQUNsQywrQ0FBK0M7UUFDL0MsaURBQWlEO1FBQ2pELCtCQUErQjtRQUUvQiwyQ0FBMkM7UUFDM0MsaURBQWlEO1FBQ2pELDZCQUE2QjtRQUM3Qix1Q0FBdUM7UUFDdkMsNENBQTRDO1FBQzVDLDJDQUEyQztRQUMzQyxtREFBbUQ7UUFDbkQsNkJBQTZCO1FBQzdCLHlDQUF5QztJQUM3QyxDQUFDO0lBZ0NMLDZCQUFDO0FBQUQsQ0FBQyIsImZpbGUiOiJNb25pdG9yaW5nSW5kZXhNYW5hZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hcHAvc2NyaXB0cy9Nb25pdG9yaW5nL01vbml0b3JpbmdJbmRleE1hbmFnZXIudHNcIik7XG4iLCJpbXBvcnQgeyBOZXRTZW5kZXIgfSBmcm9tIFwiLi4vTmV0U2VuZGVyXCI7XHJcbmltcG9ydCB7IE1vbml0b3JpbmdJbmRleE1vZGVsIH0gZnJvbSBcIi4uL01vZGVscy9Nb25pdG9yaW5nSW5kZXhNb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1vbml0b3JpbmdJbmRleE1hbmFnZXIge1xyXG4gICAgY3JlYXRlQnRuU2VsZWN0b3I6IEpRdWVyeTtcclxuICAgIHRhYmxlQm9keVNlbGVjdG9yOiBKUXVlcnk7XHJcbiAgICBjcmVhdGlvbkZyb21TZWxlY3RvcjogSlF1ZXJ5O1xyXG4gICAgY3JlYXRpb25Pa1NlbGVjdG9yOiBKUXVlcnk7XHJcbiAgICBjcmVhdGlvbklucHV0U2VsZWN0b3I6IEpRdWVyeTtcclxuICAgIG1vbml0b3JpbmdzOiBNb25pdG9yaW5nSW5kZXhNb2RlbFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1vbml0b3JpbmdzOiBNb25pdG9yaW5nSW5kZXhNb2RlbFtdLG1vbml0b3JpbmdVcmw6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMubW9uaXRvcmluZ3MgPSBtb25pdG9yaW5ncztcclxuICAgICAgICB0aGlzLmNyZWF0ZUJ0blNlbGVjdG9yID0gJChcIi5jcmVhdGUtYnV0dG9uXCIpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRpb25Gcm9tU2VsZWN0b3IgPSAkKFwiLmNyZWF0aW9uLWZvcm1cIik7XHJcbiAgICAgICAgdGhpcy5jcmVhdGlvbk9rU2VsZWN0b3IgPSAkKFwiLmNyZWF0aW9uLXN1Ym1pdFwiKTtcclxuICAgICAgICB0aGlzLmNyZWF0aW9uSW5wdXRTZWxlY3RvciA9ICQoXCIuY3JlYXRpb24tZm9ybSBpbnB1dFwiKTtcclxuICAgICAgICB0aGlzLnRhYmxlQm9keVNlbGVjdG9yID0gJChcIi5tb25pdG9yaW5nLWluZGV4LXRhYmxlIHRib2R5XCIpO1xyXG4gICAgICAgIHRoaXMuaW5pdFRhYmxlKCk7XHJcbiAgICAgICAgLy90aGlzLmluaXRDcmVhdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdFRhYmxlKCkge1xyXG4gICAgICAgIHRoaXMubW9uaXRvcmluZ3MuZm9yRWFjaChtb25pdG9yaW5nID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hZGRFbGVtZW50KG1vbml0b3JpbmcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlTW9uaXRvcmluZyhtb25pdG9yaW5nOiBNb25pdG9yaW5nSW5kZXhNb2RlbCkge1xyXG4gICAgICAgLy8gTmV0U2VuZGVyLnBvc3QodGhpcy5lZGl0VXJsLCBtb25pdG9yaW5nLCAoKSA9PiB7IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkRWxlbWVudChtb25pdG9yaW5nOiBNb25pdG9yaW5nSW5kZXhNb2RlbCkge1xyXG4gICAgICAgIGNvbnN0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICAgIHRoaXMudGFibGVCb2R5U2VsZWN0b3IuYXBwZW5kKHRyKTtcclxuICAgICAgICBtb25pdG9yaW5nLnJvd1NlbGVjdG9yID0gJCh0cik7XHJcbiAgICAgICAgY29uc3Qgc2VjSWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgc2VjSWQuaW5uZXJUZXh0ID0gbW9uaXRvcmluZy5TZWNJZCArIFwiXCI7XHJcbiAgICAgICAgbW9uaXRvcmluZy5yb3dTZWxlY3Rvci5hcHBlbmQoc2VjSWQpO1xyXG4gICAgICAgIGNvbnN0IHNlY05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgc2VjTmFtZS5pbm5lclRleHQgPSBtb25pdG9yaW5nLlNlY05hbWUgKyBcIlwiO1xyXG4gICAgICAgIG1vbml0b3Jpbmcucm93U2VsZWN0b3IuYXBwZW5kKHNlY05hbWUpO1xyXG4gICAgICAgIGNvbnN0IGluaXRDbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICBpbml0Q2xvc2UuaW5uZXJUZXh0ID0gbW9uaXRvcmluZy5Jbml0Q2xvc2UgKyBcIlwiO1xyXG4gICAgICAgIG1vbml0b3Jpbmcucm93U2VsZWN0b3IuYXBwZW5kKGluaXRDbG9zZSk7XHJcbiAgICAgICAgY29uc3QgY3VycmVudENsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgIGN1cnJlbnRDbG9zZS5pbm5lclRleHQgPSBtb25pdG9yaW5nLkN1cnJlbnRDbG9zZSArIFwiXCI7XHJcbiAgICAgICAgbW9uaXRvcmluZy5yb3dTZWxlY3Rvci5hcHBlbmQoY3VycmVudENsb3NlKTtcclxuICAgICAgICBjb25zdCBwZXJjZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgIHBlcmNlbnQuaW5uZXJUZXh0ID0gbW9uaXRvcmluZy5QZXJjZW50ICsgXCJcIjtcclxuICAgICAgICBtb25pdG9yaW5nLnJvd1NlbGVjdG9yLmFwcGVuZChwZXJjZW50KTtcclxuICAgICAgICBjb25zdCB0b0J5RGF0ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgdG9CeURhdGVEYXRlLmlubmVyVGV4dCA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdydScsIHsgeWVhcjogJ251bWVyaWMnLCBtb250aDogJzItZGlnaXQnLCBkYXk6ICcyLWRpZ2l0JyB9KS5mb3JtYXQobmV3IERhdGUobW9uaXRvcmluZy5Ub0J1eURhdGUpKTtcclxuICAgICAgICBtb25pdG9yaW5nLnJvd1NlbGVjdG9yLmFwcGVuZCh0b0J5RGF0ZURhdGUpO1xyXG4gICAgICAgIGNvbnN0IG1hbmFnZVRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgIG1vbml0b3Jpbmcucm93U2VsZWN0b3IuYXBwZW5kKG1hbmFnZVRkKTtcclxuICAgICAgICB0aGlzLnNldE1hbmFuZ2VCdXR0b25zKG1vbml0b3JpbmcsICQobWFuYWdlVGQpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldE1hbmFuZ2VCdXR0b25zKG1vbml0b3Jpbmc6IE1vbml0b3JpbmdJbmRleE1vZGVsLCB0ZFNlbGVjdG9yOiBKUXVlcnkpIHtcclxuICAgICAgICBsZXQgdG9JblByb2dyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICB0ZFNlbGVjdG9yLmFwcGVuZCh0b0luUHJvZ3Jlc3MpO1xyXG5cclxuICAgICAgICAvL2xldCB0b0luUHJvZ3Jlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICAvL3RvSW5Qcm9ncmVzcy5ocmVmID0gdGhpcy5tb25pdG9yaW5nVXJsICsgbW9uaXRvcmluZy5TZWNJZDtcclxuICAgICAgICAvL3RkU2VsZWN0b3IuYXBwZW5kKHRvSW5Qcm9ncmVzcyk7XHJcbiAgICAgICAgLy9sZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIC8vZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibWlkLWljb25cIiwgXCJsaXN0LXNwYW5cIik7XHJcbiAgICAgICAgLy90b0luUHJvZ3Jlc3MuYXBwZW5kKGVsZW1lbnQpO1xyXG5cclxuICAgICAgICAvL2VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICAvL2VsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm1pZC1pY29uXCIsIFwiZWRpdC1zcGFuXCIpO1xyXG4gICAgICAgIC8vdGRTZWxlY3Rvci5hcHBlbmQoZWxlbWVudCk7XHJcbiAgICAgICAgLy9tb25pdG9yaW5nLmVkaXRTZWxlY3RvciA9ICQoZWxlbWVudCk7XHJcbiAgICAgICAgLy9pZiAobW9uaXRvcmluZy5QYXR0ZXJuQ291bnQgIT09IDApIHJldHVybjtcclxuICAgICAgICAvL2VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICAvL2VsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm1pZC1pY29uXCIsIFwiZGVsZXRlLXNwYW5cIik7XHJcbiAgICAgICAgLy90ZFNlbGVjdG9yLmFwcGVuZChlbGVtZW50KTtcclxuICAgICAgICAvL21vbml0b3JpbmcuZGVsZXRlU2VsZWN0b3IgPSAkKGVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qcHJpdmF0ZSBpbml0Q3JlYXRpb24oKSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGlvbklucHV0U2VsZWN0b3IudmFsKFwiXCIpO1xyXG4gICAgICAgIGNvbnN0IHRoZW1lID0gbmV3IFRoZW1lSW5kZXhNb2RlbCgpO1xyXG4gICAgICAgIHRoZW1lLk5hbWUgPSBcIlwiO1xyXG4gICAgICAgIHRoZW1lLlBhdHRlcm5Db3VudCA9IDA7XHJcbiAgICAgICAgdGhpcy5jcmVhdGlvbklucHV0U2VsZWN0b3Iub24oXCJpbnB1dFwiLCAoKSA9PiB0aGVtZS5OYW1lID0gdGhpcy5jcmVhdGlvbklucHV0U2VsZWN0b3IudmFsKCkgYXMgc3RyaW5nKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUJ0blNlbGVjdG9yLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0aW9uRnJvbVNlbGVjdG9yLnJlbW92ZUNsYXNzKFwiaGlkZGVuLWVsZW1lbnRcIik7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQnRuU2VsZWN0b3IuYWRkQ2xhc3MoXCJoaWRkZW4tZWxlbWVudFwiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmNyZWF0aW9uT2tTZWxlY3Rvci5vbihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoZW1lLk5hbWUubGVuZ3RoID09PSAwKSByZXR1cm47XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRpb25Gcm9tU2VsZWN0b3IuYWRkQ2xhc3MoXCJoaWRkZW4tZWxlbWVudFwiKTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVCdG5TZWxlY3Rvci5yZW1vdmVDbGFzcyhcImhpZGRlbi1lbGVtZW50XCIpO1xyXG4gICAgICAgICAgICBOZXRTZW5kZXIucG9zdCh0aGlzLmNyZWF0ZVVybCwgdGhlbWUsIChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoZW1lLklkID0gTnVtYmVyKHJlcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEVsZW1lbnQodGhlbWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRlbGV0ZVRoZW1lKHRoZW1lOiBUaGVtZUluZGV4TW9kZWwpIHtcclxuICAgICAgICBjb25zdCBjb25mID0gY29uZmlybShgRGVsZXRlIFwiJHt0aGVtZS5OYW1lfVwiP2ApO1xyXG4gICAgICAgIGlmIChjb25mKSB7XHJcbiAgICAgICAgICAgIE5ldFNlbmRlci5wb3N0KHRoaXMuZGVsZXRlVXJsICsgdGhlbWUuSWQsIHt9LCAocikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhlbWUucm93U2VsZWN0b3IucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRoZW1lcyA9IHRoaXMudGhlbWVzLmZpbHRlcih0ID0+IHQuSWQgIT09IHRoZW1lLklkKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSovXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9