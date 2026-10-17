## \{ [ Bold | High | Highlight ] | [ Low | Lowlight ] | Standard \}

|  |  |
| --- | --- |
| Bold, High, Highlight | The foreground color is forced to be bright. |
| Low, Lowlight | The foreground color is forced not to be bright. |
| Standard | The foreground color is left unchanged, the default. |

Setting this style with RGB colors has no effect. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Display a Ribbon control with low background and bold foreground

```cobol
procedure division.
...
  display ribbon
          tab-to-add ( "Ops 1" "Ops 2" "Ops 3")
          bitmap-number ( 0 0 0)
          lines 4.4375
          color 134
          id 6
          hint "Ribbon tool bar"
          background-low
          bold
          collapse 1
          header-align 1
          bitmap-width 18
          bitmap-handle icon-png
          handle screen-1-rbn-1-hdl
          .
...
```
