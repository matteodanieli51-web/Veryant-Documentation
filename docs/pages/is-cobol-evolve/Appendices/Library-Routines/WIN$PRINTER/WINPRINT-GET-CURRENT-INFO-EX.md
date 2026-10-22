### WINPRINT-GET-CURRENT-INFO-EX

The WINPRINT-GET-CURRENT-INFO-EX function retrieves information concerning the currently selected printer.

#### Syntax:

```cobol
 CALL "WIN$PRINTER" USING WINPRINT-GET-CURRENT-INFO-EX
                          WINPRINT-SELECTION
                   GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| WINPRINT-GET-CURRENT-INFO-EX | Constant |  |
| WINPRINT-SELECTION | Group Item | Structure that receives the information. This group item, defined in [isprint.def](../../Copybooks/isprint.def), has the following structure: |
|  |  | Note - members not mentioned below are not used by this function.<br>*winprint-name*<br>It is the name of the printer<br>*winprint-no-of-printers*<br>It is the number of the currently selected printer in the isCOBOL framework.<br>*winprint-is-default*<br>It is a flag indicating if the printer is the system's default printer. If it is the default printer, the wprt-is-default condition is set to true, otherwise the wprt-is-not-default is set to true.<br>*winprint-color*<br>It is a flag indicating if the printer supports colors. If color is supported, the wprt-has-color condition is set to true, otherwise the wprt-has-no-color is set to true.<br>*winprint-curr-copies*<br>Is the number of copies the printer will print with the next job.<br>*winprint-curr-orientation*<br>Is the current orientation: portrait or landscape.<br>*winprint-curr-duplex*<br>Is the current duplex: simplex, vertical or horizontal.<br>*winprint-curr-collate*<br>Is the current collate state.<br>*winprint-curr-papersize*<br>Is the current paper-size. Due to Java implementation, the value 9 is always returned.<br>*winprint-curr-tray*<br>Is the current tray. Possible values are defined in [isprint.def](../../Copybooks/isprint.def).<br>**Note** - this field is no longer supported since Java 17.<br>*winprint-curr-color*<br>It is a flag indicating if the printer is properly set to print colors. If it is properly set, the wprt-color condition is set to true, otherwise the wprt-monochrome is set to true.<br>*winprint-job-title*<br>It is the name of the current job. |

**Note -** If no printer is available in the system, set *wprterr-no-printers* to true before calling this function in order to avoid errors. *winprint-curr-copies* and *winprint-curr-orientation* are returned anyway.

**Note -** If this function is called before WINPRINT-SETUP, it returns only the following information: winprint-name, winprint-no-of-printers, winprint-is-default, and winprint-job-title. All other fields are set to default values that may not match with the current printer settings.

#### Return code:

returnCode can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 1 | Operation successful. |
| WPRTERR-UNSUPPORTED | The WIN$PRINTER library routine is not supported. |
| WPRTERR-BAD-ARG | The WIN$PRINTER library routine has been called with bad parameters. |
