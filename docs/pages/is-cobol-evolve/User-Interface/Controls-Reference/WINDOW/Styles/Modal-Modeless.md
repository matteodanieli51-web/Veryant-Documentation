## \{ Modal | Modeless \}

|  |  |
| --- | --- |
| Modal | The user cannot activate a different window of the same application.<br>Only floating windows can have this style. |
| Modeless | The user can click another window of the same application to activate it. |

**Example** - Display a window with modeless style

```cobol
working-storage section.
77 window-handle1 usage handle of window.
...
procedure division.
...
  display floating  window background-low
          size 37.3
          lines 34.2
          line 20
          column 1
          cell width 10
          cell height 10
          label-offset 20
          control font Default-Font
          color 257
          modeless
          system menu
          title-bar
          no wrap
          title "Screen"
          handle window-handle1
          .
```
