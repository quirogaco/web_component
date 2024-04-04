import dominate
from dominate.tags import *
from dominate import util

class _html_tag(html_tag):
    def __init__(self, *args, **kwargs):
        super(_html_tag, self).__init__(*args, **kwargs)

    def _render(self, sb, indent_level, indent_str, pretty, xhtml):
        try:
            name = type(self)._name
        except:
            name = type(self).__name__        
        name = getattr(self, 'tagname', name)
        pretty = pretty and self.is_pretty
       
        # Workaround for python keywords and standard classes/methods
        # (del, object, input)
        if name[-1] == '_':
            name = name[:-1]

        # open tag
        sb.append('<')
        sb.append(name)

        for attribute, value in sorted(self.attributes.items()):
            if value in (False, None):
                continue
            val = unicode(value) if isinstance(value, util.text) and not value.escape else util.escape(unicode(value), True)
            sb.append(' %s="%s"' % (attribute, val))

        sb.append(' />' if self.is_single and xhtml else '>')

        if self.is_single:
            return sb

        inline = self._render_children(sb, indent_level + 1, indent_str, pretty, xhtml)
        if pretty and not inline:
            sb.append('\n')
            sb.append(indent_str * indent_level)

        # close tag
        sb.append('</')
        sb.append(name)
        sb.append('>')

        return sb

    def __repr__(self):
        print(">>>", type(self).__name__, type(self).__name__)
        try:
            name = type(self)._name
        except:
            name = type(self).__name__
        name = getattr(self, 'tagname', name)

        attributes_len = len(self.attributes)
        attributes = '%s attribute' % attributes_len
        if attributes_len != 1: attributes += 's'

        children_len = len(self.children)
        children = '%s child' % children_len
        if children_len != 1: children += 'ren'

        return '<%s at %x: %s, %s>' % (name, id(self), attributes, children)


class DataTable(_html_tag):
    _name = 'data-table'


class DataTableHeader(_html_tag):
    _name = 'data-table-header'


class DataTableBody(_html_tag):
    _name = 'data-table-body'


class DataTableRow(_html_tag):
    _name = 'data-table-row"'


class DataTableHeaderCell(_html_tag):
    _name = 'data-table-header-cell'


class DataTableDataCell(_html_tag):
    _name = 'data-table-data-cell'


class DataTableFooter(_html_tag):
    _name = 'data-table-footer'