### TAB ACCORDION

Refer to [TAB-CONTROL](../../../../is-cobol-evolve/User-Interface/Controls-Reference/TAB-CONTROL/TAB-CONTROL) for details about properties, styles and events of this control.

| Properties | |
| --- | --- |
| (name) | Specifies the control name. This property is set automatically when the control is drawn |
| active-tab-background-color | Opens a dialog that allows the user to choose the background color for the active tab. <br>![](../../../images/ide-prop-decbk.png) |
| active-tab-color | Opens a dialog that allows the user to choose the color for the active tab. <br>![](../../../images/ide-prop-color.png) |
| active-tab-foreground-color | Opens a dialog that allows the user to choose the foreground color for the active tab. <br>![](../../../images/ide-prop-dtfg.png) |
| additional properties | Allows the user to specify additional properties and styles. The text you write here is generated as is and may generate compile errors if not correct. |
| background-color | Opens a dialog that allows the user to choose the control background color. <br>![](../../../images/ide-prop-decbk.png) |
| bitmap | Opens a dialog box that allows the user to select an image file to load into the control. It’s also possible to generate an image from a series of characters represented with a given font <br>![](../../../images/ide-prop-bitmap.png) |
| bitmap-width | Specifies the value for the *Bitmap-Width* property |
| close-buttons | TRUE... The *Close-Buttons* style is generated<br>FALSE.. The *Close-Buttons* style is not generated |
| color | Opens a dialog that allows the user to choose the control color. <br>![](../../../images/ide-prop-color.png) |
| column | Specifies the X coordinate of the control as expressed in cells. This property is set automatically when the control is drawn. |
| column pixels | Specifies the X coordinate of the control expressed in pixels. This property is set automatically when the control is drawn. |
| css-base-style-name<br>css-iconcss-style-name | Specify the CSS style associated with the control. It works only in a WebDirect environment.<br>See [Customize the WebDirect Layout using CSS](../../../../is-cobol-EIS/WebDirect-option/Customize-the-WebDirect-Layout-using-CSS) for more information. |
| custom-data | Specifies the value for the *Custom-Data* property. |
| destroy type | AUTOMATIC...neither the *Temporary* nor Permanent styles are generated<br>TEMPORARY...*Temporary* style is generated<br>PERMANENT...*Permanent* style is generated |
| drag mode | No drag events... *Drag-Mode* is not generated<br>Only MSG-DRAG... *Drag-Mode=1* is generated<br>Only MSG-DROP... *Drag-Mode=2* is generated<br>Both events... *Drag-Mode=3* is generated |
| enabled | NONE...*Enabled* property is not generated<br>TRUE... *Enabled=1* is generated<br>FALSE...*Enabled=0* is generated |
| event list | Opens a dialog that allows you to choose which events must be added to the event list of this control. <br>![](../../../images/IDE-chk-eventlist.png) |
| exclude event list | NONE... The *Exclude-Event-List* property is not generated.<br>0... *Exclude-Event-List=0* is generated.<br>1... *Exclude-Event-List=1* is generated. |
| font | Opens a dialog that allows the user to choose the control font. <br>![](../../../images/ide-prop-font.png)  <br><br> The dialog lists the fonts installed in the system and allows you to load new fonts from disc files. Fonts loaded from disc are added to the list with an asterisk before their name. When one of these fonts is selected the *Copy Resource* option is enabled and can be activated. Activate the option to include the font disc file in the compiled class or be sure to distribute this file along with your application. |
| foreground-color | Opens a dialog that allows the user to choose the control foreground color. <br>![](../../../images/ide-prop-dtfg.png) |
| height-in-cells | TRUE...The *Height-In-Cells* style is generated<br>FALSE... The *Height-In-Cells* style is not generated |
| help-id | Specifies the control *Help-id*. |
| hint | Specifies the value for the *Hint* property. |
| id | Specifies the control id. This property is set automatically when the control is drawn. |
| key | Specifies the value for the *Key* property. |
| layout-data | Opens a dialog that allows the user to choose the control resize rules. <br>![](../../../images/ide-prop-layout.png) <br>If the option "Follows Layout-Manager defaults" is checked, the *Layout-Data* property is not generated. |
| line | Specifies the Y coordinate of the control as expressed in cells. This property is set automatically when the control is drawn |
| line pixels | Specifies the Y coordinate of the control expressed in pixels. This property is set automatically when the control is drawn |
| lines | Specifies the control height as expressed in cells. This property is set automatically when the control is drawn |
| lines pixels | Specifies the control height expressed in pixels. This property is set automatically when the control is drawn |
| lines unit | DEFAULT... Either *CELLS* or nothing is generated after the *Lines* value depending on the window’s “cell” property setting<br>None... Neither *CELLS* nor *PIXELS* are generated after the *Lines* value<br>CELLS... *CELLS* is generated after the *Lines* value<br>PIXELS... *PIXELS* is generated after the *Lines* value |
| lock | TRUE...Locks the control on the Screen Designer so that you cannot move it anymore by dragging it with the mouse.<br>FALSE...You can move the control on the Screen Designer by dragging it with the mouse |
| max-height | Specifies the control maximum height as expressed in cells |
| max-width | Specifies the control maximum width as expressed in cells |
| min-height | Specifies the control minimum height as expressed in cells |
| min-width | Specifies the control minimum width as expressed in cells |
| no-dividers | TRUE...The *No-Dividers* style is generated<br>FALSE...The *No-Dividers* style is not generated |
| no-tab | TRUE...The *No-Tab* style is generated<br>FALSE...The *No-Tab* style is not generated |
| notify-mouse | TRUE...The *Notify-Mouse* style is generated<br>FALSE...The *Notify-Mouse* style is not generated |
| pop up menu | Associates a pop-up menu with the control. The menu must have been drawn on the same screen. |
| relative-offset | TRUE...The *Relative-Offset* style is generated<br>FALSE...The *Relative-Offset* style is not generated |
| size | Specifies the control width as expressed in cells. This property is set automatically when the control is drawn |
| size pixels | Specifies the control width as expressed in pixels. This property is set automatically when the control is drawn |
| size unit | DEFAULT... Either *CELLS* or nothing is generated after the *Size* value depending on the window’s “cell” property setting<br>None... Neither *CELLS* nor *PIXELS* are generated after the *Size* value<br>CELLS... *CELLS* is generated after the *Size* value<br>PIXELS... *PIXELS* is generated after the *Size* value |
| tab-background-color | Opens a dialog that allows the user to choose the tab background color. <br>![](../../../images/ide-prop-decbk.png) |
| tab-border-color | Opens a dialog that allows the user to choose the border color for the tabs. <br>![](../../../images/ide-prop-dtfg.png) |
| tab-border-width | Opens a dialog that allows the user to choose the border width for the tabs. <br>![](../../../images/IDE-borderwidth.png) |
| tab-color | Opens a dialog that allows the user to choose the tab color. <br>![](../../../images/ide-prop-color.png) |
| tab-delay | Specifies the value for the *Tab-Delay* property |
| tab-flat | TRUE...The *Tab-Flat* style is generated<br>FALSE... The *Tab-Flat* style is not generated |
| tab-foreground-color | Opens a dialog that allows the user to choose the tab foreground color. <br>![](../../../images/ide-prop-dtfg.png) |
| tab order | Sets the ordinal position of the control in the Screen Section. This property is set automatically when the control is drawn |
| tab-rollover-color | Opens a dialog that allows the user to choose the tab rollover color. <br>![](../../../images/ide-prop-dtfg.png) |
| value | Specifies the value for the *Value* property |
| visible | NONE...*Visible* property is not generated<br>TRUE... *Visible=1* is generated<br>FALSE...*Visible=0* is generated |
| width-in-cells | TRUE...The *Width-In-Cells* style is generated<br>FALSE... The *Width-In-Cells* style is not generated |

| Events | |
| --- | --- |
| cmd-goto event | Allows the user to create a paragraph to handle the CMD-GOTO event in the Procedure Division |
| cmd-help event | Allows the user to create a paragraph to handle the CMD-HELP event in the Procedure Division |
| cmd-tabchanged event | Allows the user to create a paragraph to handle the CMD-TABCHANGED event in the Procedure Division |
| msg-close event | Allows the user to create a paragraph to handle the MSG-CLOSE event in the Procedure Division |
| msg-drag event | Allows the user to create a paragraph to handle the MSG-DRAG event in the Procedure Division |
| msg-drop event | Allows the user to create a paragraph to handle the MSG-DROP event in the Procedure Division |
| msg-end-menu event | Allows the user to create a paragraph to handle the MSG-END-MENU event in the Procedure Division |
| msg-init-menu event | Allows the user to create a paragraph to handle the MSG-INIT-MENU event in the Procedure Division |
| msg-menu-input event | Allows the user to create a paragraph to handle the MSG-MENU-INPUT event in the Procedure Division |
| msg-mouse-clicked event | Allows the user to create a paragraph to handle the MSG-MOUSE-CLICKED event in the Procedure Division |
| msg-mouse-dblclick event | Allows the user to create a paragraph to handle the MSG-MOUSE-DBLCLICK event in the Procedure Division |
| msg-mouse-enter event | Allows the user to create a paragraph to handle the MSG-MOUSE-ENTER event in the Procedure Division |
| msg-mouse-exit event | Allows the user to create a paragraph to handle the MSG-MOUSE-EXIT event in the Procedure Division |
| msg-validate event | Allows the user to create a paragraph to handle the MSG-VALIDATE event in the Procedure Division |
| other event | Allows the user to create a custom paragraph |

| Exceptions | |
| --- | --- |
| cmd-goto exception | Allows the user to create a paragraph to handle the CMD-GOTO event when the Accept terminates with crt status = 96. This is an alternative to the event procedures described above |
| cmd-help exception | Allows the user to create a paragraph to handle the CMD-HELP event when the Accept terminates with crt status = 96. This is an alternative to the event procedures described above |
| cmd-tabchanged | Allows the user to create a paragraph to handle the CMD-TABCHANGED event when the Accept terminates with crt status = 96. This is an alternative to the event procedures described above |
| other exception | Allows the user to create a custom paragraph |

| Procedures | |
| --- | --- |
| After procedure | Allows the user to create a paragraph to handle the control AFTER PROCEDURE |
| After procedure thru | Allows the user to optionally specify a THRU paragraph for the AFTER PROCEDURE. |
| After-Tabchg Display | Allows the user to create a paragraph that will be executed after CMD-TABCHANGED handling |
| Before procedure | Allows the user to create a paragraph to handle the control BEFORE PROCEDURE |
| Before procedure thru | Allows the user to optionally specify a THRU paragraph for the BEFORE PROCEDURE. |
| Before-Tabchg Display | Allows the user to create a paragraph that will be executed before CMD-TABCHANGED handling |
| Event procedure | Allows the user to create a paragraph to handle the control EVENT PROCEDURE |
| Exception procedure | Allows the user to create a paragraph to handle the control EXCETPION PROCEDURE |

| Variables | |
| --- | --- |
| active-tab-background-color variable | Numeric variable that hosts the value for the *Active-Tab-Background-Color* property |
| active-tab-border-color variable | Numeric variable that hosts the value for the *Active-Tab-Border-Color* property |
| active-tab-color variable | Numeric variable that hosts the value for the *Active-Tab-Color* property |
| active-tab-foreground-color variable | Numeric variable that hosts the value for the *Active-Tab-Foreground-Color* property |
| background-color variable | Numeric variable that hosts the value for the *Background-Color* property |
| bitmap-width variable | Numeric variable that hosts the value for the *Bitmap-Width* property |
| color variable | Numeric variable that hosts the color value |
| column variable | Numeric variable that hosts the column value |
| css-style-name variable | Alphanumeric variable that hosts the css style associated with the control. It works only in a WebDirect environment. |
| drag-mode variable | Alphanumeric variable that hosts the value for the *Drag-Mode* property |
| enabled variable | Numeric variable that hosts the enabled state |
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
| size variable | Numeric variable that hosts the size value |
| tab-background-color variable | Numeric variable that hosts the value for the *Tab-Background-Color* property |
| tab-border-color variable | Numeric variable that hosts the value for the *Tab-Border-Color* property |
| tab-color variable | Numeric variable that hosts the value for the *Tab-Color* property |
| tab-foreground-color variable | Numeric variable that hosts the value for the *Tab-Foreground-Color* property |
| value variable | Numeric variable that hosts the value for the *Value* property |
| visible variable | Numeric variable that hosts the visible state |
