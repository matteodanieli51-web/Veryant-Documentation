## Notify-Mouse

When this style is set, the Bar control fires the following events: [MSG-MOUSE-CLICKED](../Events/MSG-MOUSE-CLICKED), [MSG-MOUSE-DBLCLICK](../Events/MSG-MOUSE-DBLCLICK), [MSG-MOUSE-ENTER](../Events/MSG-MOUSE-ENTER), [MSG-MOUSE-EXIT](../Events/MSG-MOUSE-EXIT).

**Example -** Define a vertical bar in screen section that fires mouse events

```cobol
screen section.
...
  03 screen-1-br-3 Bar
     line 10.0
     column 5.0
     lines 22.0
     id 3
     notify-mouse
     height-in-cells
     .
```
