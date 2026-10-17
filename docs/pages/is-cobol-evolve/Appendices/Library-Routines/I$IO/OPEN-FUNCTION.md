### OPEN-FUNCTION

This function opens an existing indexed file.

If it is successful, the value in RETURN-CODE should be moved to a data item that is USAGE HANDLE. This data item is passed as the open file handle to the other file handling functions.

If it fails, RETURN-CODE is set to ZERO.

After the file is opened, the primary key is set as the current key of reference and it is positioned at the beginning of the file.

This function only opens already existing files. If the file does not exist, the function fails, even when opening for output.

#### Syntax

```cobol
 SET OPEN-FUNCTION TO TRUE

 CALL "I$IO" USING IO-FUNCTION
                   name
                   mode
                   lParms
            GIVING returnCode
```

#### Parameters:

|  |  |  |  |
| --- | --- | --- | --- |
| *name* | PIC X(n) | The name of the file to open. |  |
| *mode* | USAGE SIGNED-SHORT | One of the following values (defined in [isfilesys.def](../../Copybooks/isfilesys.def)): |  |
|  |  | Finput<br>Foutput<br>Fio<br>Fextend | Open for input only.<br>Open for output only.<br>Open for input and output.<br>Same as Foutput. |
|  |  | Mode may also have one of the following flags (defined in [isfilesys.def](../../Copybooks/isfilesys.def)) added to it to indicate file locking options: |  |
|  |  | Fmulti_lock<br>Fread_lock<br>Fwrite_lock<br>Fmass_update<br>FEncrypt<br>Ftrans<br>FBulk_addition | Keep locks on multiple records.<br>Locks file against other updaters.<br>Locks file against all others.<br>Same as Fwrite_lock.<br>Consider the file as encrypted.<br>Extends locking rules for transaction management.<br>Same as Fwrite_lock. |
| *lParms* | Group Item | This group item, defined in [isfilesys.def](../../Copybooks/isfilesys.def), has the following structure:<br>The l_parms parameter is the same as the l_parms parameter passed when using the [MAKE-FUNCTION](./MAKE-FUNCTION) opcode.<br>This parameter is a string that contains three comma-separated numbers.<br>Valid values are (in order):<br>If the maximum record size does not match the minimum record size, then variable sized records are implied.<br>If the parameter is initialized, the runtime retrieves the values from the file during the open. If the parameter is set, some file handlers may return an error if it doesn’t match with the actual characteristics of the file. |  |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| >0 | File handle. |
| 0 | Operation failed. |
