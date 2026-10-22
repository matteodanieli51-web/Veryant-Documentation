## Item-To-Add

When a value other than space is assigned to this property, a new item is added to the list.

Multiple values can be added at the same time, enclosed between parentheses.

The position of the new item can be controlled with the [Insertion-Index](./Insertion-Index) property.

The value assigned to the property is split into columns according to the value set in the [Data-Columns](./Data-Columns) property. The values of all the columns are set simultaneously.

**Example** - Modify a list-box to insert a new item at the bottom of the list

```cobol
procedure division.
...
  modify screen-1-lb-1 item-to-add "new item"
...
```
