### WINPRINT-CANCEL-JOB

The WINPRINT-CANCEL-JOB function cancels the current print job. The subsequent CLOSE statement on the print file will release all the job resources without printing out anything. This function affects standard print jobs as well as print preview and PDF generation. It has no effect if the printing device is SPOOLER DIRECT or any other physical device.

**Note:** This function should always be called between the OPEN OUTPUT and the CLOSE of the print file. If the function is called after the CLOSE of the print file, the next print job will be cancelled.

#### Syntax:

```cobol
 CALL "WIN$PRINTER" USING WINPRINT-CANCEL-JOB
                   GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| WINPRINT-CANCEL-JOB | Constant |  |

#### Return code:

returnCode can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 1 | Operation successful. |
| WPRTERR-UNSUPPORTED | The WIN$PRINTER library routine is not supported. |
| WPRTERR-BAD-ARG | The WIN$PRINTER library routine has been called with bad parameters. |
