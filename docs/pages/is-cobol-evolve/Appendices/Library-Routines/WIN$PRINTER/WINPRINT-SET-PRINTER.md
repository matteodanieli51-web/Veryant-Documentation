### WINPRINT-SET-PRINTER

The WINPRINT-SET-PRINTER function selects a printer and set some of its features. More features can be set with the [WINPRINT-SET-PRINTER-EX](./WINPRINT-SET-PRINTER-EX) routine.

The printer settings are evaluated only at the OPEN OUTPUT of the print-file. Calling this op-code in the middle of the print job has no effect.

When printing to PDF or Print Preview, the active printer is used to calculate margins. If you wish to avoid this, call the WINPRINT-SET-PRINTER function with *wprterr-no-printers* set to true. You will be allowed to set only *winprint-curr-copies* and *winprint-curr-orientation.*

#### Syntax:

```cobol
 CALL "WIN$PRINTER" USING WINPRINT-SET-PRINTER
                          WINPRINT-SELECTION
                   GIVING returnCode
```

#### Parameters:

|  |  |  |  |
| --- | --- | --- | --- |
| WINPRINT-SET-PRINTER | Constant |  |  |
| WINPRINT-SELECTION | Group Item | Structure that contains the information to be passed to the function. This group item, defined in [isprint.def](../../Copybooks/isprint.def), has the following structure: |  |
|  |  | Note - members not mentioned below are not used by this function. |  |
|  |  | *winprint-name*<br>It is the name of the printer.<br>When the function is called and winprint-no-of-printers is zero, the function searches for a printer with the name specified and selects it. |  |
|  |  | *winprint-no-of-printers*<br>It is the number of the printer to be selected. When this member is zero, the function selects the printer with the name specified in winprint-name. |  |
|  |  | *winprint-quality*<br>It is the print quality. Note that most laser printers do not support quality, while most dot-matrix printers do. Valid values are: |  |
|  |  | WPRTSEL-QUALITY-DEFAULT | Default quality. |
|  |  | WPRTSEL-QUALITY-HIGH | High quality. |
|  |  | WPRTSEL-QUALITY-MEDIUM | Medium quality. |
|  |  | WPRTSEL-QUALITY-LOW | Low quality. |
|  |  | WPRTSEL-QUALITY-DRAFT | Draft quality. |
|  |  | *winprint-curr-orientation*<br>It is the paper orientation. Valid values are: |  |
|  |  | WPRTSEL-ORIENT-DEFAULT | Default paper orientation. |
|  |  | WPRTSEL-ORIENT-PORTRAIT | Portrait. |
|  |  | WPRTSEL-ORIENT-LANDSCAPE | Landscape. |
|  |  | *winprint-curr-copies*<br>Is the number of copies the printer will print with the next job. |  |

**Note -** If no printer is available in the system, set *wprterr-no-printers* to true before calling this function in order to avoid errors. You will be allowed to set only *winprint-curr-copies* and *winprint-curr-orientation.*

#### Return code:

returnCode can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 1 | Operation successful. |
| WPRTERR-UNSUPPORTED | The WIN$PRINTER library routine is not supported. |
| WPRTERR-BAD-ARG | The WIN$PRINTER library routine has been called with bad parameters. |
