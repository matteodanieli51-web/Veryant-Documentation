## Column-Protection

This property allows you to set or retrieve the protection setting of the column identified by the [X](./X) property.

Valid values are:

|  |  |
| --- | --- |
| 0 | The column is not protected at all. The user can access the cells and modify their value. This is the default setting. |
| 1 | The column is read-only. The user can move into any cell in the column, but cannot change its content. |
| 2 | The column is protected. Any access to the cells in that column is denied. If the user tries to move to a protected column with the keyboard, it is skipped and the cursor goes to the next valid column. If protected column is clicked, no action occurs. |

**Example** - Protect a column of a grid

```cobol
procedure division.
...
  modify screen-1-gr-1 x = 2 column-protection 1
...
```
