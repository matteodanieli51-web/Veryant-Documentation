## Notify-Mouse

When this style is set, the Split-Pane control fires the following events: [MSG-MOUSE-CLICKED](../Events/MSG-MOUSE-CLICKED), [MSG-MOUSE-DBLCLICK](../Events/MSG-MOUSE-DBLCLICK), [MSG-MOUSE-ENTER](../../LIST-BOX/Events/MSG-MOUSE-ENTER), [MSG-MOUSE-EXIT](../Events/MSG-MOUSE-EXIT).

**Example** - Define a split pane that fires mouse events

```cobol
screen section.
...
  03 screen-1-sp-2 Split-pane
     line 39.1
     column 12.8
     size 2.4
     lines 30.8
     id 10
     height-in-cells
     width-in-cells
     notify-mouse
     .
```
