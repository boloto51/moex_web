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
        toInProgress.name = monitoring.SecId;
        toInProgress.innerText = "Buy";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV1QYWNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1tuYW1lXVBhY2svLi9hcHAvc2NyaXB0cy9Nb25pdG9yaW5nL01vbml0b3JpbmdJbmRleE1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMvRUE7QUFBQTtBQUFBO0lBUUksZ0NBQVksV0FBbUMsRUFBQyxhQUFxQjtRQUNqRSxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLG9CQUFvQixHQUFHLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMscUJBQXFCLEdBQUcsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixzQkFBc0I7SUFDMUIsQ0FBQztJQUVPLDBDQUFTLEdBQWpCO1FBQUEsaUJBSUM7UUFIRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxvQkFBVTtZQUMvQixLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVPLGlEQUFnQixHQUF4QixVQUF5QixVQUFnQztRQUN0RCx1REFBdUQ7SUFDMUQsQ0FBQztJQUVPLDJDQUFVLEdBQWxCLFVBQW1CLFVBQWdDO1FBQy9DLElBQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNsQyxVQUFVLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMvQixJQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNDLEtBQUssQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDeEMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QyxPQUFPLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQzVDLFVBQVUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZDLElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0MsU0FBUyxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNoRCxVQUFVLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN6QyxJQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xELFlBQVksQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDdEQsVUFBVSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDNUMsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QyxPQUFPLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQzVDLFVBQVUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZDLElBQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEQsWUFBWSxDQUFDLFNBQVMsR0FBRyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUNySixVQUFVLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM1QyxJQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlDLFVBQVUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVPLGtEQUFpQixHQUF6QixVQUEwQixVQUFnQyxFQUFFLFVBQWtCO1FBQzFFLElBQUksWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEQsWUFBWSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDO1FBQ3JDLFlBQVksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQy9CLFVBQVUsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFaEMsaURBQWlEO1FBQ2pELDREQUE0RDtRQUM1RCxrQ0FBa0M7UUFDbEMsK0NBQStDO1FBQy9DLGlEQUFpRDtRQUNqRCwrQkFBK0I7UUFFL0IsMkNBQTJDO1FBQzNDLGlEQUFpRDtRQUNqRCw2QkFBNkI7UUFDN0IsdUNBQXVDO1FBQ3ZDLDRDQUE0QztRQUM1QywyQ0FBMkM7UUFDM0MsbURBQW1EO1FBQ25ELDZCQUE2QjtRQUM3Qix5Q0FBeUM7SUFDN0MsQ0FBQztJQWdDTCw2QkFBQztBQUFELENBQUMiLCJmaWxlIjoiTW9uaXRvcmluZ0luZGV4TWFuYWdlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXBwL3NjcmlwdHMvTW9uaXRvcmluZy9Nb25pdG9yaW5nSW5kZXhNYW5hZ2VyLnRzXCIpO1xuIiwiaW1wb3J0IHsgTmV0U2VuZGVyIH0gZnJvbSBcIi4uL05ldFNlbmRlclwiO1xyXG5pbXBvcnQgeyBNb25pdG9yaW5nSW5kZXhNb2RlbCB9IGZyb20gXCIuLi9Nb2RlbHMvTW9uaXRvcmluZ0luZGV4TW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNb25pdG9yaW5nSW5kZXhNYW5hZ2VyIHtcclxuICAgIGNyZWF0ZUJ0blNlbGVjdG9yOiBKUXVlcnk7XHJcbiAgICB0YWJsZUJvZHlTZWxlY3RvcjogSlF1ZXJ5O1xyXG4gICAgY3JlYXRpb25Gcm9tU2VsZWN0b3I6IEpRdWVyeTtcclxuICAgIGNyZWF0aW9uT2tTZWxlY3RvcjogSlF1ZXJ5O1xyXG4gICAgY3JlYXRpb25JbnB1dFNlbGVjdG9yOiBKUXVlcnk7XHJcbiAgICBtb25pdG9yaW5nczogTW9uaXRvcmluZ0luZGV4TW9kZWxbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihtb25pdG9yaW5nczogTW9uaXRvcmluZ0luZGV4TW9kZWxbXSxtb25pdG9yaW5nVXJsOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLm1vbml0b3JpbmdzID0gbW9uaXRvcmluZ3M7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVCdG5TZWxlY3RvciA9ICQoXCIuY3JlYXRlLWJ1dHRvblwiKTtcclxuICAgICAgICB0aGlzLmNyZWF0aW9uRnJvbVNlbGVjdG9yID0gJChcIi5jcmVhdGlvbi1mb3JtXCIpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRpb25Pa1NlbGVjdG9yID0gJChcIi5jcmVhdGlvbi1zdWJtaXRcIik7XHJcbiAgICAgICAgdGhpcy5jcmVhdGlvbklucHV0U2VsZWN0b3IgPSAkKFwiLmNyZWF0aW9uLWZvcm0gaW5wdXRcIik7XHJcbiAgICAgICAgdGhpcy50YWJsZUJvZHlTZWxlY3RvciA9ICQoXCIubW9uaXRvcmluZy1pbmRleC10YWJsZSB0Ym9keVwiKTtcclxuICAgICAgICB0aGlzLmluaXRUYWJsZSgpO1xyXG4gICAgICAgIC8vdGhpcy5pbml0Q3JlYXRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRUYWJsZSgpIHtcclxuICAgICAgICB0aGlzLm1vbml0b3JpbmdzLmZvckVhY2gobW9uaXRvcmluZyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkRWxlbWVudChtb25pdG9yaW5nKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZU1vbml0b3JpbmcobW9uaXRvcmluZzogTW9uaXRvcmluZ0luZGV4TW9kZWwpIHtcclxuICAgICAgIC8vIE5ldFNlbmRlci5wb3N0KHRoaXMuZWRpdFVybCwgbW9uaXRvcmluZywgKCkgPT4geyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZEVsZW1lbnQobW9uaXRvcmluZzogTW9uaXRvcmluZ0luZGV4TW9kZWwpIHtcclxuICAgICAgICBjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgICB0aGlzLnRhYmxlQm9keVNlbGVjdG9yLmFwcGVuZCh0cik7XHJcbiAgICAgICAgbW9uaXRvcmluZy5yb3dTZWxlY3RvciA9ICQodHIpO1xyXG4gICAgICAgIGNvbnN0IHNlY0lkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgIHNlY0lkLmlubmVyVGV4dCA9IG1vbml0b3JpbmcuU2VjSWQgKyBcIlwiO1xyXG4gICAgICAgIG1vbml0b3Jpbmcucm93U2VsZWN0b3IuYXBwZW5kKHNlY0lkKTtcclxuICAgICAgICBjb25zdCBzZWNOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgIHNlY05hbWUuaW5uZXJUZXh0ID0gbW9uaXRvcmluZy5TZWNOYW1lICsgXCJcIjtcclxuICAgICAgICBtb25pdG9yaW5nLnJvd1NlbGVjdG9yLmFwcGVuZChzZWNOYW1lKTtcclxuICAgICAgICBjb25zdCBpbml0Q2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgaW5pdENsb3NlLmlubmVyVGV4dCA9IG1vbml0b3JpbmcuSW5pdENsb3NlICsgXCJcIjtcclxuICAgICAgICBtb25pdG9yaW5nLnJvd1NlbGVjdG9yLmFwcGVuZChpbml0Q2xvc2UpO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRDbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICBjdXJyZW50Q2xvc2UuaW5uZXJUZXh0ID0gbW9uaXRvcmluZy5DdXJyZW50Q2xvc2UgKyBcIlwiO1xyXG4gICAgICAgIG1vbml0b3Jpbmcucm93U2VsZWN0b3IuYXBwZW5kKGN1cnJlbnRDbG9zZSk7XHJcbiAgICAgICAgY29uc3QgcGVyY2VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICBwZXJjZW50LmlubmVyVGV4dCA9IG1vbml0b3JpbmcuUGVyY2VudCArIFwiXCI7XHJcbiAgICAgICAgbW9uaXRvcmluZy5yb3dTZWxlY3Rvci5hcHBlbmQocGVyY2VudCk7XHJcbiAgICAgICAgY29uc3QgdG9CeURhdGVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgIHRvQnlEYXRlRGF0ZS5pbm5lclRleHQgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgncnUnLCB7IHllYXI6ICdudW1lcmljJywgbW9udGg6ICcyLWRpZ2l0JywgZGF5OiAnMi1kaWdpdCcgfSkuZm9ybWF0KG5ldyBEYXRlKG1vbml0b3JpbmcuVG9CdXlEYXRlKSk7XHJcbiAgICAgICAgbW9uaXRvcmluZy5yb3dTZWxlY3Rvci5hcHBlbmQodG9CeURhdGVEYXRlKTtcclxuICAgICAgICBjb25zdCBtYW5hZ2VUZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICBtb25pdG9yaW5nLnJvd1NlbGVjdG9yLmFwcGVuZChtYW5hZ2VUZCk7XHJcbiAgICAgICAgdGhpcy5zZXRNYW5hbmdlQnV0dG9ucyhtb25pdG9yaW5nLCAkKG1hbmFnZVRkKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRNYW5hbmdlQnV0dG9ucyhtb25pdG9yaW5nOiBNb25pdG9yaW5nSW5kZXhNb2RlbCwgdGRTZWxlY3RvcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgbGV0IHRvSW5Qcm9ncmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgdG9JblByb2dyZXNzLm5hbWUgPSBtb25pdG9yaW5nLlNlY0lkO1xyXG4gICAgICAgIHRvSW5Qcm9ncmVzcy5pbm5lclRleHQgPSBcIkJ1eVwiO1xyXG4gICAgICAgIHRkU2VsZWN0b3IuYXBwZW5kKHRvSW5Qcm9ncmVzcyk7XHJcblxyXG4gICAgICAgIC8vbGV0IHRvSW5Qcm9ncmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgIC8vdG9JblByb2dyZXNzLmhyZWYgPSB0aGlzLm1vbml0b3JpbmdVcmwgKyBtb25pdG9yaW5nLlNlY0lkO1xyXG4gICAgICAgIC8vdGRTZWxlY3Rvci5hcHBlbmQodG9JblByb2dyZXNzKTtcclxuICAgICAgICAvL2xldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgLy9lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtaWQtaWNvblwiLCBcImxpc3Qtc3BhblwiKTtcclxuICAgICAgICAvL3RvSW5Qcm9ncmVzcy5hcHBlbmQoZWxlbWVudCk7XHJcblxyXG4gICAgICAgIC8vZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIC8vZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibWlkLWljb25cIiwgXCJlZGl0LXNwYW5cIik7XHJcbiAgICAgICAgLy90ZFNlbGVjdG9yLmFwcGVuZChlbGVtZW50KTtcclxuICAgICAgICAvL21vbml0b3JpbmcuZWRpdFNlbGVjdG9yID0gJChlbGVtZW50KTtcclxuICAgICAgICAvL2lmIChtb25pdG9yaW5nLlBhdHRlcm5Db3VudCAhPT0gMCkgcmV0dXJuO1xyXG4gICAgICAgIC8vZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIC8vZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibWlkLWljb25cIiwgXCJkZWxldGUtc3BhblwiKTtcclxuICAgICAgICAvL3RkU2VsZWN0b3IuYXBwZW5kKGVsZW1lbnQpO1xyXG4gICAgICAgIC8vbW9uaXRvcmluZy5kZWxldGVTZWxlY3RvciA9ICQoZWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgLypwcml2YXRlIGluaXRDcmVhdGlvbigpIHtcclxuICAgICAgICB0aGlzLmNyZWF0aW9uSW5wdXRTZWxlY3Rvci52YWwoXCJcIik7XHJcbiAgICAgICAgY29uc3QgdGhlbWUgPSBuZXcgVGhlbWVJbmRleE1vZGVsKCk7XHJcbiAgICAgICAgdGhlbWUuTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgdGhlbWUuUGF0dGVybkNvdW50ID0gMDtcclxuICAgICAgICB0aGlzLmNyZWF0aW9uSW5wdXRTZWxlY3Rvci5vbihcImlucHV0XCIsICgpID0+IHRoZW1lLk5hbWUgPSB0aGlzLmNyZWF0aW9uSW5wdXRTZWxlY3Rvci52YWwoKSBhcyBzdHJpbmcpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlQnRuU2VsZWN0b3Iub24oXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRpb25Gcm9tU2VsZWN0b3IucmVtb3ZlQ2xhc3MoXCJoaWRkZW4tZWxlbWVudFwiKTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVCdG5TZWxlY3Rvci5hZGRDbGFzcyhcImhpZGRlbi1lbGVtZW50XCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuY3JlYXRpb25Pa1NlbGVjdG9yLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhlbWUuTmFtZS5sZW5ndGggPT09IDApIHJldHVybjtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGlvbkZyb21TZWxlY3Rvci5hZGRDbGFzcyhcImhpZGRlbi1lbGVtZW50XCIpO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUJ0blNlbGVjdG9yLnJlbW92ZUNsYXNzKFwiaGlkZGVuLWVsZW1lbnRcIik7XHJcbiAgICAgICAgICAgIE5ldFNlbmRlci5wb3N0KHRoaXMuY3JlYXRlVXJsLCB0aGVtZSwgKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhlbWUuSWQgPSBOdW1iZXIocmVzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkRWxlbWVudCh0aGVtZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZGVsZXRlVGhlbWUodGhlbWU6IFRoZW1lSW5kZXhNb2RlbCkge1xyXG4gICAgICAgIGNvbnN0IGNvbmYgPSBjb25maXJtKGBEZWxldGUgXCIke3RoZW1lLk5hbWV9XCI/YCk7XHJcbiAgICAgICAgaWYgKGNvbmYpIHtcclxuICAgICAgICAgICAgTmV0U2VuZGVyLnBvc3QodGhpcy5kZWxldGVVcmwgKyB0aGVtZS5JZCwge30sIChyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGVtZS5yb3dTZWxlY3Rvci5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGhlbWVzID0gdGhpcy50aGVtZXMuZmlsdGVyKHQgPT4gdC5JZCAhPT0gdGhlbWUuSWQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9Ki9cclxufSJdLCJzb3VyY2VSb290IjoiIn0=