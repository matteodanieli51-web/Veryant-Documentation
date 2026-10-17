## Rollover-Background-Color

This property allows you to set or retrieve the background color of the Radio-Button control when the mouse pointer hovers over it. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Define a radio button with different background and foreground color on mouseover

```cobol
screen section.
...
  03 screen-1-rb-1 Radio-Button
     line 20.9
     column 5.4
     size 9.1 cells
     lines 4.5 cells
     background-color 6
     foreground-color 5
     rollover-background-color 3
     rollover-foreground-color 4
     id 4
     title "Option 1"
     .
```
