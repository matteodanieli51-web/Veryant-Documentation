## W$FONT

The W$FONT library routine provides a number of functions to manage fonts.

**Note:** isCOBOL can handle only TrueType fonts.

### Syntax:

```cobol
 CALL "W$FONT" USING opCode
                     parameters
              GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *opCode* | Function to be executed. Valid values, defined in [isfonts.def](../../Copybooks/isfonts.def), are: |  |
|  | [WFONT-CHOOSE-FONT](./WFONT-CHOOSE-FONT) | Show a dialog window to choose a font |
|  | [WFONT-DESCRIBE-FONT](./WFONT-DESCRIBE-FONT) | Retrieve font characteristics |
|  | [WFONT-GET-CLOSEST-FONT](./WFONT-GET-CLOSEST-FONT) | Load the font matching some characteristics |
|  | [WFONT-GET-FONT](./WFONT-GET-FONT) | Load a specific font |
|  | [WFONT-SUPPORTED](./WFONT-SUPPORTED) | Check if the host system supports the W$FONT library routine |
| *parameters* | Parameters depend on the opcode. |  |

### Return code:

*returnCode* definition and meaning depend on the opcode.

### Examples:

**Example -** Load the Arial font to be used on video

```cobol
working-storage section.
copy "isfonts.def".
77  wfont-status            pic s99.
77  h-font                  handle of font.

procedure division.
main.
  initialize wfont-data
  move "Arial" to wfont-name
  move "11"    to wfont-size
  call "w$font" using wfont-get-font, h-font, wfont-data
       giving wfont-status
  if wfont-status < 0
     display message "w$font error: " wfont-status
     goback
  end-if.
  ...
```

**Example -** Load the Arial font to be used for printing

```cobol
working-storage section.
copy "isfonts.def".
77  wfont-status            pic s99.
77  h-font                  handle of font.

procedure division.
main.
  initialize wfont-data
  move "Arial"             to wfont-name
  move "11"                to wfont-size
  set wfdevice-win-printer to true
  call "w$font" using wfont-get-font, h-font, wfont-data
       giving wfont-status
  if wfont-status < 0
     display message "w$font error: " wfont-status
     goback
  end-if.
  ...
```
