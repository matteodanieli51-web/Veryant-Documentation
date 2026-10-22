## \{ 3-D | Boxed | No-Box \}

|  |  |
| --- | --- |
| 3-D | The box drawn around the Tree-View control appears with a 3-D effect. |
| Boxed | A flat box is drawn around the Tree-View control. |
| No-Box | No box is drawn around the Tree-View control. Set this style when you need to save space. |

The visual result may vary with different Swing LAF (Look And Feel).

**Example** - Define a 3D tree-view

```cobol
...
screen section.
...
  03 screen-1-tv-1 Tree-View
     line 2.7
     column 3.4
     size 20.8 cells
     lines 29.1 cells
     color 144
     id 2
     3-d
     .
```
