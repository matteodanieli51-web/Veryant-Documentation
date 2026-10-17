## Notify-Mouse

When this style is set, the List-Box control fires the following events: [MSG-MOUSE-ENTER](../Events/MSG-MOUSE-ENTER), [MSG-MOUSE-EXIT](../Events/MSG-MOUSE-EXIT).

**Example** - Define a list-box that fires mouse events

```cobol
screen section.
...
  03 screen-1-lb-1 List-Box
     notify-mouse
     line 5.7
     column 3.1
     size 34.6 cells
     lines 15.5 cells
     id 1
     .
```
