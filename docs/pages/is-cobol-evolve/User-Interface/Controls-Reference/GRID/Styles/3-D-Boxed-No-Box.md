## \{ 3-D | Boxed | No-Box \}

|  |  |
| --- | --- |
| 3-D | The box drawn around the Grid control appears with a 3-D effect. |
| Boxed | A flat box is drawn around the Grid control. |
| No-Box | No box is drawn around the Grid control. Set this style when you need to save space. |

The visual result may vary with different Swing LAF (Look And Feel).

**Example** - Define a boxed grid

```cobol
screen section.
...
  03 screen-1-gr-1 Grid
     line 5.7
     column 3.1
     size 34.6 cells
     lines 15.5 cells
     help-id 5040
     id 1
     hint "Grid Hint Information"
     event procedure screen-1-gr-1-evt-proc
     boxed
     column-headings
     hscroll
     reordering-columns
     lm-on-columns 1
     row-dividers 1
     end-color 9
     heading-color 200
     heading-divider-color 12
     cursor-frame-width 3
     num-col-headings 1
     num-rows 5
     .
```
