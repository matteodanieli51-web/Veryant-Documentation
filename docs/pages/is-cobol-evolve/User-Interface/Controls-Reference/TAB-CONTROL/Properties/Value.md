## Value

This property represents the value of the Tab-Control control.

When inquired, it returns the value that is currently represented.

When set, the Tab-Control control changes its look to represent it.

It is the currently selected Tab.

When set to zero, no Tab appears as selected.

**Example** - Get the selected page number

```cobol
...
procedure division.
...
  inquire screen-1-tc-1 value ws-tc-1
...
```
