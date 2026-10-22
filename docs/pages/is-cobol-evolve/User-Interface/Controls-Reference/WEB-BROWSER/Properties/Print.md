## Print

When set to a non-zero value, a dialog is shown allowing the user to choose the active printer and eventually print the content of the page.

**Example** - Define a web-browser and send the page contents to print on procedure division

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

procedure division.
...
  modify screen-1-wb-1 print 1
...
```
