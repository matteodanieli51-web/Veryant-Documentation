### WINPRINT-GET-PRINTER-MEDIA

The WINPRINT-GET-PRINTER-MEDIA function allows you to access the paper sizes and paper trays supported by the printer.

#### Syntax

```cobol
 CALL "WIN$PRINTER" USING WINPRINT-GET-PRINTER-MEDIA
                          WINPRINT-MEDIA
                   GIVING returnCode
```

#### Parameters

|  |  |  |  |
| --- | --- | --- | --- |
| WINPRINT-GET-PRINTER-MEDIA | Constant |  |  |
| WINPRINT-MEDIA | Group Item | Structure  defined in [isprint.def](../../Copybooks/isprint.def) as follows: |  |
|  |  |  |  |
|  |  | *winprint-media-printer*<br>It must be set to the value of WINPRINT-NAME as obtained through a call to [WINPRINT-GET-CURRENT-INFO](./WINPRINT-GET-CURRENT-INFO), [WINPRINT-GET-CURRENT-INFO-EX](./WINPRINT-GET-CURRENT-INFO-EX), [WINPRINT-GET-PRINTER-INFO](./WINPRINT-GET-PRINTER-INFO) or [WINPRINT-GET-PRINTER-INFO-EX](./WINPRINT-GET-PRINTER-INFO-EX). |  |
|  |  | *winprint-media-port*<br>This parameter is ignored. |  |
|  |  | *winprint-media-papercount*<br>Returns the total number of paper sizes supported by the selected printer driver. This number varies from printer to printer. |  |
|  |  | *winprint-media-traycount*<br>Returns the total number of paper trays supported by the printer driver. This number varies from printer to printer.<br>**Note** - this field is no longer supported since Java 17. |  |
|  |  | *winprint-media-paper*<br>Returns an array of supported paper sizes. The array is limited to a maximum of max-paper-sizes possible sizes. Each number in the array corresponds to a paper size defined by WINPRINT-CURR-PAPERSIZE in *[isprint.def](../../Copybooks/isprint.def)*. The numbers in the array may not appear in sequential order . |  |
|  |  | *winprint-media-trays*<br>Returns an array of supported paper trays. The array is limited to a maximum of max-paper-trays possible trays. Each number in the array corresponds to a paper tray defined by WINPRINT-CURR-TRAY in *[isprint.def](../../Copybooks/isprint.def)*. The numbers in the array may not appear in sequential order .<br>**Note** - this field is no longer supported since Java 17. |  |

**Note:** The information returned by WINPRINT-GET-PRINTER-MEDIA may be incomplete because Java implements only some of the possible media paper and media tray, in particular the ones defined by the IPP (Internet Printing Protocol). However in the dialog box for the printer selection you could see more formats than the ones isCOBOL is able to handle, because, depending on the OS, special classes are supplied in order to cope with all the formats handled by the OS. So it could happen that, for example, there are four trays available but two of them are identified by the number 0 (unknown), meaning that those two trays are handled only on that operating system.

#### Return code

returnCode can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 1 | Operation successful. |
| WPRTERR-UNSUPPORTED | The WIN$PRINTER library routine is not supported. |
| WPRTERR-BAD-ARG | The WIN$PRINTER library routine has been called with bad parameters. |
