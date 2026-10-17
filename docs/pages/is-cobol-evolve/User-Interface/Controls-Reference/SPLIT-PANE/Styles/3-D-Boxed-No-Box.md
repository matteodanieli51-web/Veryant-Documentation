## \{ 3-D | Boxed | No-Box \}

|  |  |
| --- | --- |
| 3-D | The box drawn around the Split-Pane control appears with a 3-D effect. |
| Boxed | A flat box is drawn around the Split-Pane control. |
| No-Box | No box is drawn around the Split-Pane control. Set this style when you need to save space. |

The visual result may vary with different Swing LAF (Look And Feel).

**Example** - Define a split pane without borders

```cobol
screen section.
...
  03 screen-1-sp-1 Split-pane
     line 5.7
     column 3.1
     size 34.6 cells
     lines 15.5 cells
     no-box
     .
```
