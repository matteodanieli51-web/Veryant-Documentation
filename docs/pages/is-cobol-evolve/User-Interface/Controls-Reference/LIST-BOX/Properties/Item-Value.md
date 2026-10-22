## Item-Value

This property allows you to retrieve the value of the list-box item identified by the [Query-Index](./Query-Index) property.

**Example** - Retrieve the text of the third item in the list

```cobol
procedure division.
...
  modify screen-1-lb-1 query-index 3
  inquire screen-1-lb-1 item-value w-value
...
```
