## Search-Panel

This property specifies if the Grid must show the search panel over the column headings.

Possible values are:

|  |  |
| --- | --- |
| -1 | The search panel never appears on top of the Grid column headings, even if the user presses Ctrl-F. |
| 0 | The search panel appears on top of the Grid column headings when the user presses Ctrl-F. This is the default behavior.<br>Clearing the Grid content with the [Reset-Grid](./Reset-Grid) property removes the panel. |
| 1 | The search panel is always visible on top of the Grid column headings. The user can’t remove it, only the program can remove it by setting this property to 0 or -1.<br>Clearing the Grid content with the [Reset-Grid](./Reset-Grid) property clears the content of the search field. |

The icons on the buttons can be customized by providing custom PNG files as described in [Default icons](../../../Working-With-UI-and-Controls/Default-Icons).

The color of the matching text in filtered records can be customized by setting [iscobol.gui.matching_text_color](../../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) in the configuration.

**Example** - Define a grid with search panel

```cobol
screen section.
...
  03 screen-1-gr-1 Grid
     search-panel 1
     line 5.7
     column 3.1
     size 34.6 cells
     lines 15.5 cells
     id 1
     event procedure screen-1-gr-1-evt-proc
     boxed
     no-cell-drag
     centered-headings
     column-headings
     adjustable-rows
     adjustable-columns
     hscroll
     reordering-columns
     lm-on-columns 1
     row-dividers 1
     end-color 9
     heading-color 200
     heading-divider-color 12
     cursor-frame-width 3
     num-col-headings 1
     num-rows 5
     .
```
