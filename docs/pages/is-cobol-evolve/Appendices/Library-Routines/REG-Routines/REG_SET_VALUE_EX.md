### REG_SET_VALUE_EX, DISPLAY_REG_SET_VALUE_EX

The REG_SET_VALUE_EX library routine sets the data and type of a specified value under a registry key.

To perform this action on the Windows client machine in an Application Server architecture, use DISPLAY_REG_SET_VALUE_EX instead of REG_SET_VALUE_EX.

#### Syntax:

```cobol
 CALL "REG_SET_VALUE_EX" USING openKey
                               type
                               data
                               dataSize
                              [valueName]
                        GIVING returnCode
```

#### Parameters:

|  |  |  |  |
| --- | --- | --- | --- |
| *openKey* | USAGE UNSIGNED-LONG | Specifies the handle to an open registry key. The calling process must have KEY_SET_VALUE access to the key.<br>This handle is returned by the [REG_CREATE_KEY](./REG_CREATE_KEY), [REG_CREATE_KEY_EX](./REG_CREATE_KEY_EX), [REG_OPEN_KEY](./REG_OPEN_KEY) or [REG_OPEN_KEY_EX](./REG_OPEN_KEY_EX) library routine, or it can be one of the following predefined keys, defined in [isreg.def](../../Copybooks/isreg.def):<br>HKEY_CLASSES_ROOT<br>HKEY_CURRENT_CONFIG<br>HKEY_CURRENT_USER<br>HKEY_LOCAL_MACHINE<br>HKEY_USERS<br>HKEY_DYN_DATA |  |
| *type* | USAGE UNSIGNED-LONG | Specifies the type of data pointed to by the data parameter. Valid values, defined in [isreg.def](../../Copybooks/isreg.def) are: |  |
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
| *data* | PIC X(n) or PIC 9(n) depending on the value type | Specifies the data to be stored.<br>For string-based types, such as REG_SZ, the string must be null-terminated. With the REG_MULTI_SZ data type, the string must be terminated with two null characters. |  |
| *dataSize* | USAGE UNSIGNED-LONG | Specifies the size of the information pointed to by the data parameter, in bytes. If the data is of type REG_SZ, REG_EXPAND_SZ, or REG_MULTI_SZ, dataSize must include the size of the terminating null character or characters. |  |
| *valueName* | PIC X(n) | Specifies the name of the value to be set. If a value with this name is not already present in the key, the function adds it to the key.<br>If valueName is omitted, the function sets the type and data for the key's unnamed or default value. |  |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| -1 | Invalid or missing parameters, or not running on Windows |
| 0 | Operation successful. |
| Non zero | Operation failed. Click [here](https://msdn.microsoft.com/en-us/library/windows/desktop/ms681381(v=vs.85).aspx) for a list of error codes. |
