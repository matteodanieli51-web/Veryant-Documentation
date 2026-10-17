## C$UNSET

The C$UNSET library routine removes a variable from the environment.

It can be used to remove any configuration setting except for keystrokes. Keystrokes cannot be initialized to their defaults by calling C$UNSET, they must be reset using a Format 6 SET statement, setting them to the proper value as described in [Default Keyboard Configuration](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties).

### Syntax:

```cobol
 CALL "C$UNSET" USING envVarName
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *envVarName* | PIC X(n) | Specifies the environment variable to be removed. |

### Examples:

**Example -** Remove custom property my.report.path

```cobol
call "c$unset" using "my.report.path"
```
