### REG_QUERY_VALUE_EX, DISPLAY_REG_QUERY_VALUE_EX

The REG_QUERY_VALUE_EX library routine retrieves the type and data for the specified value name associated with an open registry key.

To perform this action on the Windows client machine in an Application Server architecture, use DISPLAY_REG_QUERY_VALUE_EX instead of REG_QUERY_VALUE_EX.

#### Syntax:

```cobol
 CALL "REG_QUERY_VALUE_EX" USING openKey
                                 valueName
                                 type
                                 data
                                 dataSize
                          GIVING returnCode
```

#### Parameters:

|  |  |  |  |
| --- | --- | --- | --- |
| *openKey* | USAGE UNSIGNED-LONG | Specifies the handle to an open registry key. The calling process must have KEY_QUERY_VALUE access to the key.<br>This handle is returned by the [REG_CREATE_KEY](./REG_CREATE_KEY), [REG_CREATE_KEY_EX](./REG_CREATE_KEY_EX), [REG_OPEN_KEY](./REG_OPEN_KEY) or [REG_OPEN_KEY_EX](./REG_OPEN_KEY_EX) library routine, or it can be one of the following predefined keys, defined in [isreg.def](../../Copybooks/isreg.def):<br>HKEY_CLASSES_ROOT<br>HKEY_CURRENT_CONFIG<br>HKEY_CURRENT_USER<br>HKEY_LOCAL_MACHINE<br>HKEY_USERS<br>HKEY_DYN_DATA |  |
| *valueName* | PIC X(n) | Specifies the name of the registry value.<br>If valueName is NULL or an empty string, "", the function retrieves the type and data for the key's unnamed or default value, if any. |  |
| *type* | USAGE UNSIGNED-LONG | It receives a code indicating the type of data stored in the specified value. It can be one of the following values, defined in [isreg.def](../../Copybooks/isreg.def): |  |
|  |  | REG_BINARY | Binary data in any form. |
|  |  | REG_DWORD | A 32-bit number. |
|  |  | REG_DWORD_LITTLE_ENDIAN | A 32-bit number in little-endian format. |
|  |  | REG_DWORD_BIG_ENDIAN | A 32-bit number in big-endian format. |
|  |  | REG_EXPAND_SZ | A null-terminated string that contains unexpanded references to environment variables (for example, "%PATH%"). |
|  |  | REG_LINK | Reserved for system use. |
|  |  | REG_MULTI_SZ | A sequence of null-terminated strings.<br>The following is an example: |
|  |  | String1\0String2\0String3\0LastString\0\0 |  |
|  |  |  | The first \0 terminates the first string, the second to the last \0 terminates the last string, and the final \0 terminates the sequence. Note that the final terminator must be factored into the length of the string. |
|  |  | REG_NONE | No defined value type. |
|  |  | REG_QWORD | A 64-bit number. |
|  |  | REG_QWORD_LITTLE_ENDIAN | A 64-bit number in little-endian format. |
|  |  | REG_SZ | A string. |
| *data* | PIC X(n) or PIC 9(n) depending on the value type | Receives the data for the value entry. This parameter can be NULL if the data is not required. |  |
| *dataSize* | USAGE UNSIGNED-LONG | Specifies the size of the data parameter, in bytes. When the function returns, this variable contains the size of the data copied to data.<br>The dataSize parameter can be NULL only if data is NULL.<br>If the data has the REG_SZ, REG_MULTI_SZ or REG_EXPAND_SZ type, this size includes any terminating null character or characters.<br>If the data parameter is not large enough to hold the data, the function returns ERROR_MORE_DATA and stores the required buffer size in the dataSize. In this case, the contents of data are undefined.<br>If data is NULL, and dataSize is non-NULL, the function returns ERROR_SUCCESS and stores the size of the data, in bytes, in dataSize. This enables an application to determine the best way to allocate a buffer for the value's data.<br>If openKey specifies HKEY_PERFORMANCE_DATA and dataSize is not large enough to contain all of the returned data, REG_QUERY_VALUE_EX returns ERROR_MORE_DATA and the value returned through the dataSize parameter is undefined. This is because the size of the performance data can change from one call to the next. In this case, you must increase the buffer size and call REG_QUERY_VALUE_EX again passing the updated buffer size in the dataSize parameter. Repeat this until the function succeeds. You need to maintain a separate variable to keep track of the buffer size, because the value returned by dataSize is unpredictable. |  |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| -1 | Invalid or missing parameters, or not running on Windows |
| 0 | Operation successful. |
| Non zero | Operation failed. Click [here](https://msdn.microsoft.com/en-us/library/windows/desktop/ms681381(v=vs.85).aspx) for a list of error codes. |
