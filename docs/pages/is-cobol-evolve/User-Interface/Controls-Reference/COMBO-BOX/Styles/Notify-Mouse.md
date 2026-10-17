## Notify-Mouse

When this style is set, the Combo-Box control fires the following events: [MSG-MOUSE-ENTER](../Events/MSG-MOUSE-ENTER), [MSG-MOUSE-EXIT](../Events/MSG-MOUSE-EXIT).

**Example -** Define a combo-box in screen section that fires mouse events

```cobol
screen section.
...
  03 screen-1-co-1 Combo-Box
     line 19.0
     column 23.0
     size 12.0 cells
     lines 11.0
     id 13
     notify-mouse
     3-d
     drop-down
     .
```
