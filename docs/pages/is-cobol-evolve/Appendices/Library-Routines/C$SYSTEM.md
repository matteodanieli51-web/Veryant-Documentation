## C$SYSTEM

The C$SYSTEM library routine executes a program from an isCOBOL application.

On Windows the routine invokes the CreateProcess API function via the jna libraries (installed along with isCOBOL). Calling the Windows API function allows you to support the CSYS-MAXIMIZED, the CSYS-MINIMIZED and the CSYS-HIDDEN flags.

On Linux/Unix platforms, or when jna is not available in the Classpath, the routine uses the exec() method of the java.lang.Runtime class. In this scenario CSYS-MAXIMIZED, CSYS-MINIMIZED and CSYS-HIDDEN are not supported.

### Syntax:

```cobol
 CALL "C$SYSTEM" USING commandLine
                      [flags]
                GIVING systemStatus
```

### Parameters:

|  |  |  |  |
| --- | --- | --- | --- |
| *commandLine* | PIC X(n) | Specifies the operating system command to be executed. |  |
| *flags* | any numeric data item | Specifies a value that affect the behavior of the library routine. The value is calculated by combining one or more of the following values, defined in [iscobol.def](../Copybooks/iscobol.def): |  |
|  |  | CSYS-ASYNC | The command specified in *commandLine* is executed asynchronously. |
|  |  | CSYS-MAXIMIZED | The command window, if any, is shown maximized. It works only on Windows. |
|  |  | CSYS-MINIMIZED | The command window, if any, is shown minimized. It works only on Windows. |
|  |  | CSYS-HIDDEN | The command window, if any, is not shown. It works only on Windows. |
|  |  | CSYS-SHELL | Only on Windows, the system command interpreter *cmd.exe* is used to run the command specified in *commandLine*.<br>Note that on Linux/Unix the command interpreter *sh* is always used, instead, even without this flag. |
|  |  | CSYS-DESKTOP | The command is executed client side in thin client environment. This flag is supported for compatibility. It’s preferable to call the routine using CALL CLIENT in order to obtain the same result. |

### Return code:

*systemStatus* can be any signed numeric data item. It receives the exit status of *commandLine*.

### Examples:

**Example -** Run notepad.exe and wait for it to finish

```cobol
call "c$system" using "notepad.exe"
```
