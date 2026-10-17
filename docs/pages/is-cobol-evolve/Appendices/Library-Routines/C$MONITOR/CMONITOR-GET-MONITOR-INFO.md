### CMONITOR-GET-MONITOR-INFO

The CMONITOR-GET-MONITOR-INFO function returns information about a given monitor.

Syntax:

```cobol
 CALL "C$MONITOR" USING CMONITOR-GET-MONITOR-INFO
                        monitorIndex
                        CMONITOR-DATA
                 GIVING returnCode
```

Parameters:

|  |  |  |
| --- | --- | --- |
| *CMONITOR-GET-MONITOR-INFO* | Constant |  |
| *monitorIndex* | PIC 9(n) | Specifies the index of the monitor to inquire. |
| CMONITOR-DATA | Group item | Receives the file information. This group item, defined in [iscobol.def](../../Copybooks/iscobol.def), has the following structure:<br>*cmonitor-usable-screen-height*<br>Returns the usable screen height in pixels.<br>*cmonitor-usable-screen-width*<br>Returns the usable screen width in pixels.<br>*cmonitor-physical-screen-height*<br>Returns the physical screen height in pixels.<br>*cmonitor-physical-screen-width*<br>Returns the physical screen width in pixels.<br>*cmonitor-start-y*<br>Returns the coordinate of the first usable pixel on the Y axis.<br>*cmonitor-start-x*<br>Returns the coordinate of the first usable pixel on the X axis. |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 1 | Operation successful. |
| 0 | Operation not supported. |
| -1 | Operation failed due to bad arguments. |
