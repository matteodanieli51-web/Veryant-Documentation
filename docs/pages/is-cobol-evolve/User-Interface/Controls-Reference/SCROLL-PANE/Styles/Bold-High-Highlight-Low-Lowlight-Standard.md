## \{ [ Bold | High | Highlight ] | [ Low | Lowlight ] | Standard \}

|  |  |
| --- | --- |
| Bold, High, Highlight | The foreground color is forced to be bright. |
| Low, Lowlight | The foreground color is forced not to be bright. |
| Standard | The foreground color is left unchanged, the default. |

Setting this style with RGB colors has no effect. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Define a scroll pane with backgound low and foreground bold

```cobol
screen section.
...
  03 screen-1-sp-2 Scroll-pane
     line 39.1
     column 12.8
     size 38.4 cells
     lines 3.8 cells
     background-low
     bold
     .
```
