## Notify-Mouse

When this style is set, the Push-Button control fires the following events: [MSG-MOUSE-ENTER](../Events/MSG-MOUSE-ENTER), [MSG-MOUSE-EXIT](../Events/MSG-MOUSE-EXIT).

**Example** - Define a push-button that fires mouse events

```cobol
screen section.
...
  03 screen-1-pb-3 Push-Button
     line 12.1
     column 15.2
     size 10.7 cells
     lines 5.3 cells
     id 3
     title "Go..."
     notify-mouse
     .
```
