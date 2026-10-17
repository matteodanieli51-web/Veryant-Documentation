### LISTENV-OPEN

The LISTENV-OPEN function opens the list of the available configuration properties.

#### Syntax:

```cobol
 CALL "C$LIST_ENVIRONMENT" USING LISTENV-OPEN
                          GIVING listenvHandle
```

#### Parameters:

|  |  |
| --- | --- |
| LISTENV-OPEN | Constant |

#### Return code:

*listenvHandle* must be an USAGE HANDLE data item. It receives the handle of the list of properties and will be used with the [LISTENV-NEXT](./LISTENV-NEXT) and [LISTENV-CLOSE](./LISTENV-CLOSE) functions.
