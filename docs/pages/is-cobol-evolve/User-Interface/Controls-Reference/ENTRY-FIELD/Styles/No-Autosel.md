## No-Autosel

When this style is set, the content of the entry-field is not automatically selected when you move to the control using the Tab or the Backtab keys. This is most commonly used on large multi-line entry fields.

**Example** - Define an entry-field control that does not autoselect contents when visited

```cobol
screen section.
...
  03 screen-1-ef-4 Entry-Field
     line 40.6
     column 47.5
     size 16.2 cells
     lines 12.3 cells
     id 21
     no-autosel
     3-d
     .
```
