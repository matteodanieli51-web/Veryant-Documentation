### CXML-GET-PROC-INSTR-COUNT

The CXML-GET-PROC-INSTR-COUNT function returns the number of processing instructions that exist.

#### Syntax:

```cobol
 CALL "C$XML" USING CXML-GET-PROC-INSTR-COUNT
                    handle
             GIVING procInstrCount
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *CXML-GET-PROC-INSTR-COUNT* | Constant |  |
| *handle* | USAGE HANDLE | A XML parser handle. |

#### Return code:

*procInstrCount* can be any numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | An error occurred. |
| >0 | The number of processing instructions. |
