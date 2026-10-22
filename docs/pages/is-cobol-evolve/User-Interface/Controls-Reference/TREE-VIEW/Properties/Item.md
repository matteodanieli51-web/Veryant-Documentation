## Item

This property represents the item that the following properties refer to: [Bitmap-Number](./Bitmap-Number),  [Expand](./Expand), [Has-Children](./Has-Children), [Hidden-Data](./Hidden-Data), [Item-Text](./Item-Text) and [Next-Item](./Next-Item).

The value -1 represents the column heading of a [Table-View](../Styles/Table-View).

**Example** - Modify a tree-view item to expand it using the item property

```cobol
...
procedure division.
...
  modify screen-1-tv-1 item 1 expand tvflag-expand
...
```
