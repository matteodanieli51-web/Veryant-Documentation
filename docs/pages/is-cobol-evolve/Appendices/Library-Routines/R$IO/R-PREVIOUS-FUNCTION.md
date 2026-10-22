### R-PREVIOUS-FUNCTION

This function reads the previous record in the sequence of records in a relative file.

The record locking is controlled by the *f-no-lock* external data-item. Move 1 to *f-no-lock* to read without locking. Move 0 to *f-no-lock* to read with lock. The default value of *f-no-lock* is 0.

Syntax:

```cobol
 SET R-PREVIOUS-FUNCTION TO TRUE

 CALL "R$IO" USING RIO-FUNCTION
                   f
                   recBuffer
            GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *f* | USAGE HANDLE | The file handle returned by [R-OPEN-FUNCTION](./R-OPEN-FUNCTION). |
| *recBuffer* | PIC X(n) | Alphanumeric data-item that receives the record read. |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| >0 | Number of bytes read, plus one. |
| 0 | Operation failed. |
