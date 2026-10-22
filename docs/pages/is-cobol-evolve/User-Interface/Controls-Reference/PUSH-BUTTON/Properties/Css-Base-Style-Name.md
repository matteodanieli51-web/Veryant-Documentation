## Css-Base-Style-Name

This property only has an effect in a WebDirect environment. See [Customize the WebDirect Layout using CSS](../../../../../is-cobol-EIS/WebDirect-option/Customize-the-WebDirect-Layout-using-CSS) for details.

**Example** - Define a push-button with css-base-style-name, applicable with WebDirect

```cobol
screen section.
...
  03 screen-1-pb-2 Push-Button
     line 5.2
     column 18.3
     size 9.3 cells
     lines 2.4 cells
     id 2
     css-base-style-name "css-pb-style"
     title "Accept"
     .
```
