## Proposals-Unsorted

When this style is set, the values of the proposals list are shown in the order they were added by the program. Without this style, proposals are shown in alphabetical order.

**Example** - Define an entry-field that keeps the list of proposal unsorted

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
```
