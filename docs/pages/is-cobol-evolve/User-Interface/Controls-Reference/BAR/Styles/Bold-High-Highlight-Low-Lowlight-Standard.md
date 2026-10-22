## \{ [ Bold | High | Highlight ] | [ Low | Lowlight ] | Standard \}

|  |  |
| --- | --- |
| Bold, High, Highlight | The foreground color is forced to be bright. |
| Low, Lowlight | The foreground color is forced not to be bright. |
| Standard | The foreground color is left unchanged, the default. |

Setting this style with RGB colors has no effect. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example -** Define 3 bars with different foreground intensity, one BOLD, one LOW and one STANDARD

```cobol
screen section.
...
  03 screen-1-br-1 Bar
     line 5.0
     column 2.0
     size 9.0 cells
     id 1
     bold
     .

  03 screen-1-br-2 Bar
     line 7.0
     column 2.0
     size 9.0 cells
     id 2
     low
     .

  03 screen-1-br-3 Bar
     line 9.0
     column 2.0
     size 9.0 cells
     id 3
     standard
     .
```
