## Title

The description shown in the Frame control. The [Title-Position](./Title-Position) property affects the position of the text.

**Example** - Define a frame with a top centered title

```cobol
screen section.
...
  03 screen-1-fr-1 Frame
     line 17.7
     column 20.0
     size 24.3 cells
     lines 27.8 cells
     id 16
     title-position 2
     title "Customer Data Area"
     .
```
