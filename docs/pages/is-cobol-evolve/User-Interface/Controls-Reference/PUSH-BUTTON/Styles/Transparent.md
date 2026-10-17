## Transparent

When this style is set, the title background becomes transparent.

**Example** - Define a push-button with transparent title background

```cobol
screen section.
...
  03 screen-1-pb-3 Push-Button
     line 12.1
     column 15.2
     size 10.7 cells
     lines 5.3 cells
     id 3
     transparent
     title "Go..."
     .
```
