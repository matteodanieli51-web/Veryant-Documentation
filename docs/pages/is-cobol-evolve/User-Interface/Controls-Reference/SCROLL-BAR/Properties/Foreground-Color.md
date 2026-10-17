## Foreground-Color

This property allows you to set or retrieve the foreground color of the Scroll-Bar control. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Define a scroll-bar with background and foreground color

```cobol
screen section.
...
  03 screen-1-sb-1 Scroll-Bar
     line 4.0
     column 41.5
     size 2.9 cells
     lines 39.7 cells
     background-color 14
     foreground-color 4
     id 5
     .
```
