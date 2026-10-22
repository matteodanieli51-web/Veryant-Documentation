## Alignment

This property defines the alignment for each column of the table. Allowed values are:

|  |  |
| --- | --- |
| "L" | The content of the cell is left aligned. Leading spaces are ignored. |
| "R" | The content of the cell is right aligned. Trailing spaces are ignored. |
| "C" | The content of the cell is centered. Leading and trailing spaces are ignored. |
| "U" | The content of the cell is left aligned. Leading spaces are kept. |
| "H" | The content of the cell rendered as HTML.<br>Note -  leading spaces after the <html\> tag are trimmed. |

Since this setting affects the alignment of every single column, a list of values is needed in order to determine how to align them.

When values are enclosed between parentheses, a new list is defined at once. The snippet below specifies that the 1st column is left aligned and the 2nd column is centered. The other columns, if any, will be unaligned, the default.

```cobol
ALIGNMENT = ("L", "C")
```

When set to space or spaces, the list is reset.

When a single value other than space is set, it is appended to the list. This is useful to define a user-defined appearance.

This property affects also the alignment of column headings, unless either [Centered-Headings](../Styles/Centered-Headings) or [Column-Headings-Layout](./Column-Headings-Layout) are set as well.

In a column with Alignment "H" the text is vertically aligned to the top of the cell and can wrap, while with the other alignments the text is vertically centered in the cell and can't wrap.

In a column with Alignment "H" the cells show the HTML code if edited, so it's good practice to use this Alignment only on read-only columns.

**Example** - Define column alignments by reading them from a Occurs

```cobol
procedure division
...
modify screen-1-gr-1, alignment = spaces | Resets the list of values
perform varying columnidx from 1 by 1 until columnidx > columncount
   modify screen-1-gr-1, alignment = columnalignment(columnidx) | Sets the alignment of the next column
end-perform
```
