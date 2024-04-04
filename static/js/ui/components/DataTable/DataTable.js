import { register_component_class, _HTMLElement } from "/static/js/ui/components/core.js"

let count = 0;

class DataTable extends _HTMLElement {
    _connectedCallback() {
        const div = document.createElement("div");
        // count += 1;
        // div.innerText = "tabla_" + count.toString()
        // this._root.appendChild(div);

        // const table = document.createElement("table");        
        // this._root.appendChild(table);

        this._root.insertAdjacentHTML(
            "afterbegin",
            "<table>"
        );

        this._root.insertAdjacentHTML(
            "afterend",
            "</table>"
        );
    }
}
customElements.define("data-table", DataTable);
register_component_class("data-table", DataTable)


class DataTableHeader extends _HTMLElement {
    _connectedCallback() {
        const header = document.createElement("thead");        
        this._root.appendChild(header);
    }
}
customElements.define("data-table-header", DataTableHeader);
register_component_class("data-table-header", DataTableHeader)


class DataTableBody extends _HTMLElement {
    _connectedCallback() {
        const body = document.createElement("tbody");        
        this._root.appendChild(body);
    }
}
customElements.define("data-table-body", DataTableBody);
register_component_class("data-table-body", DataTableBody)


class DataTableRow extends _HTMLElement {
    _connectedCallback() {
        const row = document.createElement("tr");        
        this._root.appendChild(row);
    }
}
customElements.define("data-table-row", DataTableRow);
register_component_class("data-table-row", DataTableRow)


class DataTableHeaderCell extends _HTMLElement {
    _connectedCallback() {
        const cell = document.createElement("th");        
        this._root.appendChild(cell);
    }
}
customElements.define("data-table-header-cell", DataTableHeaderCell);
register_component_class("data-table-header-cell", DataTableHeaderCell)

class DataTableDataCell extends _HTMLElement {
    _connectedCallback() {
        const cell = document.createElement("td");        
        this._root.appendChild(cell);
    }
}
customElements.define("data-table-data-cell", DataTableDataCell);
register_component_class("data-table-data-cell", DataTableDataCell)


class DataTableFooter extends _HTMLElement {
    _connectedCallback() {
        const footer = document.createElement("tfoot");        
        this._root.appendChild(footer);
    }
}
customElements.define("data-table-footer", DataTableFooter);
register_component_class("data-table-footer", DataTableFooter)