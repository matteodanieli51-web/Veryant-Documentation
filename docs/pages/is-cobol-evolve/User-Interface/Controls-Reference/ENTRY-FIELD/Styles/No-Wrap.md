## No-Wrap

This style causes [Multiline](./Multiline) entry-fields to show a horizontal scroll-bar when the text of a line goes over the field size. Without this style, the exceeding text is automatically moved to the next line and no scroll-bars are shown.

**Example** - Define an entry-field control that doesn’t wrap text

```cobol
screen section.
...
  03 screen-1-ef-4 Entry-Field
     line 40.6
     column 47.5
     size 16.2 cells
     lines 12.3 cells
     multiline
     no-wrap
     3-d
     .
```
