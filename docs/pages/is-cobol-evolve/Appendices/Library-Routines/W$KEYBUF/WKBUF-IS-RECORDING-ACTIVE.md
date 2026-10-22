### WKBUF-IS-RECORDING-ACTIVE

This operation inquires whether or not the keystroke recorder is active.

#### Syntax

```cobol
 CALL "W$KEYBUF" USING WKBUF-IS-RECORDING-ACTIVE
                GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| WKBUF-IS-RECORDING-ACTIVE | Constant |  |

#### Return Code:

*returnCode* can be any numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | The recording mechanism is off. |
| 1 | The recording mechanism is on. |
