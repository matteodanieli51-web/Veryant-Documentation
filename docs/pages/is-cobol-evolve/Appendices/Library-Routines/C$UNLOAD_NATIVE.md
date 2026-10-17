## C$UNLOAD_NATIVE

The C$UNLOAD_NATIVE library routine removes a shared library (e.g. a DLL) from memory.

The routine fails on purpose in thin client and JEE environments in order to avoid unloading a library that other connected clients may need.

### Syntax:

```cobol
 CALL "C$UNLOAD_NATIVE" USING libraryName
                       GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *libraryName* | PIC X(n) | Specifies the name of the shared library to unload. |

### Return code:

*returnCode* can be any signed numeric data item. It contains 0 if the unload was successful, else it contains 1.

### Examples:

**Example -** Unload the KERNEL32 library when the provided functions are no more needed

```cobol
call "c$unload_native" using "kernel32.dll"
```
