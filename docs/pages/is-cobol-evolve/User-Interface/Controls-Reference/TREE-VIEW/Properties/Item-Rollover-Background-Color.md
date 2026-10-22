## Item-Rollover-Background-Color

This property allows you to set or retrieve the background color of the items when the mouse pointer hovers over them. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

When the [Table-View](../Styles/Table-View) style is specified, the rollover color extends to the whole line, over all the columns.

**Example -** Define a tree-view whose items become white-on-black on mouseover

```cobol
screen section.
...
  03 screen-1-tv-1 Tree-View
     line 5.7
     column 3.1
     size 34.6 cells
     lines 15.5 cells
     item-rollover-background-color x#303030
     item-rollover-foreground-color x#FFFFFF
     id 16
     .
...
```
