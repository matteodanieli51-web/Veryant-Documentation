## Css-Style-Name

This property only has an effect in a WebDirect environment. See [Customize the WebDirect Layout using CSS](../../../../../is-cobol-EIS/WebDirect-option/Customize-the-WebDirect-Layout-using-CSS) for details.

**Example** - Define a split pane with css-style-name, applicable with WebDirect

```cobol
screen section.
...
  03 screen-1-sp-1 Split-pane
     line 2.8
     column 25.7
     size 34.6 cells
     lines 28.9 cells
     css-style-name "css-scrollpane"
     .
```
