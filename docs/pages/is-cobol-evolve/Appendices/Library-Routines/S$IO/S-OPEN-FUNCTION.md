### S-OPEN-FUNCTION

This function opens an existing sequential file. If it is successful, the value in RETURN-CODE should be moved to a data item that is USAGE HANDLE. This data item is passed as the open file handle to the other file handling functions.

If it fails, RETURN-CODE is set to ZERO.

This function only opens already existing files. If the file does not exist, the function fails, even when opening for output.

Syntax:

```cobol
 SET S-OPEN-FUNCTION TO TRUE

 CALL "S$IO" USING SIO-FUNCTION
                   name
                   mode
                   recSize
                   type
                  [blocking]
                  [padding ]
                  [pipeName]
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
| *recSize* | USAGE SIGNED-SHORT | The maximum record size. |  |
| *type* | USAGE SIGNED-SHORT | One of the following values (defined in [isfilesys.def](../../Copybooks/isfilesys.def)): |  |
|  |  | S-FIXED<br>S-VAR-COUNT<br>S-LINE | fixed record binary sequential file<br>variable record length binary sequential file<br>line sequential file |
| *blocking* | USAGE SIGNED-SHORT | Size of a block, in bytes. This parameter is optional. If omitted or set to 0, a block is the size of a record. |  |
| *padding* | USAGE SIGNED-SHORT | Value of the pad character for filling short blocks. This parameter is optional. If omitted or set to 0,  any short blocks are padded with 0x00. |  |
| *pipeName* | PIC X(n) | Name of the pipe to open instead of a file. This parameter is optional. |  |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| >0 | File handle. |
| 0 | Operation failed. |
