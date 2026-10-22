## Search-Panel

This property specifies if the Tree-View must show the search panel over the items tree.

Possible values are:

|  |  |
| --- | --- |
| -1 | The search panel never appears on top of the Tree-View, even if the user presses Ctrl-F. |
| 0 | The search panel appears on top of the Tree-View when the user presses Ctrl-F. This is the default behavior.<br>Clearing the Tree-View content with the [Reset-List](./Reset-List) property removes the panel. |
| 1 | The search panel is always visible on top of the Tree-View. The user can’t remove it, only the program can remove it by setting this property to 0 or -1.<br>Clearing the Tree-View content with the [Reset-List](./Reset-List) property clears the content of the search field. |

The X button icon can be customized by providing a custom PNG file as described in [Default icons](../../../Working-With-UI-and-Controls/Default-Icons).

When the search panel is removed, all the Tree-View items are collapsed.

**Example** - Define a tree-view with the search panel on top of it

```cobol
...
screen section.
...
  03 screen-1-tv-1 Tree-View
     line 2.7
     column 3.4
     size 20.8 cells
     lines 29.1 cells
     color 144
     id 2
     search-panel 1
     .
```
