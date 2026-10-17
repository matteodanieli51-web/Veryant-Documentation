## Row-Protection

This property allows you to set or retrieve the protection setting of the row identified by the [Y](./Y) property.

Valid values are:

|  |  |
| --- | --- |
| 0 | The row is not protected at all. The user can access the cells and modify their value. This is the default setting. |
| 1 | The row is read-only. The user can move into any of the cells in the row, but cannot change their contents. |
| 2 | The row is protected. Any access to the cells in that row is denied. If the user tries to move into a protected row with the keyboard, it is skipped and the cursor goes to the next valid row. If a protected row is clicked, no action occurs. |

**Example** - Modify a grid to protect one of its rows

```cobol
procedure division.
...
  modify screen-1-gr-1 row-protection 1
...
```
