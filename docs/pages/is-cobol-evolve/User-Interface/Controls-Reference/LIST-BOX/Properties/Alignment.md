## Alignment

This property defines the alignment for every single column of the list-box. Allowed values are:

|  |  |
| --- | --- |
| "L" | The content of the column is left aligned. Leading spaces are ignored. |
| "R" | The content of the column is right aligned. Trailing spaces are ignored. |
| "C" | The content of the column is centered. Leading and trailing spaces are ignored. |
| "U" | The content of the column is left aligned. Leading spaces are kept. |

Since this setting affects the alignment of each of the columns, a list of values is needed in order to determine how to align them.

When values are enclosed between parentheses, a new list is defined at once. The snippet below specifies that the 1st column is left aligned and the 2nd column is centered. The other columns, if any, will be unaligned, the default.

```cobol
ALIGNMENT = ("L", "C")
```

When set to space or spaces, the list is reset.

Any other single value is appended to the list. This is useful to define a user-defined appearance.

**Example** - Define column alignments by reading them from a Occurs

```cobol
procedure division
...
modify screen-1-lb-1, alignment = spaces | Resets the list of values
perform varying columnidx from 1 by 1 until columnidx > columncount
   modify screen-1-lb-1, alignment = columnalignment(columnidx) | Sets the alignment of the next column
end-perform
```
