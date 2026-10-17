## Multiline

When this style is set, the content of the entry-field cannot be scrolled horizontally anymore and is automatically span to multiple lines.

When the [Lines](../Properties/Lines) property is set to a value greater than 2, this style is implied, unless the CELLS clause is specified or the [Height-In-Cells](./Height-In-Cells) style is set.

The [Value](../Properties/Value) of a multiline entry-field is returned as a single string obtained from the concatenation of the multiple lines separated by the character specified by the configuration property [iscobol.gui.ef_lineseparator](../../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties).

**Example** - Define an entry-field control with multiline style

```cobol
screen section.
...
  03 screen-1-ef-4 Entry-Field
     line 40.6
     column 47.5
     size 16.2 cells
     lines 12.3 cells
     id 21
     multiline
     3-d
     max-lines 4.
```
