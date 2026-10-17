## Item-Text

This alphanumeric property is used to set or retrieve the text of an item identified by the [Item](./Item) property.

In Tree-Views with the [Table-View](../Styles/Table-View) style this property affects only the first column. To control the text of the whole item spread across multiple columns, use [Record-Data](./Record-Data).

**Example** - Modify the item text of a tree-view item

```cobol
...
procedure division.
...
  modify screen-1-tv-1 item 1 item-text "Text of Option 1"
...
```
