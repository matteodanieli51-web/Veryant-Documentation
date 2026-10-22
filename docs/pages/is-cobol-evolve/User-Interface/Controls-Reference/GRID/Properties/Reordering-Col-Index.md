## Reordering-Col-Index

This property allows you to set or retrieve the order in which the columns are displayed, regardless of the setting of the [Display-Columns](./Display-Columns) property. Thus, the columns can be swapped by the user without affecting the way the source code is written. The value of this property is alphanumeric and consists in a serie of numbers separated by spaces indicating columns offsets.

**Example** - Get the new column ordering from a grid

```cobol
procedure division.
...
  inquire screen-1-gr-1 reordering-col-index ws-reord-index
...
```
