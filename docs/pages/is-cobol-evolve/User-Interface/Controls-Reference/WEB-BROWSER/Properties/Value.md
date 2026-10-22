## Value

This property represents the value of the Web-Browser control.

When inquired, it returns the value that is currently represented.

When set, the Web-Browser control changes its look to represent it.

If the value starts with "<html", then it’s considered as HTML content to be rendered, otherwise it’s considered a URI to browse to.

**Example** - Define a web-browser control and set the URL value

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
     value "https://www.veryant.com"
     .
```
