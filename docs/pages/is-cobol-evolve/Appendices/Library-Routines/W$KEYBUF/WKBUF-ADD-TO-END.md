### WKBUF-ADD-TO-END

This operation adds keystrokes to the end of the keyboard buffer.

#### Syntax

```cobol
 CALL "W$KEYBUF" USING WKBUF-ADD-TO-END
                       keyCodes
                GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| WKBUF-ADD-TO-END | Constant |  |
| *keyCodes* | PIC X(n) | Keycodes to be added.<br>The keycode string can be composed of letters, numbers and special keycodes. Special keycodes must be used with Acucobol-GT syntax and must be placed between curly brackets.<br>For example, in order to send "A", "B" and enter to the runtime, the following string should be used "AB{^M}".<br>Menu selections are encoded as {m#} where "#" is the numeric ID of the menu item.<br>See [Acucobol-GT key codes for W$KEYBUF routine](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) for the lists the supported special keycodes. |

#### Return Code:

*returnCode* can be any numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Operation successful. |
| 1 | Operation failed. |
