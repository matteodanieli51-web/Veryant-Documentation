## Column-Hiding

This property hides the column identified by the [X](./X) property. The column is still available to the program, but is no longer visible to the user. Valid values are:

|  |  |
| --- | --- |
| 0 | Shows a column. |
| 1 | Hides a column. |

**Example** - Hide the third column of a grid

```cobol
procedure division.
...
   modify screen-1-gr-1 x=3 column-hiding=1
```
