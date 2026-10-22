## Reset-List

By assigning a value other than zero to this property, all the items are removed from the Tree-View control.

If a search panel is present on top of the Tree-View, it is either cleared or removed depending on the value of the [Search-Panel](./Search-Panel) property.

**Example** - Modify a tree-view to reset its contents

```cobol
...
procedure division.
...
  modify screen-1-tv-1 reset-list 1
...
```
