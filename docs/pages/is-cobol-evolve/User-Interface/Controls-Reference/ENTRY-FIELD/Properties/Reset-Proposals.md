## Reset-Proposals

When set to a non-zero value, this property removes all the proposals associated with the Entry-Field.

**Example** - Reset the proposals list for an entry-field

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
     proposal-delay 400
     .
...
procedure division.
...
  *> Reset the proposals list before adding new ones
  modify screen-1-ef-3 reset-proposals 1
  modify screen-1-ef-3
         proposal "rome"
         proposal "romania"
         proposal "romantic"
         proposal "ron"
         proposal "roll"
...
```
