## Transparent

When this style is set, the label background becomes transparent.

**Example** - Define a label with white background that becomes transparent

```cobol
screen section.
...
  03 screen-1-la-1 Label
     line 3.5
     column 16.9
     size 26.5 cells
     lines 3.2 cells
     background-color 15
     id 25
     center
     transparent
     title "Main and Centered Title"
     .
```
