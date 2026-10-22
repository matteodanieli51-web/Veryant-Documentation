## Required

When this style is set, the user will not be able to leave the field empty.

**Example** - Define an entry-field control as a mandatory field

```cobol
screen section.
...
  03 screen-1-ef-4 Entry-Field
     line 40.6
     column 47.5
     size 16.2 cells
     lines 12.3 cells
     hint "Do not leave this field empty, please"
     id 21
     required
     3-d
     .
```
