### S-MAKE-FUNCTION

This function creates a new sequential file. It overwrites any existing file of the same name unless they’re in use.  If the file is in use, the function fails.

Syntax:

```cobol
 SET S-MAKE-FUNCTION TO TRUE

 CALL "S$IO" USING SIO-FUNCTION
                  name
                 [lParms]
           GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *name* | PIC X(n) | The name of the file to create. |
| *lParms* | PIC X(n) | A string that describes various logical characteristics of the file. The string consists of three numeric fields separated by commas:<br>This parameter is optional. If omitted, the values are not known to the runtime. |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| >0 | Operation successful. |
| 0 | Operation failed. |
