### REG_CLOSE_KEY, DISPLAY_REG_CLOSE_KEY

The REG_CLOSE_KEY library routine closes a registry key.

To perform this action on the Windows client machine in an Application Server architecture, use DISPLAY_REG_CLOSE_KEY instead of REG_CLOSE_KEY.

#### Syntax:

```cobol
 CALL "REG_CLOSE_KEY" USING openKey
                     GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *openKey* | USAGE UNSIGNED-LONG | Specifies the handle to the open key to be closed. The handle must have been opened by the [REG_CREATE_KEY](./REG_CREATE_KEY), [REG_CREATE_KEY_EX](./REG_CREATE_KEY_EX), [REG_OPEN_KEY](./REG_OPEN_KEY) or [REG_OPEN_KEY_EX](./REG_OPEN_KEY_EX) library routine. |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| -1 | Invalid or missing parameters, or not running on Windows |
| 0 | Operation successful. |
| Non zero | Operation failed. Click [here](https://msdn.microsoft.com/en-us/library/windows/desktop/ms681381(v=vs.85).aspx) for a list of error codes. |
