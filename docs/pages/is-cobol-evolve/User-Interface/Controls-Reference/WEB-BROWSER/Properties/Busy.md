## Busy

When inquired, this property returns 1 if the Web-Browser control is still busy loading the URI (Uniform Resource Identifier), otherwise it returns 0.

**Example** - Define a web-browser control and check if it is busy

```cobol
working-storage section.
...
77 ws-busy pic 9.
...
screen section.
...
  03 screen-1-wb-1 Web-Browser
     line 23.1
     column 2.0
     size 62.2 cells
     lines 28.0 cells
     id 15
     value "https://www.veryant.com"
     .
...
procedure division.
...
  inquire screen-1-wb-1 busy ws-busy
  if ws-busy not = 1
     display message "Done loading the URL"
  end-if.
...
```
