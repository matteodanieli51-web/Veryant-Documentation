### CPROF-ENABLE

The CPROF-ENABLE function restarts the profiler. After this call, the runtime activity will be profiled until the next call to [CPROF-DISABLE](./CPROF-DISABLE) or [CPROF-FLUSH](./CPROF-FLUSH).

#### Syntax:

```cobol
 CALL "C$PROFILER" USING CPROF-ENABLE
                  GIVING returnCode.
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| CPROF-ENABLE | Constant |  |

#### Return code:

returnCode can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Operation successful |
| 1 | Operation had no effect because the agent is not attached; ensure you used either the -javaagent Java option or the -profile runtime option |
