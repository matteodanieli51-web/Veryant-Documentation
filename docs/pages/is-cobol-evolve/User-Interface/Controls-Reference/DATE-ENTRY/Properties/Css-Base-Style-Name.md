## Css-Base-Style-Name

This property only has an effect in a WebDirect environment. See [Customize the WebDirect Layout using CSS](../../../../../is-cobol-EIS/WebDirect-option/Customize-the-WebDirect-Layout-using-CSS) for details.

**Example -** Define a date-entry control with css base style name, valid for EIS WebDirect

```cobol
screen section.
...
  03 screen-1-de-1 Date-Entry
     line 21.2
     column 49.5
     size 12.6 cells
     lines 3.1 cells
     css-base-style-name "date-entry-style"
     id 17
     century-date
     value-format davf-yyyymmdd
     .
```
