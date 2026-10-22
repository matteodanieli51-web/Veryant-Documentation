## Stop-Browser

When set to a non-zero value, the Web-Browser control stops loading the URI.

**Example** - Define a web-browser control and stop the page loading in procedure division

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
     status-text "Web browser status text"
     value "https://www.veryant.com"
     .
...
procedure division.
...
  modify screen-1-wb-1 stop-browser 1
...
```
