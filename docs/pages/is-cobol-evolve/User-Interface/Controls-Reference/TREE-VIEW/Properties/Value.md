## Value

This property represents the value of the Tree-View control.

When inquired, it returns the value that is currently represented.

When set, the Tree-View control changes its look to represent it.

It is the currently selected item.

**Example** - Get the value of the currently selected item from the tree-view

```cobol
working-storage section.
77 ws-tv   pic 9(3).
...
procedure division.
...
  inquire screen-1-tv-1 value ws-tv
...
```
