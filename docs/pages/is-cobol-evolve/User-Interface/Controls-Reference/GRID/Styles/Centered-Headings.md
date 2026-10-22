## Centered-Headings

When this style is set, the content of the column headings is centered. Otherwise, the heading of each column is the same as the column itself. See the [Alignment](../Properties/Alignment) property for details.

For perfectly centered headings, columns [Separation](../Properties/Separation) should be zero.

**Example** - Define a grid with centering-headings

```cobol
screen section.
...
  03 screen-1-gr-1 Grid
     background-low
     bold
     line 5.7
     column 3.1
     size 34.6 cells
     lines 15.5 cells
     id 1
     event procedure screen-1-gr-1-evt-proc
     boxed
     centered-headings
     column-headings
     adjustable-rows
     adjustable-columns
     hscroll
     reordering-columns
     lm-on-columns 1
     row-dividers 1
     end-color 9
     heading-color 200
     heading-divider-color 12
     heading-font Calibri-10v0
     cursor-frame-width 3
     num-col-headings 1
     num-rows 5
     .
```
