## Css-Base-Style-Name

This property only has an effect in a WebDirect environment. See [Customize the WebDirect Layout using CSS](../../../../../is-cobol-EIS/WebDirect-option/Customize-the-WebDirect-Layout-using-CSS) for details.

**Example** - Define a Java-bean with css base style name, applicable with WebDirect

```cobol
screen section.
...
  03 screen-1-jb-1 Java-Bean
     line 5.1
     column 4.5
     size 33.5 cells
     lines 25.1 cells
     background-color 8
     foreground-color 3
     id 1
     no-box
     css-base-style-name "css-java-bean"
     .
...
```
