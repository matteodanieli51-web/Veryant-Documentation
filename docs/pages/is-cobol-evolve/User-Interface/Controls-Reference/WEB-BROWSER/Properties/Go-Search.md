## Go-Search

When set to a non-zero value, the URI set in the [iscobol.gui.web_browser.search](../../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) property is loaded. By default, "www.google.com" is loaded.

**Example** - Define a web-browser control, then in procedure division do a go search

```cobol
screen section.
...
  03 screen-1-wb-1 Web-Browser
     line 23.1
     column 2.0
     size 62.2 cells
     lines 25.6 cells
     id 15
     value "https://www.veryant.com"
     .
...
procedure division.
...
  modify screen-1-wb-1 go-search 1
...
```
