## Line

This property allows you to specify the Bitmap control’s vertical position. The value is specified in cells. Decimal values are allowed.

When the Bitmap control is part of a Screen Section, you may specify 'PLUS', '+' or '-' between the property name and its value. The vertical position of the Bitmap control will be relative to the starting position of the prior Screen Section item.

When the Bitmap control is part of a Screen Section and the LINE Property is omitted, LINE + 0 is implied.

```cobol
03  Label, LINE 2, LINES 5, (more screen options).
03  Bitmap, LINE + 10, (more screen options).
```

The second control will be placed at line 12.

**Example -** Define a bitmap on line 15.0

```cobol
screen section.
...
  03 screen-1-bi-3 Bitmap
     line 15.0
     column 33.0
     size 63 pixels
     lines 68 pixels
     id 9
     layout-data 17
     .
```
