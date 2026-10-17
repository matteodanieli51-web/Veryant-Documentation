### CCONFIG-RESET

The CCONFIG-RESET function resets the current configuration and optionally replaces it with the properties read from another configuration file. All the active configuration properties are unset. If an alternative configuration file is passed, the configuration properties in that file are loaded.

#### Syntax:

```cobol
 CALL "C$CONFIG" USING CCONFIG-RESET
                      [newConfigurationFile]
                GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| CCONFIG-RESET | Constant |  |
| *newConfigurationFile* | PIC X(n) | Optional. Specifies the name of a configuration file to be used after resetting the current configuration. Relative pathnames are resolved according to the Framework’s working directory. |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Operation successful. |
| -1 | Operation failed as the configuration file couldn’t be opened. |
