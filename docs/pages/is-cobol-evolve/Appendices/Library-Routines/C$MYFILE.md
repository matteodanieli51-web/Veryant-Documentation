## C$MYFILE

The C$MYFILE library routine returns the full pathname of the physical class file or the jar library that identifies the program according to Class Path and [iscobol.code_prefix](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) settings.

The information is available only for standard COBOL programs (PROGRAM-ID), not for COBOL classes (CLASS-ID or INTERFACE-ID) and user defined functions (FUNCTION-ID).

If [iscobol.cmyfile.classname_only (boolean)](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) is set to true in the configuration, only the class name (without path) is returned. This kind of setting is mandatory when running inside a servlet container (e.g. Tomcat), otherwise a null result is returned.

### Syntax:

```cobol
 CALL "C$MYFILE" USING fileName
                GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *fileName* | PIC X(n) | Receives the full pathname of the physical class file or jar library |

### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 1 | Operation successful. |
| -1 | Operation failed. |

### Examples:

**Example -** Get the name of the current program being run

```cobol
*> define fileName as pic x(n)
call "c$myfile" using fileName
```
