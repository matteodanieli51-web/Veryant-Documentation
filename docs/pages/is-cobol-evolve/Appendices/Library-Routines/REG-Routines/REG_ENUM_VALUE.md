### REG_ENUM_VALUE, DISPLAY_REG_ENUM_VALUE

The REG_ENUM_VALUE library routine enumerates the values of the specified registry key. Note that value names are not case sensitive.

To perform this action on the Windows client machine in an Application Server architecture, use DISPLAY_REG_ENUM_VALUE instead of REG_ENUM_VALUE.

#### Syntax:

```cobol
 CALL "REG_ENUM_VALUE" USING openKey
                             index
                             valueName
                             valueNameSize
                             type
                             data
                             dataSize
                      GIVING returnCode
```

#### Parameters:

|  |  |  |  |
| --- | --- | --- | --- |
| *openKey* | USAGE UNSIGNED-LONG | Specifies the handle to an open registry key.<br>This handle is returned by the [REG_CREATE_KEY](./REG_CREATE_KEY), [REG_CREATE_KEY_EX](./REG_CREATE_KEY_EX), [REG_OPEN_KEY](./REG_OPEN_KEY) or [REG_OPEN_KEY_EX](./REG_OPEN_KEY_EX) library routine, or it can be one of the following predefined keys, defined in [isreg.def](../../Copybooks/isreg.def):<br>HKEY_CLASSES_ROOT<br>HKEY_CURRENT_CONFIG<br>HKEY_CURRENT_USER<br>HKEY_LOCAL_MACHINE<br>HKEY_USERS<br>HKEY_DYN_DATA |  |
| *index* | USAGE UNSIGNED-LONG | Specifies the index of the value to be retrieved. This parameter should be 1 for the first call to the REG_ENUM_VALUE library routine and then be increased incrementally for subsequent calls.<br>Because values are not ordered, any new value will have an arbitrary index. This means that the function may return values in any order. |  |
| *valueName* | PIC X(n) | Receives the name of the value, including the terminating null character. |  |
| *valueNameSize* | USAGE UNSIGNED-LONG | Specifies the size of the valueName parameter. This size should include the terminating null character. When the function returns, valueNameSize contains the number of characters stored in valueName. The count returned does not include the terminating null character. |  |
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
| *data* | PIC X(n) | Receives the data for the value entry. This parameter can be NULL if the data is not required.<br>If data is NULL and dataSize is non-NULL, the function stores the size of the data, in bytes, in the variable pointed to by dataSize. This enables an application to determine the best way to allocate a buffer for the data. |  |
| *dataSize* | USAGE UNSIGNED-LONG | Specifies the size of the data parameter. When the function returns, dataSize contains the number of bytes stored in data.<br>This parameter can be NULL only if data is NULL.<br>If the data has the REG_SZ, REG_MULTI_SZ or REG_EXPAND_SZ type, this size includes any terminating null character or characters.<br>If data is not large enough to hold the data, the function returns ERROR_MORE_DATA and stores the required buffer size in dataSize. In this case, the contents of data are undefined.<br>Registry value names are limited to 32767 bytes. Therefore, if you specify a value greater than 32767 bytes, there is an overflow and the function may return ERROR_MORE_DATA. |  |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| -1 | Invalid or missing parameters, or not running on Windows |
| 0 | Operation successful. |
| Non zero | Operation failed. Click [here](https://msdn.microsoft.com/en-us/library/windows/desktop/ms681381(v=vs.85).aspx) for a list of error codes. |
