### REG_DELETE_VALUE, DISPLAY_REG_DELETE_VALUE

The REG_DELETE_VALUE removes a named value from the specified registry key. Note that value names are not case sensitive.

To perform this action on the Windows client machine in an Application Server architecture, use DISPLAY_REG_DELETE_VALUE instead of REG_DELETE_VALUE.

#### Syntax:

```cobol
 CALL "REG_DELETE_VALUE" USING openKey
                               valueName
                        GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *openKey* | USAGE UNSIGNED-LONG | Specifies the handle to an open registry key.<br>This handle is returned by the [REG_CREATE_KEY](./REG_CREATE_KEY), [REG_CREATE_KEY_EX](./REG_CREATE_KEY_EX), [REG_OPEN_KEY](./REG_OPEN_KEY) or [REG_OPEN_KEY_EX](./REG_OPEN_KEY_EX) library routine, or it can be one of the following predefined keys, defined in [isreg.def](../../Copybooks/isreg.def):<br>HKEY_CLASSES_ROOT<br>HKEY_CURRENT_CONFIG<br>HKEY_CURRENT_USER<br>HKEY_LOCAL_MACHINE<br>HKEY_USERS<br>HKEY_DYN_DATA |
| *valueName* | PIC X(n) | The registry value to be removed. If this parameter is NULL or an empty string, the value set by the [REG_SET_VALUE](./REG_SET_VALUE) library routine is removed. |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| -1 | Invalid or missing parameters, or not running on Windows |
| 0 | Operation successful. |
| Non zero | Operation failed. Click [here](https://msdn.microsoft.com/en-us/library/windows/desktop/ms681381(v=vs.85).aspx) for a list of error codes. |
