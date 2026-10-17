## Search-Panel

This property specifies if the List-Box must show the search panel over the items.

Possible values are:

|  |  |
| --- | --- |
| -1 | The search panel never appears on top of the List-Box, even if the user presses Ctrl-F. |
| 0 | The search panel appears on top of the List-Box when the user presses Ctrl-F. This is the default behavior.<br>Clearing the List-Box content with the [Reset-List](./Reset-List) property removes the panel. |
| 1 | The search panel is always visible on top of the List-Box. The user can’t remove it, only the program can remove it by setting this property to 0 or -1.<br>Clearing the List-Box content with the [Reset-List](./Reset-List) property clears the content of the search field. |

The button icons can be customized by providing a custom PNG file as described in [Default icons](../../../Working-With-UI-and-Controls/Default-Icons).

The color of the matching text in filtered items can be customized by setting [iscobol.gui.matching_text_color](../../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) in the configuration.

**Example** - Define a list-box with search-panel

```cobol
working-storage section.
77 hmenu pic s9(9) comp-4.
...
screen section.
...
  03 screen-1-lb-1 List-Box
     pop-up menu hmenu
     line 5.7
     column 3.1
     size 34.6 cells
     lines 15.5 cells
     id 1
     iearch-panel 1
     .
...
```
