## A$GETTHREAD

The A$GETTHREAD routine returns the client's thread ID.

### Syntax:

```cobol
 CALL "A$GETTHREAD" GIVING threadId
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *threadId* | PIC 9(n) | Returns the thread id.<br>The returned value is between 1 and 2147483647. |

### Examples:

**Example -** Return the current client thead Id when running in thin-client mode

```cobol
*> threadID is an output parameter, defined as pic 9(n)

call "a$getthread" giving threadID
```
