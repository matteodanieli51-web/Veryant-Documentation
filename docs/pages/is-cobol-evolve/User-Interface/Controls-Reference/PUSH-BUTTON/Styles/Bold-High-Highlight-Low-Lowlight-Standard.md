## \{ [ Bold | High | Highlight ] | [ Low | Lowlight ] | Standard \}

|  |  |
| --- | --- |
| Bold, High, Highlight | The foreground color is forced to be bright. |
| Low, Lowlight | The foreground color is forced not to be bright. |
| Standard | The foreground color is left unchanged, the default. |

Setting this style with RGB colors has no effect. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Define a push-button with bold foreground and high background styles

```cobol
screen section.
...
  03 screen-1-pb-2 Push-Button
     line 5.2
     column 18.3
     size 93
     lines 24
     id 2
     background-high
     bold
     title "Disable"
     .
```
