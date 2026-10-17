### WFONT-DESCRIBE-FONT

The WFONT-DESCRIBE-FONT function describes the characteristics of a loaded font.

#### Syntax:

```cobol
 CALL "W$FONT" USING WFONT-DESCRIBE-FONT
                     fontHandle
                     WFONT-DATA
              GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| WFONT-DESCRIBE-FONT | Constant |  |
| *fontHandle* | USAGE HANDLE OF FONT | It may be set to a valid font handle. |
| *WFONT-DATA* | Group Item | Structure that receives the characteristics of the font. This group item, defined in [isfonts.def](../../Copybooks/isfonts.def), has the following structure:<br>*wfont-device*<br>It is the device the function refers to. The value can be one of the condition names provided.<br>When *wfdevice-console* is set to true, the function will describe a font for the current screen configuration.<br>When *wfdevice-printer* is set to true, the function will describe a font for the current printer configuration.<br>*wfont-name*<br>It is the name of the font.<br>*wfont-size*<br>It is the size of the font. |
|  |  | *wfont-bold-state*<br>It is the bold state of the font.<br>If the font is bold, *wfont-bold* is set to true.<br>*wfont-italic-state*<br>It is the italic state of the font.<br>If the font is italic, *wfont-italic* is set to true.<br>*wfont-underline-state*<br>It is the underline state of the font.<br>If the font is underline, *wfont-underline* is set to true.<br>*wfont-strikeout-state*<br>It is the strike-out state of the font.<br>If the font is stricken out, *wfont-strikeout* is set to true.<br>*wfont-pitch-state*<br>It is the pitch state of the font.<br>If the font is a fixed-pitch font, *wfont-fixed-pitch* is set to true.<br>If the font is a variable-pitch font, *wfont-fixed-pitch* is set to false.<br>*wfont-angle*<br>It is the angle at which the font will print. The value can range from the default of "0", which is the normal horizontal orientation, to "360", which is the same as "0". For example, to print at a 90-degree angle, set WFONT-ANGLE to "90". This feature works only when printing a font, not when displaying a font on screen.<br>*wfont-scale-x*<br>It is the scale factor on the X coordinate. A value of 0 or 1 means that no scale is performed. This setting should be used only for print fonts (*wfont-device* = *wfdevice-printer*) that are not rotated (*wfont-angle* = 0), otherwise the effects are unpredictable.<br>*wfont-scale-y*<br>It is the scale factor on the Y coordinate. A value of 0 or 1 means that no scale is performed. This setting should be used only for print fonts (*wfont-device* = *wfdevice-printer*) that are not rotated (*wfont-angle* = 0), otherwise the effects are unpredictable |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 1 | Operation successful. |
| WFONTERR-UNSUPPORTED | The W$FONT library routine is not supported. |
| WFONTERR-INVALID-HANDLE | fontHandle is not valid. |
