## C$MONITOR

The C$MONITOR library routine returns information about the available monitors.

### Syntax

```cobol
 CALL "C$MONITOR" USING opCode
                        parameters
                 GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *opCode* | Function to be executed. Valid values, defined in [iscobol.def](../../Copybooks/iscobol.def). |  |
|  | get-no-monitor | Returns the number of available monitors |
|  | get-monitor-info | Returns information about a given monitor |
| *parameter1* | Parameters depend on the opcode. |  |

### Return code

*returnCode* can be any signed numeric data item. The meaning depends on the opcode.

### Examples:

**Example** - Retrieve how many monitors are available

```cobol
       working-storage section.
       copy "iscobol.def".
       77 monitor-count pic 99.
       77 main-index    pic 99.

       procedure division.
       main.
           call "c$monitor" using cmonitor-get-no-monitor
                                  monitor-count, main-index.
           display "there are " monitor-count " monitors available".
           display "the default monitor is number " main-index.
```
