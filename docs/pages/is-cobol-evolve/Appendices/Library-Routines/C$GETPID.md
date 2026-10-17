## C$GETPID

The C$GETPID library routine returns the process ID (PID) of the Java virtual machine (JVM) where the program is running.

### Syntax:

```cobol
 CALL "C$GETPID" GIVING  processID
```

### Return code:

*processID* can be any numeric data item. It receives the process ID. Ensure to provide a data item large enough to store the process ID; note that the process ID may have more than five digits in some system architectures.

### Examples:

**Example -** Get the process id of the JVM where the program is running

```cobol
*> define process-id as pic 9(n)

call "c$getpid" giving  process-id
```
