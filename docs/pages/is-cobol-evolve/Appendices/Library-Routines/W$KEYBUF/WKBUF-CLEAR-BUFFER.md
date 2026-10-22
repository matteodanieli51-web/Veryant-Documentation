### WKBUF-CLEAR-BUFFER

This operation clears the keyboard buffer.

#### Syntax

```cobol
 CALL "W$KEYBUF" USING WKBUF-CLEAR-BUFFER
                GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| WKBUF-CLEAR-BUFFER | Constant |  |

#### Return Code:

*returnCode* can be any numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Operation successful. |
| 1 | Operation failed. |
