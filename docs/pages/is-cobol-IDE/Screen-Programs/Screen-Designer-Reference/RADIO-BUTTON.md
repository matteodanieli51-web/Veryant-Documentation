### RADIO BUTTON

Refer to [RADIO-BUTTON](../../../is-cobol-evolve/User-Interface/Controls-Reference/RADIO-BUTTON/RADIO-BUTTON) for details about properties, styles and events of this control.

| Properties | |
| --- | --- |
| (name) | Specifies the control name. This property is set automatically when the control is drawn |
| additional properties | Allows the user to specify additional properties and styles. The text you write here is generated as is and may generate compile errors if not correct. |
| auto-fit | TRUE... The image is scaled in order to fit the control boundaries. This is achieved through additional code generated in the Procedure Division.<br>FALSE...The image is shown as is, if it’s too large for the control boundaries, it will be truncated. |
| background-color | Opens a dialog that allows the user to choose the control background color. <br>![](../../images/ide-prop-decbk.png) |
| bitmap | Opens a dialog box that allows the user to select an image file to load into the control. It’s also possible to generate an image from a series of characters represented with a given font <br>![](../../images/ide-prop-bitmap.png) |
| bitmap-disabled | Specifies the value for the *Bitmap-Disabled* property |
| bitmap-disabled-selected | Specifies the value for the *Bitmap-Disabled-Selected* property |
| bitmap-frame | NONE... Neither *Framed* nor *Unframed* are generated<br>FRAMED...The *Framed* style is generated<br>UNFRAMED...The *Unframed* style is generated |
| bitmap-number | Specifies the value for the *Bitmap-Number* property |
| bitmap-pressed | Specifies the value for the *Bitmap-Pressed* property |
| bitmap-rollover | Specifies the value for the *Bitmap-Rollover* property |
| bitmap-rollover-selected | Specifies the value for the *Bitmap-Rollover-Selected* property |
| bitmap-selected | Specifies the value for the *Bitmap-Selected* property |
| bitmap-square | TRUE...The *Square* style is generated<br>FALSE...The *Square* style is not generated |
| bitmap-scale | No scale<br>Scale<br>Scale preserving aspect ratio |
| bitmap-width | Specifies the value for the *Bitmap-Width* property |
| border color | Opens a dialog that allows the user to choose the control border color. <br>![](../../images/ide-prop-dtfg.png) |
| border width | Opens a dialog that allows the user to choose the control border width. <br>![](../../images/IDE-borderwidth.png) |
| color | Opens a dialog that allows the user to choose the control color. <br>![](../../images/ide-prop-color.png) |
| column | Specifies the X coordinate of the control as expressed in cells. This property is set automatically when the control is drawn. |
| column pixels | Specifies the X coordinate of the control as expressed in pixels. This property is set automatically when the control is drawn. |
| css-base-style-name<br>css-iconcss-style-name | Specify the CSS style associated with the control. It works only in a WebDirect environment.<br>See [Customize the WebDirect Layout using CSS](../../../is-cobol-EIS/WebDirect-option/Customize-the-WebDirect-Layout-using-CSS) for more information. |
| custom-data | Specifies the value for the *Custom-Data* property. |
| disabled-background-color | Opens a dialog that allows the user to choose the control background color when disabled. <br>![](../../images/ide-prop-decbk.png) |
| disabled-color | Opens a dialog that allows the user to choose the control color when disabled. <br>![](../../images/ide-prop-color.png) |
| disabled-foreground-color | Opens a dialog that allows the user to choose the control foreground color when disabled. <br>![](../../images/ide-prop-dtfg.png) |
| destroy type | AUTOMATIC...neither the *Temporary* nor Permanent styles are generated<br>TEMPORARY...*Temporary* style is generated<br>PERMANENT...*Permanent* style is generated |
| drag mode | No drag events... *Drag-Mode* is not generated<br>Only MSG-DRAG... *Drag-Mode=1* is generated<br>Only MSG-DROP... *Drag-Mode=2* is generated<br>Both events... *Drag-Mode=3* is generated |
| enabled | NONE...*Enabled* property is not generated<br>TRUE... *Enabled=1* is generated<br>FALSE...*Enabled=0* is generated |
| event list | Opens a dialog that allows you to choose which events must be added to the event list of this control. <br>![](../../images/IDE-chk-eventlist.png) |
| exception-value | Specifies the value for the *Exception-Value* property |
| exclude event list | NONE... The *Exclude-Event-List* property is not generated.<br>0... *Exclude-Event-List=0* is generated.<br>1... *Exclude-Event-List=1* is generated. |
| flat | TRUE...The *Flat* style is generated<br>FALSE...The *Flat* style is not generated |
| font | Opens a dialog that allows the user to choose the control font. <br>![](../../images/ide-prop-font.png)  <br><br> The dialog lists the fonts installed in the system and allows you to load new fonts from disc files. Fonts loaded from disc are added to the list with an asterisk before their name. When one of these fonts is selected the *Copy Resource* option is enabled and can be activated. Activate the option to include the font disc file in the compiled class or be sure to distribute this file along with your application. |
| foreground-color | Opens a dialog that allows the user to choose the control foreground color. <br>![](../../images/ide-prop-dtfg.png) |
| group | Specifies the value for the *Group* property |
| group-value | Specifies the value for the *Group-Value* property |
| height-in-cells | TRUE...The *Height-In-Cells* style is generated<br>FALSE... The *Height-In-Cells* style is not generated |
| help-id | Specifies the control *Help-id*. |
| hint | Specifies the value for the *Hint* property |
| id | Specifies the control id. This property is set automatically when the control is drawn. |
| key | Specifies the value for the *Key* property. |
| layout-data | Opens a dialog that allows the user to choose the control resize rules. <br>![](../../images/ide-prop-layout.png) <br>If the option "Follows Layout-Manager defaults" is checked, the *Layout-Data* property is not generated. |
| left-text | TRUE...The *Left-Text* style is generated<br>FALSE...The *Left-Text* style is not generated |
| left-text-alignment | LEFT...Generates *Left-Text-Alignment=1*<br>RIGHT...Generates *Left-Text-Alignment=0* |
| line | Specifies the Y coordinate of the control as expressed in cells. This property is set automatically when the control is drawn |
| line pixels | Specifies the Y coordinate of the control as expressed in pixels. This property is set automatically when the control is drawn |
| lines | Specifies the control height as expressed in cells. This property is set automatically when the control is drawn |
| lines pixels | Specifies the control height as expressed in pixels. This property is set automatically when the control is drawn |
| lines unit | DEFAULT... Either *CELLS* or nothing is generated after the *Lines* value depending on the window’s “cell” property setting<br>None... Neither *CELLS* nor *PIXELS* are generated after the *Lines* value<br>CELLS... *CELLS* is generated after the *Lines* value<br>PIXELS... *PIXELS* is generated after the *Lines* value |
| lock | TRUE...Locks the control on the Screen Designer so that you cannot move it anymore by dragging it with the mouse.<br>FALSE...You can move the control on the Screen Designer by dragging it with the mouse |
| max-height | Specifies the control maximum height as expressed in cells |
| max-width | Specifies the control maximum width as expressed in cells |
| min-height | Specifies the control minimum height as expressed in cells |
| min-width | Specifies the control minimum width as expressed in cells |
| multiline | TRUE...The *Multiline* style is generated<br>FALSE...The *Multiline* style is not generated |
| no-group-tab | TRUE...The *No-Group-Tab* style is generated<br>FALSE...The *No-Group-Tab* style is not generated |
| no-tab | TRUE...The *No-Tab* style is generated<br>FALSE...The *No-Tab* style is not generated |
| notify | TRUE...The *Notify* style is generated<br>FALSE...The *Notify* style is not generated |
| notify-mouse | TRUE...The *Notify-Mouse* style is generated<br>FALSE...The *Notify-Mouse* style is not generated |
| pop up menu | Associates a pop-up menu with the control. The menu must have been drawn on the same screen. |
| rollover-background-color | Opens a dialog that allows the user to choose the control background color on mouseover. <br>![](../../images/ide-prop-decbk.png) |
| rollover-border-color | Opens a dialog that allows the user to choose the control border color on mouseover. <br>![](../../images/ide-prop-decbk.png) |
| rollover-color | Opens a dialog that allows the user to choose the control color on mouseover. <br>![](../../images/ide-prop-color.png) |
| rollover-foreground-color | Opens a dialog that allows the user to choose the control foreground color on mouseover. <br>![](../../images/ide-prop-dtfg.png) |
| self-act | TRUE...The *Self-Act* style is generated<br>FALSE...The *Self-Act* style is not generated |
| size | Specifies the control width as expressed in cells. This property is set automatically when the control is drawn |
| size pixels | Specifies the control width as expressed in pixels. This property is set automatically when the control is drawn |
| size unit | DEFAULT... Either *CELLS* or nothing is generated after the *Size* value depending on the window’s “cell” property setting<br>None... Neither *CELLS* nor *PIXELS* are generated after the *Size* value<br>CELLS... *CELLS* is generated after the *Size* value<br>PIXELS... *PIXELS* is generated after the *Size* value |
| style | DEFAULT-BUTTON<br>CANCEL-BUTTON<br>ESCAPE-BUTTON<br>OK-BUTTON |
| tab order | Sets the ordinal position of the control in the Screen Section. This property is set automatically when the control is drawn |
| termination-value | Specifies the value for the *Termination-Value* property |
| title | Specifies the value for the *Title* property |
| title-position | 0...NONE<br>1...LEFT<br>2...RIGHT<br>3...TOP<br>4...BOTTOM<br>5...CENTER |
| transparent | TRUE...The *Transparent* style is generated<br>FALSE... The *Transparent* style is not generated |
| transparent color | Specifies the value of the color to be used as transparent color. Unlike other color properties, no dialog is shown here, so you have to type the color code by hand. |
| visible | NONE...*Visible* property is not generated<br>TRUE... *Visible=1* is generated<br>FALSE...*Visible=0* is generated |
| width-in-cells | TRUE...The *Width-In-Cells* style is generated<br>FALSE... The *Width-In-Cells* style is not generated |

| Events | |
| --- | --- |
| cmd-clicked event | Allows the user to create a paragraph to handle the CMD-CLICKED event in the Procedure Division |
| cmd-goto event | Allows the user to create a paragraph to handle the CMD-GOTO event in the Procedure Division |
| cmd-help event | Allows the user to create a paragraph to handle the CMD-HELP event in the Procedure Division |
| msg-drag event | Allows the user to create a paragraph to handle the MSG-DRAG event in the Procedure Division |
| msg-drop event | Allows the user to create a paragraph to handle the MSG-DROP event in the Procedure Division |
| msg-end-menu event | Allows the user to create a paragraph to handle the MSG-END-MENU event in the Procedure Division |
| msg-init-menu event | Allows the user to create a paragraph to handle the MSG-INIT-MENU event in the Procedure Division |
| msg-menu-input event | Allows the user to create a paragraph to handle the MSG-MENU-INPUT event in the Procedure Division |
| msg-mouse-enter event | Allows the user to create a paragraph to handle the MSG-MOUSE-ENTER event in the Procedure Division |
| msg-mouse-exit event | Allows the user to create a paragraph to handle the MSG-MOUSE-EXIT event in the Procedure Division |
| msg-validate event | Allows the user to create a paragraph to handle the MSG-VALIDATE event in the Procedure Division |
| other event | Allows the user to create a custom paragraph |

| Exceptions | |
| --- | --- |
| cmd-clicked exception | Allows the user to create a paragraph to handle the CMD-CLICKED event when the Accept terminates with crt status = 96. This is an alternative to the event procedures described above |
| cmd-goto exception | Allows the user to create a paragraph to handle the CMD-GOTO event when the Accept terminates with crt status = 96. This is an alternative to the event procedures described above |
| cmd-help exception | Allows the user to create a paragraph to handle the CMD-HELP event when the Accept terminates with crt status = 96. This is an alternative to the event procedures described above |
| other exception | Allows the user to create a custom paragraph |

| Procedures | |
| --- | --- |
| After procedure | Allows the user to create a paragraph to handle the control AFTER PROCEDURE |
| After procedure thru | Allows the user to optionally specify a THRU paragraph for the AFTER PROCEDURE. |
| Before procedure | Allows the user to create a paragraph to handle the control BEFORE PROCEDURE |
| Before procedure thru | Allows the user to optionally specify a THRU paragraph for the BEFORE PROCEDURE. |
| Event procedure | Allows the user to create a paragraph to handle the control EVENT PROCEDURE |
| Exception procedure | Allows the user to create a paragraph to handle the control EXCETPION PROCEDURE |

| Variables | |
| --- | --- |
| bitmap-disabled variable | Numeric variable that hosts the value for the *Bitmap-Disabled* property |
| bitmap-disabled-selected variable | Numeric variable that hosts the value for the *Bitmap-Disabled-Selected* property |
| bitmap-number variable | Numeric variable that hosts the value for the *Bitmap-Number* property |
| bitmap-pressed value | Numeric variable that hosts the value for the *Bitmap-Pressed* property |
| bitmap-rollover-selected variable | Numeric variable that hosts the value for the *Bitmap-Rollover-Selected* property |
| bitmap-rollover variable | Numeric variable that hosts the value for the *Bitmap-Rollover* property |
| bitmap-selected variable | Numeric variable that hosts the value for the *Bitmap-Selected* property |
| bitmap-scale variable | Numeric variable that hosts the value for the *Bitmap-Scale* property |
| bitmap-width variable | Numeric variable that hosts the value for the *Bitmap-Width* property |
| border color variable | Numeric variable that hosts the value for the *Border-Color* property |
| border width variable | Alphanumeric variable that hosts the value for the *Border-Width* property |
| color variable | Numeric variable that hosts the color value |
| column variable | Numeric variable that hosts the column value |
| css-style-name variable | Alphanumeric variable that hosts the css style associated with the control. It works only in a WebDirect environment. |
| disabled-background-color variable | Numeric variable that hosts the value for the *Disabled-Background-Color* property |
| disabled-color variable | Numeric variable that hosts the value for the *Disabled-Color* property |
| disabled-foreground-color variable | Numeric variable that hosts the value for the *Disabled-Foreground-Color* property |
| enabled variable | Numeric variable that hosts the enabled state |
| exception-value variable | Numeric variable that hosts the value for the *Exception-Value* property |
| group variable | Numeric variable that hosts the value for the *Group* property |
| group-value variable | Numeric variable that hosts the value for the *Group-Value* property |
| help-id variable | Numeric variable that hosts the help id |
| hint variable | Alphanumeric variable that hosts the value for the *Hint* property |
| id variable | Numeric variable that hosts the control id |
| key variable | Alphanumeric variable that hosts the value for the *Key* property |
| layout-data variable | Numeric variable that hosts the control resize rules |
| lines variable | Numeric variable that hosts the lines value |
| line variable | Numeric variable that hosts the line value |
| max-height variable | Numeric variable that hosts the maximum height |
| max-width variable | Numeric variable that hosts the maximum width |
| min-height variable | Numeric variable that hosts the minimum height |
| min-width variable | Numeric variable that hosts the minimum width |
| rollover-background-color variable | Numeric variable that hosts the value for the *Rollover-Background-Color* property |
| rollover-border-color variable | Numeric variable that hosts the value for the *Rollover-Border-Color* property |
| rollover-color variable | Numeric variable that hosts the value for the *Rollover-Color* property |
| rollover-foreground-color variable | Numeric variable that hosts the value for the *Rollover-Foreground-Color* property |
| size variable | Numeric variable that hosts the size value |
| title variable | Numeric variable that hosts the value for the *Title* property |
| title-position variable | Numeric variable that hosts the value for the *Title-Position* property |
| value variable | Numeric variable that hosts the value for the *Value* property |
| visible variable | Numeric variable that hosts the visible state |
