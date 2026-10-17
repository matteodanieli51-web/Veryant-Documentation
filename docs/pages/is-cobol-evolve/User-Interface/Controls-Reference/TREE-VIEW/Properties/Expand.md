## Expand

This property is used to programmatically expand or collapse the item identified by the [Item](./Item) property. Valid values, defined in [isgui.def](../../../../Appendices/Copybooks/isgui.def), are:

|  |  |
| --- | --- |
| tvflag-collapse | The item is collapsed. |
| tvflag-expand | The item is expanded. |
| tvflag-expand-all | The item and its sub-items are expanded. |

Setting this property while [Mass-Update](./Mass-Update) is "1" there is no guarantee that the items will be expanded. You should set this property only when [Mass-Update](./Mass-Update) is "0".

**Example** - Define a tree-view and expand one of its items on procedure division

```cobol
screen section.
...
  03 screen-1-tv-1 Tree-View
     line 2.7
     column 3.4
     size 20.8 cells
     lines 29.1 cells
     color 144
     id 2
     event-list ( cmd-goto cmd-help )
     exclude-event-list 1
     no-box
     .
...
procedure division.
...
  modify screen-1-tv-1 item 1 expand tvflag-expand
...
```
