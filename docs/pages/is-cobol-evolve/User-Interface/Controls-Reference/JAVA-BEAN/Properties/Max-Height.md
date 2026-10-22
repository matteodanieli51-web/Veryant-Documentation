## Max-Height

The control's maximum height. This setting will affect the Layout Manager’s behavior.

**Example** - Define a Java-bean with maximum and minimum dimensions

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
     max-width 65.0
     min-width 15.0
     min-height 15.0
     max-height 50.0
     layout-data 17
     no-box
     .
...
```
