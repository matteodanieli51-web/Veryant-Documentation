### CCONFIG-APPEND

The CCONFIG-APPEND function adds to the current configuration set with the properties read from another configuration file. If the new configuration file includes a property that was already set, the value in the new configuration file is used for that property.

#### Syntax:

```cobol
 CALL "C$CONFIG" USING CCONFIG-APPEND
                       newConfigurationFile
                GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| CCONFIG-APPEND | Constant |  |
| *newConfigurationFile* | PIC X(n) | Specifies the name of a configuration file whose properties will be appended to the current configuration. Relative pathnames are resolved according to the Framework’s working directory. |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Operation successful. |
| -1 | Operation failed as the configuration file couldn’t be opened. |
