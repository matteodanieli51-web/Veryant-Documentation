## End-Color

This property allows you to set or retrieve the color used in the area extending beyond the last column of a tree-view with the [Table-View](../Styles/Table-View) style. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Define a tree-view with a gray color in the extended areas

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
     column-headings
     end-color 9
     .
...
```
