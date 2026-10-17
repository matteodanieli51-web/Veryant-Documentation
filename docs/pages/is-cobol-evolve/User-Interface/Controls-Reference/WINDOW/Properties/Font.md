## Font

The font handle set to this property will be used for character-based DISPLAY Statements.

See [Font management](../../../Working-With-UI-and-Controls/Creating-a-control/Font-management/Font-management) for information on how to obtain a font handle for this property.

**Example** - Display a standard window and use the font property

```cobol
working-storage section.
77 window-handle usage handle of window.
...
procedure division.
...
  display standard  window background-low
          screen line 41
          screen column 91
          size 64.0
          lines 55.8
          cell width 10
          cell height 10
          label-offset 20
          font Default-Font
          color 260
          resizable
          modeless
          title-bar
          no wrap
          title "Screen"
          handle window-handle
          .
```
