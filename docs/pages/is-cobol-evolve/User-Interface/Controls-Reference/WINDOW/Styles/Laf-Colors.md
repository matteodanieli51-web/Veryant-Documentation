## Laf-Colors

When this style is set, the runtime doesn’t apply any default colors to the window and ignores properties and styles that alter the color, so the window uses the colors set in the active Look & Feel.

Specifically, the following properties are ignored:

- [Background-Color](../Properties/Background-Color)
- [Color](../Properties/Color)
- [Foreground-Color](../Properties/Foreground-Color)
- [Gradient-Color-1](../Properties/Gradient-Color-1)
- [Gradient-Color-2](../Properties/Gradient-Color-2)
- [Gradient-Orientation](../Properties/Gradient-Orientation)

And the following styles are ignored:

- [{ Background-High | Background-Low | Background-Standard }](./Background-High-Background-Low-Background-Standard)
- [{ [ Bold | High | Highlight ] | [ Low | Lowlight ] | Standard }](./Bold-High-Highlight-Low-Lowlight-Standard)
- [{ User-Colors | [ User-Gray | User-White ] }](./User-Colors-User-Gray-User-White)

**Example** - Display a window that will use colors set by the active Look & Feel

```cobol
working-storage section.
77 window-handle usage handle of window.
...
procedure division.
...
  display standard  window background-low
          laf-colors
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
