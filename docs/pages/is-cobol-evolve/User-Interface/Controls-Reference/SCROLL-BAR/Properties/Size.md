## Size

This property allows you to specify the size of the Scroll-Bar control. If the PIXEL keyword follows the value specified here, the size is computed in pixels. If either the CELLS keyword or the [Width-In-Cells](../Styles/Width-In-Cells) style is specified, the size is computed in CELLS. In this case decimal values are allowed and the cell size is based on the font used for the parent window.

If the value of the property is not followed by any keyword and the [Width-In-Cells](../Styles/Width-In-Cells) style is not set, the [Width-In-Cells](../Styles/Width-In-Cells) style is assumed.

**Example** - Define a scroll-bar with size property

```cobol
screen section.
...
  03 screen-1-sb-1 Scroll-Bar
     line 4.0
     column 41.5
     size 2.9 cells
     lines 39.7 cells
     color 229
     help-id 3029
     id 5
     hint "Scroll-bar hint"
     min-val 2
     max-val 20
     page-size 4
     .
...
```
