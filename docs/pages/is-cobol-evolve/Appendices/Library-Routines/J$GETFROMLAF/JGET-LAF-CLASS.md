### JGET-LAF-CLASS

The JGET-LAF-CLASS function returns the fully qualified name of the class that provides the current LAF.

#### Syntax:

```cobol
 CALL "J$GETFROMLAF" USING JGET-LAF-CLASS
                           className
                    GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| JGET-LAF-COLOR | Constant |  |
| *className* | PIC X(n) | Receives the fully qualified class name |

#### Return code:

*returnCode* can be any signed numeric data item.

|  |  |
| --- | --- |
| -1 | Operation failed. |
| 0 | Operation successful. |
