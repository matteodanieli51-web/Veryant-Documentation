## Query-Index

This property is used in conjunction with the [Item-Value](./Item-Value) and [Hidden-Data](./Hidden-Data) properties to retrieve the value of a specific item and to manage the hidden data bind to the item.

Each item is identified by a number that corresponds to its position in the list, starting at 1.

**Example -** Get the value of a combo-box item

```cobol
procedure division.
...
  modify  screen-1-co-1 query-index 3
  inquire screen-1-co-1 item-value my-item-var
...
```
