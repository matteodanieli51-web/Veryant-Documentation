## \{ Background-High | Background-Low | Background-Standard \}

|  |  |
| --- | --- |
| Background-High | The background color is forced to be bright. |
| Background-Low | The background color is forced not to be bright. |
| Background-Standard | The background color is left unchanged, the default. |

Setting this style with RGB colors has no effect. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Define an entry-field control with background-high

```cobol
screen section.
...
  03 screen-1-ef-5 Entry-Field
     line 50.1
     column 19.9
     size 10.7 cells
     lines 3.0 cells
     id 23
     3-d
     background-high
     .
```
