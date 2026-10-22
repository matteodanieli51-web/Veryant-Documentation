## Line

This property allows you to specify the Tab-Control control’s vertical position. The value is specified in cells. Decimal values are allowed.

When the Tab-Control control is part of a Screen Section, you may specify 'PLUS', '+' or '-' between the property name and its value. The vertical position of the Tab-Control control will be relative to the starting position of the prior Screen Section item.

When the Tab-Control control is part of a Screen Section and the LINE Property is omitted, LINE + 0 is implied.

```cobol
03  Label, LINE 2, LINES 5, (more screen options).
03  Tab-Control, LINE + 10, (more screen options).
```

The second control will be placed at line 12.

Example - Position a tab-control at line 8.0 on the screen section definition

```cobol
  03 screen-1-tc-1 Tab-Control
     line 8.0
     column 5.0
     color 7
     size 45.0 cells
     id 2
     .
```
