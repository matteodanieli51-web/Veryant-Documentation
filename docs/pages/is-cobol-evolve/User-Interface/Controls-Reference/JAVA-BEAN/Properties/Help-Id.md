## Help-Id

This property allows you to assign a unique ID to the Java-Bean control to be passed to the help processor.

See [Help automation](../../../Working-With-UI-and-Controls/Creating-a-control/Help-automation) for more information.

**Example** - Define a Java-bean with help id

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
     font Calibri-10v0
     id 1
     help-id 2020
     no-box
     bitmap-width 18
     .
...
```
