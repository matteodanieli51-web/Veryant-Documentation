## Rollover-Color

This property allows you to set or retrieve the color of the Radio-Button control when the mouse pointer hovers over it. Foreground and background color values are combined and therefore RGB colors are not supported. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Define a radio button with background and foreground color on mouseover

```cobol
screen section.
...
  03 screen-1-rb-2 Radio-Button
     line 20.6
     column 21.7
     size 10.9 cells
     lines 5.4 cells
     color 133
     rollover-color 512
     id 5
     title "Option 2"
     .
```
