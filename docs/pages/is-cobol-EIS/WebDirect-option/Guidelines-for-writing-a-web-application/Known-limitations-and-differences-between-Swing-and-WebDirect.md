### Known limitations and differences between Swing and WebDirect

This chapter lists the features that are currently not supported by WebDirect as well as behaviors that are different between running as a standard COBOL application and running as a web application.

The list is updated to the date this document has been written.

Please consider that the number of unsupported features decreases as the product becomes more mature.

Most of the unsupported features will just be ignored and the application will behave as if they were not specified in the source code. In some rare cases, an unsupported feature may cause an error.

### BAR

In the BAR control the following styles are not supported: DOTTED, DASHED and DOT-DASH.

### BITMAP

In the BITMAP control BITMAP-START, BITMAP-END and BITMAP-TIMER properties are not supported and the following mouse events are not returned: MSG-MOUSE-ENTERED, MSG-MOUSE-EXITED, MSG-MOUSE-CLICKED, MSG-MOUSE-DBLCLICK.

### CHECK-BOX

In the CHECK-BOX control the following styles are not supported: LEFT-TEXT, VTOP, MULTILINE, FLAT, FRAMED, UNFRAMED, SQUARE.

Check-boxes have a default layout that cannot be altered.

The TITLE-POSITION and BITMAP-DISABLED properties are not supported.

### COMBO-BOX

In the COMBO-BOX control the 3-D style is not supported.

MASS-UPDATE has no effect on loading items.

The NOTIFY-DBLCLICK style is not supported and the CMD-DBLCLICK event is not returned.

The list of Combo-Box items is never horizontally truncated. If the item text is too long, then the list width will be greater than the Combo-Box width to ensure that items text is displayed entirely.

The configuration properties *iscobol.gui.curr_bcolor* and *iscobol.gui.curr_fcolor* have no effect.

You can type something when the focus is on a DROP-LIST Combo-Box in order to change the selection. The Combo-Box selects the first item whose value begins with the digit that you typed. In WebDirect only the first letter is evaluated, there’s no buffering of digits typed quickly.

The height of the list is controlled by the number of items, not by the Lines property.

When Item-Height is set, it affects both the height of the text-area and the height of elements in the list.

### DATE-ENTRY

In the DATE-ENTRY control the following styles are not supported: NO-F4, RIGHT-ALIGN, SHORT-DATE, NO-UPDOWN, SHOW-NONE, SPINNER (that is default for ZK), DECORATION-BACKGROUND-VISIBLE, DECORATION-BORDERS-VISIBLE and WEEK-OF-YEAR-VISIBLE.

The following properties are not supported: CALENDAR-FONT, BITMAP-HANDLE, BITMAP-WIDTH, BITMAP-NUMBER, DECORATION-BACKGROUND, SUNDAY-FOREGROUND, WEEKDAY-FOREGROUND and MAXDAY-CHARACTERS.

### ENTRY-FIELD

In the ENTRY-FIELD control the following styles are not supported: AUTO, EMPTY-CHECK, NO-BOX, NO-WRAP, SPINNER, USE-RETURN, USET-TAB and VSCROLL.

The following properties are not supported: ACTION, AUTO-DECIMAL, CURSOR, CURSOR-COL, CURSOR-ROW, MAX-LINES, PROPOSAL-DELAY, SELECTION-TEXT, SELECTION-START, SELECTION-START-ROW, SELECTION-START-COL, FORMAT-STRING and FORMAT-TYPE.

The PLACEHOLDER implementation is a little different than the Swing implementation. In Swing the placeholder text disappears at the first digit from the user, while in WebDirect it disappears as soon as the field gets the focus.

The NTF-CHANGED event is fired only when the user stops typing data into the field. For this reason, there’s no point in setting the property NOTIFY-CHANGE-DELAY.

### FRAME

In the FRAME control FILL-COLOR2 and FILL-PERCENT properties are not supported as well as the ALTERNATE and FULL-HEIGHT styles.

### GRID

In the GRID control the following events are not fired: MSG-BEGIN-ENTRY produced by the Enter key (the user must double click with the mouse in order to produce such event), MSG-BEGIN-ENTRY produced by typing text while the cell is not in edit mode (note that if you wish to provide direct editing, without the need of double clicking on the cell, you can display ENTRY-FIELDs within GRID cells as shown in the installed example), MSG-BEGIN-DRAG, MSG-BEGIN-HEADING-DRAG, MSG-COL-WIDTH-CHANGED, MSG-END-DRAG, MSG-END-HEADING-DRAG, MSG-GOTO-CELL, MSG-GOTO-CELL-DRAG, MSG-GOTO-CELL-MOUSE on the current cell (clicking on the current cell doesn’t fire the event; the event is fired when you click on another cell) and MSG-HEADING-DRAGGED.

When the GRID component doesn’t have the focus and the user clicks on a cell, the MSG-GOTO-CELL-MOUSE event may not be fired along with the CMD-GOTO event.

The ADJUSTABLE-ROWS and REORDERING-COLUMNS styles are not supported.

The following properties are not supported: ACTION-HIDE-DRAG, CURSOR-FRAME-WIDTH, DRAG-BACKGROUND-COLOR, DRAG-COLOR, DRAG-FOREGROUND-COLOR, END-COLOR, ENTRY-REASON, FINISH-REASON, HEADING-DIVIDER-COLOR, HSCROLL-POS, ROW-DIVIDERS, ROW-HIDING and VSCROLL-POS.

Menu items should not be changed during the MSG-GRID-RBUTTON-DOWN event or the MSG-INIT-MENU event, since that causes the popup menu to be immediatly closed.

The COLUMN-HIDING property is supported only along with the COLUMN-HEADINGS style, you cannot hide columns of a grid without headings. Setting the VIRTUAL-WIDTH property to a value that is less than the Grid size in order to hide the last column (or columns) has no effect in WebDirect.

Modifying CURSOR-X and CURSOR-Y changes the cursor position on the screen only when the Grid gets the focus.

A vertical cursor bar is always visible in the selected cell, even if you’re not editing the cell content. This is because a grid cell that is not in edit mode is emulated by a ZK read-only text field and this kind of field always shows the cursor.

Only the first value specified in COLUMN-DIVIDERS and ROW-DIVIDERS is used. Also, the default divider color is light gray.

It’s not possible to vertically merge cells in the column heading via the CELL-ROWS-SPAN property if the GRID control has SORTABLE-COLUMNS style or ADJUSTABLE-COLUMNS style.

Scroll-bars are always shown when columns exceed the Grid's size. This is because in WebDirect it is not possible to move among cells using the keyboard, so, without scroll-bars, the columns over the Grid’s size would not be reachable.

The HEADING-MENU-POPUP button is shown over each single column. It’s possible to show and hide columns, but the entries ‘Export...’ and ‘Copy’ are not available.

It’s not possible to copy Grid content to the clipboard via the ACTION property.

TILED-HEADINGS may be rendered differently by some browsers.

When you add a record to a grid in Swing, data type '9' numeric items will show leading zeros. In WebDirect the leading zeros are removed for data type '9' numeric items.

ROW-CAPACITY is supported in WebDirect, but the returned value is not always accurate. The ZK Framework doesn’t offer a way of knowing how many rows are currently displayed in the grid component. web Direct will estimate that number by dividing the grid height by the row height, and subtracting the number of column headings from the result. Partially visible rows could be left out because of this.

### JAVA-BEAN

In WebDirect only the controls of the ZK Framework can be used as JAVA-BEAN; Swing controls are not supported.

In the JAVA-BEAN control the following styles are not supported: HAS-BITMAP, HSCROLL, VSCROLL, NO-BOX, BOXED, 3-D, USE-RETURN and USE-ALT.

As a consequence of the lack of HAS-BITMAP, the BITMAP-HANDLE and BITMAP-WIDTH properties are not supported.

If you want to force the focus on the Java-Bean by invoking the setFocus() method, you have to invoke this method in the Java-Bean BEFORE PROCEDURE.

### LABEL

In the LABEL control the VERTICAL style is not supported.

### LIST-BOX

In the LIST-BOX control THUMB-POSITION is not supported.

It’s not possible to copy List-Box content to the clipboard via the ACTION property.

### PUSH-BUTTON

In the PUSH-BUTTON control the following styles are not supported: DEFAULT-BUTTON, FRAMED, MULTILINE, SQUARE and UNFRAMED.

In WebDirect Push-Button titles are always shown entirely. If the Push-Button SIZE is not sufficient to store the title text, then the Push-Button is automatically extended by the Framework.

### RADIO-BUTTON

In the RADIO-BUTTON control the following styles are not supported: 3-D, LEFT-TEXT, VTOP, MULTILINE, FLAT, FRAMED, UNFRAMED and SQUARE.

Radio-Buttons have a default layout that cannot be altered.

The TITLE-POSITION and BITMAP-DISABLED properties are not supported.

### TAB-CONTROL

In the TAB-CONTROL the following styles are not supported: MULTILINE, BUTTONS, FIXED-WIDTH, BOTTOM, HOT-TRACK, FLAT-BUTTONS and NO-DIVIDERS.

After Procedure and Before Procedure are not supported. The Tab-Control never gets the focus, so it’s not possible to change the page by pressing TAB to activate the Tab-Control and then using left and right arrow keys. Use the mouse to change the page in a Tab-Control.

### TREE-VIEW

In the TREE-VIEW control the SHOW-SEL-ALWAYS style is not supported. The following properties are not supported: ACTION, BITMAP-NUMBER, BITMAP-HANDLE, BITMAP-WIDTH, ACTION, MASS-UPDATE.

The NEXT-ITEM property doesn’t support TVNI-FIRST-VISIBLE, TVNI-NEXT-VISIBLE and TVNI-PREVIOUS-VISIBLE.

No editing is allowed and the following events are not returned: MSG-TV-EXPANDING, MSG-TV-SELCHANGING, MSG-BEGIN-ENTRY, MSG-CANCEL-ENTRY and MSG-FINISH-ENTRY.

The selection color covers the whole line in WebDirect, while in Swing it covers only the item text.

### WINDOW

Windows must be Initial/Standard, Independent or Floating.

Initial/Standard windows lose their decoration unless they have the RESIZABLE style; their title becomes the title of the web page also if they’re invisible.

Subwindows are not supported.

SHADOW, SCROLL and POP-UP AREA are not supported.

The LM-ZOOM layout manager is not supported.

The CMD-ACTIVATE event is not fired.

The UNDECORATED style just reduces the border, but the title bar is still visible.

MASS-UPDATE on windows is not supported.

### Unsupported Controls

The following controls are not supported in WebDirect:

- CHIPS-BOX
- RIBBON
- SCROLL-BAR
- SCROLL-PANE
- SLIDER
- SPLIT-PANE
- STATUS-BAR
- WEB-BROWSER

### Other Differences with Desktop Applications

It’s good practice to map the internal fonts to existing fonts by setting the following properties in the configuration file:

- [iscobol.font.default \*](../../../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#font_default)
- [iscobol.font.fixed \*](../../../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#font_fixed)
- [iscobol.font.large \*](../../../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#font_large)
- [iscobol.font.medium \*](../../../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#font_medium)
- [iscobol.font.small \*](../../../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#font_small)
- [iscobol.font.traditional \*](../../../is-cobol-evolve/SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#font_traditional)

If these fonts are not mapped, WebDirect will use fonts that are available, such as Arial, but this will make the GUI of the COBOL application look different than you expect.

All keyboard input is trapped by the web-browser and therefore keystrokes mapped to exception or termination values will not work. The key that allows the user to move between controls is TAB (use SHIFT+TAB to move to the previous control). Only function keys from F1 to F12 that are not trapped by the web-browser will cause an ACCEPT to terminate with an exception. The other function keys and other keys will not, so it is strongly suggested that you provide a graphical push-button for each mapped keystroke that the COBOL program expects.

An ACCEPT can be terminated by pressing ENTER unless the focus is on a Push-Button, a multiline Entry-Field, a Grid or a Tab-Control.

Relative columns in Screen Section are not supported by WebDirect because the Framework doesn’t know the real font size that the browser will use to paint the field. When working on the desktop with Java Swing controls, isCOBOL first puts the control in the window and then inquires its actual size. A similar operation would be very slow if executed by AJAX in the browser, and therefore is better for the user to specify the size and the column of the control using fixed values.

HTML rendering is supported only in the TITLE of Label, Check-Box, Push-Button and Radio-Button as well as in Grid cells when they’re not editable.

GIF animation is supported only if the BITMAP-NUMBER property is not set.

The CALL CLIENT statement is not supported in WebDirect.

### Unsupported Library Routines and functions

In WebDirect all the library routines and functions work on the server machine. Generally speaking all the functions that need to show a dialog on the client machine or to manage files on the client machine are not supported. The following table lists in detail the routines that are partially or totally not supported.

| Routine | Notes |
| --- | --- |
| A$CURRENT-USER<br>A$GET-USER<br>A$GETTHREAD<br>A$LIST-LOCKS<br>A$LIST-USERS<br>A$USERINFO<br>AS$COPY | Not supported |
| C$COPYC$DELETE | "@[DISPLAY]:" in the file name is not supported |
| C$EASYOPEN<br>C$GETCGI<br>C$GUICFG<br>C$OPENSAVEBOX | Not supported |
| C$SYSTEM | The CSYS-DESKTOP flag is not supported |
| CBL_READ_SCR_CHARS<br>CBL_READ_SCR_CHATTRS<br>CBL_WRITE_SCR_CHARS<br>CBL_WRITE_SCR_CHATTRS<br>J$GETFROMLAF<br>KEISEN<br>KEISEN1<br>KEISEN2<br>KEISEN_SELECT<br>P$CLEARDIALOG<br>P$DISPLAYDIALOG<br>P$ENABLEDIALOG<br>P$SETDIALOG<br>W$CAPTURE<br>W$CENTER_WINDOW | Not supported |
| W$FONT | The WFONT-CHOOSE-FONT function is not supported |
| W$HINT<br>W$KEYBUF | Not supported |
| W$MENU | The WMENU-NEW-TRAY function is not supported |
| W$MOUSE | All settings of the SET-MOUSE-SHAPE function are supported except a custom mouse pointer |
| W$PALETTE | The WPALETTE-CHOOSE-COLOR function is not supported |
| W$PROGRESSDIALOG<br>WIN$PLAYSOUND | Not supported |
| WIN$PRINTER | The WINPRINT-SETUP function is not supported |

**Note** - when a routine that is not supported is called, the effect are unpredictable.
