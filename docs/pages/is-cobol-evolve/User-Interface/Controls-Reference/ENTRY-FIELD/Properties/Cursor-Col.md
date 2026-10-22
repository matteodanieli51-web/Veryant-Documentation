## Cursor-Col

This property sets or retrieves the horizontal cursor position inside a multi line entry-field.

When used to set the cursor position, it must be set in conjuction with [Cursor-Row](./Cursor-Row).

**Example** - Get the column and row position of the cursor on a multiline entry-field control

```cobol
working-storage section.
77 ws-cur-col   pic 9(3).
77 ws-cur-row   pic 9(3).
...
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
     .
...
procedure division.
...
   inquire screen-1-ef-4 cursor-col ws-cur-col cursor-row ws-cur-row
...
```
