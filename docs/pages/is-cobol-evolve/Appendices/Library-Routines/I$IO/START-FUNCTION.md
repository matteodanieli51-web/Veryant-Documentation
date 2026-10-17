### START-FUNCTION

This function selects the current key of reference and positions the file pointer for the next [NEXT](./NEXT-FUNCTION) or [PREVIOUS](./PREVIOUS-FUNCTION) function.

If this function fails, RETURN-CODE is set to zero and the current key of reference is placed in the "undefined" state.

#### Syntax

```cobol
 SET START-FUNCTION TO TRUE

 CALL "I$IO" USING IO-FUNCTION
                   f
                   record
                   keyNum
                   keySize
                   mode
            GIVING returnCode
```

#### Parameters:

|  |  |  |  |
| --- | --- | --- | --- |
| *f* | USAGE HANDLE | A valid file handle returned by [OPEN-FUNCTION](./OPEN-FUNCTION). |  |
| *record* | PIC X(n) | Points to the area to hold the record buffer, from which key values will be retrieved. |  |
| *keyNum* | USAGE SIGNED-SHORT | Selects which key to use.<br>The value can be 0 or greater than 0, where 0 is the primary key, 1 is the first alternate key and so on.<br>The corresponding key area in record must contain the key value that will be used to position the file. |  |
| *keySize* | USAGE SIGNED-SHORT | Indicates the size of the key. If keysize is zero, the entire key is used. Otherwise, only the first keysize bytes of the key will be used. |  |
| *mode* | USAGE SIGNED-SHORT | Selects how the file is to be positioned with respect to the key value defined in record.<br>It can be one of the following values (defined in "[isfilesys.def](../../Copybooks/isfilesys.def)"): |  |
|  |  | F_EQUALS | The file is positioned at the record that matches the key value. |
|  |  | F_NOT_LESS | The file is positioned at the record that matches the key value, or the next greater one if no one matches. |
|  |  | F_GREATER | The file is positioned at the first record greater than the key value specified. |
|  |  | F_LESS | The file is positioned at the last record smaller than the key value specified. |
|  |  | F_NOT_GREATER | The file is positioned at the record that matches the key value, or the last record smaller than the key value if no one matches. |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| >0 | Operation successful. |
| 0 | Operation failed. |
