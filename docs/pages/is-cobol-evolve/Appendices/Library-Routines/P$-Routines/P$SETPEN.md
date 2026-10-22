### P$SETPEN

The P$SETPEN library routine sets the style, width and color of the pen.

#### Syntax

```cobol
 CALL "P$SETPEN" USING  style
                       [width]
                       [color]
```

#### Parameters

|  |  |  |
| --- | --- | --- |
| *style* | any numeric data item | Specifies the pen style.<br>Possible values are:<br>0 -> solid<br>1 -> dash<br>2 -> dot<br>3 -> dashdot<br>4 -> dashdotdot<br>5 -> null |
| *width* | any numeric data item | Optional. Width of the pen in logical units. |
| *color* | PIC X(n) | Optional. Specifies the color name.<br>Possible values are:<br>"Black"<br>"Dark Blue"<br>"Dark Green"<br>"Dark Cyan"<br>"Dark Red"<br>"Dark Magenta"<br>"Brown"<br>"Dark Gray"<br>"Light Gray"<br>"Blue"<br>"Green"<br>"Cyan"<br>"Red"<br>"Magenta"<br>"Yellow"<br>"White" |
