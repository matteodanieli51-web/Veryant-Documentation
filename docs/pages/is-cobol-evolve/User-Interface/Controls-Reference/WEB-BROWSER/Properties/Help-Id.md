## Help-Id

This property allows you to assign a unique ID to the Web-Browser control to be passed to the help processor.

See [Help automation](../../../Working-With-UI-and-Controls/Creating-a-control/Help-automation) for more information.

**Example** - Define a web-browser control with help-id

```cobol
screen section.
...
  03 screen-1-wb-1 Web-Browser
     line 23.1
     column 2.0
     size 62.2 cells
     lines 25.6 cells
     help-id 2043
     id 15
     value "https://www.veryant.com"
     .
```
