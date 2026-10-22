## Refresh

When set to a non-zero value, the current URI is reloaded.

**Example** - Define a web-browser and refresh the loaded page in procedure division

```cobol
screen section.
...
  03 screen-1-wb-1 Web-Browser
     line 23.9
     column 2.2
     size 62.2 cells
     lines 25.6 cells
     help-id 2043
     id 15
     hint "Web Browser - Veryant"
     value "https://www.yahoo.com"
     .
...
procedure division.
...
  modify screen-1-wb-1 refresh 1
...
```
