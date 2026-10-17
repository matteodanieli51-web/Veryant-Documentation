## Cell-Protection

This property allows you to set or retrieve the protection setting of the cell identified by the [X](./X) and [Y](./Y) properties.

Valid values are:

|  |  |
| --- | --- |
| 0 | The cell is not protected at all. The user can access the cell and modify its value. This is the default setting. |
| 1 | The cell is read-only. The user can move into the cell, but cannot change its content. |
| 2 | The cell is protected. Any access to the cell is denied. If the user tries to move into a protected cell with the keyboard, it is skipped and the cursor goes to the next valid cell. If protected cell is clicked, no action occurs. |

**Example** - Make a cell read only

```cobol
procedure division.
...
  modify screen-1-gr-1 x = 1, y = 2 cell-protection 1
...
```
