## Selection-Start

This property returns the start position of the selection of text in the Entry-Field.

**Example** - Get the selection start position from an entry-field control

```cobol
working-storage section.
77 ws-selection-start  pic 9(3).
...
screen section.
...
  03 screen-1-ef-3 Entry-Field
     line 35.8
     column 49.7
     size 11.6 cells
     lines 3.5 cells
     id 20
     3-d
     .
...
procedure division.
...
   inquire screen-1-ef-3 selection-start ws-selection-start
...
```
