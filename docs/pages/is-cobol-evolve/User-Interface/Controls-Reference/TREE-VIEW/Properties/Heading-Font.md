## Heading-Font

This property allows you to set or retrieve the font used for column headings of a tree-view with [Table-View](../Styles/Table-View) style.

See [Font management](../../../Working-With-UI-and-Controls/Creating-a-control/Font-management/Font-management) for information on how to obtain a font handle for this property.

**Example** - Define a tree-view with specific heading font

```cobol
working-storage section.
77 Calibri-10v0 handle of font.
...
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
     heading-font Calibri-10v0
     .
...
*> Prior to display the screen with the tree, load the font in
*> procedure division using w$font
...
```
