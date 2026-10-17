## Css-Base-Style-Name

This property only has an effect in a WebDirect environment. See [Customize the WebDirect Layout using CSS](../../../../../is-cobol-EIS/WebDirect-option/Customize-the-WebDirect-Layout-using-CSS) for details.

**Example -** Define a check-box in screen section with CSS base style name, applicable for EIS WebDirect only

```cobol
screen section.
...
  03 screen-1-cb-1 Check-Box
     line 22.0
     column 10.0
     size 11.0 cells
     lines 3.0 cells
     css-base-style-name "css-cb-style"
     id 10
     title "Sugar with the coffee?"
     .
```
