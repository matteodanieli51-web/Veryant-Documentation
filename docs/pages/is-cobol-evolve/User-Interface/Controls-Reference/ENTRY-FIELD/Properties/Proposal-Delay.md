## Proposal-Delay

This Property specifies a delay expressed in milliseconds that the list of proposals will wait before popping up.

If set to a value less than the previous one via the MODIFY statetement, it triggers the drop of the proposals list when the delay expires.

**Example** - Define an entry-field with a specific proposal delay

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
         .
...
```
