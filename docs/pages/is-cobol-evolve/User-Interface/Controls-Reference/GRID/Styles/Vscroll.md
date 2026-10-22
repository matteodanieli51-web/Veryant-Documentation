## Vscroll

When this style is set, a vertical Scroll-Bar is displayed.

**Example** - Define a grid that shows a vertical scroll bar

```cobol
screen section.
...
  03 screen-1-gr-1 Grid
     line 5.7
     column 3.1
     size 34.6 cells
     lines 15.5 cells
     id 1
     event procedure screen-1-gr-1-evt-proc
     boxed
     no-autosel
     centered-headings
     column-headings
     adjustable-rows
     adjustable-columns
     hscroll
     reordering-columns
     row-headings
     lm-on-columns 1
     vscroll
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
