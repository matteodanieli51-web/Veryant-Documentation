## Go-Forward

When set to a non-zero value, the next document in the history is loaded.

**Example** - Define a web-browser control, then in procedure division do a go forward

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
  modify screen-1-wb-1 go-forward 1
...
```
