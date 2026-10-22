### CPROF-SET

The CPROF-SET function allows you to customize the profiler’s report file format and name. If you don’t call this function, the profiler generates a report in HTML format in the current directory by default.

Each call to this function appends a new file format and name to the settings made by the previous calls. These settings are cleared after [CPROF-FLUSH](./CPROF-FLUSH) has been called.

This function is particularly useful to set again the Code Coverage’s report file format and name after [CPROF-FLUSH](./CPROF-FLUSH) has been called.

#### Syntax:

```cobol
 CALL "C$PROFILER" USING CPROF-SET
                         outputFormat, outputFile, ...
                  GIVING returnCode.
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| CPROF-SET | Constant |  |
| *outputFormat* | PIC X(n) | Specifies the file format. Possible values, case insensitive, are:<br>**html** = create a folder with HTML files inside<br>**txt** = create a TXT file<br>**xml** = create an XML file |
| *outputFile* | PIC X(n) | Specifies the disc file name for "txt" and "xml" formats.<br>Specifies the folder name for the "html" format. |

The outputFormat and outputFile pair can be repeated to obtain the same report in multiple formats, i.e.

```cobol
call "c$profiler" using cprof-set "xml" "isprof.xml" "txt" "isprof.txt"
```

#### Return code:

returnCode can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Operation successful |
| 1 | Operation had no effect because the agent is not attached; ensure you used either the -javaagent Java option or the -profile runtime option |
