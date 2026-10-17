## Visible

This property assumes a value of "0" if the Web-Browser control is not visible, "1" if it is visible.

**Example** - Define a web-browser control initially invisible and set it visible in procedure division

```cobol
screen section.
...
  03 screen-1-wb-1 Web-Browser
     line 23.9
     column 2.2
     size 62.2 cells
     lines 25.6 cells
     font Arial-0v0
     help-id 2043
     id 15
     value "https://www.veryant.com"
     visible 0
     .
...
procedure division.
...
  modify screen-1-wb-1 visible 1
...
```
