### CMONITOR-GET-NO-MONITOR

The CMONITOR-GET-NO-MONITOR function returns the number of available monitors and tells which is the default one.

Syntax:

```cobol
 CALL "C$MONITOR" USING CMONITOR-GET-NO-MONITOR
                        monitorCount
                       [mainMonitor]
                 GIVING returnCode
```

Parameters:

|  |  |  |
| --- | --- | --- |
| *CMONITOR-GET-NO-MONITOR* | Constant |  |
| *monitorCount* | PIC 9(n) | Receives the number of available monitors. |
| *mainMonitor* | PIC 9(n) | Receives the index of the main monitor. |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 1 | Operation successful. |
| 0 | Operation not supported. |
| -1 | Operation failed due to bad arguments. |
