### WKBUF-STOP-RECORDING

This operation stops recording keystrokes from the user input.

#### Syntax

```cobol
 CALL "W$KEYBUF" USING WKBUF-STOP-RECORDING
                GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| WKBUF-STOP-RECORDING | Constant |  |

#### Return Code:

*returnCode* can be any numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Operation successful. |
| 1 | Operation failed. |

This operation stops recording keystrokes from the user input.
