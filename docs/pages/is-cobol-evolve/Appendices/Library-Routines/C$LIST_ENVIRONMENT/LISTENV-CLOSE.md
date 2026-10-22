### LISTENV-CLOSE

The LISTENV-CLOSE function closes a list of properties.

#### Syntax:

```cobol
 CALL "C$LIST_ENVIRONMENT" USING LISTENV-CLOSE
                                 listenvHandle
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| LISTENV-NEXT | Constant |  |
| *listenvHandle* | USAGE HANDLE | Specifies the handle of a list of properties, returned by the [LISTENV-OPEN](./LISTENV-OPEN) function. |
