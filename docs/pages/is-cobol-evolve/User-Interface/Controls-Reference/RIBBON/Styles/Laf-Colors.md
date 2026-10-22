## Laf-Colors

When this style is set, the runtime doesn’t apply any default colors to the Ribbon and ignores properties and styles that alter the color, so the Ribbon uses the colors set in the active Look & Feel.

Specifically, the following properties are ignored:

- [Background-Color](../Properties/Background-Color)
- [Color](../Properties/Color)
- [Foreground-Color](../Properties/Foreground-Color)
- [Gradient-Color-1](../Properties/Gradient-Color-1)
- [Gradient-Color-2](../Properties/Gradient-Color-2)
- [Gradient-Orientation](../Properties/Gradient-Orientation)

And the following styles are ignored:

- [{ Background-High | Background-Low | Background-Standard }}](./Background-High-Background-Low-Background-Standard)
- [{ [ Bold | High | Highlight ] | [ Low | Lowlight ] | Standard }}](./Bold-High-Highlight-Low-Lowlight-Standard)

**Example** - Display a ribbon that will use colors set by the active Look & Feel

```cobol
procedure division.
...
  display ribbon
          laf-colors
          tab-to-add ( "Ops 1" "Ops 2" "Ops 3")
          bitmap-number ( 0 0 0)
          lines 4.4375
          color 134
          id 6
          hint "Ribbon tool bar"
          height-in-cells
          collapse 1
          header-align 1
          no-tab
          bitmap-width 18
          bitmap-handle icon-png
          handle screen-1-rbn-1-hdl
          .
...
```
