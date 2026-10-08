### RIBBON

Refer to [RIBBON](../../../../is-cobol-evolve/User-Interface/Controls-Reference/RIBBON/RIBBON) for details about properties, styles and events of this control.

| Properties | |
| --- | --- |
| (name) | Specifies the control name. This property is set automatically when the control is drawn |
| additional properties | Allows the user to specify additional properties and styles. The text you write here is generated as is and may generate compile errors if not correct. |
| background-bitmap | Opens a dialog box that allows the user to select an image file to load into the control. <br>![](../../../images/ide-prop-bg-bitmap.png) |
| background-bitmap-scale | Allows the user to choose if the background-bitmap must be scaled to fit the control area. The Background-Bitmap-Scale property is generated according to this choice. |
| background-color | Opens a dialog that allows the user to choose the control background color. <br>![](../../../images/ide-prop-decbk.png) |
| bitmap | Opens a dialog box that allows the user to select an image file to load into the control. It’s also possible to generate an image from a series of characters represented with a given font <br>![](../../../images/ide-prop-bitmap.png) |
| bitmap-width | Specifies the value for the *Bitmap-Width* property |
| collapse | TRUE...*collapse=1* is generated<br>FALSE...*collapse* is not generated |
| color | Opens a dialog that allows the user to choose the control color. <br>![](../../../images/ide-prop-color.png) |
| css-base-style-name<br>css-iconcss-style-name | Specify the CSS style associated with the control. It works only in a WebDirect environment.<br>See [Customize the WebDirect Layout using CSS](../../../../is-cobol-EIS/WebDirect-option/Customize-the-WebDirect-Layout-using-CSS) for more information. |
| custom-data | Specifies the value for the *Custom-Data* property. |
| enabled | NONE...*Enabled* property is not generated<br>TRUE... *Enabled=1* is generated<br>FALSE...*Enabled=0* is generated |
| font | Opens a dialog that allows the user to choose the control font. <br>![](../../../images/ide-prop-font.png)  <br><br> The dialog lists the fonts installed in the system and allows you to load new fonts from disc files. Fonts loaded from disc are added to the list with an asterisk before their name. When one of these fonts is selected the *Copy Resource* option is enabled and can be activated. Activate the option to include the font disc file in the compiled class or be sure to distribute this file along with your application. |
| foreground-color | Opens a dialog that allows the user to choose the control foreground color. <br>![](../../../images/ide-prop-dtfg.png) |
| gradient-color-1 | Opens a dialog that allows the user to choose the window gradient start color. <br>![](../../../images/ide-prop-dtfg.png) |
| gradient-color-2 | Opens a dialog that allows the user to choose the window gradient end color. <br>![](../../../images/ide-prop-dtfg.png) |
| gradient-orientation | Specifies the gradient orientation. Possible values are:<br>None<br>0: NORTH-TO-SOUTH<br>1: NORTHEAST-TO-SOUTHWEST<br>2: EAST-TO-WEST<br>3: SOUTHEAST-TO-NORTHWEST<br>4: SOUTH-TO-NORTH<br>5: SOUTHWEST-TO-NORTHEAST<br>6: WEST-TO-EAST<br>7: NORTHWEST-TO-SOUTHEAST |
| header-align | CENTER....*Header-Align* is not generated<br>LEFT...*Header-Align=1* is generated<br>RIGHT...*Header-Align=2* is generated |
| height-in-cells | TRUE...The *Height-In-Cells* style is generated<br>FALSE... The *Height-In-Cells* style is not generated |
| hint | Specifies the value for the *Hint* property |
| id | Specifies the control id. This property is set automatically when the control is drawn. |
| laf-colors | TRUE... The LAF-COLORS style is generated<br>FALSE... The LAF-COLORS style is not generated |
| layout manager | Opens a dialog that allows you to choose which layout manager should be associated to the ribbon. When either LM-SCALE or LM-RESPONSIVE is selected, it’s possible to specify the configuration string. In this dialog you also associate a handle to the layout manager. <br>![](../../../images/IDE-layoutmanager.png) |
| lines | Specifies the control height as expressed in cells. This property is set automatically when the control is drawn |
| lines pixels | Specifies the control height as expressed in pixels. This property is set automatically when the control is drawn |
| lock | TRUE...Locks the control on the Screen Designer so that you cannot move it anymore by dragging it with the mouse.<br>FALSE...You can move the control on the Screen Designer by dragging it with the mouse |
| notify-mouse | TRUE...The *Notify-Mouse* style is generated<br>FALSE...The *Notify-Mouse* style is not generated |
| pop up menu | Associates a pop-up menu with the control. The menu must have been drawn on the same screen. |
| tab order | Sets the ordinal position of the control in the Screen Section. This property is set automatically when the control is drawn |
| value | Specifies the value for the *Value* property |
| visible | NONE...*Visible* property is not generated<br>TRUE... *Visible=1* is generated<br>FALSE...*Visible=0* is generated |
| width-in-cells | TRUE...The *Width-In-Cells* style is generated<br>FALSE... The *Width-In-Cells* style is not generated |

| Events | |
| --- | --- |
| cmd-tabchanged event | Allows the user to create a paragraph to handle the CMD-TABCHANGED event in the Procedure Division |
| msg-drag event | Allows the user to create a paragraph to handle the MSG-DRAG event in the Procedure Division |
| msg-drop event | Allows the user to create a paragraph to handle the MSG-DROP event in the Procedure Division |
| msg-end-menu event | Allows the user to create a paragraph to handle the MSG-END-MENU event in the Procedure Division |
| msg-init-menu event | Allows the user to create a paragraph to handle the MSG-INIT-MENU event in the Procedure Division |
| msg-mouse-clicked event | Allows the user to create a paragraph to handle the MSG-MOUSE-CLICKED event in the Procedure Division |
| msg-mouse-dblclick event | Allows the user to create a paragraph to handle the MSG-MOUSE-DBLCLICK event in the Procedure Division |
| msg-mouse-enter event | Allows the user to create a paragraph to handle the MSG-MOUSE-ENTER event in the Procedure Division |
| msg-mouse-exit event | Allows the user to create a paragraph to handle the MSG-MOUSE-EXIT event in the Procedure Division |
| msg-mouse-exit event | Allows the user to create a paragraph to handle the MSG-MOUSE-EXIT event in the Procedure Division |
| other event | Allows the user to create a custom paragraph |

| Exceptions | |
| --- | --- |
| cmd-tabchanged exception | Allows the user to create a paragraph to handle the CMD-TABCHANGED event when the Accept terminates with crt status = 96. This is an alternative to the event procedures described above |
| other exception | Allows the user to create a custom paragraph |

| Procedures | |
| --- | --- |
| Event procedure | Allows the user to create a paragraph to handle the control EVENT PROCEDURE |

| Variables | |
| --- | --- |
| background-bitmap-scale variable | Numeric variable that hosts the value for the *Background-Bitmap-Scale* property |
| background-color variable | Numeric variable that hosts the value for the *Background-Color* property |
| bitmap-width variable | Numeric variable that hosts the value for the *Bitmap-Width* property |
| color variable | Numeric variable that hosts the color value |
| css-style-name variable | Alphanumeric variable that hosts the css style associated with the control. It works only in a WebDirect environment. |
| enabled variable | Numeric variable that hosts the enabled state |
| foreground-color variable | Numeric variable that hosts the value for the *Foreground-Color* property |
| gradient-color-1 variable | Numeric variable that hosts the value for the *Gradient-Color-1* property |
| gradient-color-2 variable | Numeric variable that hosts the value for the *Gradient-Color-2* property |
| gradient-orientation variable | Numeric variable that hosts the value for the *Gradient-Orientation* property |
| header-align variable | Numeric variable that hosts the value for the *Header-Align* property |
| hint variable | Alphanumeric variable that hosts the value for the *Hint* property |
| id variable | Numeric variable that hosts the control id |
| lines variable | Numeric variable that hosts the lines value |
| ribbon handle | Handle variable for the ribbon |
| value variable | Numeric variable that hosts the value for the *Value* property |
| visible variable | Numeric variable that hosts the visible state |
