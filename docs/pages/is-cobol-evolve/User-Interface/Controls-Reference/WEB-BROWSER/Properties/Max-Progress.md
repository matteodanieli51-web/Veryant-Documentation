## Max-Progress

This property shows the status of end of page loading, i.e. 100% of loading.

**Example** - Define a web-browser and check the loading progress

```cobol
working-storage section.
77 ws-progress  pic 9(3).
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
     value "https://www.yahoo.com"
     .
...
procedure division.
...
  inquire screen-1-wb-1 max-progress ws-progress
...
```
