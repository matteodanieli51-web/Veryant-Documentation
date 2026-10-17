## Background-Color

This property allows you to set or retrieve the background color of the Chips-Box control. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example -** Define a chips-box in screen section with dark cyan background color

```cobol
screen section.
...
03 screen-1-chip-1 Chips-Box
   line 19.0
   column 23.0
   size 12.0 cells
   lines 11.0
   background-color 3
   id 13   .
```
