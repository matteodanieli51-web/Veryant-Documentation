## Status-Text

This property allows you to show the text in the Status bar.

**Example** - Define a web-browser control with status text

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
     hint "Web Browser - Veryant"
     status-text "Web browser status text"
     value "https://www.veryant.com"
     .
```
