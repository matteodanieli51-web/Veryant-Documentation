## Editor-Show-Always

This property defines the editor control visibility within each column. A value of 0 means that the editor control will be shown only during cell editing, while a value of 1 means that the editor control will be always visible. The default value is 0 for every column.

This property affects the following editor controls: Combo-Box, Date-Entry, Entry-Field and List-Box.

Check-Box and Push-Button are always visible, instead.

If no editor control was displayed upon the Grid column, then a basic Entry-Field editor is used.

Since this setting affects each column, a list of values is needed.

When values are enclosed between parentheses, a new list is defined at once. The snippet below specifies that the editor visibility is 0 for the 1st column and 1 for the 2nd column. The editor visibility for the other columns, if any, will be 0, the default.

```cobol
EDITOR-SHOW-ALWAYS = (0, 1)
```

When a single value greater than or equal to zero is set, it is appended to the list.

Setting the property to -1 resets the list.

**Example** - Set editors visibility by reading values from a Occurs

```cobol
procedure division.
...
modify screen-1-gr-1, data-columns = -1 | resets the list of values
perform varying columnidx from 1 by 1 until columnidx > columncount
   modify screen-1-gr-1, editor-show-always = editor-vis-flag(columnidx)
end-perform
```

**Example** - Modify a 3 columns grid to always show the editor of the 1st column

```cobol
screen section.
...
  03 screen-1-gr-1 Grid
     line 6.2
     column 5.1
     size 37.4 cells
     lines 15.5 cells
     id 1
     event procedure screen-1-gr-1-evt-proc
     no-box
     column-headings
     row-dividers 1
     heading-font Default-Font
     cursor-frame-width 3
     num-rows 5
     .
...
procedure division.
...
  modify screen-1-gr-1
         column-dividers ( 1 1 1 )
         data-columns ( 1 9 17 )
         display-columns ( 1 9 17 )
         separation ( 5 5 5 )
         alignment ( "U" "U" "U" )
         data-types ( "X" "X" "X" )
         editor-show-always ( 1 0 0 )
         .
...
```
