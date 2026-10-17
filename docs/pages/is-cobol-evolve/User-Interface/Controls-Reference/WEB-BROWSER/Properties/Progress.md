## Progress

This property shows the status of page loading, in terms of percentage.

**Example** - Define a web-browser and check in procedure division the loading progress percent

```cobol
working-storage section.
77 ws-progress pic 9(3).
...
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

procedure division.
...
  inquire screen-1-wb-1 progress ws-progress
...
```
