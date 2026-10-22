## Css-Style-Name

This property only has an effect in a WebDirect environment. See [Customize the WebDirect Layout using CSS](../../../../../is-cobol-EIS/WebDirect-option/Customize-the-WebDirect-Layout-using-CSS) for details.

**Example** - Define a grid with css-style-name, applicable with WebDirect

```cobol
screen section.
...
  03 screen-1-gr-1 Grid
     line 7.6
     column 5.8
     size 28.2 cells
     lines 19.8 cells
     id 1
     css-style-name "css-grid"
     no-box
     column-headings
     row-dividers 1
     heading-font Default-Font
     cursor-frame-width 3
     num-rows 5
     .
```
