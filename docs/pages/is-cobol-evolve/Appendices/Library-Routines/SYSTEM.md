## SYSTEM

This routine allows you to execute an operating system command.

The SYSTEM library routine has been implemented in isCOBOL using Java API. For this reason the implementation differs from the one available in other COBOLs, that usually reflects the system() C library function behavior. The SYSTEM library routine behavior can be configured by setting the [iscobol.system.exec](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) property.

### Syntax:

```cobol
 CALL "SYSTEM" USING commandLine
              GIVING systemStatus
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *commandLine* | PIC X(n) | Specifies the operating system command to be executed. |

### Return code:

*systemStatus* can be any signed numeric data item and receives the system exit status.

### Examples:

**Example -** Execute an external batch file

```cobol
move "c:\myapp\bats\bkp1.bat" to commandLine
call "system" using commandLine
```
