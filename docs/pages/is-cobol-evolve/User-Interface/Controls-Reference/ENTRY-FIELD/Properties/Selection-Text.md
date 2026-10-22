## Selection-Text

With this property it is possible to substitute the currently selected text in the entry-field with the one assigned to this property.

**Example** - Replace the selection text by another text

```cobol
screen section.
...
  03 screen-1-ef-4 Entry-Field
     line 40.6
     column 47.5
     size 16.2 cells
     lines 12.3 cells
     id 21
     3-d
     .
...
procedure division.
...
  modify screen-1-ef-4 selection-text "new text"
...
```
