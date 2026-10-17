## Selection-Start-Col

This property returns the X start position of the selection of text in a [Multiline](../Styles/Multiline) Entry-Field.

**Example** - Get the selection start column and row from a multiline entry-field control

```cobol
working-storage section.
...
77 ws-sel-start-col pic 9(3).
77 ws-sel-start-row pic 9(3).
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
     max-lines 4.
...
procedure division.
...
  inquire screen-1-ef-4 selection-start-col ws-sel-start-col
                        selection-start-row ws-sel-start-row
...
```
