## Hscroll

When this style is set in a Grid without [Virtual-Width](../Properties/Virtual-Width), a horizontal scroll-bar is displayed.

The horizontal scroll-bar is always displayed if [Virtual-Width](../Properties/Virtual-Width) is set.

**Example** - Define a grid with hscroll and width in cells

```cobol
screen section.
...
  03 screen-1-gr-1 Grid
     height-in-cells
     width-in-cells
     line 5.7
     column 3.1
     size 34.6
     lines 15.5
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
