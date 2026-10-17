## Foreground-Color

This property allows you to set or retrieve the foreground color of the Radio-Button control. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Define a radio button with foreground and background color

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
     id 4
     title "Option 1"
     .
```
