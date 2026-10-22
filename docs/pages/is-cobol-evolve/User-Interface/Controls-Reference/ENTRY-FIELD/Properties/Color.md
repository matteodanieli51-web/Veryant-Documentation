## Color

This property allows you to set or retrieve the color of the Entry-Field control. Foreground and background color values are combined and therefore RGB colors are not supported. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Define an entry-field control with dark gray background and gray foreground using the color property

```cobol
screen section.
...
  03 screen-1-ef-2 Entry-Field
     line 35.5
     column 49.7
     size 13.1 cells
     lines 4.6 cells
     color 296
     id 19
     3-d
     .
```
