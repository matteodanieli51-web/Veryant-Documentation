## Max-Lines

The value set to this property establishes the maximum number of lines the user can enter in a multi-line entry-field.

**Example** - Define an entry-field control with a multiline style, limiting the lines to 4

```cobol
screen section.
...
  03 screen-1-ef-4 Entry-Field
     line 40.6
     column 47.5
     size 16.2 cells
     lines 12.3 cells
     id 21
     multiline
     3-d
     max-lines 4
     .
```
