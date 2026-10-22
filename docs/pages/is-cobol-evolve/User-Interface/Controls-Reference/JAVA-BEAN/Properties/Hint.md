## Hint

This property allows you to define the text shown in the window that pops up when the mouse pointer is placed on the Java-Bean control.

**Example** - Define a Java-bean with hint text

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
     hint "Hint of Java Bean"
     no-box
     bitmap-width 18
     .
...
```
