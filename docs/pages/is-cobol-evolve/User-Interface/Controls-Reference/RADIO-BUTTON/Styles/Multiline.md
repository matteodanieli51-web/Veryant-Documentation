## Multiline

When this style is set, the title can be displayed on multiple lines. This happens when the title does not fit the size of the Radio-Button control or when it contains a LineFeed character (x"0A").

**Example** - Define a radio button with multiline style to display the title on several lines if necessary

```cobol
screen section.
...
  03 screen-1-rb-2 Radio-Button
     line 20.6
     column 21.7
     size 10.9 cells
     lines 8.1 cells
     id 5
     multiline
     title "Alternative Option Number 2"
     .
```
