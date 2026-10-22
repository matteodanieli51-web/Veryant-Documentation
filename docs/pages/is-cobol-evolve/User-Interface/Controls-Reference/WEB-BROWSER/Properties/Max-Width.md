## Max-Width

The control's maximum width. This setting will affect the Layout Manager’s behavior.

**Example** - Define a web-browser with layout data to resize in X and Y if the layout manager requests so, it also has maximum and minimum dimensions

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
     max-width 120.0
     min-width 30.0
     min-height 10.0
     max-height 50.0
     layout-data 17
     hint "Web Browser - Veryant"
     value "https://www.yahoo.com"
     .
```
