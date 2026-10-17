### WPALETTE-SUPPORTED

The WPALETTE-SUPPORTED function checks if the W$PALETTE library routine is supported by the host system.

#### Syntax:

```cobol
 CALL "W$PALETTE" USING WPALETTE-SUPPORTED
                 GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| WPALETTE-SUPPORTED | Constant |  |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| WPAL-NO-SUPPORT | The W$PALETTE library routine is not supported. |
| WPAL-PALETTE-SUPPORTED | The W$PALETTE library routine is supported, except for the [WPALETTE-CHOOSE-COLOR](./W$PALETTE-CHOOSE-COLOR) function. |
| WPAL-FULL-SUPPORT | The W$PALETTE library routine is fully supported. |

NOTE - Currently, the WPALETTE-SUPPORTED function always returns WPAL-FULL-SUPPORT because the W$PALETTE library routine is fully supported on all platforms.
