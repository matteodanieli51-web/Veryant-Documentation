## Value

This property represents the slider's position in the control. The range of values is set by the properties [Min-Val](./Min-Val), [Max-Val](./Max-Val), and [Page-Size](./Page-Size).

**Example** - Define a scroll-bar with value property

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
     value 10
     min-val 2
     max-val 20
     page-size 4
     .
...
```
