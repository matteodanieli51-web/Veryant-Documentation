## \{ Background-High | Background-Low | Background-Standard \}

|  |  |
| --- | --- |
| Background-High | The background color is forced to be bright. |
| Background-Low | The background color is forced not to be bright. |
| Background-Standard | The background color is left unchanged, the default. |

Setting this style with RGB colors has no effect. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Define a web-browser control with high background and bold foreground

```cobol
screen section.
...
  03 screen-1-wb-1 Web-Browser
     line 23.9
     column 2.2
     size 62.2 cells
     lines 25.6 cells
     id 15
     background-high bold
     value "https://www.veryant.com"
     .
```
