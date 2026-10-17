## \{ Engraved | Lowered | Raised | Rimmed \}

|  |  |
| --- | --- |
| Engraved | This style causes the frame border to appear engraved with respect to the screen surface, while the interior area appears at the same level. |
| Lowered | This style causes the frame area to appear lowered with respect to the screen surface. |
| Raised | This style causes the frame area to appear raised with respect to the screen surface. |
| Rimmed | This style causes the frame border to appear raised with respect to the screen surface, while the interior area appears at the same level. |

**Example** - Define a 3d raised frame control with high and low colors

```cobol
screen section.
...
  03 screen-1-fr-1 Frame
     line 17.7
     column 20.0
     size 24.3 cells
     lines 27.8 cells
     id 16
     lowered
     low-color rgb 4130824
     high-color rgb 16777215
     .
```
