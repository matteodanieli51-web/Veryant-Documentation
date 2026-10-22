### WINPRINT-GET-CURRENT-INFO

The WINPRINT-GET-CURRENT-INFO function retrieves information concerning the currently selected printer. A more complete set of information can be retrieved through the [WINPRINT-GET-CURRENT-INFO-EX](./WINPRINT-GET-CURRENT-INFO-EX) function.

#### Syntax:

```cobol
 CALL "WIN$PRINTER" USING WINPRINT-GET-CURRENT-INFO
                          WINPRINT-SELECTION
                   GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| WINPRINT-GET-CURRENT-INFO | Constant |  |
| WINPRINT-SELECTION | Group Item | Structure that receives the information. This group item, defined in [isprint.def](../../Copybooks/isprint.def), has the following structure:<br>Note - members not mentioned below are not used by this function.<br>*winprint-name*<br>It is the name of the printer<br>*winprint-no-of-printers*<br>It is the number of the currently selected printer in the isCOBOL framework.<br>*winprint-is-default*<br>It is a flag indicating if the printer is the system's default printer. If it is the default printer, the wprt-is-default condition is set to true, otherwise the wprt-is-not-default is set to true.<br>*winprint-curr-copies*<br>Is the number of copies the printer will print with the next job.<br>*winprint-curr-orientation*<br>Is the current orientation: portrait or landscape. |

**Note -** If no printer is available in the system, set *wprterr-no-printers* to true before calling this function in order to avoid errors. *winprint-curr-copies* and *winprint-curr-orientation* are returned anyway.

**Note -** If this function is called before WINPRINT-SETUP, it returns only the following information: winprint-name, winprint-no-of-printers, winprint-is-default, and winprint-job-title. All other fields are set to default values that may not match with the current printer settings.

#### Return code:

returnCode can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 1 | Operation successful. |
| WPRTERR-UNSUPPORTED | The WIN$PRINTER library routine is not supported. |
| WPRTERR-BAD-ARG | The WIN$PRINTER library routine has been called with bad parameters. |
