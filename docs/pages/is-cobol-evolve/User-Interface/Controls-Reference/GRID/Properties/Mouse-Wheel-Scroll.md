## Mouse-Wheel-Scroll

This property specifies how many records must scroll in the grid at each mouse wheel movement. It has effect only if the grid has the [Paged](../Styles/Paged) style.

**Example** - Define the number of rows to scroll for the mouse-wheel

```cobol
...
  03 screen-1-gr-1 Grid
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
     row-dividers 1
     mouse-wheel-scroll 2
     end-color 9
     cursor-frame-width 3
     num-col-headings 2
     num-row-headings 2
     num-rows 5
     .
...
```
