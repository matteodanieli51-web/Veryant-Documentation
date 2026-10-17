## Cursor

This property set or retrieves the cursor position inside an entry-field. If the value "-1" is assigned to this property, the whole text in the entry-field is selected and the cursor is positioned at the end of it.

Note that if it is necessary to position the cursor in a multi line entry-field, the [Cursor-Col](./Cursor-Col) and [Cursor-Row](./Cursor-Row) properties should be used.

**Example** - Get the cursor position of an entry-field control

```cobol
working-storage section.
77 ws-cur-col pic 9(3).
...
screen section.
...
  03 screen-1-ef-2 Entry-Field
     line 35.5
     column 49.7
     size 13.1 cells
     lines 4.6 cells
     color 296
     id 19
     3-d
     .
...
procedure division.
...
  inquire screen-1-ef-2 cursor ws-cur-col
...
```
