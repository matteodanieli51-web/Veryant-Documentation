## Foreground-Color

This property allows you to set or retrieve the foreground color of the Entry-Field control. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Define an entry-field control with black background and gray foreground

```cobol
screen section.
...
  03 screen-1-ef-2 Entry-Field
     line 35.5
     column 49.7
     size 13.1 cells
     lines 4.6 cells
     background-color 0
     foreground-color 7
     id 19
     3-d
     .
```
