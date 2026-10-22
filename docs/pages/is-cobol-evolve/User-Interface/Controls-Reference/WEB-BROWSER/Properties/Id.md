## Id

This property allows you to assign a unique ID to the Web-Browser control.

This is the information the variables *event-control-id* and *control-id* refer to. Both variables are defined in [iscrt.def](../../../../Appendices/Copybooks/iscrt.def).

**Example** - Define a web-browser with an ID

```cobol
screen section.
...
  03 screen-1-wb-1 Web-Browser
     line 23.1
     column 2.0
     size 62.2 cells
     lines 25.6 cells
     font Arial-0v0
     help-id 2043
     id 15
     value "https://www.yahoo.com"
     .
```
