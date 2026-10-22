## Notify-Mouse

When this style is set, the Entry-Field control fires the following events: [MSG-MOUSE-ENTER](../Events/MSG-MOUSE-ENTER), [MSG-MOUSE-EXIT](../Events/MSG-MOUSE-EXIT).

**Example** - Define an entry-field control that fires mouse events

```cobol
screen section.
...
  03 screen-1-ef-4 Entry-Field
     line 40.6
     column 47.5
     size 16.2 cells
     lines 12.3 cells
     id 21
     notify-mouse
     3-d
     .
```
