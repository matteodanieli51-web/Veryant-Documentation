## Heading-Rollover-Color

This property allows you to set or retrieve the color that both column and row headings assume when the mouse pointer hovers over them. Foreground and background color values are combined and therefore RGB colors are not supported. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

This property has effect only on tree-views with the [Table-View](../Styles/Table-View) style.

**Example** - Define a tree-view whose heading colors change on mouseover

```cobol
screen section.
...
  03 screen-1-tv-1 Tree-View
     line 5.7
     column 3.1
     size 34.6 cells
     lines 15.5 cells
     id 1
     column-headings
     table-view
     heading-rollover-color 200
     heading-font Default-Font
     .
...
```
