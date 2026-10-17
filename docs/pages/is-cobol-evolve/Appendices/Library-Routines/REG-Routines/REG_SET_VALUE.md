### REG_SET_VALUE, DISPLAY_REG_SET_VALUE

The REG_SET_VALUE library routine sets the data for the default or unnamed value of a specified registry key. The data must be a text string.

To perform this action on the Windows client machine in an Application Server architecture, use DISPLAY_REG_SET_VALUE instead of REG_SET_VALUE.

#### Syntax:

```cobol
 CALL "REG_SET_VALUE" USING openKey
                            value
                           [subKey]
                     GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *openKey* | USAGE UNSIGNED-LONG | Specifies the handle to an open registry key. The calling process must have KEY_SET_VALUE access to the key.<br>This handle is returned by the [REG_CREATE_KEY](./REG_CREATE_KEY), [REG_CREATE_KEY_EX](./REG_CREATE_KEY_EX), [REG_OPEN_KEY](./REG_OPEN_KEY) or [REG_OPEN_KEY_EX](./REG_OPEN_KEY_EX) library routine, or it can be one of the following predefined keys, defined in [iscoblib.def](../../Copybooks/iscoblib.def):<br>HKEY_CLASSES_ROOT<br>HKEY_CURRENT_CONFIG<br>HKEY_CURRENT_USER<br>HKEY_LOCAL_MACHINE<br>HKEY_USERS<br>HKEY_DYN_DATA |
| *value* | PIC X(n) | Specifies the value to be stored. |
| *subKey* | PIC X(n) | Specifies the name of a subkey of the openKey parameter. The function sets the default value of the specified subkey.<br>Key names are not case sensitive.<br>If this parameter is omitted, the function sets the default value of the key identified by openKey. |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| -1 | Invalid or missing parameters, or not running on Windows |
| 0 | Operation successful. |
| Non zero | Operation failed. Click [here](https://msdn.microsoft.com/en-us/library/windows/desktop/ms681381(v=vs.85).aspx) for a list of error codes. |
