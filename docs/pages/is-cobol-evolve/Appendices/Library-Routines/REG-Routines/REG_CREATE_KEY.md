### REG_CREATE_KEY, DISPLAY_REG_CREATE_KEY

The REG_CREATE_KEY library routine creates the specified registry key. If the key already exists in the registry, it is opened.

To perform this action on the Windows client machine in an Application Server architecture, use DISPLAY_REG_CREATE_KEY instead of REG_CREATE_KEY.

#### Syntax:

```cobol
 CALL "REG_CREATE_KEY" USING openKey
                             subKey
                             resultKey
                      GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *openKey* | USAGE UNSIGNED-LONG | Specifies the handle to an open registry key. The calling process must have KEY_CREATE_SUB_KEY access to the key.<br>This handle is returned by the [REG_CREATE_KEY](./REG_CREATE_KEY), [REG_CREATE_KEY_EX](./REG_CREATE_KEY_EX), [REG_OPEN_KEY](./REG_OPEN_KEY) or [REG_OPEN_KEY_EX](./REG_OPEN_KEY_EX) library routine, or it can be one of the following predefined keys, defined in [isreg.def](../../Copybooks/isreg.def):<br>HKEY_CLASSES_ROOT<br>HKEY_CURRENT_CONFIG<br>HKEY_CURRENT_USER<br>HKEY_LOCAL_MACHINE<br>HKEY_USERS<br>HKEY_DYN_DATA |
| *subKey* | PIC X(n) | Specifies the name of a key that this library routine opens or creates. This key must be a subkey of the key identified by the openKey parameter. For more information on key names, see Structure of the Registry.<br>If openKey is one of the predefined keys, subKey may be NULL. In that case, the handle returned in resultKey is the same openKey handle passed in to the function. |
| *resultKey* | USAGE UNSIGNED-LONG | Receives the handle to the opened or created key. If the key is not one of the predefined registry keys, call the [REG_CLOSE_KEY](./REG_CLOSE_KEY) library routine after you have finished using the handle. |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| -1 | Invalid or missing parameters, or not running on Windows |
| 0 | Operation successful. |
| Non zero | Operation failed. Click [here](https://msdn.microsoft.com/en-us/library/windows/desktop/ms681381(v=vs.85).aspx) for a list of error codes. |
