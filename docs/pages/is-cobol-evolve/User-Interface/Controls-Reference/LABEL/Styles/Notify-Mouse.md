## Notify-Mouse

When this style is set, the Label control fires the following events: MSG-MOUSE-CLICKED, MSG-MOUSE-DBLCLICK, MSG-MOUSE-ENTER, MSG-MOUSE-EXIT.

**Example** - Define a label that fires mouse events

```cobol
screen section.
...
  03 screen-1-la-1 Label
     line 3.5
     column 16.9
     size 26.5 cells
     lines 3.2 cells
     id 25
     center
     notify-mouse
     title "Veryant’s website"
     .
```
