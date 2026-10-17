## Title

It is the description shown in the Window title bar. When set, the [Title-Bar](../Styles/Title-Bar) style is automatically set.

**Example** - Display a window with a specific title

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
          title "Main Menu"
          handle window-handle
          .
...
```
