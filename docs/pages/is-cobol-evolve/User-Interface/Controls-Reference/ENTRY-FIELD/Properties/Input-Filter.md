## Input-Filter

This property is used to provide a filter to limit the characters that the user can input in the Entry-Field.

The value of this property is a regular expression. Only characters that match the regular expression will appear in the Entry-Field when the user types or pastes them.

**Example -** Create an entry-field that accepts only letters and numbers (no grave letters or special characters allowed)

```cobol
screen section.
...
  03 screen-1-ef-2 Entry-Field
     line 29.0
     column 49.5
     size 13.1 cells
     lines 4.6 cells
     id 19
     3-d
     input-filter "[\sA-Za-z0-9]+"
     .
```
