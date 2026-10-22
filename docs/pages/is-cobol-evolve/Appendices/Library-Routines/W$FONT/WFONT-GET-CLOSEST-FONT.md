### WFONT-GET-CLOSEST-FONT

The WFONT-GET-CLOSEST-FONT function loads the font matching some characteristics. The function will always load a font, trying to meet the program requirements.

In thin client environment, if the font exists on the server and the server has graphical interface, then the font is loaded both client and server side. This allows you to use the font also for print jobs created server-side (see [WINPRINT-SET-PRINTER-AS](../WIN$PRINTER/WINPRINT-SET-PRINTER-AS) for details).

#### Syntax:

```cobol
 CALL "W$FONT" USING WFONT-GET-CLOSEST-FONT
                     fontHandle
                     WFONT-DATA
              GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| WFONT-GET-CLOSEST-FONT | Constant |  |
| *fontHandle* | USAGE HANDLE OF FONT | When the function succeeds, it receives the handle of the font. |
| *WFONT-DATA* | Group Item | Structure that contains the characteristics of the font to be loaded. All data items it contains should be set properly before calling the function. For your convenience you may INITIALIZE the group item, that way, all subordinate items will be set to a valid value. This group item, defined in [isfonts.def](../../Copybooks/isfonts.def), has the following structure:<br>*wfont-device*<br>It is the device the function refers to. The value of this data item should be set with the condition names provided.<br>When *wfdevice-console* is set to true, the function will load a font for the current screen configuration.<br>When *wfdevice-printer* is set to true, the function will load a font for the current printer configuration. |
|  |  | *wfont-name*<br>It is the name of the font that will be loaded. Font names are case-sensitive. If a font with the name here specified is not found, the function loads a font matching the remaining characteristics.<br>*wfont-size*<br>It is the size of the font that will be loaded. It may be greater than zero. |
|  |  |  |
|  |  | *wfont-bold-state*<br>It is the bold state of the font that will be loaded. The value of this data item should be set with the condition name provided.<br>When *wfont-bold* is set to true, the font will be bold.<br>*wfont-italic-state*<br>It is the italic state of the font that will be loaded. The value of this data item should be set with the condition name provided.<br>When *wfont-italic* is set to true, the font will be italic.<br>*wfont-underline-state*<br>It is the underline state of the font that will be loaded. The value of this data item should be set with the condition name provided.<br>When *wfont-underline* is set to true, the font will be underlined.<br>*wfont-strikeout-state*<br>It is the strike-out state of the font that will be loaded. The value of this data item should be set with the condition name provided.<br>When *wfont-strikeout i*s set to true, the font will be stricken out.<br>*wfont-pitch-state*<br>It is the pitch state of the font that will be loaded. The value of this data item should be set with the condition name provided.<br>When *wfont-fixed-pitch* is set to true, the font will be loaded only if it is a fixed-pitch font.<br>When *wfont-fixed-pitch* is set to false, the function will load fonts with both fixed or variable pitch.<br>*wfont-angle*<br>It is the angle at which the font will print. The value can range from the default of "0", which is the normal horizontal orientation, to "360", which is the same as "0". For example, to print at a 90-degree angle, set WFONT-ANGLE to "90". This feature works only when printing a font, not when displaying a font on screen.<br>*wfont-scale-x*<br>It is the scale factor on the X coordinate. A value of 0 or 1 means that no scale is performed. This setting should be used only for print fonts (*wfont-device* = *wfdevice-printer*) that are not rotated (*wfont-angle* = 0), otherwise the effects are unpredictable.<br>*wfont-scale-y*<br>It is the scale factor on the Y coordinate. A value of 0 or 1 means that no scale is performed. This setting should be used only for print fonts (*wfont-device* = *wfdevice-printer*) that are not rotated (*wfont-angle* = 0), otherwise the effects are unpredictable |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 1 | Operation successful. |
| WFONTERR-UNSUPPORTED | The W$FONT library routine is not supported. |
