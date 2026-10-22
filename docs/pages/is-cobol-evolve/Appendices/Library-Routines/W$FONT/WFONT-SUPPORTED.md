### WFONT-SUPPORTED

The WFONT-SUPPORTED function checks if the host system supports the W$FONT library routine.

#### Syntax:

```cobol
 CALL "W$FONT" USING WFONT-SUPPORTED
              GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| WFONT-SUPPORTED | Constant |  |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| WFONTERR-UNSUPPORTED | The W$FONT library routine is not supported. |
| WFONT-FONT-SUPPORT | The W$FONT library routine is supported, but the [WFONT-CHOOSE-FONT](./WFONT-CHOOSE-FONT) is not and may not be used. |
| WFONT-FULL-SUPPORT | The W$FONT library routine is fully supported. |

::: info NOTE
Currently, the WFONT-SUPPORTED function always returns WFONT-FULL-SUPPORT because the W$FONT library routine is fully supported on all platforms
:::
