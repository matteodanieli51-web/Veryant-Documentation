## Notify-Mouse

When this style is set, the Radio-Button control fires the following events: MSG-MOUSE-ENTER, MSG-MOUSE-EXIT.

**Example** - Define a radio button that fires the mouse events

```cobol
screen section.
...
  03 screen-1-rb-2 Radio-Button
     line 20.6
     column 21.7
     size 10.9 cells
     lines 8.1 cells
     id 5
     notify-mouse
     title "Alternative Option Number 2"
     .
```
