## W$TEXTSIZE

The W$TEXTSIZE library routine measures the height and the width of a text.

### Syntax:

```cobol
 CALL "W$TEXTSIZE" USING textString
                         TEXTSIZE-DATA
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *textString* | PIC X(n) | Specifies the text to be measured. |
| *TEXTSIZE-DATA* | group item | This group item, defined in [isgui.def](../Copybooks/isgui.def), has the following structure:<br>Specifies the handle of the font used to measure the text specified in textString.<br>**Note:** if the font has been loaded with wfont-angle different than zero, results are unpredictable. Rotated fonts should not be used for cell measurement.<br>Specifies the handle of the window used to measure the text specified in textString. This is necessary to return the size of the text in cells. If this member is zero, the current window is used.<br>Receives the width of textString, expressed in columns. A column is the width of the character "0" (zero) when drawn with the font specified in textsize-font.<br>Receives the width of textString, expressed in window's cells. Cells refer to the window pointed by textsize-window.<br>Receives the width of textString, expressed in pixels.<br>Receives the height of textString, expressed in lines. A line is the height of the character "0" (zero) when drawn with the font specified in textsize-font.<br>Receives the height of textString, expressed in window's cells. Cells refer to the window pointed by textsize-window.<br>Receives the height of textString, expressed in pixels.<br>Specifies if trailing spaces found in textString are relevant to the measurement.<br>When the textsize-strip-spaces condition is set to true, trailing spaces not measured. When it is set to false, trailing spaces are measured. |

### Examples:

**Example -** retrieve cell dimensions on the current window with default font

```cobol
working-storage section.
77  hWin          handle of window.
77  text-string   pic x(20).
77  h-font        handle of font.

procedure division.
main.
   display independent graphical window
           color  65793
           with   system menu
           title  "W$TEXTSIZE Routine"
           handle hWin.
   accept h-font from standard object "default-font"
   ...

   move hWin   to textsize-window
   move h-font to textsize-font
   set textsize-strip-spaces to true
   inquire event-control-handle value in text-string
   call "W$TEXTSIZE" using text-string, textsize-data
   display message textsize-size-x  "  "
                   textsize-cells-x   "  "
                   textsize-base-x  "  "
                   textsize-size-y  "  "
                   textsize-cells-y  "  "
                   textsize-base-y.
```
