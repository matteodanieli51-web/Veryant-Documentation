## Use-Alt

If this style is set, the Alt key is not trapped by the control and can be intercepted by the COBOL program.

**Example** - Define a web-browser that allows you to intercept the ALT, RETURN and TAB keys

```cobol
screen section.
...
  03 screen-1-wb-1 Web-Browser
     line 23.9
     column 2.2
     size 62.2 cells
     lines 25.6 cells
     id 15
     use-alt
     use-return
     use-tab
     value "https://www.veryant.com"
     .
```
