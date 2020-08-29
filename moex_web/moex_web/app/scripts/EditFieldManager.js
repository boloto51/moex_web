var EditFieldManager = /** @class */ (function () {
    function EditFieldManager(baseSelector, editBtnSelector, applyFunc) {
        this.applyFunc = applyFunc;
        this.editBtnSelector = editBtnSelector;
        this.editBtnSelector.addClass("hidden-element");
        this.prepareBase(baseSelector);
        this.initEditor();
    }
    EditFieldManager.prototype.prepareBase = function (baseSelector) {
        this.baseSelector = baseSelector;
        this.initialValue = this.value = this.baseSelector.text();
    };
    EditFieldManager.prototype.initEditor = function () {
        this.setElement();
        this.editorContainer = $(".editor-container");
        this.inputSelector = $(".editor-container input");
        this.okSelector = $(".editor-ok");
        this.cancelSelector = $(".editor-cancel");
        this.initEvents();
    };
    EditFieldManager.prototype.setElement = function () {
        var html = "<div class=\"editor-container\"><input type=\"text\" value=\"" + this.value + "\"/><span class=\"editor-ok small-icon\"></span><span class=\"editor-cancel small-icon\"></span></div>";
        this.baseSelector.html(html);
    };
    EditFieldManager.prototype.initEvents = function () {
        var _this = this;
        this.cancelSelector.on("click", function () { return _this.stopEditing(); });
        this.inputSelector.on("input", function () { return _this.onInput(); });
        this.okSelector.on("click", function () { return _this.applyEditing(); });
    };
    EditFieldManager.prototype.onInput = function () {
        this.value = this.inputSelector.val();
    };
    EditFieldManager.prototype.applyEditing = function () {
        if (!this.value || this.value.length === 0)
            return;
        this.baseSelector.text(this.value);
        this.editBtnSelector.removeClass("hidden-element");
        this.applyFunc(this.value);
    };
    EditFieldManager.prototype.stopEditing = function () {
        this.editBtnSelector.removeClass("hidden-element");
        this.baseSelector.text(this.initialValue);
    };
    return EditFieldManager;
}());
export { EditFieldManager };
//# sourceMappingURL=EditFieldManager.js.map