## Save-As-No-Prompt

When set to a non-zero value, the content of the current page is saved to the file specified by [File-Name](./File-Name). Only the html code is saved. If [File-Name](./File-Name) is not set, then a Save As dialog is shown.

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
  modify screen-1-wb-1
         file-name "c:\main-st\tmp\veryant.html"
         save-as-no-prompt 1.
```
