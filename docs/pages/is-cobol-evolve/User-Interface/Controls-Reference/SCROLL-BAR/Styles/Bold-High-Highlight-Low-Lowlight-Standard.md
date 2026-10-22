## \{ [ Bold | High | Highlight ] | [ Low | Lowlight ] | Standard \}

|  |  |
| --- | --- |
| Bold, High, Highlight | The foreground color is forced to be bright. |
| Low, Lowlight | The foreground color is forced not to be bright. |
| Standard | The foreground color is left unchanged, the default. |

Setting this style with RGB colors has no effect. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Define a scroll-bar with low background and bold foreground

```cobol
screen section.
...
  03 screen-1-sb-1 Scroll-Bar
     line 2.8
     column 25.7
     size 2.0 cells
     lines 28.9 cells
     help-id 1036
     id 10
     background-low
     bold
     .
```
