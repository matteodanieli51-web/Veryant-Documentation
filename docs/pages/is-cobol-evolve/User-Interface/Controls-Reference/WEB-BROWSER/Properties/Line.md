## Line

This property allows you to specify the Web-Browser control’s vertical position. The value is specified in cells. Decimal values are allowed.

When the Web-Browser control is part of a Screen Section, you may specify 'PLUS', '+' or '-' between the property name and its value. The vertical position of the Web-Browser control will be relative to the starting position of the prior Screen Section item.

When the Web-Browser control is part of a Screen Section and the LINE Property is omitted, LINE + 0 is implied.

```cobol
03  Label, LINE 2, LINES 5, (more screen options).
03  Web-Browser, LINE + 10, (more screen options).
```

The second control will be placed at line 12.

**Example** - Position a web-browser at line 8.0 on the screen section definition screen section.

```cobol
screen section
...
  03 screen-1-wb-1 Web-Browser
     line 8.0
     column 5.0
     color 7
     size 45.0 cells
     id 2
     .
```
