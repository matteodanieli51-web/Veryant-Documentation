## Notify-Mouse

When this style is set, the Grid control fires the following events: [MSG-MOUSE-ENTER](../Events/MSG-MOUSE-ENTER), [MSG-MOUSE-EXIT](../Events/MSG-MOUSE-EXIT).

**Example** - Define a grid that notififes mouse events

```cobol
screen section.
...
  03 screen-1-gr-2 Grid
     line 25.0
     column 3.1
     size 34.8 cells
     lines 16.2 cells
     id 2
     event procedure screen-1-gr-2-evt-proc
     no-box
     column-headings
     notify-mouse
     row-dividers 1
     heading-font Default-Font
     cursor-frame-width 3
     num-rows 5
     .
...
```
