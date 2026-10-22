## \{ [ Bold | High | Highlight ] | [ Low | Lowlight ] | Standard \}

|  |  |
| --- | --- |
| Bold, High, Highlight | The foreground color is forced to be bright. |
| Low, Lowlight | The foreground color is forced not to be bright. |
| Standard | The foreground color is left unchanged, the default. |

Setting this style with RGB colors has no effect. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Define an entry-field control with bold foreground

```cobol
screen section.
...
  03 screen-1-ef-5 Entry-Field
     line 50.1
     column 19.9
     size 10.7 cells
     lines 3.0
     id 23
     3-d
     bold
     .
```
