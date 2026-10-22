### R-OPEN-FUNCTION

This function opens an existing relative file. If it is successful, the value in RETURN-CODE should be moved to a data item that is USAGE HANDLE. This data item is passed as the open file handle to the other file handling functions.

If it fails, RETURN-CODE is set to ZERO.

This function only opens already existing files. If the file does not exist, the function fails, even when opening for output.

Syntax:

```cobol
 SET R-OPEN-FUNCTION TO TRUE

 CALL "R$IO" USING RIO-FUNCTION
                   name
                   mode
                   maxSize
                   minSize
            GIVING returnCode
```

#### Parameters:

|  |  |  |  |
| --- | --- | --- | --- |
| *name* | PIC X(n) | The name of the file to open. |  |
| *mode* | USAGE SIGNED-SHORT | One of the following values (defined in [isfilesys.def](../../Copybooks/isfilesys.def)): |  |
|  |  | Finput<br>Foutput<br>Fio<br>Fextend | Open for input only.<br>Open for output only.<br>Open for input and output.<br>Same as Foutput. |
|  |  | Mode may also have one of the following flags (defined in [isfilesys.def](../../Copybooks/isfilesys.def)) added to it to indicate file locking options: |  |
|  |  | Fread_lock<br>Fwrite_lock<br>Fmass_update | Locks file against other updaters.<br>Locks file against all others.<br>Same as Fwrite_lock. |
| *maxSize* | USAGE SIGNED-SHORT | The maximum record size. |  |
| *minSize* | USAGE SIGNED-SHORT | The minimum record size. It should be equal to max-size, since relative files can’t be variable lenght. |  |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| >0 | File handle. |
| 0 | Operation failed. |
