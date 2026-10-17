## W$CREATEFONT

The W$CREATEFONT library routine loads a font resource from disc file. The COBOL programs will be able to use this font in addition to the fonts installed on the host system.

**Note -** Fonts used on video by controls titles and more generally by controls where user input is not possible (such as grid headings) require the font to be installed in the system as their text is rendered through HTML by the Framework.

### Syntax:

```cobol
 CALL "W$CREATEFONT" USING ttfName
                           fontLogicalName
                    GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *ttfName* | PIC X(n) | Specifies the physical file name of the font resource. It must include the file extension.<br>Unless the file has been included in the program class file through the [COPY](../../Language-Reference/Compiler-Directing-Statements/COPY) RESOURCE statement, the framework will look for the file on disk.<br>During the search on disk, if *ttfName* specifies relative pathname, the framework will resolve the relative pathname in the following locations, in order:<br>1. the current working directory<br>2. any jar and directory listed in the Classpath<br>3. the same jar or directory where the program class file was loaded from.<br>In a thin client environment the disc file is searched on the server and the font resource is then available on both server side and client side. |
| *fontLogicalName* | PIC X(n) | Receives the logical name to be used with the [WFONT-GET-FONT](./W$FONT/WFONT-GET-FONT) function. |

### Return code:

*returnCode* can be any numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Operation failed. |
| 1 | Operation successful. |

### Examples:

**Example -** Load a font from its disk .ttf file

```cobol
working-storage section.
copy "isfonts.def".
77  wfont-status            pic s99.
77  font-name               pic x(33).
77  h-font                  handle of font.

procedure division.
main.
  call "w$createfont" using "files/fsex2p00_public.ttf"
                            font-name
                     giving wfont-status
  if wfont-status = 0
     display message "w$createfont error: " wfont-status
     goback
  end-if.
  initialize wfont-data
  move font-name to wfont-name
  move "11"      to wfont-size
  call "w$font" using wfont-get-font, h-font, wfont-data
               giving wfont-status
  if wfont-status < 0
     display message "w$font error: " wfont-status
     goback
  end-if.
  ...
```
