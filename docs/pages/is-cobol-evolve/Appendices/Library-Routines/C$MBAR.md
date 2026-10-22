## C$MBAR

The C$MBAR library routine displays a menu bar on the current window.

**Note -** This routine is supported for compatibility. If you’re creating new programs with isCOBOL, you should consider using [W$MENU](./W$MENU/W$MENU) instead.

### Syntax:

```cobol
 CALL "C$MBAR" [ USING text-1 [, text-2] ... [, text-n] [, exitCode] ]
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *text-1*<br>*text-2*<br>*...*<br>*text-n* | Any alphanumeric data item or literal | These parameters define the items in the pulldown menu along<br>with the strings that are returned to the COBOL program when an item is selected. Using the following syntax, it can specify either a value to be returned or additional sub-menu items:<br>itemname["hint"]=menu<br>where<br>*itemname* is the string that is displayed in the menu bar.<br>*hint* is an optional text string that is displayed as tool tip when the mouse hovers over the menu item.<br>*menu* defines the items in the pulldown menu along with the key codes that are returned to the COBOL program when an item is selected. The syntax for *menu* is:<br>menu -> [(]items[)]<br>items -> item name=[keycode \| (menu)][,items]<br>item name -> pulldownname["menu prompt"]<br>keycode -> key code to be sent (see [RM/COBOL key codes for C$MBAR, C$RBMENU and C$TBAR routines](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) for details)<br>If the first character of *itemname* is a tilde (~), the menu is disabled. An ampersand (&) in *itemname* causes the next character to be underlined and used as an accelerator. |
| *exitCode* | PIC 9(n) BINARY | Optional parameter that returns the status. It will receive zero for success and non-zero for failure. |

Calling the routine with no arguments turns off the menu bar.

### Examples:

**Example -** Create a menu bar with a File menu that drops a list of four options

```cobol
CALL "C$MBAR" USING "File=(New=\f1,Open=\f2,Save=\f5,Exit=\e)"
```
