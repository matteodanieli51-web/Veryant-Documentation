## Proposal-To-Delete

This property removes a proposal from the list of proposals associated with the Entry-Field. Setting it to a value greater than zero removes the corresponding proposal from the list. Each proposal is identified by a number that matches its position in the list, starting from 1.

**Example** - Delete a specific proposal item from an entry-field

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
  modify screen-1-ef-3
         proposal "rome"
         proposal "romania"
         proposal "romantic"
         proposal "ron"
         proposal "roll"
...
  modify screen-1-ef-3 proposal-to-delete 3  | would delete romantic
...
```
