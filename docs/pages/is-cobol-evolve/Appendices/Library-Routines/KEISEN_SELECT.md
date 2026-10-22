## KEISEN_SELECT

The KEISEN_SELECT routine allows you to specify the method for the next call to [KEISEN](./KEISEN). It updates the value of the [iscobol.keisen.method](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) configuration property.

### Syntax:

```cobol
 CALL "KEISEN_SELECT" USING KEI-PARAM
                     GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *KEI-PARAM* | PIC 9 (1) COMP-X | This item, defined in [iskeisen.def](../Copybooks/iskeisen.def), can be set either to 1 or 2. |

### Return Code

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| -1 | Operation failed. |
| 0 | Operation successful. |

### Examples:

See [KEISEN](./KEISEN) for examples.
