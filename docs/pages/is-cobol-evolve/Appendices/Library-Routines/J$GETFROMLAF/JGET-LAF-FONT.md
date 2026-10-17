### JGET-LAF-FONT

The JGET-LAF-FONT function returns the handle of a given font retrieved from the current LAF. The font handle must be destroyed by the program when it's done using the font.

This is the list of the known font entries that you can inquire:

- Button.font
- CheckBox.font
- CheckBoxMenuItem.acceleratorFont
- CheckBoxMenuItem.font
- ColorChooser.font
- ComboBox.font
- EditorPane.font
- FileChooser.listFont
- FormattedTextField.font
- InternalFrame.titleFont
- Label.font
- List.font
- Menu.acceleratorFont
- Menu.font
- MenuBar.font
- MenuItem.acceleratorFont
- MenuItem.font
- OptionPane.buttonFont
- OptionPane.font
- OptionPane.messageFont
- Panel.font
- PasswordField.font
- PopupMenu.font
- ProgressBar.font
- RadioButton.font
- RadioButtonMenuItem.acceleratorFont
- RadioButtonMenuItem.font
- ScrollPane.font
- Slider.font
- Spinner.font
- TabbedPane.font
- Table.font
- TableHeader.font
- TextArea.font
- TextField.font
- TextPane.font
- TitledBorder.font
- ToggleButton.font
- ToolBar.font
- ToolTip.font
- Tree.font
- Viewport.font

#### Syntax:

```cobol
 CALL "J$GETFROMLAF" USING JGET-LAF-FONT
                           lafEntry
                           WFONT-DATA
                    GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| JGET-LAF-FONT | Constant |  |
| *lafEntry* | PIC X(n) or string literal | Specifies the name of the font resource you want to inquire. |
| *WFONT-DATA* | Group Item | Structure that receives the characteristics of the font. This group item, defined in [isfonts.def](../../Copybooks/isfonts.def), has the following structure:<br>*wfont-device*<br>Contains the device the function refers to. The value can be one of the condition names provided.<br>When *wfdevice-console* is set to true, the function will describe a font for the current screen configuration.<br>When *wfdevice-printer* is set to true, the function will describe a font for the current printer configuration.<br>*wfont-name*<br>Contains the name of the font.<br>*wfont-size*<br>Contains the size of the font. |
|  |  | **Note -** when the DPI is higher than 96, the returned font size might be too small, therefore it’s good practice to ignore this information and use a fixed font size (e.g. the same font size you’re using elsewhere in your programs).<br>*wfont-bold-state*<br>Contains the bold state of the font.<br>If the font is bold, *wfont-bold* is set to true.<br>*wfont-italic-state*<br>Contains the italic state of the font.<br>If the font is italic, *wfont-italic* is set to true.<br>*wfont-underline-state*<br>Contains the underline state of the font.<br>If the font is underlined, *wfont-underline* is set to true.<br>*wfont-strikeout-state*<br>Contains the strike-out state of the font.<br>If the font is stricken out, *wfont-strikeout* is set to true.<br>*wfont-pitch-state*<br>Contains the pitch state of the font.<br>If the font is a fixed-pitch font, *wfont-fixed-pitch* is set to true.<br>If the font is a variable-pitch font, *wfont-fixed-pitch* is set to false.<br>*wfont-angle*<br>Contains the angle at which the font will print. The value can range from the default of "0", which is the normal horizontal orientation, to "360", which is the same as "0". For example, to print at a 90-degree angle, set WFONT-ANGLE to "90". This feature works only when printing a font, not when displaying a font on screen.<br>*wfont-scale-x*<br>Contains the scale factor on the X coordinate. A value of 0 or 1 means that no scale is performed. This setting should be used only for print fonts (*wfont-device* = *wfdevice-printer*) that are not rotated (*wfont-angle* = 0), otherwise the effects are unpredictable.<br>*wfont-scale-y*<br>Contains the scale factor on the Y coordinate. A value of 0 or 1 means that no scale is performed. This setting should be used only for print fonts (*wfont-device* = *wfdevice-printer*) that are not rotated (*wfont-angle* = 0), otherwise the effects are unpredictable |

#### Return code:

*returnCode* can be any signed numeric data item.

|  |  |
| --- | --- |
| -1 | Operation failed. |
| 0 | Operation successful. |
