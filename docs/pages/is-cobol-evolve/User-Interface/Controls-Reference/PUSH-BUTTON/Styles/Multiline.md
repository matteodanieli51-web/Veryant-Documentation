## Multiline

When this style is set, the title can be displayed on multiple lines. This happens when the title does not fit the size of the Push-Button control or when it contains a LineFeed character (x"0A").

**Example** - Define a push-button with long title to be displayed in 2 lines

```cobol
screen section.
...
  03 screen-1-pb-3 Push-Button
     line 12.1
     column 15.2
     size 10.7 cells
     lines 5.3 cells
     id 3
     multiline
     title "Cancel this Operation"
     cancel-button
     .
```
