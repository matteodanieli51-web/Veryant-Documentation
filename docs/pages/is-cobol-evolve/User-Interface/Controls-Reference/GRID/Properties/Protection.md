## Protection

This property allows you to set or retrieve the protection setting of the Grid control.

Valid values are:

|  |  |
| --- | --- |
| 0 | the Grid control is not protected at all. The user can access the cells and modify their value. This is the default setting. |
| 1 | the Grid control is read-only. The user can move to any of the cells, but cannot change their content. |
| 2 | the Grid control doesn’t allow you to select any cell, however it can still get the focus. |

**Example** - Modify a grid to be read-only in full

```cobol
procedure division.
...
  modify screen-1-gr-1 protection 1
...
```
