## Row-Hiding

This property hides the row identified by the [Y](./Y) property. The row is still available to the program, but is no longer visible to the user. Valid values are:

|  |  |
| --- | --- |
| 0 | Shows a row. |
| 1 | Hides a row. |

This property and the style [Adjustable-Rows](../Styles/Adjustable-Rows) cannot coexist.

**Example** - Hide the third row in a grid

```cobol
modify screen-1-gr-1 y=3 row-hiding=1
```
