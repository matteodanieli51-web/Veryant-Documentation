## [ Col | Column | Pos | Position ]

This property allows you to specify the Java-Bean control’s horizontal position. The value is specified in cells. Decimal values are allowed.

When the Java-Bean control is part of a Screen Section, you may specify 'PLUS', '+' or '-' between the property name and its value. The horizontal position of the Java-Bean control will be relative to the ending position of the prior Screen Section item.

When the Java-Bean control is part of a Screen Section and the COL Property is omitted, COL + 1 is implied.

```cobol
03  Label, COL 2, SIZE 12, (more screen options).
03  Java-Bean, COL + 1, (more screen options).
```

The second control will be placed at column 14.

**Example** - Position a java-bean at column 5.0 on the screen section definition screen section.

```cobol
screen section.
...
  03 chart1
     java-bean no-box
     line 8.0
     column 5.0
     color 7
     size 45.0 cells
     id 2
     .
```
