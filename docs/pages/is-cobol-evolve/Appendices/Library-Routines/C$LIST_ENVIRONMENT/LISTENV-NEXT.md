### LISTENV-NEXT

The LISTENV-NEXT function retrieves the next property in a list.

#### Syntax:

```cobol
 CALL "C$LIST_ENVIRONMENT" USING LISTENV-NEXT
                                 listenvHandle
                                 variableName
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| LISTENV-NEXT | Constant |  |
| *listenvHandle* | USAGE HANDLE | Specifies the handle of a list of properties, returned by the [LISTENV-OPEN](./LISTENV-OPEN) function. |
| *variableName* | PIC X(n) | Receives the name of the next property in the list. When no more properties  are available, variableName is set to spaces. |
