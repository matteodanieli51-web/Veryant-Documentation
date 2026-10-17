### REG_CREATE_KEY_EX, DISPLAY_REG_CREATE_KEY_EX

The REG_CREATE_KEY_EX library routine creates the specified registry key. If the key already exists, it is opened. Note that key names are not case sensitive.

To perform this action on the Windows client machine in an Application Server architecture, use DISPLAY_REG_CREATE_KEY_EX instead of REG_CREATE_KEY_EX.

#### Syntax:

```cobol
 CALL "REG_CREATE_KEY_EX" USING openKey
                                subKey
                                class
                                options
                                sam
                                resultKey
                                disposition
                         GIVING returnCode
```

#### Parameters:

|  |  |  |  |
| --- | --- | --- | --- |
| *openKey* | USAGE UNSIGNED-LONG | Specifies the handle to an open registry key. The calling process must have KEY_CREATE_SUB_KEY access to the key.<br>This handle is returned by the [REG_CREATE_KEY](./REG_CREATE_KEY), [REG_CREATE_KEY_EX](./REG_CREATE_KEY_EX), [REG_OPEN_KEY](./REG_OPEN_KEY) or [REG_OPEN_KEY_EX](./REG_OPEN_KEY_EX) library routine, or it can be one of the following predefined keys, defined in [isreg.def](../../Copybooks/isreg.def):<br>HKEY_CLASSES_ROOT<br>HKEY_CURRENT_CONFIG<br>HKEY_CURRENT_USER<br>HKEY_LOCAL_MACHINE<br>HKEY_USERS<br>HKEY_DYN_DATA |  |
| *subKey* | PIC X(n) | Specifies the name of a key that this library routine opens or creates. This key must be a subkey of the key identified by the openKey parameter. For more information on key names, see Structure of the Registry.<br>If openKey is one of the predefined keys, subKey may be NULL. In that case, the handle returned in resultKey is the same openKey handle passed in to the function. |  |
| *class* | PIC X(n) | Specifies the class (object type) of this key. It can be NULL. |  |
| *options* | USAGE UNSIGNED-LONG | This parameter can be one of the following values, defined in [isreg.def](../../Copybooks/isreg.def): |  |
|  |  | REG_OPTION_NON_VOLATILE | This key is not volatile; this is the default. The information is stored in a file and is preserved when the system is restarted. |
|  |  | REG_OPTION_VOLATILE | All keys created by the function are volatile. The information is stored in memory and is not preserved when the corresponding registry hive is unloaded. For HKEY_LOCAL_MACHINE, this occurs when the system is shut down. |
| *sam* | USAGE UNSIGNED-LONG | Specifies a mask that specifies the access rights for the key. It must be the combination of the following values, defined in [isreg.def](../../Copybooks/isreg.def): |  |
|  |  | KEY_ALL_ACCESS | Combines the STANDARD_RIGHTS_REQUIRED, KEY_QUERY_VALUE, KEY_SET_VALUE, KEY_CREATE_SUB_KEY, KEY_ENUMERATE_SUB_KEYS, KEY_NOTIFY, and KEY_CREATE_LINK access rights. |
|  |  | KEY_CREATE_LINK | Reserved for system use. |
|  |  | KEY_CREATE_SUB_KEY | Required to create a subkey of a registry key. |
|  |  | KEY_ENUMERATE_SUB_KEYS | Required to enumerate the subkeys of a registry key. |
|  |  | KEY_NOTIFY | Required to request change notifications for a registry key or for subkeys of a registry key. |
|  |  | KEY_QUERY_VALUE | Required to query the values of a registry key. |
|  |  | KEY_READ | Combines the STANDARD_RIGHTS_READ, KEY_QUERY_VALUE, KEY_ENUMERATE_SUB_KEYS, and KEY_NOTIFY values. |
|  |  | KEY_SET_VALUE | Required to create, delete, or set a registry value. |
|  |  | KEY_WRITE | Combines the STANDARD_RIGHTS_WRITE, KEY_SET_VALUE, and KEY_CREATE_SUB_KEY access rights. |
| *resultKey* | USAGE UNSIGNED-LONG | It receives a handle to the opened or created key. If the key is not one of the predefined registry keys, call the [REG_CLOSE_KEY](./REG_CLOSE_KEY) library routine after you have finished using the handle. |  |
| *disposition* | USAGE UNSIGNED-LONG | It receives one of the following disposition values, defined in [isreg.def](../../Copybooks/isreg.def): |  |
|  |  | REG_CREATED_NEW_KEY | The key did not exist and was created. |
|  |  | REG_OPENED_EXISTING_KEY | The key existed and was simply opened without being changed. |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| -1 | Invalid or missing parameters, or not running on Windows |
| 0 | Operation successful. |
| Non zero | Operation failed. Click [here](https://msdn.microsoft.com/en-us/library/windows/desktop/ms681381(v=vs.85).aspx) for a list of error codes. |
