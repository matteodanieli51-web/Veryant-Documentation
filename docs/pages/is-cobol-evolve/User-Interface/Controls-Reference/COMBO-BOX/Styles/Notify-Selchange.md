## Notify-Selchange

This style causes a [NTF-SELCHANGE](../Events/NTF-SELCHANGE) event to be fired any time the user selects an item. Without this style, no event is generated under this circumstance.

**Example -** Define a combo-box in screen section that fires an event when the selection changes

```cobol
screen section.
...
  03 screen-1-co-1 Combo-Box
     line 19.0
     column 23.0
     size 12.0 cells
     lines 11.0
     id 13
     notify-selchange
     3-d
     drop-down
     .
```
