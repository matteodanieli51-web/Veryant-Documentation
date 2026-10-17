## Heading-Menu-Popup

This property allows you to set or retrieve the status of the context menu shown on grid columns headings. The context menu allows you to choose between hiding or showing a column, exporting data to xls/xlsx spreadsheets, copying data to the clipboard and searching text in the grid.

The heading menu pop-up uses the same font as pop-up menus and menu bars. This font is specified by the current Look & Feel.

The possible values for this property, defined in [isgui.def](../../../../Appendices/Copybooks/isgui.def), are:

|  |  |
| --- | --- |
| grhm-no-menu (value 0) | The context menu is not available. |
| grhm-columns-on-right-click (value 1) | The list of columns is shown by right clicking on the grid heading. |
| grhm-columns-on-button (value 2) | The list of columns is shown by clicking on the button shown on the top right corner of the grid. |
| grhm-export-on-right-click (value 4) | The ‘Export’ option is shown by right clicking on the grid heading. |
| grhm-export-on-button (value 8) | The ‘Export’ option is shown by clicking on the button shown on the top right corner of the grid. |
| grhm-copy-on-right-click (value 16) | The ‘Copy to Clipboard’ option is shown by right clicking on the grid heading. |
| grhm-copy-on-button (value 32) | The ‘Copy to Clipboard’ option is shown by clicking on the button shown on the top right corner of the grid. |
| grhm-find-on-right-click (value 64) | The ‘Find’ option is shown by right clicking on the grid heading. |
| grhm-find-on-button (value 128) | The ‘Find’ option is shown by clicking on the button shown on the top right corner of the grid. |

The above values can be combined in order to obtain the desired effect. Setting the property to the value 63 makes all the items available in the menu shown by right clicking as well as in the menu shown by clicking on the top right corner of the gird.

When the ‘Export’ option is selected, a Save As dialog is shown to allow the user to choose where to save the exported data. The fields of this dialog are preset according to the properties [Export-File-Name](./Export-File-Name) and [Export-File-Format](./Export-File-Format). Font and colors are replicated in the exported file, while bitmaps and embedded controls are not. In the generated spreadsheet, the cells corresponding to Grid’s headings use a general format while the cells corresponding to the Grid’s data use a specific format (Number, Date or Text) depending on the [Data-Types](./Data-Types) of the column. By setting the [Export-File-Open](./Export-File-Open) property, you can make the runtime automatically open the exported document.

When the ‘Copy to Clipboard’ option is selected, the Grid content is copied to the clipboard. If you’re using Java 7 or greater, the text style (font and colors) is copied as well.  If [Selection-Mode](./Selection-Mode) is set to a value greater than 0, then only selected cells are copied to the clipboard.

The [Column-Hiding](./Column-Hiding) property is automatically set to 1 for the columns that the user unchecked and 0 for the other columns.

If this property is set in a way that causes the button on the top right corner of the grid to be visible, the [Vscroll](../Styles/Vscroll) style is implied.

**Example** - Define a Grid where the list of columns is shown in the menu that appears by right clicking on the heading, while the export option appears by clicking on the top right corner of the grid, and where the ‘Copy to clipboard’ option is not available.

```cobol
screen section.
...
  03 screen-1-gr-1 Grid
     line 15.5
     column 2.6
     size 28.4 cells
     lines 18.6 cells
     id 3
     no-box
     heading-menu-popup 9
     column-headings
     row-dividers 1
     heading-color 133
     heading-font Default-Font
     cursor-frame-width 3
     num-rows 5
     .
...
```
