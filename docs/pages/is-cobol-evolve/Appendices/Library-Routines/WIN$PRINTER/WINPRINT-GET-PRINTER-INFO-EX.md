### WINPRINT-GET-PRINTER-INFO-EX

The WINPRINT-GET-PRINTER-INFO-EX function retrieves information concerning a specific printer.

#### Syntax:

```cobol
 CALL "WIN$PRINTER" USING WINPRINT-GET-PRINTER-INFO-EX
                          WINPRINT-SELECTION
                   GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| WINPRINT-GET-PRINTER-INFO-EX | Constant |  |
| WINPRINT-SELECTION | Group Item | Structure that receives the information. This group item, defined in [isprint.def](../../Copybooks/isprint.def), has the following structure: |
|  |  | 01  winprint-selection.    03 winprint-name             pic x(80).    03 winprint-port             pic x(80).    03 winprint-driver           pic x(80).    03 winprint-drv-version      signed-int.    03 winprint-no-of-printers   signed-short.       88 wprterr-no-printers    value -1.    03 winprint-is-default       signed-short.       88 wprt-is-not-default    value 0.       88 wprt-is-default        value 1.    03 winprint-copies           signed-short.    03 winprint-orientation      signed-short.    03 winprint-quality          signed-short.    03 winprint-curr-orientation signed-short.    03 winprint-curr-copies      signed-short.    03 winprint-duplex           signed-short.    03 winprint-collate          signed-short.    03 winprint-color            signed-short.       88 wprt-has-no-color      value 0.       88 wprt-has-color         value 1.    03 winprint-curr-duplex      signed-short.    03 winprint-curr-collate     signed-short.    03 winprint-curr-papersize   signed-short.    03 winprint-curr-tray        signed-short.    03 winprint-curr-color       signed-short.       88 wprt-monochrome        value 0.       88 wprt-color             value 1.    03 winprint-job-title        pic x(80). |
|  |  | Note - members not mentioned below are not used by this function. |
|  |  | *winprint-name*<br>It is the name of the printer.<br>When the function is called and winprint-no-of-printers is zero, the function searches for a printer with the name specified. Otherwise, it receives the name of the printer identified by winprint-no-of-printers. |
|  |  | *winprint-no-of-printers*<br>It is the number of the printer information is retrieved for. When this member is zero, the function searches for a printer with the name specified in winprint-name. |
|  |  | *winprint-is-default*<br>It is a flag indicating if the printer is the system's default printer. If it is the default printer, the wprt-is-default condition is set to true, otherwise the wprt-is-not-default is set to true. |
|  |  | *winprint-curr-copies*<br>Is the number of copies the printer will print with the next job. |
|  |  | *winprint-color*<br>It is a flag indicating if the printer supports colors. If color is supported, the wprt-has-color condition is set to true, otherwise the wprt-has-no-color is set to true. |
|  |  | *winprint-curr-orientation*<br>Is the current orientation: portrait or landscape. |
|  |  | *winprint-curr-collate*<br>Is the current collate state. |
|  |  | *winprint-curr-duplex*<br>Is the current duplex setting: simplex, vertical or horizontal. |
|  |  | *winprint-curr-papersize*<br>Is the current paper-size. See [List of supported papersizes](./WINPRINT-SET-PRINTER-EX) for a list of possible values. |
|  |  | *winprint-curr-tray*<br>Is the current tray. Possible values are defined in [isprint.def](../../Copybooks/isprint.def).<br>**Note** - this field is no longer supported since Java 17. |
|  |  | *winprint-curr-color*<br>It is a flag indicating if the printer is properly set to print colors. If it is properly set, the wprt-color condition is set to true, otherwise the wprt-monochrome is set to true. |
|  |  | *winprint-job-title*<br>It is the name of the printer job. |

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
   call "WIN$PRINTER" using WINPRINT-GET-PRINTER-INFO-EX, winprint-selection
   display "Printer name: " winprint-name
end-perform
```
