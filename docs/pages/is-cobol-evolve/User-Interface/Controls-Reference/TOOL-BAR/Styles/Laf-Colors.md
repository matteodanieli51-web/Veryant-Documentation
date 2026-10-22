## Laf-Colors

When this style is set, the runtime doesn’t apply any default colors to the Tool-Bar and ignores properties and styles that alter the color, so the Tool-Bar uses the colors set in the active Look & Feel.

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

**Example** - Display a tool-bar that will use colors set by the active Look & Feel

```cobol
procedure division.
...
  display tool-bar laf-colors
          background-high
          bold
          cell width 10
          cell height 10
          control font Default-Font
          color 232
          lines 4.0
          layout-manager lm-resize
          handle screen-1-tb-1-hdl
          .
...
```
