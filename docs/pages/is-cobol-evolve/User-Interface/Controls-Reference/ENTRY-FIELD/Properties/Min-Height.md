## Min-Height

The control's minimum height. This setting will affect the Layout Manager’s behavior.

**Example** - Define an entry-field control with max-height, min-height, max-width, min-width as limits to the resizing

```cobol
screen section.
...
  03 screen-1-ef-2 Entry-Field
     line 29.0
     column 49.5
     size 13.1 cells
     lines 4.6 cells
     id 19
     max-width 30.0
     min-width 10.0
     min-height 2.0
     max-height 10.0
     layout-data 17
     3-d.
```
