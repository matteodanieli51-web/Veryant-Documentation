### WD2-PUT-SESSION-VALUE

The WD2-PUT-SESSION-VALUE function sets the value of a session field.

#### Syntax:

```cobol
 CALL "WD2$SESSION" USING WD2-PUT-SESSION-VALUE
                          fieldName
                          fieldValue
                   GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *opCode* | Constant |  |
| *fieldName* | PIC X(n) | Specifies the name of the session field whose value must be set. |
| *fieldValue* | PIC X(n) | Specifies the field value. |

#### Return code:

|  |  |
| --- | --- |
| 0 | Operation successful. |
| -1 | Running outside WebDirect environment. |
| -2 | Invalid parameters. |
| -3 | Invalid opCode. |
| -4 | Internal error. |
| -5 | Internal error. |
| -6 | Field not found. |
