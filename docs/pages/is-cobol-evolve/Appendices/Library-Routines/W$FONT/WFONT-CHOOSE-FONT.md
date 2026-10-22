### WFONT-CHOOSE-FONT

The WFONT-CHOOSE-FONT function shows a dialog window to choose a font.

#### Syntax:

```cobol
 CALL "W$FONT" USING WFONT-CHOOSE-FONT
                     fontHandle
                     WFONT-DATA
              GIVING returnCode
```

#### Parameters:

|  |  |  |  |
| --- | --- | --- | --- |
| WFONT-CHOOSE-FONT | Constant |  |  |
| *fontHandle* | USAGE HANDLE OF FONT | Not used. It should be 0. |  |
| *WFONT-DATA*<br>Group Item |  | Structure that describes the initial configuration of the dialog box and receives the user's selection when the dialog box is closed. Note that the dialog box is initialized with the information stored in wfont-face-data only when wfont-choose-flags contains the wfchoose-initialize flag. This group item, defined in [isfonts.def](../../Copybooks/isfonts.def), has the following structure: |  |
|  |  | Note - members not mentioned below are not used by this function.<br>*wfont-device*<br>It is the device the function refers to. The value of this data item should be set with the condition names provided.<br>When *wfdevice-console* is set to true, the function will load a font for the current screen configuration.<br>When *wfdevice-printer* is set to true, the function will load a font for the current printer configuration.<br>*wfont-name*<br>When the function starts and wfont-choose-flags contains the wfchoose-initialize flag, the value set here is used as default font name.<br>When the function exits, it receives the name of the font chosen by the user. |  |
|  |  | *wfont-size*<br>When the function starts and wfont-choose-flags contains the wfchoose-initialize flag, the value set here is used as default font size.<br>When the function exits, it receives the size of the font chosen by the user.<br>*wfont-bold-state*<br>When the function starts and wfont-choose-flags contains the wfchoose-initialize flag, the value set here affects the initial value of the check-box "Bold".<br>When the function exits, it receives the value of the check-box "Bold".<br>*wfont-italic-state*<br>When the function starts and wfont-choose-flags contains the wfchoose-initialize flag, the value set here affects the initial value of the check-box "Italic".<br>When the function exits, it receives the value of the check-box "Italic".<br>*wfont-underline-state*<br>When the function starts and wfont-choose-flags contains the wfchoose-initialize flag, the value set here affects the initial value of the check-box "Underline".<br>When the function exits, it receives the value of the check-box "Underline".<br>*wfont-strikeout-state*<br>When the function starts and wfont-choose-flags contains the wfchoose-initialize flag, the value set here affects the initial value of the check-box "Strikethrough".<br>When the function exits, it receives the value of the check-box "Strikethrough".<br>*wfont-pitch-state*<br>When the function, the value is ignored.<br>When the function exits, and the font is a fixed-pitch font, wfont-fixed-pitch is set to true. If the font is a variable-pitch font, wfont-fixed-pitch is set to false. |  |
|  |  | *wfont-choose-data - wfont-choose-flags*<br>Flags affecting the behavior of the dialog box. Possible values, that can be added together, are: |  |
|  |  | wfchoose-fixed-only | Only fixed-pitch fonts are listed, therefore the user cannot choose a variable-pitch font. |
|  |  | wfchoose-initialize | The dialog box is initialized according to the values set in wfont-face-data. |
|  |  | wfchoose-effects-ok | Additional check-boxes are shown to allow the selection of special font effects, such as underline and strike-out. |
|  |  | *wfont-choose-min-size*<br>It is the minimum allowed size for the font. |  |
|  |  | *wfont-choose-max-size*<br>It is the maximum allowed size for the font. |  |
|  |  | *wfont-angle*<br>It is the angle at which the font will print. The value can range from the default of "0", which is the normal horizontal orientation, to "360", which is the same as "0". For example, to print at a 90-degree angle, set WFONT-ANGLE to "90". This feature works only when printing a font, not when displaying a font on screen.<br>*wfont-scale-x*<br>It is the scale factor on the X coordinate. A value of 0 or 1 means that no scale is performed. This setting should be used only for print fonts (*wfont-device* = *wfdevice-printer*) that are not rotated (*wfont-angle* = 0), otherwise the effects are unpredictable.<br>*wfont-scale-y*<br>It is the scale factor on the Y coordinate. A value of 0 or 1 means that no scale is performed. This setting should be used only for print fonts (*wfont-device* = *wfdevice-printer*) that are not rotated (*wfont-angle* = 0), otherwise the effects are unpredictable |  |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 1 | Operation successful. |
| WFONTERR-UNSUPPORTED | The W$FONT library routine is not supported. |
| WFONTERR-CANCELLED | The user has pressed the Cancel button. wfontData is not updated. |
