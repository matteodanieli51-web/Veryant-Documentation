### WINPRINT-GET-NO-ASYNC-JOBS

The WINPRINT-GET-NO-ASYNC-JOBS function retrieves the number of print jobs that are currently running asynchronously. The asynchronicity of print jobs depends on the [iscobol.print.spooler_async (boolean)](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) configuration property.

#### Syntax:

```cobol
 CALL "WIN$PRINTER" USING WINPRINT-GET-NO-ASYNC-JOBS
                          jobsCount
                   GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| WINPRINT-GET-NO-ASYNC-JOBS | Constant |  |
| *jobsCount* | Numeric data item | Receives the number of asynchronous print jobs. |

#### Return code:

returnCode can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 1 | Operation successful. |
| WPRTERR-UNSUPPORTED | The WIN$PRINTER library routine is not supported. |
| WPRTERR-BAD-ARG | The WIN$PRINTER library routine has been called with bad parameters. |
