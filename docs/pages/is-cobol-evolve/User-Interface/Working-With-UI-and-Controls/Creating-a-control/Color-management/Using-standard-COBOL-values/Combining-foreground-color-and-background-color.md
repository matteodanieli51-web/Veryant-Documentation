#### Combining foreground color and background color

Values 1 to 8 are base colors, 9 to 16 are their brighter version. The file "[iscobol.def](../../../../../Appendices/Copybooks/iscobol.def)" contains the color definitions. They are divided into groups, and can be combined:

| | |
| --- | --- |
| ForegroundColor | 78 black value 1.<br>78 blue value 2.<br>78 green value 3.<br>78 cyan value 4.<br>78 red value 5.<br>78 magenta value 6.<br>78 brown value 7.<br>78 white value 8.<br>78 dark-gray value 9.<br>78 bright-blue value 10.<br>78 bright-green value 11.<br>78 bright-cyan value 12.<br>78 bright-red value 13.<br>78 bright-magenta value 14.<br>78 yellow value 15.<br>78  bright-white value 16. |
| ForegroundBrightness | 78 frgrnd-low value 2048.<br>78  frgrnd-high value 4096. |
| BackgroundColor | 78 bckgrnd-black value 32.<br>78 bckgrnd-blue value 64.<br>78 bckgrnd-green value 96.<br>78 bckgrnd-cyan value 128.<br>78 bckgrnd-red value 160.<br>78 bckgrnd-magenta value 192.<br>78 bckgrnd-brown value 224.<br>78 bckgrnd-white value 256.<br>78 bckgrnd-dark-gray value 288.<br>78 bckgrnd-bright-blue value 320.<br>78 bckgrnd-bright-green value 352.<br>78 bckgrnd-bright-cyan value 384.<br>78 bckgrnd-bright-red value 416.<br>78 bckgrnd-bright-magenta value 448.<br>78 bckgrnd-yellow value 480.<br>78 bckgrnd-bright-white value 512. |
| BackgroundBrightness | 78 bckgrnd-low value 65536.<br>78 bckgrnd-high value 131072. |
| GenericAttribute | 78 color-reverse value 1024.<br>78 color-underline value 8192.<br>78 color-blink value 16384.<br>78 color-protected value 32768. |
| | |

The color value is computed as follows:

```cobol
Zero
 
[ + ForegroundColor]
 
[ + ForegroundBrightness]
 
[ + BackgroundColor]
 
[ + BackgroundBrightness]
 
[ + GenericAttribute ] ...
```

When the REVERSE-VIDEO phrase is specified, background and foreground colors are swapped.

When the SAME phrase is specified, the whole screen item for which it is specified is displayed with the same colors and attributes of the screen position occupied by its first character.

This kind of color value is suitable for

- the COLOR clause of the [DISPLAY](../../../../../Language-Reference/Procedure-Division-Statements/DISPLAY) statement,
- the [Color](../../../../../Appendices/Graphical-Control-List#color) property of each control,
- the following special properties:

| Properties that specify a single color (value range 1-16) | Properties that specify a combined color (value range 1-512) |
| --- | --- |
| Active-Tab-Border-Color<br>Border-Color<br>Divider-Color<br>End-Color<br>Fill-Color<br>Fill-Color2<br>Gradient-Color-1<br>Gradient-Color-2<br>Heading-Divider-Color<br>High-Color<br>Low-Color<br>Sunday-Foreground<br>Tab-Border-Color<br>Tab-Rollover-Color<br>Transparent-Color<br>Weekday-Foreground | Active-Tab-Color<br>Cell-Color<br>Cell-Current-Color<br>Cell-Entry-Color<br>Cell-Selected-Color<br>Column-Color<br>Column-Selected-Color<br>Cursor-Color<br>Disabled-Color<br>Drag-Color<br>Heading-Color<br>Heading-Cursor-Color<br>Item-Color<br>Low-Color<br>Panel-Color<br>Region-Color<br>Rollover-Color<br>Row-Color<br>Row-Color-Pattern<br>Row-Cursor-Color<br>Row-Selected-Color<br>Selection-Color<br>Tab-Color<br>Tab-Rollover-Color |

When these colors are set to 0, the default color is restored.
