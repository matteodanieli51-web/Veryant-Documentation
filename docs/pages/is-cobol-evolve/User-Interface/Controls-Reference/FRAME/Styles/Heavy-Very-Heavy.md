## \{ Heavy | Very-Heavy \}

|  |  |
| --- | --- |
| Heavy | When this style is set, the border is thicker than normal. |
| Very-Heavy | When this style is set, the border is even thicker. When it is set in conjunction with the [Alternate](./Alternate) style, the frame is drawn with a double border. |

**Example** - Define a frame with double border using alternate and very-heavy styles

```cobol
screen section.
...
  03 screen-1-fr-1 Frame
     line 17.7
     column 20.0
     size 24.3 cells
     lines 27.8 cells
     id 16
     very-heavy
     alternate.
```
