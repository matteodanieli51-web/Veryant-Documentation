## W$PALETTE

The W$PALETTE library routine provides a number of functions to manage RGB colors and COBOL attributes.

::: info NOTE
isCOBOL allows you to work with RGB colors. A maximum of 16 million concurrent colors can be displayed on the screen at the same time. However, some old languages display only 16 colors at a time. For compatibility reasons isCOBOL supports this library routine, that allows definition of a palette of usable colors. In any case it is important to pinpoint that the use of this routine is deprecated.
:::

### Syntax:

```cobol
 CALL "W$PALETTE" USING opCode
                        parameters
                 GIVING paletteResult
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *opCode* | Function to be executed. Valid values, defined in [ispalette.def](../../Copybooks/ispalette.def), are: |  |
|  | [WPALETTE-CHOOSE-COLOR](./W$PALETTE-CHOOSE-COLOR) | Show a dialog window to choose a color. |
|  | [WPALETTE-GET-COLOR](./WPALETTE-GET-COLOR) | Retrieve the RGB color associated to a COBOL attribute. |
|  | [WPALETTE-MAP-COLORS](./WPALETTE-MAP-COLORS) | Creates a mapping between RGB colors and their alternative version. |
|  | [WPALETTE-NUM-COLORS](./WPALETTE-NUM-COLORS) | Retrieve the maximum number of colors that the system can render simultaneously. |
|  | [WPALETTE-RESET-COLORS](./WPALETTE-RESET-COLORS) | Resets all color settings previously made. |
|  | [WPALETTE-SET-COLOR](./WPALETTE-SET-COLOR) | Set the RGB color associated to a COBOL attribute. |
|  | [WPALETTE-SUPPORTED](./WPALETTE-SUPPORTED) | Check if the host system supports the W$PALETTE library routine. |
| *parameters* | Parameters depend on the opcode. |  |

### Return code:

*returnCode* definition and meaning depend on the opcode.

### Examples:

**Example -** Select a color from palette and change a numbered color with the selection

```cobol
working-storage section.
copy "ispalette.def".
78  78color   value 3.
77  result    pic 9(2).

procedure division.
...
change-color.
   initialize wpalette-data
   call "w$palette" using wpalette-choose-color,
        wpalette-data,
        giving result
   move 78color to wpal-color-id
   call "w$palette" using wpalette-set-color,
        wpalette-data,
        giving result.
   ...
```

**Example -** Select a color from palette and change a numbered color with the selection

```cobol
working-storage section.
copy "ispalette.def".
78  78color   value 3.
77  result    pic 9(2).

procedure division.
...
change-color.
   initialize wpalette-data
   call "w$palette" using wpalette-choose-color,
        wpalette-data,
        giving result
   move 78color to wpal-color-id
   call "w$palette" using wpalette-set-color,
        wpalette-data,
        giving result.
   ...
```

**Example -** Map the foreground color 12 (high intensity red) to become blue and the RGB X#C0C0C0 (light gray) to become black

```cobol
 working-storage section.
 copy "ispalette.def".

 procedure division.
 ...
 map-colors.
*map FOREGROUND-COLOR 12 (high-intensity red) to become blue
 move 255 to wpal-original-red(1).
 move 0   to wpal-original-blue(1).
 move 0   to wpal-original-green(1).
 move 0   to wpal-new-red(1).
 move 255 to wpal-new-blue(1).
 move 0   to wpal-new-green(1).
*map RGB X#C0C0C0 (light gray) to become black
 move 192 to wpal-original-red(2).
 move 192 to wpal-original-blue(2).
 move 192 to wpal-original-green(2).
 move 0   to wpal-new-red(2).
 move 0   to wpal-new-blue(2).
 move 0   to wpal-new-green(2).
 call "w$palette" using wpalette-map-colors
                        wpalette-original-colors
                        wpalette-new-colors.
```
