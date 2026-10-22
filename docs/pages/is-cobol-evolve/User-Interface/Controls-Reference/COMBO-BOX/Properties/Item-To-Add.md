## Item-To-Add

When a value other than space is assigned to this property, a new item is added to the list.

Multiple values can be added at the same time, enclosed between parentheses.

The position of the new item can be controlled by the [Insertion-Index](./Insertion-Index) property.

**Example -** Add a new item to the combo-box

```cobol
procedure division.
...
   modify screen-1-co-1 item-to-add ("Blue", "Cyan", "Green").
...
```
