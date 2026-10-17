## Cursor

This property set or retrieves the cursor position inside an entry-field part of a Drop-Down combo-box. If the value "-1" is assigned to this property, the whole text in the entry-field is selected and the cursor is positioned at the end of it.

**Example -** Define a combo-box in screen section and define the cursor to position and the end of the entry-field part and select all value

```cobol
screen section.
...
03 screen-1-co-1 Combo-Box
   line 19.4
   column 23.2
   size 11.9 cells
   lines 11.1
   color 265
   id 13
   cursor -1
   3-d
   drop-down
   .
```
