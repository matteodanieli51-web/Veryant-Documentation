## Color

This property allows you to set or retrieve the color of the Label control. Foreground and background color values are combined and therefore RGB colors are not supported. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Define a label with background and foreground colors defined in the color property

```cobol
screen section.
...
  03 screen-1-la-1 Label
     line 3.5
     column 16.9
     size 26.5 cells
     lines 3.2 cells
     color 519
     id 25
     title "This is the main Title"
     .
```
