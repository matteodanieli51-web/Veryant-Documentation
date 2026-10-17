## Rows-Per-Page

This property has effect only in WebDirect environment. When set to a value greater than zero, the Grid displays n records at a time (where n is the value of the property) and a navigation bar is shown at the bottom of the Grid allowing the user to navigate to another page of records. The heading rows are not counted in the number of rows per page.

**Example** - Create a Grid that shows 10 records at a time

```cobol
screen section.
...
  03 screen-1-gr-1 Grid
     pop-up menu hmenu
     line 5.7
     column 3.1
     size 34.6 cells
     lines 15.5 cells
     id 1
     event procedure screen-1-gr-1-evt-proc
     no-box
     column-headings
     hscroll
     row-headings
     lm-on-columns 1
     row-dividers 0
     end-color 9
     cursor-frame-width 3
     rows-per-page 10
     .
```
