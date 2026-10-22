### BAR

Refer to [BAR](../../../is-cobol-evolve/User-Interface/Controls-Reference/BAR/BAR) for details about properties, styles and events of this control.

| Properties | |
| --- | --- |
| (name) | Specifies the control name. This property is set automatically when the control is drawn |
| additional properties | Allows the user to specify additional properties and styles. The text you write here is generated as is and may generate compile errors if not correct. |
| background-color | Opens a dialog that allows the user to choose the control background color. <br>![](../../images/ide-prop-decbk.png)|
| color | Opens a dialog that allows the user to choose the control color. <br>![](../../images/ide-prop-color.png) |
| column | Specifies the X coordinate of the control as expressed in cells. This property is set automatically when the control is drawn. |
| column pixels | Specifies the X coordinate of the control as expressed in pixels. This property is set automatically when the control is drawn. |
| css-base-style-name<br>css-style-name | Specify the CSS style associated with the control. It works only in a WebDirect environment.<br>See [Customize the WebDirect Layout using CSS](../../../is-cobol-EIS/WebDirect-option/Customize-the-WebDirect-Layout-using-CSS) for more information. |
| custom-data | Specifies the value for the *Custom-Data* property. |
| destroy type | AUTOMATIC...neither the *Temporary* nor Permanent styles are generated<br>TEMPORARY...*Temporary* style is generated<br>PERMANENT...*Permanent* style is generated |
| drag mode | No drag events... *Drag-Mode* is not generated<br>Only MSG-DRAG... *Drag-Mode=1* is generated<br>Only MSG-DROP... *Drag-Mode=2* is generated<br>Both events... *Drag-Mode=3* is generated |
| enabled | NONE...*Enabled* property is not generated<br>TRUE... *Enabled=1* is generated<br>FALSE...*Enabeld=0* is generated |
| font | Opens a dialog that allows the user to choose the control font. <br>![](../../images/ide-prop-font.png)<br><br>The dialog lists the fonts installed in the system and allows you to load new fonts from disc files. Fonts loaded from disc are added to the list with an asterisk before their name. When one of these fonts is selected the *Copy Resource* option is enabled and can be activated. Activate the option to include the font disc file in the compiled class or be sure to distribute this file along with your application. |
| foreground-color | Opens a dialog that allows the user to choose the control foreground color. <br>![](../../images/ide-prop-dtfg.png) |
| height-in-cells | TRUE...The *Height-In-Cells* style is generated<br>FALSE... The *Height-In-Cells* style is not generated |
| help-id | Specifies the control *Help-id*. |
| hint | Specifies the value for the *Hint* property. |
| horizontal | TRUE...The *Horizontal* style is generated<br>FALSE... The *Horizontal* style is not generated |
| id | Specifies the control id. This property is set automatically when the control is drawn. |
| key | Specifies the value for the *Key* property. |
| layout-data | Opens a dialog that allows the user to choose the control resize rules.<br>![](../../images/ide-prop-layout.png) <br>If the option "Follows Layout-Manager defaults" is checked, the *Layout-Data* property is not generated. |
| line | Specifies the Y coordinate of the control as expressed in cells. This property is set automatically when the control is drawn |
| line pixels | Specifies the Y coordinate of the control as expressed in pixels. This property is set automatically when the control is drawn |
| line styles | SOLID... no particular style is generated<br>DASHED.... The *Dashed* style is generated<br>DOTTED... The *Dotted* style is generated<br>DOT-DASH... The *Dot-Dash* style is generated |
| lines | Specifies the control height as expressed in cells. This property is set automatically when the control is drawn |
| lines pixels | Specifies the control height as expressed in pixels. This property is set automatically when the control is drawn |
| lines unit | DEFAULT... Either *CELLS* or nothing is generated after the *Lines* value depending on the window’s “cell” property setting<br>None... Neither *CELLS* nor *PIXELS* are generated after the *Lines* value<br>CELLS... *CELLS* is generated after the *Lines* value<br>PIXELS... *PIXELS* is generated after the *Lines* value |
| lock | TRUE...Locks the control on the Screen Designer so that you cannot move it anymore by dragging it with the mouse.<br>FALSE...You can move the control on the Screen Designer by dragging it with the mouse |
| max-height | Specifies the control maximum height as expressed in cells |
| max-width | Specifies the control maximum width as expressed in cells |
| min-height | Specifies the control minimum height as expressed in cells |
| min-width | Specifies the control minimum width as expressed in cells |
| no-tab | TRUE...The *No-Tab* style is generated<br>FALSE...The *No-Tab* style is not generated |
| notify-mouse | TRUE...The *Notify-Mouse* style is generated<br>FALSE...The *Notify-Mouse* style is not generated |
| pixel line settings | Opens a dialog that allows the user to set *Color, Shading, Leading Shift and Trailing Shift* for each line of pixel when the Width property is set to a value greater than 1. <br>![](../../images/ide-prop-pixel-line.png) |
| position shift | Specifies the value for the *Position-Shift* property |
| size | Specifies the control width as expressed in cells. This property is set automatically when the control is drawn |
| size pixels | Specifies the control width as expressed in pixels. This property is set automatically when the control is drawn |
| size unit | DEFAULT... Either *CELLS* or nothing is generated after the *Size* value depending on the window’s “cell” property setting<br>None... Neither *CELLS* nor *PIXELS* are generated after the *Size* value<br>CELLS... *CELLS* is generated after the *Size* value<br>PIXELS... *PIXELS* is generated after the *Size* value |
| tab order | Sets the ordinal position of the control in the Screen Section. This property is set automatically when the control is drawn |
| visible | NONE...*Visible* property is not generated<br>TRUE... *Visible=1* is generated<br>FALSE...*Visible=0* is generated |
| width | Specifies the width in pixels for the BAR control. When this property is set to a value greater than 1 you can specify different settings for each pixels line (see pixel line settings, above) |
| width-in-cells | TRUE...The *Width-In-Cells* style is generated<br>FALSE... The *Width-In-Cells* style is not generated |

| Events |  |
| --- | --- |
| msg-drag event | Allows the user to create a paragraph to handle the MSG-DRAG event in the Procedure Division |
| msg-drop event | Allows the user to create a paragraph to handle the MSG-DROP event in the Procedure Division |
| msg-mouse-clicked event | Allows the user to create a paragraph to handle the MSG-MOUSE-CLICKED event in the Procedure Division |
| msg-mouse-dblclick event | Allows the user to create a paragraph to handle the MSG-MOUSE-DBLCLICK event in the Procedure Division |
| msg-mouse-enter event | Allows the user to create a paragraph to handle the MSG-MOUSE-ENTER event in the Procedure Division |
| msg-mouse-exit event | Allows the user to create a paragraph to handle the MSG-MOUSE-EXIT event in the Procedure Division |
| other event | Allows the user to create a custom paragraph |

| Exceptions |  |
| --- | --- |
| No Exceptions available.| |

| Procedures | |
| --- | --- |
| No Procedures available.| |

| Variables | |
| --- | --- |
| color variable | Numeric variable that hosts the color value. |
| column variable | Numeric variable that hosts the column value. |
| css-style-name variable | Alphanumeric variable that hosts the css style associated with the control. It works only in a WebDirect environment. |
| enabled variable | Numeric variable that hosts the enabled state. |
| help-id variable | Numeric variable that hosts the help id. |
| hint variable | Alphanumeric variable that hosts the hint value. |
| id variable | Numeric variable that hosts the control id. |
| key variable | Alphanumeric variable that hosts the value for the *Key* property. |
| layout-data variable | Numeric variable that hosts the control resize rules. |
| lines variable | Numeric variable that hosts the lines value. |
| line variable | Numeric variable that hosts the line value. |
| max-height variable | Numeric variable that hosts the maximum height. |
| max-width variable | Numeric variable that hosts the maximum width. |
| min-height variable | Numeric variable that hosts the minimum height. |
| min-width variable | Numeric variable that hosts the minimum width. |
| position shift variable | Numeric variable that hosts the value for the *Position-Shift* property. |
| size variable | Numeric variable that hosts the size value. |
| visible variable | Numeric variable that hosts the visible state. |
| width variable | Numeric variable that hosts the value for the *Width* property. |
