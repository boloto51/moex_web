export class EditFieldManager {
    cancelSelector: JQuery;
    okSelector: JQuery;
    inputSelector: JQuery;
    baseSelector: JQuery;
    editorContainer: JQuery;
    editBtnSelector: JQuery;
    initialValue: string;
    value: string;
    applyFunc: (value: string) => void;
    
    constructor(baseSelector: JQuery, editBtnSelector: JQuery, applyFunc: (value: string) => void) {
        this.applyFunc = applyFunc;
        this.editBtnSelector = editBtnSelector;
        this.editBtnSelector.addClass("hidden-element");
        this.prepareBase(baseSelector);
        this.initEditor();
    }
    
    prepareBase(baseSelector : JQuery){
        this.baseSelector = baseSelector;
        this.initialValue = this.value = this.baseSelector.text() as string;
        
    }

    private initEditor() {
        this.setElement();
        this.editorContainer = $(".editor-container");
        this.inputSelector = $(".editor-container input");
        this.okSelector = $(".editor-ok");
        this.cancelSelector = $(".editor-cancel");
        this.initEvents();
    }
    
    private setElement(){
        const html = `<div class="editor-container"><input type="text" value="${this.value}"/><span class="editor-ok small-icon"></span><span class="editor-cancel small-icon"></span></div>`
        this.baseSelector.html(html);        
    }
    
    private initEvents(){
        this.cancelSelector.on("click", () => this.stopEditing());
        this.inputSelector.on("input", () => this.onInput());
        this.okSelector.on("click", () => this.applyEditing());
    }
    
    private onInput(){
        this.value = this.inputSelector.val() as string;
    }
    
    private applyEditing(){
        if(!this.value || this.value.length === 0) return;
        this.baseSelector.text(this.value);
        this.editBtnSelector.removeClass("hidden-element");
        this.applyFunc(this.value);
    }
    
    private stopEditing(){
        this.editBtnSelector.removeClass("hidden-element");
        this.baseSelector.text(this.initialValue);
    }
}