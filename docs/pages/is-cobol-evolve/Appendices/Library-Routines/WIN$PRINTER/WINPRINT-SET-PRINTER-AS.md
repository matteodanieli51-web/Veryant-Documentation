### WINPRINT-SET-PRINTER-AS

In an Application Server environment the WINPRINT-SET-PRINTER-AS function redirects the print job on the server machine or the client machine. By default print jobs are redirected on the client machine.

All the print jobs created after the call to this function are affected.

#### Syntax:

```cobol
 CALL "WIN$PRINTER" USING WINPRINT-SET-PRINTER-AS
                          winprint-as
                   GIVING returnCode
```

#### Parameters:

|  |  |  |  |
| --- | --- | --- | --- |
| WINPRINT-SET-PRINTER-AS | Constant |  |  |
| winprint-as | Numeric Item | Valid values are: |  |
|  |  | WPRT-AS-CLIENT | print job is redirect to the client machine. |
|  |  | WPRT-AS-SERVER | print job is performed on the server machine. |

#### Return code:

returnCode can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 1 | Operation successful. |
| WPRTERR-UNSUPPORTED | The WIN$PRINTER library routine is not supported. |
| WPRTERR-BAD-ARG | The WIN$PRINTER library routine has been called with bad parameters. |
