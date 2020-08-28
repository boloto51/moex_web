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
        var initClose = document.createElement("td");
        initClose.innerText = monitoring.InitClose + "";
        monitoring.rowSelector.append(initClose);
        var currentClose = document.createElement("td");
        currentClose.innerText = monitoring.CurrentClose + "";
        monitoring.rowSelector.append(currentClose);
        var percent = document.createElement("td");
        percent.innerText = monitoring.Percent + "";
        monitoring.rowSelector.append(percent);
        var deleteDate = document.createElement("td");
        deleteDate.innerText = new Intl.DateTimeFormat('ru', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date(monitoring.DeleteDate));
        monitoring.rowSelector.append(deleteDate);
        var manageTd = document.createElement("td");
        monitoring.rowSelector.append(manageTd);
        //this.setManangeButtons(monitoring, $(manageTd));
    };
    return MonitoringIndexManager;
}());



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV1QYWNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1tuYW1lXVBhY2svLi9hcHAvc2NyaXB0cy9Nb25pdG9yaW5nL01vbml0b3JpbmdJbmRleE1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMvRUE7QUFBQTtBQUFBO0lBUUksZ0NBQVksV0FBbUMsRUFBQyxhQUFxQjtRQUNqRSxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLG9CQUFvQixHQUFHLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMscUJBQXFCLEdBQUcsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixzQkFBc0I7SUFDMUIsQ0FBQztJQUVPLDBDQUFTLEdBQWpCO1FBQUEsaUJBSUM7UUFIRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxvQkFBVTtZQUMvQixLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVPLGlEQUFnQixHQUF4QixVQUF5QixVQUFnQztRQUN0RCx1REFBdUQ7SUFDMUQsQ0FBQztJQUVPLDJDQUFVLEdBQWxCLFVBQW1CLFVBQWdDO1FBQy9DLElBQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNsQyxVQUFVLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMvQixJQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNDLEtBQUssQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDeEMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQyxTQUFTLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2hELFVBQVUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3pDLElBQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEQsWUFBWSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN0RCxVQUFVLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM1QyxJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDNUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkMsSUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRCxVQUFVLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFFO1FBQ3JKLFVBQVUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzFDLElBQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEMsa0RBQWtEO0lBQ3RELENBQUM7SUFtREwsNkJBQUM7QUFBRCxDQUFDIiwiZmlsZSI6Ik1vbml0b3JpbmdJbmRleE1hbmFnZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2FwcC9zY3JpcHRzL01vbml0b3JpbmcvTW9uaXRvcmluZ0luZGV4TWFuYWdlci50c1wiKTtcbiIsImltcG9ydCB7IE5ldFNlbmRlciB9IGZyb20gXCIuLi9OZXRTZW5kZXJcIjtcclxuaW1wb3J0IHsgTW9uaXRvcmluZ0luZGV4TW9kZWwgfSBmcm9tIFwiLi4vTW9kZWxzL01vbml0b3JpbmdJbmRleE1vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTW9uaXRvcmluZ0luZGV4TWFuYWdlciB7XHJcbiAgICBjcmVhdGVCdG5TZWxlY3RvcjogSlF1ZXJ5O1xyXG4gICAgdGFibGVCb2R5U2VsZWN0b3I6IEpRdWVyeTtcclxuICAgIGNyZWF0aW9uRnJvbVNlbGVjdG9yOiBKUXVlcnk7XHJcbiAgICBjcmVhdGlvbk9rU2VsZWN0b3I6IEpRdWVyeTtcclxuICAgIGNyZWF0aW9uSW5wdXRTZWxlY3RvcjogSlF1ZXJ5O1xyXG4gICAgbW9uaXRvcmluZ3M6IE1vbml0b3JpbmdJbmRleE1vZGVsW107XHJcblxyXG4gICAgY29uc3RydWN0b3IobW9uaXRvcmluZ3M6IE1vbml0b3JpbmdJbmRleE1vZGVsW10sbW9uaXRvcmluZ1VybDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5tb25pdG9yaW5ncyA9IG1vbml0b3JpbmdzO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlQnRuU2VsZWN0b3IgPSAkKFwiLmNyZWF0ZS1idXR0b25cIik7XHJcbiAgICAgICAgdGhpcy5jcmVhdGlvbkZyb21TZWxlY3RvciA9ICQoXCIuY3JlYXRpb24tZm9ybVwiKTtcclxuICAgICAgICB0aGlzLmNyZWF0aW9uT2tTZWxlY3RvciA9ICQoXCIuY3JlYXRpb24tc3VibWl0XCIpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRpb25JbnB1dFNlbGVjdG9yID0gJChcIi5jcmVhdGlvbi1mb3JtIGlucHV0XCIpO1xyXG4gICAgICAgIHRoaXMudGFibGVCb2R5U2VsZWN0b3IgPSAkKFwiLm1vbml0b3JpbmctaW5kZXgtdGFibGUgdGJvZHlcIik7XHJcbiAgICAgICAgdGhpcy5pbml0VGFibGUoKTtcclxuICAgICAgICAvL3RoaXMuaW5pdENyZWF0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0VGFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5tb25pdG9yaW5ncy5mb3JFYWNoKG1vbml0b3JpbmcgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFkZEVsZW1lbnQobW9uaXRvcmluZyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVNb25pdG9yaW5nKG1vbml0b3Jpbmc6IE1vbml0b3JpbmdJbmRleE1vZGVsKSB7XHJcbiAgICAgICAvLyBOZXRTZW5kZXIucG9zdCh0aGlzLmVkaXRVcmwsIG1vbml0b3JpbmcsICgpID0+IHsgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRFbGVtZW50KG1vbml0b3Jpbmc6IE1vbml0b3JpbmdJbmRleE1vZGVsKSB7XHJcbiAgICAgICAgY29uc3QgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgICAgdGhpcy50YWJsZUJvZHlTZWxlY3Rvci5hcHBlbmQodHIpO1xyXG4gICAgICAgIG1vbml0b3Jpbmcucm93U2VsZWN0b3IgPSAkKHRyKTtcclxuICAgICAgICBjb25zdCBzZWNJZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICBzZWNJZC5pbm5lclRleHQgPSBtb25pdG9yaW5nLlNlY0lkICsgXCJcIjtcclxuICAgICAgICBtb25pdG9yaW5nLnJvd1NlbGVjdG9yLmFwcGVuZChzZWNJZCk7XHJcbiAgICAgICAgY29uc3QgaW5pdENsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgIGluaXRDbG9zZS5pbm5lclRleHQgPSBtb25pdG9yaW5nLkluaXRDbG9zZSArIFwiXCI7XHJcbiAgICAgICAgbW9uaXRvcmluZy5yb3dTZWxlY3Rvci5hcHBlbmQoaW5pdENsb3NlKTtcclxuICAgICAgICBjb25zdCBjdXJyZW50Q2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgY3VycmVudENsb3NlLmlubmVyVGV4dCA9IG1vbml0b3JpbmcuQ3VycmVudENsb3NlICsgXCJcIjtcclxuICAgICAgICBtb25pdG9yaW5nLnJvd1NlbGVjdG9yLmFwcGVuZChjdXJyZW50Q2xvc2UpO1xyXG4gICAgICAgIGNvbnN0IHBlcmNlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgcGVyY2VudC5pbm5lclRleHQgPSBtb25pdG9yaW5nLlBlcmNlbnQgKyBcIlwiO1xyXG4gICAgICAgIG1vbml0b3Jpbmcucm93U2VsZWN0b3IuYXBwZW5kKHBlcmNlbnQpO1xyXG4gICAgICAgIGNvbnN0IGRlbGV0ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgZGVsZXRlRGF0ZS5pbm5lclRleHQgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgncnUnLCB7IHllYXI6ICdudW1lcmljJywgbW9udGg6ICcyLWRpZ2l0JywgZGF5OiAnMi1kaWdpdCcgfSkuZm9ybWF0KG5ldyBEYXRlKG1vbml0b3JpbmcuRGVsZXRlRGF0ZSkpIDtcclxuICAgICAgICBtb25pdG9yaW5nLnJvd1NlbGVjdG9yLmFwcGVuZChkZWxldGVEYXRlKTtcclxuICAgICAgICBjb25zdCBtYW5hZ2VUZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICBtb25pdG9yaW5nLnJvd1NlbGVjdG9yLmFwcGVuZChtYW5hZ2VUZCk7XHJcbiAgICAgICAgLy90aGlzLnNldE1hbmFuZ2VCdXR0b25zKG1vbml0b3JpbmcsICQobWFuYWdlVGQpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKnByaXZhdGUgc2V0TWFuYW5nZUJ1dHRvbnMobW9uaXRvcmluZzogTW9uaXRvcmluZ0luZGV4TW9kZWwsIHRkU2VsZWN0b3I6IEpRdWVyeSkge1xyXG4gICAgICAgIGxldCB0b1BhdHRlcm5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgdG9QYXR0ZXJucy5ocmVmID0gdGhpcy5tb25pdG9yaW5nVXJsICsgbW9uaXRvcmluZy5JZDtcclxuICAgICAgICB0ZFNlbGVjdG9yLmFwcGVuZCh0b1BhdHRlcm5zKTtcclxuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm1pZC1pY29uXCIsIFwibGlzdC1zcGFuXCIpO1xyXG4gICAgICAgIHRvUGF0dGVybnMuYXBwZW5kKGVsZW1lbnQpO1xyXG5cclxuICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibWlkLWljb25cIiwgXCJlZGl0LXNwYW5cIik7XHJcbiAgICAgICAgdGRTZWxlY3Rvci5hcHBlbmQoZWxlbWVudCk7XHJcbiAgICAgICAgbW9uaXRvcmluZy5lZGl0U2VsZWN0b3IgPSAkKGVsZW1lbnQpO1xyXG4gICAgICAgIGlmIChtb25pdG9yaW5nLlBhdHRlcm5Db3VudCAhPT0gMCkgcmV0dXJuO1xyXG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtaWQtaWNvblwiLCBcImRlbGV0ZS1zcGFuXCIpO1xyXG4gICAgICAgIHRkU2VsZWN0b3IuYXBwZW5kKGVsZW1lbnQpO1xyXG4gICAgICAgIG1vbml0b3JpbmcuZGVsZXRlU2VsZWN0b3IgPSAkKGVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdENyZWF0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuY3JlYXRpb25JbnB1dFNlbGVjdG9yLnZhbChcIlwiKTtcclxuICAgICAgICBjb25zdCB0aGVtZSA9IG5ldyBUaGVtZUluZGV4TW9kZWwoKTtcclxuICAgICAgICB0aGVtZS5OYW1lID0gXCJcIjtcclxuICAgICAgICB0aGVtZS5QYXR0ZXJuQ291bnQgPSAwO1xyXG4gICAgICAgIHRoaXMuY3JlYXRpb25JbnB1dFNlbGVjdG9yLm9uKFwiaW5wdXRcIiwgKCkgPT4gdGhlbWUuTmFtZSA9IHRoaXMuY3JlYXRpb25JbnB1dFNlbGVjdG9yLnZhbCgpIGFzIHN0cmluZyk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVCdG5TZWxlY3Rvci5vbihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGlvbkZyb21TZWxlY3Rvci5yZW1vdmVDbGFzcyhcImhpZGRlbi1lbGVtZW50XCIpO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUJ0blNlbGVjdG9yLmFkZENsYXNzKFwiaGlkZGVuLWVsZW1lbnRcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGlvbk9rU2VsZWN0b3Iub24oXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGVtZS5OYW1lLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0aW9uRnJvbVNlbGVjdG9yLmFkZENsYXNzKFwiaGlkZGVuLWVsZW1lbnRcIik7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQnRuU2VsZWN0b3IucmVtb3ZlQ2xhc3MoXCJoaWRkZW4tZWxlbWVudFwiKTtcclxuICAgICAgICAgICAgTmV0U2VuZGVyLnBvc3QodGhpcy5jcmVhdGVVcmwsIHRoZW1lLCAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGVtZS5JZCA9IE51bWJlcihyZXMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRFbGVtZW50KHRoZW1lKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkZWxldGVUaGVtZSh0aGVtZTogVGhlbWVJbmRleE1vZGVsKSB7XHJcbiAgICAgICAgY29uc3QgY29uZiA9IGNvbmZpcm0oYERlbGV0ZSBcIiR7dGhlbWUuTmFtZX1cIj9gKTtcclxuICAgICAgICBpZiAoY29uZikge1xyXG4gICAgICAgICAgICBOZXRTZW5kZXIucG9zdCh0aGlzLmRlbGV0ZVVybCArIHRoZW1lLklkLCB7fSwgKHIpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoZW1lLnJvd1NlbGVjdG9yLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aGVtZXMgPSB0aGlzLnRoZW1lcy5maWx0ZXIodCA9PiB0LklkICE9PSB0aGVtZS5JZCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0qL1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==