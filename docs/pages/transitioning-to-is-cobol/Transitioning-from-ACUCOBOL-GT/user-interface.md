## User interface

- All the windows have a visible System-Menu, even if the SYSTEM-MENU style is not explicitly set.
- Windows are always link-to-thread. Therefore, they cannot be programmatically activated in response to a CMD-ACTIVATE Event.
- The scroll-bar control raises only the MSG-SB-THUMB event.
- Check-Boxes with the LEFT-TEXT style show the title on the left of the box, however the text is not left justified. In order to have the text left justified like it happens with Acucobol, the LEFT-TEXT-ALIGNMENT property must be set to 1. This property can be easily added at compile time by adding the following entry to the Compiler configuration:

```cobol
iscobol.compiler.gui.check_box.defaults=left-text-alignment 1

```

- Performing DISPLAY WINDOW ERASE on a graphical window may not clean the graphical window completely. In some operating systems, the pixels of the graphical window border are not affected by the statement.
- The coordinates of pop-up menus are relative to the upper left corner of the current window, not to the upper left corner of the physical screen.
- The BUTTONS, LINES-AT-ROOT and SHOW-LINES styles of TREE-VIEW behaves slightly different in isCOBOL. Consult the User Interface Manual for the description of their behavior.
- When you collapse the parent of the current TREE-VIEW item, causing the selection to change, events are generated in a different order. In ACUCOBOL-GT you have MSG-TV-SELCHANGE first and then MSG-TV-EXPANDED. In isCOBOL you have MSG-TV-EXPANDED first and then MSG-TV-SELCHANGE.
- The INQUIRE and MODIFY statements work only with valid handles. Use the FUNCTION [HANDLE-TYPE](\) to ensure that the handle is valid before using it. Alternatively, to avoid errors due to invalid handles, add the following line to your configuration file:

```cobol
iscobol.gui.ignore_invalid_handle=1
```

- The "INQUIRE *WindowHandle*, SYSTEM-HANDLE IN *SystemHandle*" syntax is not supported. This is a Java restriction. The system handle of the active window can be retrieved only with the native GetActiveWindow and GetForegroundWindow APIs.
- The following WEB-BROWSER properties are not supported by isCOBOL: CLEAR-SELECTION, COPY-SELECTION, CUSTOM-PRINT-TEMPLATE, PAGE-SETUP, PRINT-PREVIEW, PROPERTIES, SELECT-ALL and TYPE.
- Modal floating windows don’t allow to switch to any other active window while they have the focus. ACUCOBOL-GT allowed to switch to a child independent window, instead.
- Resizable floating windows cannot be maximized.
- The following TAB-CONTROL styles don’t have any effect:
  - FIXED-WIDTH
  - HOT-TRACK
- Nested TAB-CONTROLs are not supported. If the program displays a TAB-CONTROL over another TAB-CONTROL, clicking on the nested TAB-CONTROL’s tabs will have no effect.
- GRID doesn’t support columns distributed on multiple rows, therefore a similar setting:

```cobol
DISPLAY-COLUMNS (1, 5, 10, 1, 8, 12)
```

is treated to:

```cobol
DISPLAY-COLUMNS (1, 5, 10, 13, 20, 24)
```

- In isCOBOL pressing the DEL key when the focus is on a Grid fires a MSG-BEGIN-ENTRY event even if a keystroke is associated to the DEL key. In Acucobol instead, if a keystroke is associated to the DEL key, then the Accept is interrupted and the CRT STATUS is set to the exception value of the DEL key. In isCOBOL you can intercept the DEL key pressure by inquiring the ENTRY-REASON property during the MSG-BEGIN-ENTRY event: if DEL was pressed, then the ENTRY-REASON value is X"01".
- Due to Java implementation, the styles CENTER(ED) and RIGHT don’t have effect on MULTILINE ENTRY-FIELD.
- If the -ci flag is used, the ACUCOBOL-GT compiler treats "COL + 0" as "COL + 1" unless a specific configuration variable is set to change this behavior. In order to obtain the same behavior with isCOBOL, set [iscobol.gui.screen_col_plus_base](\) to 0 in the configuration.
- In the After Procedure of an input control it is possible to force the focus to stay in the control by setting Screen-Control items properly. However, if the user leaves the input field by clicking on an another control with the mouse, isCOBOL executes the event procedure of the clicked control. This incompatible behavior can be avoided by setting [iscobol.gui.click_override_focus_change (boolean)](\) to false.
- When the focus returns on a ENTRY-FIELD after a message-box or another modal window is closed, the text inside the ENTRY-FIELD is never selected. This behavior can be corrected by setting the [Cursor](\) property to the value -1.
- Modifying CELL-COLOR of a GRID cell that hasn’t been created yet has no effect.
- Destroying a Screen Section control removes it permanently from the Accept of the Screen, even if you soon re-display it. The following snippet reproduces the case:

```cobol
       SCREEN SECTION.
       01  SCREEN1.
           03 ENTRY-FIELD
              LINE 2 COL 2, AFTER EF-AFTER
              .
           03 ENTRY-FIELD
              LINE 4 COL 2
              .
           03 COMBO1.
              05 COMBO-BOX DROP-LIST   item-to-add ("1", "2", "3")
                 LINE 6, COL 2,  LINES 10, SIZE 20
                 .           
           03 ENTRY-FIELD
              LINE 8 COL 2
              .
 
       PROCEDURE DIVISION.
       MAIN.
           DISPLAY STANDARD GRAPHICAL WINDOW.
           DISPLAY SCREEN1.
           ACCEPT  SCREEN1 UNTIL CRT-STATUS = 27 ON EXCEPTION CONTINUE.
           STOP    RUN.
 
       EF-AFTER.
           DESTROY COMBO1.
           DISPLAY COMBO1.
 
```

With ACUCOBOL-GT you’re able to move the focus on the combo-box, with isCOBOL you’re not.

- The background intensity can’t be changed dynamically at run time by setting the BACKGROUND-INTENSITY configuration property with the SET ENVIRONMENT statement.
- In ACUCOBOL-GT the FRAME FILL-COLOR was affected by the control’s background intensity. In isCOBOL it’s not affected.
- In ACUCOBOL-GT, when you select a RADIO-BUTTON using the keyboard, it’s automatically checked. In isCOBOL you have also to press the SPACE-BAR in order to check it.
- The NTF-RESIZED event is always returned in the same way when the user drags the window border with the mouse. In ACUCOBOL-GT it’s returned in two different ways depending on where it’s intercepted: if intercepted in Event Procedure, many events are returned while the user drags the mouse; if intercepted as exception on the ACCEPT of the Screen, only one event is returned when the user releases the mouse. isCOBOL always returns many events while the user drags the mouse. You can reduce the number of events by setting [iscobol.gui.ntf_resized_delay](\) in the configuration. Alternatively you can configure the operating system to have only one event at mouse release (for example, in Windows, uncheck the option "Show window content while dragging" under "Visual Effects" settings).
- The statement SET generic-handle TO HANDLE OF screen-name is always successful even if the control identified by screen-name doesn’t exist. In order to check if a control exists, you can use a Format 2 INQUIRE statement and query the STATUS property.
- In isCOBOL it’s not possible to modify the ACTION property of a GRID within MSG events handling. The error “Action in event procedure” is raised in these cases. ACUCOBOL-GT allowed this kind of operation instead.
- An unexpected CMD-ACTIVATE event may be generated if the program executes MODIFY statements on the parent window and then performs an ACCEPT on the child window. The unexpected event may be avoided by setting [iscobol.gui.cstimeout*](\) to zero in the configuration, but this is not suggested for performance reasons.
- Adding or removing a menu bar or a toolbar on a window always causes the window to be resized to preserve the window’s client area (the area where graphical controls can be displayed). It happens with both resizable windows and non-resizable windows. In Acucobol, instead, resizable windows are not resized when a menu bar or a toolbar are added or removed, hence the window’s client area changes.
- The window maximization triggered by ACTION-MAXIMIZE is asynchronous, so there's no guarantee that inquiring window and control's dimensions after it will provide updated values.
- The display format of the DATE-ENTRY control does not depend on settings specified by the user in the Windows Control Panel. The following styles use European conventions for time and date formatting:

```cobol
TIME
CENTURY-DATE
LONG-DATE
```

For time and date formatting conforming to American conventions, use the following properties:

```cobol
DISPLAY-FORMAT "h:mm a"
DISPLAY-FORMAT "MM/dd/yyyy"
DISPLAY-FORMAT "EEEE, MMMM dd, yyyy"
```

If your code does not currently specify any of the above styles and does not specify the DISPLAY-FORMAT property, use DISPLAY-FORMAT "M/d/yyyy". If no display format styles or properties are specified, then DISPLAY-FORMAT "dd/MM/yyyy"is the default.

- ACUCOBOL-GT allows you to change date portions in a DATE-ENTRY control using the keyboard. For example, you can use the left and right arrow keys to highlight a date portion (year, month or day) and then type a number to specify the value for that portion. Due to limitations in the Swing components behind the DATE-ENTRY implementation, this is not possible in isCOBOL.
