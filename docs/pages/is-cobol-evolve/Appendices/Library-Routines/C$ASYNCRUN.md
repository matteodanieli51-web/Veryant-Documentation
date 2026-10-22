## C$ASYNCRUN

The C$ASYNCRUN library routine creates a thread, passing up to 14 parameters to it.

The thread is a COBOL program that can reside on the local host or on a remote machine (see [iscobol.remote.code_prefix](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties)).

### Syntax:

```cobol
 CALL "C$ASYNCRUN" USING threadHandle
                         cobolProgram
                        [parameter(s)]
                  GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *threadHandle* | Usage handle | Contains the handle of the thread that has been created. You can use this handle with the [C$ASYNCPOLL](./C$ASYNCPOLL) routine to test whether the thread still exists or if it's terminated. |
| *cobolProgram* | PIC X(n) | The name of the program to be called asynchronously. |
| *parameter(s)* | Any cobol type | Optional. You can pass up to 14 parameters to the thread. |

### Examples:

**Example -** Call ProgramB on a separate thread

```cobol
working-storage section.
77 threadHandle usage handle.
...
procedure division.
...
   call "c$asyncrun" using threadHandle
                           "programB"
                           "some data".
```
