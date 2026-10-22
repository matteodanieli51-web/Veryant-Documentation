## \{ [ Bold | High | Highlight ] | [ Low | Lowlight ] | Standard \}

|  |  |
| --- | --- |
| Bold, High, Highlight | The foreground color is forced to be bright. |
| Low, Lowlight | The foreground color is forced not to be bright. |
| Standard | The foreground color is left unchanged, the default. |

Setting this style with RGB colors has no effect. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example -** Define a check-box in screen section with bold foreground

```cobol
screen section.
...
  03 screen-1-cb-2 Check-Box
     line 27.0
     column 10.0
     size 116
     lines 30
     id 11
     title "Sugar for you coffee?"
     bold
     .
```
