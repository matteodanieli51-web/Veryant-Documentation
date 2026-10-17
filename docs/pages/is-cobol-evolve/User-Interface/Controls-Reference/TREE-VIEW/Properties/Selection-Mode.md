## Selection-Mode

This property activates the ability to select multiple items in the Tree-View.

The possible values, defined in [isgui.def](../../../../Appendices/Copybooks/isgui.def), are:

|  |  |
| --- | --- |
| tvsm-single-selection (value 1) | It’s possible to select a single item. |
| tvsm-single-interval-selection (value 2) | It’s possible to select more contiguous items. |
| tvsm-multiple-interval-selection (value 4) | It’s possible to select more items, even if they’re not contiguous. |

The selection of multiple items is performed by holding CTRL (for multiple interval selection) or SHIFT (for single interval selection) on the keyboard and then use up and down arrow keys or click with the mouse.

The list of the selected items can be retrieved by inquiring the [Items-Selected](./Items-Selected) property.

The selection of multiple items is not supported on Tree-Views with the [Table-View](../Styles/Table-View) style.

When this property is set either to tvsm-single-interval-selection or to tvsm-multiple-interval-selection, the [MSG-TV-SELCHANGING](../Events/MSG-TV-SELCHANGING) event is not fired.

**Example** - Define a tree-view where multiple items can be selected:

```cobol
...
screen section.
...
  03 screen-1-tv-1 Tree-View
     line 2.7
     column 3.4
     size 20.8 cells
     lines 29.1 cells
     color 144
     id 2
     selection-mode 4
     .
```
