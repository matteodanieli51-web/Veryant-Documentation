## Notify-Mouse

When this style is set, the Frame control fires the following events: [MSG-MOUSE-CLICKED](../Events/MSG-MOUSE-CLICKED), [MSG-MOUSE-DBLCLICK](../Events/MSG-MOUSE-DBLCLICK), [MSG-MOUSE-ENTER](../Events/MSG-MOUSE-ENTER), [MSG-MOUSE-EXIT](../Events/MSG-MOUSE-EXIT).

**Example** - Define a frame that notifies mouse events

```cobol
screen section.
...
  03 screen-1-fr-1 Frame
     line 17.7
     column 20.0
     size 24.3 cells
     lines 27.8
     id 16
     notify-mouse.
```
