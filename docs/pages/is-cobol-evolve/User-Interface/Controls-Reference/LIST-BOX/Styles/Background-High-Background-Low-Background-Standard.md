## \{ Background-High | Background-Low | Background-Standard \}

|  |  |
| --- | --- |
| Background-High | The background color is forced to be bright. |
| Background-Low | The background color is forced not to be bright. |
| Background-Standard | The background color is left unchanged, the default. |

Setting this style with RGB colors has no effect. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Define a list-box with low background and bold foreground

```cobol
screen section.
...
  03 screen-1-lb-1 List-Box
     background-low
     bold
     line 5.7
     column 3.1
     size 34.6 cells
     lines 15.5 cells
     id 1
     .
```
