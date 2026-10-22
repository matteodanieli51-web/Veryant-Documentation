### REG_QUERY_VALUE, DISPLAY_REG_QUERY_VALUE

The REG_QUERY_VALUE library routine retrieves the data associated with the default or unnamed value of a specified registry key. The data must be a null-terminated string.

To perform this action on the Windows client machine in an Application Server architecture, use DISPLAY_REG_QUERY_VALUE instead of REG_QUERY_VALUE.

#### Syntax:

```cobol
 CALL "REG_QUERY_VALUE" USING openKey
                              value
                              valueSize
                             [subKey]
                       GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *openKey* | USAGE UNSIGNED-LONG | Specifies the handle to an open registry key. The calling process must have KEY_QUERY_VALUE access to the key.<br>This handle is returned by the [REG_CREATE_KEY](./REG_CREATE_KEY), [REG_CREATE_KEY_EX](./REG_CREATE_KEY_EX), [REG_OPEN_KEY](./REG_OPEN_KEY) or [REG_OPEN_KEY_EX](./REG_OPEN_KEY_EX) library routine, or it can be one of the following predefined keys, defined in [isreg.def](../../Copybooks/isreg.def):<br>HKEY_CLASSES_ROOT<br>HKEY_CURRENT_CONFIG<br>HKEY_CURRENT_USER<br>HKEY_LOCAL_MACHINE<br>HKEY_USERS<br>HKEY_DYN_DATA |
| *value* | PIC X(n) | Receives the default value of the specified key.<br>If value is NULL, and valueSize is non-NULL, the function returns ERROR_SUCCESS, and stores the size of the data, in bytes, in valueSize. This enables an application to determine the best way to allocate a buffer for the value's data. |
| *valueSize* | USAGE UNSIGNED-LONG | Specifies the size of the value parameter, in bytes. When the function returns, this variable contains the size of the data copied to value, including any terminating null characters.<br>If the data has the REG_SZ, REG_MULTI_SZ or REG_EXPAND_SZ type, this size includes any terminating null character or characters.<br>If value is not large enough to hold the data, the function returns ERROR_MORE_DATA and stores the required buffer size in valueSize. In this case, the contents of value are undefined. |
| *subKey* | PIC X(n) | Specifies the name of the subkey of the openKey parameter for which the default value is retrieved.<br>Key names are not case sensitive.<br>If this parameter is omitted, the function retrieves the default value for the key identified by openKey. |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| -1 | Invalid or missing parameters, or not running on Windows |
| 0 | Operation successful. |
| Non zero | Operation failed. Click [here](https://msdn.microsoft.com/en-us/library/windows/desktop/ms681381(v=vs.85).aspx) for a list of error codes. |
