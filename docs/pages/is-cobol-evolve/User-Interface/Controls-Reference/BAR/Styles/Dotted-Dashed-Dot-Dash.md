## \{ Dotted | Dashed | Dot-Dash \}

|  |  |
| --- | --- |
| Dotted | A dotted line is displayed |
| Dashed | A dashed line is displayed |
| Dot-Dash | A line with alternate dots and dashes is displayed |

**Example -** Define 3 bars using these 3 alternative styles

```cobol
screen section.
...
  03 screen-1-br-1 Bar
     line 5.0
     column 2.0
     size 9.0 cells
     id 1
     dotted
     .

  03 screen-1-br-2 Bar
     line 7.0
     column 2.0
     size 9.0 cells
     id 2
     dashed
     .

  03 screen-1-br-3 Bar
     line 9.0
     column 2.0
     size 9.0 cells
     id 3
     dot-dash
     .
```
