## Item-To-Add

When a value other than space is assigned to this property, a new item is added to the Tree-View control.

Multiple values can be added at the same time, enclosed between parentheses.

Each new item will be added according to the values set to the [Parent](./Parent) and [Placement](./Placement) properties.

If [Data-Columns](./Data-Columns) is set, the value of this property is distributed on the different columns defined by [Display-Columns](./Display-Columns).

**Example** - Add a new item to the tree-view

```cobol
...
working-storage section.
77 tv-item-hdl1 handle.
...
procedure division.
...
  modify screen-1-tv-1
         parent = null
         item-to-add "Option 1"
         giving tv-item-hdl
...
```
