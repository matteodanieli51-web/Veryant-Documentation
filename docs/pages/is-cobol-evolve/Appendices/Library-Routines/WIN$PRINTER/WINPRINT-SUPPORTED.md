### WINPRINT-SUPPORTED

The WINPRINT-SUPPORTED function checks if the host system supports the WIN$PRINTER library routine.

#### Syntax:

```cobol
 CALL "WIN$PRINTER" USING WINPRINT-SUPPORTED
                   GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| WINPRINT-SUPPORTED | Constant |  |

#### Return code:

returnCode can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 1 | Operation successful. |
| WPRTERR-UNSUPPORTED | The WIN$PRINTER library routine is not supported. |

**Note:** currently, the WINPRINT-SUPPORTED function always returns 1 because the WIN$PRINTER library routine is supported on all platforms.
