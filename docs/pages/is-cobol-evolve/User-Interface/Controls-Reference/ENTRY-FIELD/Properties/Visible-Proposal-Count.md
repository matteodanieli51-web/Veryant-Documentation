## Visible-Proposal-Count

This property specifies how many items must be visible in the list of proposals and in consequence the height of that list. If the number of matching proposals is greater than the value of this Property, then scroll-bars are shown.

In WebDirect environment, scroll-bars are not shown, so setting this property causes a truncation of the list of available entries.

**Example** - Define an entry-field control with a proposal list and limit the visible list count

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
     visible-proposal-count 3
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
