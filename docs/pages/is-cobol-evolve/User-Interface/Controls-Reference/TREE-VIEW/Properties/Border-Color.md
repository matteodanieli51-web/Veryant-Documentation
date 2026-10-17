## Border-Color

This property allows you to set or retrieve the border color of the Tree-View control. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details. The border color is applicable only to controls with the [Boxed](../Styles/3-D-Boxed-No-Box) style.

**Example** - Define a tree-view with red border

```cobol
screen section.
...
  03 screen-1-tv-1 Tree-View
     line 2.7
     column 3.4
     size 20.8 cells
     lines 29.1 cells
     border-color 5
     boxed
     id 2
     .
...
```
