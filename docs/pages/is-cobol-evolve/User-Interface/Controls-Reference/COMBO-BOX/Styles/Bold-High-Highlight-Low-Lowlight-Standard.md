## \{ [ Bold | High | Highlight ] | [ Low | Lowlight ] | Standard \}

|  |  |
| --- | --- |
| Bold, High, Highlight | The foreground color is forced to be bright. |
| Low, Lowlight | The foreground color is forced not to be bright. |
| Standard | The foreground color is left unchanged, the default. |

Setting this style with RGB colors has no effect. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example -** Define a combo-box with bold foreground color

```cobol
screen section.
...
  03 screen-1-co-1 Combo-Box
     bold
     line 19.0
     column 23.0
     size 12.0 cells
     lines 11.0
     id 13
     3-d
     drop-down
     .
```
