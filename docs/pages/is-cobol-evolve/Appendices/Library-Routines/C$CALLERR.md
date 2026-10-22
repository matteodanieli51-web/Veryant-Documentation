## C$CALLERR

The C$CALLERR routine may be called to retrieve the reason why the last CALL statement failed. For accurate information, it must be called before any other CALL statement is executed.

### Syntax:

```cobol
 CALL "C$CALLERR" USING  errorCode
                        [errorMessage]
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *errorCode* | PIC X(2) | It's the error code, it receives the value "01". |
| *errorMessage* | PIC X(n) | Optional, It receives a descriptive message about the error encountered. |

### Examples:

**Example -** Show the call error after a failed call

```cobol
working-storage section.
77 err-code pic x(2).
77 err-text pic x(256).
...
procedure division.
...
 call "program-not-exist"
      on exception call "c$callerr" using err-code, err-text.
```
