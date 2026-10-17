## Css-Base-Style-Name

This property only has an effect in a WebDirect environment. See [Customize the WebDirect Layout using CSS](../../../../../is-cobol-EIS/WebDirect-option/Customize-the-WebDirect-Layout-using-CSS) for details.

**Example** - Display a tool-bar with a base css style

```cobol
procedure division.
...
  display tool-bar
          cell width 10
          cell height 10
          control font Default-Font
          color 232
          lines 4.0
          css-base-style-name "css-tool-bar"
          handle screen-1-tb-1-hdl
```
