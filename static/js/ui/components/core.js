let component_classes = {}
let component_instances = {}

function register_component_instance(name, component) {
    component_instances[name] = component                    
}


function get_component_instance(name) {
    return component_instances[name]
}


function register_component_class(name, component) {
    component_classes[name] = component                    
}


function get_component_class(name) {
    return component_classes[name]
}


function create_component(type, attributes={}) {
    let el = document.createElement(type);
    for (const property in attributes) {
        el.setAttribute(property, attributes[property]);
    }
    
    return el;
}


class _HTMLElement extends HTMLElement {
    static observedAttributes = ["id", "name", "props"];

    constructor() {
        super();        
        // this._root = this.attachShadow({ mode: "open" });
        this._root = this;
    }

    connectedCallback() {   
        console.log(this);
        var children = this._root.childNodes;
        children.forEach(function(item) {
            console.log(item.nodeType, item.nodeName, item.nodeValue);
        });     
        this._connectedCallback()
    }

    disconnectedCallback() {
        this._disconnectedCallback(name, oldValue, newValue) 
    }

    adoptedCallback() {
        this._adoptedCallback(name, oldValue, newValue) 
    }

    attributeChangedCallback(name, oldValue, newValue) {
        // console.log(`Attribute (${name}) --> (${oldValue}) <-> (${newValue}) -> has changed.`);
        this._attributeChangedCallback(name, oldValue, newValue) 
    }

    _connectedCallback() {}
    _disconnectedCallback() {}
    _adoptedCallback() {}
    _attributeChangedCallback(name, oldValue, newValue) {}
}


export { 
    component_classes,  
    component_instances,
    register_component_instance,
    get_component_instance,
    register_component_class,
    get_component_class,
    create_component,
    _HTMLElement
};