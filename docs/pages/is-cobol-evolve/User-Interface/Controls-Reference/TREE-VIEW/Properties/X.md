## X

This property is used to identify a column of a tree-view control with the [Table-View](../Styles/Table-View) style. It is always used in conjunction with other properties to set or retrieve the value of a column property, or in conjunction with the [Item](./Item) property, to set or retrieve the value of a cell.

The following properties can affect a specific column depending on the value of the X property:

- [Bitmap-Number](./Bitmap-Number)
- [Bitmap-Trailing](./Bitmap-Trailing)
- [Hidden-Data](./Hidden-Data)
- [Item-Hint](./Item-Hint)
- [Item-Text](./Item-Text)

**Example** - popuplate the column headings

```cobol
       procedure division.
       ...
           modify screen-1-tv-1 x=1 item=-1 item-text "Tree Col. 1"
           modify screen-1-tv-1 x=2 item=-1 item-text "Tree Col. 2"
           modify screen-1-tv-1 x=3 item=-1 item-text "Tree Col. 3"
       ...
```
