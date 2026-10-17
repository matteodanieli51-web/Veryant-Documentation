## Height-In-Cells

This style implies that the value specified for the [Lines](../Properties/Lines) property, the one setting the Java-Bean control’s height, is expressed in CELLS. It is possible to get the same result writing: "[Lines](../Properties/Lines) *value* CELLS".

**Example** - Define a Java-bean with height and width in cells styles

```cobol
screen section.
...
  03 screen-1-jb-1 Java-Bean
     line 5.1
     column 4.5
     size 33.5
     lines 25.1
     id 1
     no-box
     height-in-cells
     width-in-cells
     .
...
```
