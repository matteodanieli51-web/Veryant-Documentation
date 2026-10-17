## Action

A specific action is performed when a value is assigned to this property. The following symbolic values, included in the copy file [isgui.def](../../../../Appendices/Copybooks/isgui.def), can be assigned. The table below shows the actions related to each value:

|  |  |
| --- | --- |
| Action-Cut | Cuts the selected text in the entry-field to the clipboard |
| Action-Copy | Copies the selected text in the entry-field to the clipboard |
| Action-Paste | Pastes the content of the clipboard into the entry-field |
| Action-Delete | Deletes the currently selected text |
| Action-Undo | Undoes the last action |
| Action-Redo | Redoes the last action |
| Action-Select-All | Selects all the text in the control |

**Example** - Use the action property to select the value of an entry-field and copy it to the clipboard

```cobol
working-storage section.
copy "isgui.def".
...
screen section.
...
  03 screen-1-ef-1 Entry-Field
     line 35.5
     column 49.7
     size 13.1 cells
     lines 4.6 cells
     id 19
     3-d
     .
...
procedure division.
...
  modify screen-1-ef-1 action action-select-all
  modify screen-1-ef-1 action action-copy
...
```
