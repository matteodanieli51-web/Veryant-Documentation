## Action

A specific action is performed when a value is assigned to this property. The following symbolic values, included in the copy file [isgui.def](../../../../Appendices/Copybooks/isgui.def), can be assigned. The table below shows the actions related to each value:

|  |  |
| --- | --- |
| action-copy | The content of the Grid is copied to the clipboard. If [Selection-Mode](./Selection-Mode) is set to a value greater than 0, only the selected cells are copied. Using Java7 or greater, the text format (font and colors) is copied as well. |
| action-current-page | The Grid control is emptied, excluding headings, and a [MSG-PAGED-NEXTPAGE](../Events/MSG-PAGED-NEXTPAGE) event is generated. This action only has an effect on Grids with the [Paged](../Styles/Paged) style. |
| action-entry | The Grid control enters the Edit Mode and the [MSG-BEGIN-ENTRY](../Events/MSG-BEGIN-ENTRY) event is generated.<br>The focus must be on the Grid for this action to take effect. |
| action-export | The content of the Grid is exported to the file name indicated by [Export-File-Name](./Export-File-Name) in the format indicated by [Export-File-Format](./Export-File-Format). |
| action-first-page | The program acts as if the user requested the first page of data pushing the appropriate button on the right side of the Grid control or by pressing [Ctrl+Home]. A [MSG-PAGED-FIRST](../Events/MSG-PAGED-FIRST) event is generated. This action only has an effect on Grids with the [Paged](../Styles/Paged) style. |
| action-hide-drag | Removes the color set by the [Drag-Color](./Drag-Color) property. |
| action-last-page | The program acts as if the user requested the last page of data pushing the appropriate button on the right side of the Grid control or by pressing [Ctrl+End]. A [MSG-PAGED-LAST](../Events/MSG-PAGED-LAST) event is generated. This action only has an effect on Grids with the [Paged](../Styles/Paged) style. |
| action-next | The program acts as if the user requested the next record pushing the appropriate button on the right side of the Grid control or by pressing [DownArrow] when the cursor is on the last record of the Grid control. A [MSG-PAGED-NEXT](../Events/MSG-PAGED-NEXT) event is generated. This action only has an effect on Grids with the [Paged](../Styles/Paged) style. |
| action-next-page | The program acts as if the user requested the next page of data pushing the appropriate button on the right side of the Grid control or by pressing [PageDown]. A [MSG-PAGED-NEXTPAGE](../Events/MSG-PAGED-NEXTPAGE) event is generated. This action only has an effect on Grids with the [Paged](../Styles/Paged) style. |
| action-previous | The program acts as if the user requested the previous record pushing the appropriate button on the right side of the Grid control or by pressing [UpArrow] when the cursor is on the first record of the Grid control, excluding headings. A [MSG-PAGED-PREV](../Events/MSG-PAGED-PREV) event is generated. This action only has an effect on Grids with the [Paged](../Styles/Paged) style. |
| action-previous-page | The program acts as if the user requested the previous page of data pushing the appropriate button on the right side of the Grid control or by pressing [PageUp]. A [MSG-PAGED-PREVPAGE](../Events/MSG-PAGED-PREVPAGE) event is generated. This action only has an effect on Grids with the [Paged](../Styles/Paged) style. |
| action-search | The Grid’s search panel is shown, unless it was already visible.<br>If the focus was on the Grid, it’s moved to the text field of the search panel. |
| action-sort | The Grid control sorts itself following [Sort-data](./Sort-data) settings, and the [MSG-BEGIN-SORT](../Events/MSG-BEGIN-SORT) event is generated.<br>This action affects the current data in the Grid. If the Grid is empty, nothing happens. |

The Action property should never be set in Event procedures.

**Example** - Modify the action property of a Grid

```cobol
...
procedure division.
...
  modify screen-1-gr-1 action action-entry
...
```
