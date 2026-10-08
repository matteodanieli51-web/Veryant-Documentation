### Drawing the Report

To draw a control on the Report:

1. Click to select the control you want to use. All the controls are on the Controls Palette. Make sure you release the mouse button before going to step
2. Click and keep the left mouse button pressed on the position you want to place the control, this is going to be the upper left corner of your control.
3. Drag the mouse to the lower right corner of your control (it will feel like you are sizing the control). Make sure you do not release the left mouse button in between step 2 and step 3.
4. Release the left button and see that the control has been successfully drawn

By drawing the control you automatically set LINE, COL, LINES and SIZE properties. All other properties are set to a default value that can be configured by clicking on the Window menu, choosing *Preferences* and then selecting *isCOBOL / Report Designer / Default* from the tree.

The control is automatically named with the following pattern: <report_name\>-<two-digits-control-type\>-<progressive-number\>. For example, when you draw the first label on report-1, it will be named "report-1-lb-1". If you wish to assign a different prefix than the report name to the control name, you can right click on the Report Designer area and choose "Change Report Prefix". When you change the prefix, all existing controls in the report are automatically renamed, unless you check the option "Change report’s prefix only", in this case only the new controls will use the new prefix. You can always rename a single control by editing its "(name)" property.

To change the property values for one or more controls drawn on the screen:

1. Select the control(s).

a. The control is automatically selected when drawn.

b. To select more than one control, hold Ctrl and click on the desired controls.

2. Change the properties values in the [Properties](../../The-isCOBOL-IDE-Perspective/Properties) view.

To easily change LINE, COL, LINES and SIZE

1. Select the control
2. Use arrow keys to move the control on the Report (LINE and COL are updated)

c. Hold SHIFT and use arrow keys to change the control dimensions (LINES and SIZE are updated)
