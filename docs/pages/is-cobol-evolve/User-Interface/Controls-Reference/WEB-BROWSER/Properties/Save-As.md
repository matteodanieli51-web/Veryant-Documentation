## Save-As

When set to a non-zero value, a Save As dialog is shown allowing the user to save the content of the current page to a file. Only the html code is saved.

**Example** - Define a web-browser control and save it as html file in procedure division

```cobol
screen section.
...
  03 screen-1-wb-1 Web-Browser
     line 23.1
     column 2.0
     size 62.2 cells
     lines 28.0 cells
     id 15
     event-list ( cmd-goto cmd-help )
     exclude-event-list 1
     value "https://www.veryant.com"
     .
...
procedure division.
...
  modify screen-1-wb-1 save-as 1.
```
