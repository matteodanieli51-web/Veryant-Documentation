## Column-Hiding

This property hides the column identified by the [X](./X) property. The column is still available to the program, but is no longer visible to the user. Valid values are:

|  |  |
| --- | --- |
| 0 | Shows a column. |
| 1 | Hides a column. |

This property works only on tree-views with the [Table-View](../Styles/Table-View) style.

It’s not possible to hide the first column. The [X](./X) property must be set to a value greater than 1 for this property to have effect.

**Example** - Hide the third column of the tree-view

```cobol
procedure division.
...
    modify screen-1-tv-1 x=3 column-hiding=1
```
