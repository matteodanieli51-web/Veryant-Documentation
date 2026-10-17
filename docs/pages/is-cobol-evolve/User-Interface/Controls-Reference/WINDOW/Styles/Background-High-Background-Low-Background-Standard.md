## \{ Background-High | Background-Low | Background-Standard \}

|  |  |
| --- | --- |
| Background-High | The background color is forced to be bright. |
| Background-Low | The background color is forced not to be bright. |
| Background-Standard | The background color is left unchanged, the default. |

Setting this style with RGB colors has no effect. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Display a window with background-low and foreground low

```cobol
working-storage section.
77 window-handle usage handle of window.
...
procedure division.
...
  display standard  window background-low
          screen line 41
          screen column 91
          size 22.1
          lines 18.1
          cell width 10
          cell height 10
          label-offset 20
          control font Default-Font
          color 257
          resizable
          modeless
          title-bar
          no wrap
          title "Screen"
          max-size 50.0
          min-size 5.0
          min-lines 5.0
          max-lines 30.0
          low
          handle window-handle
          .
...
```
