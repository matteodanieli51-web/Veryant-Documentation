### CPROF-FLUSH

The CPROF-FLUSH function generates the reports using the current data of the profiler and then clears this data. It also resets the names of the reports, including the default HTML report, so no more reports will be generated unless you provide new names via [CPROF-SET](./CPROF-SET).

#### Syntax:

```cobol
 CALL "C$PROFILER" USING CPROF-FLUSH
                  GIVING returnCode.
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| CPROF-FLUSH | Constant |  |

#### Return code:

returnCode can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Operation successful |
| 1 | Operation had no effect because the agent is not attached; ensure you used either the -javaagent Java option or the -profile runtime option |
| 2 | An i-o error occurred; one or more reports have not been generated |
