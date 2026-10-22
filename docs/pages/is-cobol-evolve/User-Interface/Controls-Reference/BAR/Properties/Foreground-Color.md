## Foreground-Color

This property allows you to set or retrieve the foreground color of the Bar control. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example -** Define a bar on screen section with a foreground-color in rgb

```cobol
screen section.
...
  03 screen-1-br-1 Bar
     line 5.5
     column 5.1
     size 46.8 cells
     foreground-color rgb 32960
     id 1
     .
```
