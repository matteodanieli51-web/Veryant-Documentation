### INFO-FUNCTION

This function returns information, depending on the value of mode parameter, about an opened indexed file

The "[isfilesys.def](../../Copybooks/isfilesys.def)" copy file contains layouts for each kind of information that can be retrieved with this function.

**Note** - some information might not be returned by the current file handler.

#### Syntax

```cobol
 SET INFO-FUNCTION TO TRUE

 CALL "I$IO" USING IO-FUNCTION
                   f
                   mode
                   result
            GIVING returnCode
```

#### Parameters:

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| *f* | USAGE HANDLE | The file handle returned by [OPEN-FUNCTION](./OPEN-FUNCTION). |  |  |
| *mode* | USAGE SIGNED-SHORT | Determines which result is returned. |  |  |
|  |  | -1 | Returns the same information as the l_parms parameter of the [MAKE-FUNCTION](./MAKE-FUNCTION).<br>result is in the format of "11111,22222,333" where: |  |
|  |  |  | 1 | maximum record size |
|  |  |  | 2 | minimum record size |
|  |  |  | 3 | number of keys |
|  |  | -4 | Returns the number of records in the file. |  |
|  |  | -5 | Returns the 256-byte key translation table.  If no key translation table was specified, then the E_NO_SUPPORT error is set. In this case, this should be simply taken to mean that the native key ordering was used. |  |
|  |  | 0 or greater | A value of zero or greater indicates that information about a particular key is desired. '0' indicates the primary key, '1' indicates the first alternate key and so on.<br>That key information is returned as "11,2,333,44444" where: ( third and fourth fields are repeated for each additional segment in the key) |  |
|  |  |  | 1 | number of segments in key. |
|  |  |  | 2 | "1" if duplicates are allowed. |
|  |  |  | 3 | size of first segment. |
|  |  |  | 4 | byte offset of first segment. |
| *result* | depends by *mode* parameter. |  |  |  |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| >0 | Operation successful. |
| 0 | Operation failed. |
