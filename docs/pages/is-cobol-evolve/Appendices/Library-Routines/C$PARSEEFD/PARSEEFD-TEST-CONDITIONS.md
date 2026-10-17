### PARSEEFD-TEST-CONDITIONS

The PARSEEFD-TEST-CONDITIONS function tests the conditions of a particular record.

#### Syntax:

```cobol
 CALL "C$PARSEEFD" USING PARSEEFD-TEST-CONDITIONS
                         efdHandle
                         recordBuffer
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *PARSEEFD-TEST-CONDITIONS* | Constant |  |
| efdHandle | USAGE HANDLE | Handle returned by the [PARSEEFD-PARSE](./PARSEEFD-PARSE) function. |
| recordBuffer | PIC X(n) | Hosts the record content. |

After calling this function, you can get each condition with [PARSEEFD-GET-COND-INFO](./PARSEEFD-GET-COND-INFO) and tell whether fields that depend on that condition should be included in this record (PARSEEFD-CONDITION-FLAG will be "Y" if fields that depend on that condition should be included in this record).
