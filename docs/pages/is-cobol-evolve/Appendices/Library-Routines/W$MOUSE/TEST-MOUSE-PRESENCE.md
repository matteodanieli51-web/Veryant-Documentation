### TEST-MOUSE-PRESENCE

The TEST-MOUSE-PRESENCE tests if mouse is available.

#### Syntax:

```cobol
 CALL "W$MOUSE" USING TEST-MOUSE-PRESENCE
               GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| TEST-MOUSE-PRESENCE | Constant |  |

#### Return Code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 1 | Mouse is available |
| 0 | Mouse is not available. |
