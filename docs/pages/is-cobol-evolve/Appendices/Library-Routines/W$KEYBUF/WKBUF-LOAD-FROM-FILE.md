### WKBUF-LOAD-FROM-FILE

This operation reads keystrokes from a file and adds them to the keyboard buffer.

#### Syntax

```cobol
 CALL "W$KEYBUF" USING WKBUF-LOAD-FROM-FILE
                       fileName
                GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| WKBUF-LOAD-FROM-FILE | Constant |  |
| *fileName* | PIC X(n) | Specifies the path and the name of the file where to read keystrokes. [File Handling Configuration](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) properties don’t affect the search of this file.<br>The keycode string read from the file can be composed of letters, numbers and special keycodes. Special keycodes must be used with Acucobol-GT syntax and must be placed between curly brackets.<br>For example, in order to send “A”, “B” and enter to the runtime, the following string should be used “AB{^M}”<br>See [Acucobol-GT key codes for W$KEYBUF routine](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) for the lists the supported special keycodes. |

#### Return Code:

*returnCode* can be any numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Operation successful. |
| 1 | Operation failed. |
