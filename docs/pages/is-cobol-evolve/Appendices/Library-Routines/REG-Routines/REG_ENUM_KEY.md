### REG_ENUM_KEY, DISPLAY_REG_ENUM_KEY

The REG_ENUM_KEY library routine enumerates the subkeys of the specified open registry key. It retrieves the name of one subkey each time it is called.

To perform this action on the Windows client machine in an Application Server architecture, use DISPLAY_REG_ENUM_KEY instead of REG_ENUM_KEY.

#### Syntax:

```cobol
 CALL "REG_ENUM_KEY" USING openKey
                           index
                           name
                           nameSize
                    GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *openKey* | USAGE UNSIGNED-LONG | Specifies the handle to an open registry key.<br>This handle is returned by the [REG_CREATE_KEY](./REG_CREATE_KEY), [REG_CREATE_KEY_EX](./REG_CREATE_KEY_EX), [REG_OPEN_KEY](./REG_OPEN_KEY) or [REG_OPEN_KEY_EX](./REG_OPEN_KEY_EX) library routine, or it can be one of the following predefined keys, defined in [isreg.def](../../Copybooks/isreg.def):<br>HKEY_CLASSES_ROOT<br>HKEY_CURRENT_CONFIG<br>HKEY_CURRENT_USER<br>HKEY_LOCAL_MACHINE<br>HKEY_USERS<br>HKEY_DYN_DATA |
| *index* | USAGE UNSIGNED-LONG | Specifies the index of the subkey of openKey to be retrieved. This value should be 1 for the first call to the REG_ENUM_KEY library routine and then increased incrementally for subsequent calls.<br>Because subkeys are not ordered, any new subkey will have an arbitrary index. This means that the function may return subkeys in any order. |
| *name* | PIC X(n) | Receives the name of the subkey, including the terminating null character. This function copies only the name of the subkey, not the full key hierarchy, to the buffer. |
| *nameSize* | USAGE UNSIGNED-LONG | Specifies the size of the name parameter |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| -1 | Invalid or missing parameters, or not running on Windows |
| 0 | Operation successful. |
| Non zero | Operation failed. Click [here](https://msdn.microsoft.com/en-us/library/windows/desktop/ms681381(v=vs.85).aspx) for a list of error codes. |
