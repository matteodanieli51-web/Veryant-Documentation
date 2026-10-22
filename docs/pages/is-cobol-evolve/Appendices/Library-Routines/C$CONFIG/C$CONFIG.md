## C$CONFIG

The C$CONFIG library routine allows you to reset or improve the current configuration set.

### Syntax:

```cobol
 CALL "C$CONFIG" USING opCode
                       parameters
                GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *opCode* | It is the function to be executed. Valid values, defined in [iscobol.def](../../Copybooks/iscobol.def), are: |  |
|  | [CCONFIG-RESET](./CCONFIG-RESET) | Resets the current configuration set |
|  | [CCONFIG-APPEND](./CCONFIG-APPEND) | Appends a new configuration file to the current configuration set |
| *parameters* | Parameters depend on the opcode. |  |

### Return code:

*returnCode* definition and meaning depend on the opcode.

### Examples:

**Example -** Append the configuration file */opt/cfg/new.properties* to the current configuration:

```cobol
call "c$config" using cconfig-append "/opt/cfg/new.properties"
```
