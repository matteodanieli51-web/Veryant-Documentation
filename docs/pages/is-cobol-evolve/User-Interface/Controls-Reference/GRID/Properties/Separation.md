## Separation

This property defines the amount of blank space at the end of each column, in tenths of character. The default value depends on the configuration property [iscobol.gui.column_separation](../../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) whose default is 5.

Since this setting affects each column, a list of values is needed in order to determine how to draw them.

When values are enclosed between parentheses, a new list is defined at once. The snippet below specifies that the blank space at the end of the 1st column is one cell wide and at the end of the 2nd column is 1.5. The space at the end of the other columns, if any, will be 0.5 cells, the default.

```cobol
SEPARATION = (10, 15)
```

When a single value greater than or equal to zero is set, it is appended to the list. This is useful to define a user-defined appearance.

Setting the property to -1 resets the list

**Example** - Set separations by reading values from a Occurs

```cobol
procedure division.
...
modify screen-1-gr-1, separation = -1 | resets the list of values
perform varying columnidx from 1 by 1 until columnidx > columncount
   modify screen-1-gr-1, separation = separationAmount(columnidx)
end-perform
```
