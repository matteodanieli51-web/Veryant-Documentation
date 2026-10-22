## \{ [ Bold | High | Highlight ] | [ Low | Lowlight ] | Standard \}

|  |  |
| --- | --- |
| Bold, High, Highlight | The foreground color is forced to be bright. |
| Low, Lowlight | The foreground color is forced not to be bright. |
| Standard | The foreground color is left unchanged, the default. |

Setting this style with RGB colors has no effect. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Define a label with bold foreground

```cobol
screen section.
...
  03 screen-1-la-1 Label
     bold
     line 3.5
     column 16.9
     size 26.5 cells
     lines 3.2 cells
     id 25
     title "This is the main Title"
     .
```
