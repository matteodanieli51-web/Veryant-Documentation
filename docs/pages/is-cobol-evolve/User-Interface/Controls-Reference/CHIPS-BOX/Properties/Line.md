## Line

This property allows you to specify the Chips-Box control’s vertical position. The value is specified in cells. Decimal values are allowed.

When the Chips-Box control is part of a Screen Section, you may specify 'PLUS', '+' or '-' between the property name and its value. The vertical position of the Chips-Box control will be relative to the starting position of the prior Screen Section item.

When the Chips-Box control is part of a Screen Section and the LINE Property is omitted, LINE + 0 is implied.

```cobol
03  Label, LINE 2, LINES 5, (more screen options).
03  Chips-Box, LINE + 10, (more screen options).
```

The second control will be placed at line 12.

**Example -** Position a chips-box at line 8.0 on the screen section definition

```cobol
screen section.
...
  03 screen-1-chip-1 Chips-Box
     line 8.0
     column 5.0
     color 7
     size 45.0 cells
     id 2
     .
```
