## \{ Background-High | Background-Low | Background-Standard \}

|  |  |
| --- | --- |
| Background-High | The background color is forced to be bright. |
| Background-Low | The background color is forced not to be bright. |
| Background-Standard | The background color is left unchanged, the default. |

Setting this style with RGB colors has no effect. See "[Color management](../../../Working-With-UI-and-Controls/Creating-a-control/Color-management/Color-management)" for further details.

**Example** - Define a Java-bean with low background and bold foreground

```cobol
screen section.
...
  03 screen-1-jb-1 Java-Bean
     line 5.1
     column 4.5
     size 33.5 cells
     lines 25.1 cells
     id 1
     no-box
     background-low
     bold
     .
...
```
