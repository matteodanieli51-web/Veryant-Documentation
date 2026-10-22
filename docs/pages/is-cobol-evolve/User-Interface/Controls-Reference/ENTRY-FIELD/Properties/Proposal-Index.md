## Proposal-Index

This property can be set before [Proposal](./Proposal) in order to specify a particular position for the newly added proposal. Each proposal is identified by a number that matches its position in the list, starting from 1. The new proposal will be added right before the one specified by this property.

**Example** - Add one proposal text on a specific index

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
     proposals-unsorted
     proposal-delay 400
     .
...
procedure division.
...
  modify screen-1-ef-3 proposal-index 3 proposal "rox"
...
```
