## Title-Bar

When this style is set, an empty title bar is shown. Use the [Title](../Properties/Title) property to set the title.

**Example** - Display a window with title-bar style

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
```
