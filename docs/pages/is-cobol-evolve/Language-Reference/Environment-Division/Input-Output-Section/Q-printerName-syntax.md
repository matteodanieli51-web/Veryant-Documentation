#### -Q <printerName\> syntax

The "-Q <printerName\>" syntax allows you to assign a print file to a specific printer and configure some settings like font and orientation through the physical file name.

The base syntax assigns the file to a named printer:

```cobol
-Q <printerName>
```

For example, the below print file will work on a printer named "Samsung-ML-3471ND":

```cobol
SELECT print-file ASSIGN TO PRINT "-Q Samsung-ML-3471ND"
       ORGANIZATION LINE SEQUENTIAL

```

The extended syntax allows you to set one or more additional settings as follows:

```cobol
-Q <printerName>;DIRECT=<value>;FONT=<value>;PITCH=<value>;LINES=<value>;ORIENTATION=<value>;COPY=<value>
```

Settings have the following meaning:

| | |
| --- | --- |
| DIRECT | Two possible values are allowed:<br>“ON”: all file operations are directly redirected to the printer.<br>“OFF”: all file operations are redirected to the print spooler. |
| FONT | Specifies the name of the font. Spaces are allowed so double quotes must not be used in order to delimit the font name. |
| PITCH | Specifies the size of the font |
| LINES | Specifies the number of lines for each page. When this number is reached, a new page is printed. |
| ORIENTATION | Three possible values are allowed:<br>0: default printer orientation<br>1: portrait orientation<br>2: landscape orientation |
| COPY | Specifies the number of copies. |
| | |

Any setting in addition to the printer name is optional and can appear in any order.

The following complex string, for example, assigns a print file to the printer named "Samsung-ML-3471ND" and specifies that the print job will have a landscape orientation and use the Courier New font:

```cobol
-Q Samsung-ML-3471ND;FONT=Courier New;PITCH=10;ORIENTATION=2
```
