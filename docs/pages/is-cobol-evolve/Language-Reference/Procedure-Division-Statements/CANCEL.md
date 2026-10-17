## CANCEL

### Format 1

```cobol
CANCEL [CLIENT] { {Program-Name} } ...
```

### Format 2

```cobol
CANCEL [CLIENT] ALL
```

### Syntax rules

1. Program-Name shall be defined as an alphanumeric or national data item.

### General rules

1. The program-name is used by the runtime system to locate the program.
2. The program to be canceled shall not be in the active state or contain a program in the active state. If a program in the active state is explicitly or implicitly referenced in a CANCEL statement, the referenced program is not canceled.
3. No action is taken when a CANCEL statement is executed referencing a program that has not been called in this run unit or has been called and is at present canceled. Control is transferred to the next executable statement following the explicit CANCEL statement.
4. The contents of data items in external data records described by a program are not changed when that program is canceled.
5. The CANCEL statement has no effect on a program with the RESIDENT clause specified in its PROGRAM-ID paragraph.
6. The ALL clause affects all programs in the non-active state as described in rule 2. It also causes the disconnection from the isCOBOL Application Server if a CALL to a remote object was performed before.
7. The CLIENT clause affects the client called program (with CALL CLIENT statement) when running in ApplicationServer mode.
8. The CANCEL statement doesn’t have any effect on programs called through CALL THREAD. Threads are automatically cancelled by the Framework when they terminate.
9. The CANCEL statement doesn’t have any effect on native libraries (e.g. DLLs). Call the [C$UNLOAD_NATIVE](\) library routine in order to cancel a native library.
10. You can install a hook class for the CANCEL statement via the [iscobol.call_cancel.hook](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#general-runtime-configuration) configuration property.

### Examples

Format 1- Cancel a program that is not in active state.

```cobol
call "program1"
cancel "program1"
```

Format 1 - Cancel a program executed client side when running on thin-client.

```cobol
call client "program1"
cancel client "program1"
```

Format 2 - Cancel all programs that are not in active state.

```cobol
call "program1"
call "program2"
call "program3"
cancel all
```

Format 2 - Cancel all client side executed programs, when running on thin-client that are not in active state.

```cobol
call client "program1"
call client "program2"
call client "program3"
cancel client all
```
