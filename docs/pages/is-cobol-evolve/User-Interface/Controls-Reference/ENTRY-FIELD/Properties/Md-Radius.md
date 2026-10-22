## Md-Radius

This property specifies how much the corners of a field with Material Design layout should be rounded. Valid values range from 1 (square borders) to 100 (extremely rounded borders). Setting the property to 0 resets the rounding to the default value of 40.

**Example** - Define an entry-field control with a boxed Material Design layout and square borders

```cobol
screen section.
...
  03 screen-1-ef-2 Entry-Field
     line 35.5
     column 49.7
     size 13.1 cells
     lines 4.6 cells
     material-design 1
     md-radius 1
     md-label "Name"
     id 19
     .
```
