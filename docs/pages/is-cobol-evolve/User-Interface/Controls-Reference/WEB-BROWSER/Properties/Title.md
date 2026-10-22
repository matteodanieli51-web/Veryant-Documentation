## Title

This property allows you to retrieve the title of the currently loaded URI.

**Example** - Define a web-browser control and inquire the title in procedure division

```cobol
working-storage section.
77 ws-title   pic x(255).
...
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
     status-text "Web browser status text"
     value "https://www.veryant.com"
     .
...
procedure division.
...
  inquire screen-1-wb-1 title ws-title
...
```
