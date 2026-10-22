## Heading-Foreground-Color

This property allows you to set or retrieve the foreground color of column headings of a tree-view with [Table-View](../Styles/Table-View) style. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Define a tree-view with heading background and foreground color

```cobol
screen section.
...
  03 screen-1-gr-1 Tree-View
     Table-View
     line 5.7
     column 3.1
     size 34.6 cells
     lines 15.5 cells
     id 1
     no-box
     column-headings
     heading-background-color 3
     heading-foreground-color 7
     .
...
```
