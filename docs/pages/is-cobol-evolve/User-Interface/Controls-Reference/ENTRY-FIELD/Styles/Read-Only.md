## Read-Only

When this style is set, the user cannot change the content of the Entry-Field control. However, he can scroll, select and copy it.

The configuration properties [iscobol.gui.entryfield.read_only_color](../../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) and [iscobol.gui.entryfield.read_only_cursor_arrow (boolean)](../../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) affect color and behavior of read-only Entry-Fields.

**Example** - Define an entry-field that does not allow input

```cobol
screen section.
...
  03 screen-1-ef-4 Entry-Field
     line 40.6
     column 47.5
     size 16.2 cells
     lines 12.3 cells
     id 21
     read-only
     3-d
     .
```
