## Proposal-Min-Text

This property specifies how many characters must be typed by the user before the proposal list is shown. If not set, 1 is assumed.

**Example** - Define an entry-field where proposals are shown after the user types three characters

```cobol
screen section.
...
  03 screen-1-ef-3 Entry-Field
     line 35.8
     column 49.7
     size 11.6 cells
     lines 3.5 cells
     id 20
     3-d
     proposal-min-text 3
     .
...
procedure division.
...
  modify screen-1-ef-3
         proposal "rome"
         proposal "romania"
         proposal "romantic"
         proposal "ron"
         proposal "roll"
         .
...
```
