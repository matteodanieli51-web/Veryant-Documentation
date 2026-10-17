### REG_DELETE_KEY, DISPLAY_REG_DELETE_KEY

The REG_DELETE_KEY library routine deletes the specified registry key.

To perform this action on the Windows client machine in an Application Server architecture, use DISPLAY_REG_DELETE_KEY instead of REG_DELETE_KEY.

#### Syntax:

```cobol
 CALL "REG_DELETE_KEY" USING openKey
                             subKey
                      GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *openKey* | USAGE UNSIGNED-LONG | Specifies the handle to an open registry key. The key must have been opened with the DELETE access right.<br>This handle is returned by the [REG_CREATE_KEY](./REG_CREATE_KEY), [REG_CREATE_KEY_EX](./REG_CREATE_KEY_EX), [REG_OPEN_KEY](./REG_OPEN_KEY) or [REG_OPEN_KEY_EX](./REG_OPEN_KEY_EX) library routine, or it can be one of the following predefined keys, defined in [isreg.def](../../Copybooks/isreg.def):<br>HKEY_CLASSES_ROOT<br>HKEY_CURRENT_CONFIG<br>HKEY_CURRENT_USER<br>HKEY_LOCAL_MACHINE<br>HKEY_USERS<br>HKEY_DYN_DATA |
| *subKey* | PIC X(n) | Specifies the name of the key to be deleted. It must be a subkey of the key that openKey identifies, but it cannot have subkeys. This parameter cannot be NULL.<br>Key names are not case sensitive. |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| -1 | Invalid or missing parameters, or not running on Windows |
| 0 | Operation successful. |
| Non zero | Operation failed. Click [here](https://msdn.microsoft.com/en-us/library/windows/desktop/ms681381(v=vs.85).aspx) for a list of error codes. |
