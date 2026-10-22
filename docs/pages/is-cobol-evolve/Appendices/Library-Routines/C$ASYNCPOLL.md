## C$ASYNCPOLL

The C$ASYNCPOLL library routine tests whether or not a thread still exists.

### Syntax:

```cobol
 CALL "C$ASYNCPOLL" USING threadHandle
                          threadStatus
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *threadHandle* | Usage handle | Must contain a valid thread handle. |
| *threadStatus* | PIC S9 | Represents the status of the thread.<br>0 	The thread still exists.<br>1 	The thread is terminated. |

### Examples:

**Example -** Call a program on a separate thread then check if thread is still running

```cobol
working-storage section.
77 threadHandle usage handle.
77 threadStatus pic s9.
...
procedure division.
...
   call thread "programB" handle in threadHandle
                          using "some data"
...
exit-program.
   call "c$asyncpoll" using threadHandle
                            threadStatus
   if threadStatus = 0 | The thread is still running
      display message "Cannot exit, threads still running"
   else
      goback
   end-if.
```
