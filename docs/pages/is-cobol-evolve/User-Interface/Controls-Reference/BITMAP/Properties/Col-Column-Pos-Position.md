## [ Col | Column | Pos | Position ]

This property allows you to specify the Bitmap control’s horizontal position. The value is specified in cells. Decimal values are allowed.

When the Bitmap control is part of a Screen Section, you may specify 'PLUS', '+' or '-' between the property name and its value. The horizontal position of the Bitmap control will be relative to the ending position of the prior Screen Section item.

When the Bitmap control is part of a Screen Section and the COL Property is omitted, COL + 1 is implied.

```cobol
03  Label, COL 2, SIZE 12, (more screen options).
03  Bitmap, COL + 1, (more screen options).
```

The second control will be placed at column 14.

**Example -** Position a bitmap at column 5.0 on the screen section definition

```cobol
working-storage section.
...
77 icon-png pic s9(9) comp-4.
...
screen section.
...
  03 screen-1-bi-1 Bitmap
     line 8.0
     column 5.0
     size 17 pixels
     lines 36 pixels
     id 5
     bitmap-handle icon-png
     id 2
     .  .
```
