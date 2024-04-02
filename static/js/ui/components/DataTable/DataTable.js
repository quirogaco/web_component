import { register_component_class, _HTMLElement } from "/static/js/ui/components/core.js"

let count = 0;

class DataTable extends _HTMLElement {
    _connectedCallback() {
        const div = document.createElement("div");
        count += 1;
        div.innerText = "tabla_" + count.toString()
        this._root.appendChild(div);

        const table = document.createElement("table");        
        this._root.appendChild(table);
    }
}
customElements.define("data-table", DataTable);
register_component_class("data-table", DataTable)


class DataTableHeader extends _HTMLElement {
    _connectedCallback() {
        const header = document.createElement("tr");        
        this._root.appendChild(header);
    }
}
customElements.define("data-table-header", DataTableHeader);
register_component_class("data-table-header", DataTableHeader)


class DataTableColumn extends _HTMLElement {
    _connectedCallback() {
        const column = document.createElement("th");        
        this._root.appendChild(column);
    }
}
customElements.define("data-table-column", DataTableColumn);
register_component_class("data-table-column", DataTableColumn)


class DataTableBody extends _HTMLElement {
    _connectedCallback() {
        const body = document.createElement("tr");        
        this._root.appendChild(body);
    }
}
customElements.define("data-table-body", DataTableBody);
register_component_class("data-table-body", DataTableBody)