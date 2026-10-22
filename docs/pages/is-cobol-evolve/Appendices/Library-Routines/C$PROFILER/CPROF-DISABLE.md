### CPROF-DISABLE

The CPROF-DISABLE function pauses the profiler. After this call, no activity will be profiled until the next call to [CPROF-ENABLE](./CPROF-ENABLE).

#### Syntax:

```cobol
 CALL "C$PROFILER" USING CPROF-DISABLE
                  GIVING returnCode.
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| CPROF-DISABLE | Constant |  |

#### Return code:

returnCode can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Operation successful |
| 1 | Operation had no effect because the agent is not attached; ensure you used either the -javaagent Java option or the -profile runtime option |
