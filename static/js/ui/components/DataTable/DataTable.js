import { register_component_class, _HTMLElement } from "/static/js/ui/components/core.js"


let style_text = ` `;

// Create a class for the element
class DataTable extends _HTMLElement {
    _connectedCallback() {
        // Create spans
        const wrapper = document.createElement("span");
        wrapper.setAttribute("class", "wrapper");

        const icon = document.createElement("span");
        icon.setAttribute("class", "icon");
        icon.setAttribute("tabindex", 0);

        const info = document.createElement("span");
        info.setAttribute("class", "info");

        // Take attribute content and put it inside the info span
        const text = this.getAttribute("data-text");
        info.textContent = text;

        
        let imgUrl;
        if (this.hasAttribute("img")) {
            imgUrl = this.getAttribute("img");
        } else {
            imgUrl = "static/img/default.png";
        }

        const img = document.createElement("img");
        img.src = imgUrl;
        icon.appendChild(img);

        // Create some CSS to apply to the shadow dom
        const style = document.createElement("style");
        
        style.textContent = style_text;

        // Attach the created elements to the shadow dom
        this._root.appendChild(style);        
        this._root.appendChild(wrapper);
        wrapper.appendChild(icon);
        wrapper.appendChild(info);
    }
}

customElements.define("data-table", DataTable);
register_component_class("data-table", DataTable)