### WINPRINT-GET-NO-PRINTERS

The WINPRINT-GET-NO-PRINTERS function retrieves the number of printers installed on the host system.

#### Syntax:

```cobol
 CALL "WIN$PRINTER" USING WINPRINT-GET-NO-PRINTERS
                          WINPRINT-SELECTION
                   GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| WINPRINT-GET-NO-PRINTERS | Constant |  |
| WINPRINT-SELECTION | Group Item | Structure that receives the information. This group item, defined in [isprint.def](../../Copybooks/isprint.def), has the following structure:<br>Note - members not mentioned below are not used by this function.<br>*winprint-no-of-printers*<br>It is the number of  available printers. |

#### Return code:

returnCode can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 1 | Operation successful. |
| WPRTERR-UNSUPPORTED | The WIN$PRINTER library routine is not supported. |
| WPRTERR-BAD-ARG | The WIN$PRINTER library routine has been called with bad parameters. |
