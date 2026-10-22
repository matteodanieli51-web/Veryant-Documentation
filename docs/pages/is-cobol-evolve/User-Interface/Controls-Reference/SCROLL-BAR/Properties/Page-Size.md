## Page-Size

This property sets the number of items in a page. This usually affects the size of the slider that represents one page of items.

**Example** - Define a scroll-bar with page-size

```cobol
screen section.
...
  03 screen-1-sb-1 Scroll-Bar
     line 4.0
     column 41.5
     size 2.9 cells
     lines 39.7 cells
     color 229
     help-id 3029
     id 5
     hint "Scroll-bar hint"
     min-val 2
     max-val 20
     page-size 4
     .
...
```
