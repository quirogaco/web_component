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


class _HTMLElement extends HTMLElement {
    constructor() {
        super();        
        // this._root = this.attachShadow({ mode: "open" });
        this._root = this;
    }

    connectedCallback() {
        console.log("Custom element added to page.");
        let name = this.getAttribute("name");
        if (name !== null) {
            register_component_instance(name, this)
        }
        console.log("NAME:", name)
        this._connectedCallback()
    }

    disconnectedCallback() {
        console.log("Custom element removed from page.");
    }

    adoptedCallback() {
        console.log("Custom element moved to new page.");
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`Attribute ${name} ---> ${oldValue} <-> ${newValue} has changed.`);
    }

}


function create_component(type, name) {
    return "";
}

export { 
    component_classes,  
    component_instances,
    register_component_instance,
    get_component_instance,
    register_component_class,
    get_component_class,
    _HTMLElement, 
};