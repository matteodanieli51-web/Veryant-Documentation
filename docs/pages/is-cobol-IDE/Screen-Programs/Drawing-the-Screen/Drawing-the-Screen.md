## Drawing the Screen

To draw a control with default dimensions on the screen:

1. Click to select the graphical control you want to use. All the graphical controls are on the Controls Palette. Make sure you release the mouse button before going to step 2.
2. Click on the position you want to place the control, this is going to be the upper left corner of your graphical control. Release the mouse button to make the control appear.

To draw a control with custom dimensions on the screen:

1. Click to select the graphical control you want to use. All the graphical controls are on the Controls Palette. Make sure you release the mouse button before going to step 2.
2. Click and keep the left mouse button pressed on the position you want to place the control, this is going to be the upper left corner of your graphical control.
3. Drag the mouse to the lower right corner of your graphical control (it will feel like you are sizing the graphical control). Make sure you do not release the left mouse button in between step 2 and step 3.
4. Release the left button and see that the control has been successfully drawn.

By drawing the control you automatically set LINE, COL, LINES and SIZE properties. All other properties are set to a default value that can be configured by clicking on the *Window* menu, choosing *Preferences* and then selecting *isCOBOL / Screen Designer / Default* from the tree.

The control is automatically named with the following pattern: <screen_name\>-<two-digits-control-type\>-<progressive-number\>. For example, when you draw the first entry-field on screen-1, it will be named "screen-1-ef-1". If you wish to assign a different prefix than the screen name to the control name, you can right click on the Screen Designer area and choose "Change Screen Prefix". When you change the prefix, all existing controls in the screen are automatically renamed, unless you check the option "Change screen’s prefix only", in this case only the new controls will use the new prefix. You can always rename a single control by editing its "(name)" property.

To change the property values for one or more controls drawn on the screen:

1. Select the control(s).

- The control is automatically selected when drawn.
- To select more than one control, hold Ctrl and click on the desired controls.

2. Change the properties values in the [Properties](../../The-isCOBOL-IDE-Perspective/Properties) view. The full documentation of graphical control properties can be found at the Graphical User Interface Reference section of the isCOBOL Documentation.

**Note**: When you set the font property of a control to a native font (e.g. large-font) the IDE shows a preview of the control depending on the iscobol.font setting (e.g. iscobol.font.large) found in the configuration. Therefore, in order to obtain a preview that is consistent with the run time, ensure that the same font settings are used both for the IDE configuration and the Framework configuration. Changing these settings after the Screen Program has been created doesn’t produce any effect since these settings are read only when the program is created.

To easily change LINE, COL, LINES and SIZE

1. Select the control by clicking on it.
2. Use arrow keys to move the control on the Screen pixel by pixel (LINE and COL are updated).

- Hold CTRL and use arrow keys to move the control on the Screen cell by cell (LINE and COL are updated).
- Hold SHIFT and use arrow keys to change the control dimensions pixel by pixel (LINES and SIZE are updated).
- Hold SHIFT + CTRL and use arrow keys to change the control dimensions pixel by pixel (LINES and SIZE are updated).

To easily change TITLE of controls that have this property (e.g. buttons):

1. Select the control by clicking on it.
2. Press Enter to edit the current text or start typing to provide a new text.

If you double click on a control, the Event Paragraph editor is opened and the most common paragraph for that control is shown. It happens with all controls except for the Label. Double clicking on a Label allows you to change its title instead.
