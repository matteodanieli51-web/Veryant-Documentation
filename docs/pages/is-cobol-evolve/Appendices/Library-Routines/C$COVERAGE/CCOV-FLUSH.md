### CCOV-FLUSH

The CCOV-FLUSH function generates the reports using the current data of the Code Coverage and then clears this data. It resets also the names of the reports, including the default HTML report, so no more reports will be generated unless you provide new names via [CCOV-SET](./CCOV-SET).

#### Syntax:

```cobol
 CALL "C$COVERAGE" USING CCOV-FLUSH
                  GIVING returnCode.
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| CCOV-FLUSH | Constant |  |

#### Return code:

returnCode can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Operation successful |
| 1 | Missing Java agent |
| 2 | Internal error or unable to open *outputFile* |
