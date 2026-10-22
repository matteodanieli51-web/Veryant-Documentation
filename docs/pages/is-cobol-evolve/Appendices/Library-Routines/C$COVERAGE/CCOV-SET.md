### CCOV-SET

The CCOV-SET function allows you to customize the Code Coverage’s report file format and name. If you don’t call this function, the Code Coverage generates a report in HTML format in the current directory by default.

Each call to this function appends a new file format and name to the settings made by the previous calls. These settings are cleared after [CCOV-FLUSH](./CCOV-FLUSH) has been called.

This function is particularly useful to set again the Code Coverage’s report file format and name after [CCOV-FLUSH](./CCOV-FLUSH) has been called.

#### Syntax:

```cobol
 CALL "C$COVERAGE" USING CCOV-SET
                         outputFormat, outputFile, ...
                  GIVING returnCode.
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| CCOV-SET | Constant |  |
| *outputFormat* | PIC X(n) | Specifies the file format. Possible values, case insensitive, are:<br>**append =** create an XML file and merge it with the existing one<br>**html** = create a folder with HTML files inside<br>**xml** = create an XML file |
| *outputFile* | PIC X(n) | Specifies the disc file name for "append" and "xml" formats.<br>Specifies the folder name for the "html" format. |

The outputFormat and outputFile pair can be repeated to obtain the same report in multiple formats.

The "xml" type should be specified only once, while the "append" type can be specified multiple times. In this way you can obtain a complex report that is the merger of multiple XML reports.

#### Return code:

returnCode can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Operation successful |
| 1 | Missing Java agent |
| 2 | Internal error or unable to open *outputFile* |
| 3 | Invalid arguments |
