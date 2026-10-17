## Foreground-Color

This property allows you to set or retrieve the foreground color of the Java-Bean control. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Define a Java-bean control with background and foreground color

```cobol
screen section.
...
  03 screen-1-jb-1 Java-Bean
     line 5.1
     column 4.5
     size 33.5 cells
     lines 25.1 cells
     background-color 8
     foreground-color 3
     id 1
     no-box
     .
...
```
