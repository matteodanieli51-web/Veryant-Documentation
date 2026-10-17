## Css-Style-Name

This property only has an effect in a WebDirect environment. See [Customize the WebDirect Layout using CSS](../../../../../is-cobol-EIS/WebDirect-option/Customize-the-WebDirect-Layout-using-CSS) for details.

**Example -** Define a bar on screen section with a css-style-name

```cobol
screen section.
...
  03 screen-1-br-4 Bar
     line 5.5
     column 2.7
     size 9.6 cells
     id 4
     css-style-name "css-bars"
     .
```
