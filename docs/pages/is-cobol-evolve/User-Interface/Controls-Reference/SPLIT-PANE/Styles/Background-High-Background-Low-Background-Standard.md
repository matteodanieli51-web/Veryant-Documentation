## \{ Background-High | Background-Low | Background-Standard \}

|  |  |
| --- | --- |
| Background-High | The background color is forced to be bright. |
| Background-Low | The background color is forced not to be bright. |
| Background-Standard | The background color is left unchanged, the default. |

Setting this style with RGB colors has no effect. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Define a split pane with low background and bold foreground

```cobol
screen section.
...
  03 screen-1-sp-1 Split-pane
     line 2.8
     column 25.7
     size 2.0 cells
     lines 28.9 cells
     background-low
     bold
     .
```
