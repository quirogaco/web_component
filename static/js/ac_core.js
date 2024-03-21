window._components = {}
window._utils = {
    register: function(component, id) {
        window._components[id] = component                    
    },

    get_component: function(id) {
        return window._components[id]
    }
}

class AC_HTMLElement extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
        console.log("THIS 122222222222:", this)
        // this._root = this.attachShadow({ mode: "open" });
        // this._root = this;
    }

    connectedCallback() {
        console.log("Custom element added to page.");
        this.connectedCallback_new()
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