## Item-Color

This numeric property is used to set or retrieve the color of an item identified by the [Item](./Item) property. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

When the [Table-View](../Styles/Table-View) style is specified, the color extends to the whole line, over all the columns.

**Example** - Modify the color of a specific item of a tree-view to be background yellow and foreground black

```cobol
...
procedure division.
...
  modify screen-1-tv-1 item 1 item-color 481
...
```
