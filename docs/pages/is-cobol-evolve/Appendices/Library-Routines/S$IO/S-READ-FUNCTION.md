### S-READ-FUNCTION

This function reads the next record in the sequence of records

Syntax:

```cobol
 SET S-READ-FUNCTION TO TRUE

 CALL "S$IO" USING SIO-FUNCTION
                   f
                   recBuffer
            GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *f* | *USAGE HANDLE* | The file handle returned by [S-OPEN-FUNCTION](./S-OPEN-FUNCTION). |
| *recBuffer* | *PIC X(n)* | Alphanumeric data-item that receives the record read. |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| >0 | Number of bytes read, plus one. |
| 0 | Operation failed. |
