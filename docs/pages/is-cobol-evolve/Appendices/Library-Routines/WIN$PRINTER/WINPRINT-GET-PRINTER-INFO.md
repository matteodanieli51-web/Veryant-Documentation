### WINPRINT-GET-PRINTER-INFO

The WINPRINT-GET-PRINTER-INFO function retrieves information concerning a specific printer. A more complete set of information can be retrieved through the [WINPRINT-GET-PRINTER-INFO-EX](./WINPRINT-GET-PRINTER-INFO-EX) function.

#### Syntax:

```cobol
 CALL "WIN$PRINTER" USING WINPRINT-GET-PRINTER-INFO
                          WINPRINT-SELECTION
                   GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| WINPRINT-GET-PRINTER-INFO | Constant |  |
| WINPRINT-SELECTION | Group Item | Structure that receives the information. This group item, defined in [isprint.def](../../Copybooks/isprint.def), has the following structure:<br>Note - members not mentioned below are not used by this function.<br>*winprint-name*<br>It is the name of the printer<br>When the function is called and winprint-no-of-printers is zero, the function searches for a printer with the name specified. Otherwise, it receives the name of the printer identified by winprint-no-of-printers.<br>*winprint-no-of-printers*<br>It is the number of the currently selected printer in the isCOBOL framework.<br>*winprint-is-default*<br>It is a flag indicating if the printer is the system's default printer. If it is the default printer, the wprt-is-default condition is set to true, otherwise the wprt-is-not-default is set to true.<br>*winprint-curr-copies*<br>Is the number of copies the printer will print with the next job.<br>*winprint-curr-orientation*<br>Is the current orientation: portrait or landscape. |

**Note -** If no printer is available in the system, set *wprterr-no-printers* to true before calling this function in order to avoid errors. *winprint-curr-copies* and *winprint-curr-orientation* are returned anyway.

**Note -** If this function is called before WINPRINT-SETUP, it returns only the following information: winprint-name, winprint-no-of-printers, winprint-is-default, and winprint-job-title. All other fields are set to default values that may not match with the current printer settings.

#### Return code:

returnCode can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 1 | Operation successful. |
| WPRTERR-UNSUPPORTED | The WIN$PRINTER library routine is not supported. |
| WPRTERR-BAD-ARG | The WIN$PRINTER library routine has been called with bad parameters. |

#### Example:

The following code snippet retrieves information for all installed printers.

```cobol
call "WIN$PRINTER" using WINPRINT-GET-NO-PRINTERS, winprint-selection
move winprint-no-of-printers to printerCount
perform varying printerIdx from 1 by 1 until printerIdx > printerCount
   initialize winprint-selection
   move printerIdx to winprint-no-of-printers
   call "WIN$PRINTER" using WINPRINT-GET-PRINTER-INFO, winprint-selection
   display "Printer name: " winprint-name
end-perform
```
