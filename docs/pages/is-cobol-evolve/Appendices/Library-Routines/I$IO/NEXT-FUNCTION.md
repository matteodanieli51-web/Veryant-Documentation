### NEXT-FUNCTION

This function reads the next record in the sequence of records specified by the current key of reference.

The record locking is controlled by the *f-no-lock* external data-item. Move 1 to *f-no-lock* to read without locking. Move 0 to *f-no-lock* to read with lock. The default value of *f-no-lock* is 0.

If this function succeeds, RETURN-CODE is set to the size of the record read. RETURN-CODE is set to zero on failure.

#### Syntax

```cobol
 SET NEXT-FUNCTION TO TRUE

 CALL "I$IO" USING IO-FUNCTION
                   f
                   record
            GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *f* | USAGE HANDLE | A valid file handle returned by [OPEN-FUNCTION](./OPEN-FUNCTION). |
| *record* | PIC X(n) | Points to the area to hold the record read.<br>Note: in order to gain performance, in [isCOBOL File Server](../../../../is-cobol-AS/isCOBOL-File-Server/isCOBOL-File-Server) environment the previous content of this parameter is discarded before reading. After reading, the bytes exceeding the number of read bytes are initialized to low-values. |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| >0 | Number of read bytes. |
| 0 | Operation failed. |
