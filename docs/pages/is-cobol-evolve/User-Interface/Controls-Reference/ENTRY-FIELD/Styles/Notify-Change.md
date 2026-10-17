## Notify-Change

This style causes a [NTF-CHANGED](../Events/NTF-CHANGED) event to be fired each time the user changes the content of the Entry-Field control. Without this style, no event is generated under this circumstance.

**Example** - Define an entry-field control that fires the ntf-changed event when its value changes

```cobol
screen section.
...
  03 screen-1-ef-4 Entry-Field
     line 40.6
     column 47.5
     size 16.2 cells
     lines 12.3 cells
     id 21
     notify-change
     3-d
     .
```
