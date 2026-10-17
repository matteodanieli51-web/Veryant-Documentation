## \{ Auto-Resize | Resizable \}

When either the AUTO-RESIZE style or the RESIZABLE style is set, the window can be resized by the user. Minimum and maximum size are defined by the [Min-Size](../Properties/Min-Size), [Min-Lines](../Properties/Min-Lines), [Max-Size](../Properties/Max-Size) and [Max-Lines](../Properties/Max-Lines) properties.

|  |  |
| --- | --- |
| Auto-Resize | The window can be resized and scroll-bars are automatically provided if the window becomes smaller than its content. No event is fired. |
| Resizable | The window can be resized and the [NTF-RESIZED](../Events/NTF-RESIZED) event is fired. Recalculating the content position and size is committed to the programmer. |

For windows without the RESIZABLE style, [Min-Size](../Properties/Min-Size), [Min-Lines](../Properties/Min-Lines), [Max-Size](../Properties/Max-Size) and [Max-Lines](../Properties/Max-Lines) are ignored.

**Example** - Display a window with resizable style and maximum and minimum dimensions when resizing

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
          handle window-handle
          .
...
```
