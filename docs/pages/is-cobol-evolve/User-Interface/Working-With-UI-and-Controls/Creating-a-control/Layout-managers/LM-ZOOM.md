### LM-ZOOM

LM-ZOOM moves and resizes controls proportional to the new dimensions of the window and changes the size of the font within controls according to the new control’s height.

This layout manager doesn’t affect status-bars, menu bars, tool-bars and ribbons.

For each resize action:

deltaX = current window size / previous window size,

deltaY = current window lines / previous window lines.

For each control:

| | |
| --- | --- |
| RESIZE-X | size = previous size * deltaX. |
| RESIZE-Y | lines = previous lines * deltaY. |
| MOVE-X | column = previous column * deltaX. |
| MOVE-Y | line = previous line* deltaY. |
| NO-ACTION | no change of coordinates and dimensions. |
| | |

If the Layout-Data property is not set, each control has its own default behavior.

The list below describes the default behavior of each control:

| | |
| --- | --- |
| BAR HORIZONTAL | MOVE-BOTH-ANY + RESIZE-X-ANY |
| BAR VERTICAL | MOVE-BOTH-ANY + RESIZE-Y-ANY |
| BITMAP | MOVE-BOTH-ANY |
| CHECK-BOX | MOVE-BOTH-ANY |
| CHIPS-BOX | MOVE-BOTH-ANY + RESIZE-BOTH-ANY |
| COMBO-BOX | MOVE-BOTH-ANY + RESIZE-X-ANY |
| DATE-ENTRY | MOVE-BOTH-ANY + RESIZE-X-ANY |
| ENTRY-FIELD | MOVE-BOTH-ANY + RESIZE-X-ANY |
| ENTRY-FIELD MULTILINE | MOVE-BOTH-ANY + RESIZE-BOTH-ANY |
| ENTRY-FIELD SPINNER | MOVE-BOTH-ANY + RESIZE-BOTH-ANY |
| FRAME | MOVE-BOTH-ANY + RESIZE-BOTH-ANY |
| GRID | MOVE-BOTH-ANY + RESIZE-BOTH-ANY |
| JAVA-BEAN | MOVE-BOTH-ANY |
| LABEL | MOVE-BOTH-ANY |
| LIST-BOX | MOVE-BOTH-ANY + RESIZE-BOTH-ANY |
| PUSH-BUTTON | MOVE-BOTH-ANY |
| RADIO-BUTTON | MOVE-BOTH-ANY |
| SCROLL-BAR HORIZONTAL | MOVE-BOTH-ANY + RESIZE-X-ANY |
| SCROLL-BAR VERTICAL | MOVE-BOTH-ANY + RESIZE-Y-ANY |
| SCROLL-PANE | MOVE-BOTH-ANY + RESIZE-BOTH-ANY |
| SLIDER HORIZONTAL | MOVE-BOTH-ANY + RESIZE-X-ANY |
| SLIDER VERTICAL | MOVE-BOTH-ANY + RESIZE-Y-ANY |
| SPLIT-PANE | MOVE-BOTH-ANY + RESIZE-BOTH-ANY |
| TAB CONTROL | MOVE-BOTH-ANY + RESIZE-BOTH-ANY |
| TREE-VIEW | MOVE-BOTH-ANY + RESIZE-BOTH-ANY |
| WEB-BROWSER | MOVE-BOTH-ANY + RESIZE-BOTH-ANY |
| | |

The user can also specify custom values for some controls directly in the handle definition, without using the Layout-Data property.

Example:

```cobol
77 h-layout handle of layout-manager, lm-zoom "configuration string".
```

A sample configuration string is provided in the [isresize.def](../../../../Appendices/Copybooks/isresize.def) Copybook.

The configuration string is composed of a series of  <control-type\>=<value\> separated by a spaces or comma.

<control-type\>=<value\> must be a unique word. No space may be put inside. The string is case insensitive.

Example:

```cobol
77 h-layout handle of layout-manager lm-zoom "textarea=119 label=119 frame=119".
```

The list below describes the <control-type\> you can use in the configuration string.

| | |
| --- | --- |
| BAR HORIZONTAL | hbar |
| BAR VERTICAL | vbar |
| BITMAP | bitmap |
| CHECK-BOX | checkbox |
| CHIPS-BOX | chipsbox |
| COMBO-BOX | combobox |
| DATE-ENTRY | dateentry |
| ENTRY-FIELD | entryfield |
| ENTRY-FIELD MULTILINE | textarea |
| ENTRY-FIELD SPINNER | spinner |
| FRAME | frame |
| GRID | grid |
| HORIZONTAL SCROLLBAR | hscrollbar |
| HORIZONTAL SLIDER | hslider |
| JAVA-BEAN | javabean |
| LABEL | label |
| LIST-BOX | listbox |
| PUSH-BUTTON | pushbutton |
| RADIO-BUTTON | radiobutton |
| SCROLL-PANE | scrollpane |
| SPLIT-PANE | splitpane |
| TAB CONTROL | tab |
| TREE-VIEW | treeview |
| VERTICAL SCROLLBAR | vscrollbar |
| VERTICAL SLIDER | vslider |
| WEB-BROWSER | webbrowser |

<value\> is a numeric value that is the sum of the constant values that must be used for the control.

In the above sample, 119 is the sum of rlm-resize-x, rlm-move-x, rlm-no-min-x, rlm-resize-y, rlm-move-y, rlm-no-min-y.

**Note**: inquiring controls coordinates (Line and Col properties) and dimensions (Lines and Size properties) after the window has been resized returns the initial values and not the new values when the Layout-Manager is LM-ZOOM.

#### Configuring the font zoom

You can specify a range of dimensions, expressed in percentage, in which the font will be altered. Outside this range, LM-ZOOM behaves exactly the same as LM-SCALE, so it just changes controls’ dimensions and coordinates without affecting the font.

The range is expressed via the [iscobol.gui.layout_manager.max_font_zoom](../../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#graphical-user-ingerface-gui) and the [iscobol.gui.layout_manager.min_font_zoom](../../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#graphical-user-ingerface-gui) configuration properties.

Example:

```cobol
iscobol.gui.layout_manager.max_font_zoom=150
iscobol.gui.layout_manager.min_font_zoom=50
```

Assuming that the initial font size is 12, when the user reduces the window’s height, LM-ZOOM will reduce the font size accordingly, until it reaches a size of 6. After that, the font will not be reduced anymore. On the other hand, when the user increases the window’s height, LM-ZOOM will increase the font size accordingly, until it reaches a size of 18. After that, the font will not be increased anymore.

You can get the same result by adding the max-font-zoom attribute and the min-font-zoom attribute to the configuration string in the layout-manager handle definition, e.g.

```cobol
77 h-layout handle of layout-manager lm-zoom "textarea=119 label=119 frame=119 max-font-zoom=150 min-font-zoom=50".
```

The attributes in the handle definition have priority over the corresponding configuration properties.

#### Button icons

The default icon of check-boxes and radio-buttons as well as the bitmap icon you might have associated to a check-box, a radio-button or a push-button are not resized along with the font by default.

Set [iscobol.gui.icons_scaling (boolean)](../../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#graphical-user-ingerface-gui) to true in the configuration to have default button icons resized along with the font.

Add the [Bitmap-Scale](../../../../Appendices/Graphical-Control-List) property to your buttons to have the bitmap icons resized along with the font.
