### R-MAKE-FUNCTION

This function creates a new relative file. It overwrites any existing file of the same name unless they’re in use.  If the file is in use, the function fails.

Syntax:

```cobol
 SET R-MAKE-FUNCTION TO TRUE

 CALL "R$IO" USING RIO-FUNCTION
                  name
                  lParms
           GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *name* | PIC X(n) | The name of the file to create. |
| *lParms* | PIC X(n) | A string that describes the record size by providing two numbers separated by comma in the form: *max-rec-size,min-rec-size*<br>Variable length files are not supported, so max-rec-size should be equal to min-rec-size. |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| >0 | Operation successful. |
| 0 | Operation failed. |
