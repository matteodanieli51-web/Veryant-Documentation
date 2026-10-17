## Thumb-Position

This property allows you to set or retrieve the first visible item in a list-box. Its value is the index of the item, not the text.

Use this property only when the [Paged](../Styles/Paged) style is not set.

**Example** - retrieve the text of the first visible item in the list

```cobol
procedure division.
...
   inquire screen-1-lb-1 thumb-position w-index
   modify screen-1-lb-1 query-index w-index
   inquire screen-1-lb-1 item-value w-text
...
```
