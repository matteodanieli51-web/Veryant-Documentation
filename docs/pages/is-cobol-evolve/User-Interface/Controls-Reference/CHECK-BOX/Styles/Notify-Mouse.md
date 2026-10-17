## Notify-Mouse

When this style is set, the Check-Box control fires the following events: [MSG-MOUSE-ENTER](../Events/MSG-MOUSE-ENTER), [MSG-MOUSE-EXIT](../Events/MSG-MOUSE-EXIT).

**Example -** Define a check-box in screen section that notifies mouse events

```cobol
screen section.
...
  03 screen-1-cb-2 Check-Box
     line 27.0
     column 10.0
     size 116
     lines 3.0
     id 11
     notify-mouse
     title "Sugar for you coffee?"
     height-in-cells
     .
```
