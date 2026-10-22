## C$TBAR

The C$TBAR displays a toolbar in the current window.

**Note -** This routine is supported for compatibility. If you’re creating new programs with isCOBOL, you should consider using the [TOOL-BAR](../../User-Interface/Controls-Reference/TOOL-BAR/TOOL-BAR) instead.

### Syntax:

```cobol
 CALL "C$TBAR" [ USING button-1 [, button-2] ... [, button-n] [, exitCode]]
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *button-1*<br>*button-2*<br>*...*<br>*button-n* | Any alphanumeric data item or literal | These parameters define the buttons in the toolbar.<br>The syntax is as follows:<br>buttonname["hint"]=keycode<br>where<br>*buttonname* is the name of the icon. The runtime will look for a file named <buttonname\>.png (lower case) in the Classpath. For example, if buttonname is 'exit', then 'exit.png' is required. If this file is not found, then no icon will be shown on the button. It’s good practice to gather all the icon files in a library (e.g. tbar.jar) and add this library to the Classpath.<br>*hint* is an optional text string that is displayed as tool tip when the mouse hovers over the button.<br>*keycode* is the key code to be sent (see [RM/COBOL key codes for C$MBAR, C$RBMENU and C$TBAR routines](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) for details) |
| *exitCode* | PIC 9(n) BINARY | Optional parameter that returns the status. It will receive zero for success and non-zero for failure. |

Calling the routine with no arguments turns off the toolbar.

### Examples:

**Example -** Create a toolbar with three buttons

```cobol
*>exit.png, left.png and right.png image files required in the Classpath
CALL "C$TBAR" USING "exit=\e" "left=\zl" "right=\zr"
```
