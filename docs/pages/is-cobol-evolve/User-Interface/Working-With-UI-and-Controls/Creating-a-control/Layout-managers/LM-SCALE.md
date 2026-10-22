### M-SCALE

LM-SCALE moves and resizes controls proportional to the new dimensions of the window.

If the window includes a status-bar, then status-bar panels are resized proportional to the new dimensions of the window.

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

| ||
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
77 h-layout handle of layout-manager, lm-scale "configuration string".
```

A sample configuration string is provided in the [isresize.def](../../../../Appendices/Copybooks/isresize.def) Copybook.

The configuration string is composed of a series of <control-type\>=<value\> separated by a spaces or comma.

<control-type\>=<value\> must be a unique word. No space may be put inside. The string is case insensitive.

Example:

```cobol
77 h-layout handle of layout-manager lm-scale "textarea=119 label=119 frame=119".
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
| | |

<value\> is a numeric value that is the sum of the constant values that must be used for the control.

In the above sample, 119 is the sum of rlm-resize-x, rlm-move-x, rlm-no-min-x, rlm-resize-y, rlm-move-y, rlm-no-min-y.

**Note**: inquiring controls coordinates (Line and Col properties) and dimensions (Lines and Size properties) after the window has been resized returns the initial values and not the new values when the Layout-Manager is LM-SCALE.
