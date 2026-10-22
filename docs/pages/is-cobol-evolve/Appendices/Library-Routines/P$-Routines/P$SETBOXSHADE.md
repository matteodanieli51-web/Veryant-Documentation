### P$SETBOXSHADE

The P$SETBOXSHADE library routine sets color and density of the color used by [P$DRAWBOX](./P$DRAWBOX).

#### Syntax

```cobol
 CALL "P$SETBOXSHADE" USING color
                           [density]
```

Parameters

|  |  |  |
| --- | --- | --- |
| *color* | PIC X(n) | Specifies the color name.<br>Possible values are:<br>"Black"<br>"Dark Blue"<br>"Dark Green"<br>"Dark Cyan"<br>"Dark Red"<br>"Dark Magenta"<br>"Brown"<br>"Dark Gray"<br>"Light Gray"<br>"Blue"<br>"Green"<br>"Cyan"<br>"Red"<br>"Magenta"<br>"Yellow"<br>"White" |
| *density* | PIC 9(n) | This second optional argument indicates the percentage (intensity) to apply to the color value |
