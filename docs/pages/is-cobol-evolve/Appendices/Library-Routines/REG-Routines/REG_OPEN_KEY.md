### REG_OPEN_KEY, DISPLAY_REG_OPEN_KEY

The REG_OPEN_KEY library routine opens the specified registry key.

To perform this action on the Windows client machine in an Application Server architecture, use DISPLAY_REG_OPEN_KEY instead of REG_OPEN_KEY.

#### Syntax:

```cobol
 CALL "REG_OPEN_KEY" USING openKey
                           subKey
                           resultKey
                    GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *openKey* | USAGE UNSIGNED-LONG | Specifies the handle to an open registry key.<br>This handle is returned by the [REG_CREATE_KEY](./REG_CREATE_KEY), [REG_CREATE_KEY_EX](./REG_CREATE_KEY_EX), [REG_OPEN_KEY](./REG_OPEN_KEY) or [REG_OPEN_KEY_EX](./REG_OPEN_KEY_EX) library routine, or it can be one of the following predefined keys, defined in [isreg.def](../../Copybooks/isreg.def):<br>HKEY_CLASSES_ROOT<br>HKEY_CURRENT_CONFIG<br>HKEY_CURRENT_USER<br>HKEY_LOCAL_MACHINE<br>HKEY_USERS<br>HKEY_DYN_DATA |
| *subKey* | PIC X(n) | Specifies the name of the registry key to be opened. This key must be a subkey of the key identified by the openKey parameter.<br>Key names are not case sensitive.<br>If this parameter is NULL or an empty string, the function returns the same handle that was passed in. |
| *resultKey* | USAGE UNSIGNED-LONG | It receives a handle to the opened key. If the key is not one of the predefined registry keys, call the [REG_CLOSE_KEY](./REG_CLOSE_KEY) library routine after you have finished using the handle. |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| -1 | Invalid or missing parameters, or not running on Windows |
| 0 | Operation successful. |
| Non zero | Operation failed. Click [here](https://msdn.microsoft.com/en-us/library/windows/desktop/ms681381(v=vs.85).aspx) for a list of error codes. |
