## Hint

This property allows you to define the text shown in the window that pops up when the mouse pointer is placed on the Web-Browser control.

**Example** - Define a web-browser with hint message

```cobol
screen section.
...
  03 screen-1-wb-1 Web-Browser
     line 23.1
     column 2.0
     size 62.2 cells
     lines 25.6 cells
     font Arial-0v0
     help-id 2043
     id 15
     hint "Web Browser - Veryant"
     value "https://www.yahoo.com"
     .
```
