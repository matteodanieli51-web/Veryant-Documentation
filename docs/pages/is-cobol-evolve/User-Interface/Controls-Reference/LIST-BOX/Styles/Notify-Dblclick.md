## Notify-Dblclick

This style causes a [CMD-DBLCLICK](../Events/CMD-DBLCLICK) event to be fired any time the user double-clicks on an item. Without this style, no event is generated under this circumstance.

**Example** - Define a list-box that fires an event upon double click

```cobol
screen section.
...
  03 screen-1-lb-1 List-Box
     notify-dblclick
     line 5.7
     column 3.1
     size 34.6 cells
     lines 15.5 cells
     id 1
     .
```
