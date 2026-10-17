## Css-Style-Name

This property only has an effect in a WebDirect environment. See [Customize the WebDirect Layout using CSS](../../../../../is-cobol-EIS/WebDirect-option/Customize-the-WebDirect-Layout-using-CSS) for details.

**Example -** Define a combo-box in screen section with a css-style-name, valid with EIS WebDirect

```cobol
screen section.
...
03 screen-1-co-1 Combo-Box
   line 19.4
   column 23.2
   size 11.9 cells
   lines 11.1
   color 265
   id 13
   css-style-name "cb-style"
   3-d
   drop-down
   .
```
