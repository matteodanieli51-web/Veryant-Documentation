## Heading-Menu-Popup

This property allows you to set or retrieve the status of the context menu shown on tree-view columns headings. The context menu allows you to hide or show a column.

The heading menu pop-up uses the same font as pop-up menus and menu bars. This font is specified by the current Look & Feel.

The possible values for this property, defined in [isgui.def](../../../../Appendices/Copybooks/isgui.def), are:

|  |  |
| --- | --- |
| tvhm-no-menu (value 0) | The context menu is not available. |
| tvhm-columns-on-right-click (value 1) | The list of columns is shown by right clicking on the tree-view heading. |
| tvhm-columns-on-button (value 2) | The list of columns is shown by clicking on the button shown on the top right corner of the tree-view. |

The above values can be combined in order to obtain the desired effect. For example, setting this property to “3” will show the context menu on both column headings and top right corner.

This property has effect only on tree-views with the [Table-View](../Styles/Table-View) style.

**Example** - define a tree table with a context menu

```cobol
screen section.
...
  03 screen-1-tv-1 Tree-View
     Table-View
     line 2.7
     column 3.4
     size 20.8 cells
     lines 29.1 cells
     color 144
     column-headings
     heading-menu-popup 2
     id 2
     no-box
     .
```
