## Record-Data

This property allows you to set or retrieve the text of all the columns in a Tree-View with the [Table-View](../Styles/Table-View) style.

The [Data-Columns](./Data-Columns) property must be properly set.

When the [Table-View](../Styles/Table-View) style is not set, this property is equivalent to [Item-Text](./Item-Text).

**Example** - Inquire the item text of a tree-view table-view item

```cobol
...
procedure division.
...
  inquire screen-1-tv-1 item 1 record-data wk-item-text
...
```
