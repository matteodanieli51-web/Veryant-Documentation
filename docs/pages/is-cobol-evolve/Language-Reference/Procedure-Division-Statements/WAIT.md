## WAIT

### General Format

```cobol
WAIT FOR { THREAD Thread-Id } 
         { LAST THREAD      } 
 
  [Remaining-Phrase]
 
  [ ON EXCEPTION Imperative-Statement-1 ] 
 
  [ NOT ON EXCEPTION Imperative-Statement-2 ] 
 
  [END-WAIT]
```

*Remaining-Phrases* are optional and can appear in any order.

```cobol
  { BEFORE TIME Timeout }
  { TEST ONLY           }
 
  THREAD IN Thread-2
 
  SIZE IN Size-Item
 
  STATUS IN status-item
```

### Syntax rules

1. Thread-Id and Thread-2 are usage HANDLE or HANDLE OF THREAD data items.
2. Size-Item and, Status-Item are numeric data items.
3. Size-Item, Status-Item and Thread-2 cannot be indexed or reference modified.
4. Status-Item is a two-character group item defined as, PIC X(02), or PIC 9(02).

### General rules

1. The WAIT statement waits for a thread to terminate or send a message. The thread used to wait is one of the following:

A. FOR THREAD thread-ID specifies the thread identified by thread-ID.

B. FOR LAST THREAD specifies the last thread.

2. If a message is available when the WAIT statement executes, then WAIT statement finishes immediately.
3. When BEFORE TIME is specified, the WAIT statement will time-out after the specified hundredths of seconds. If this happens, the destination item (dest-item) is not updated. If timeout is zero, then the WAIT statement times out immediately if a message is not available. Specifying TEST ONLY is equivalent to specifying a timeout value of zero.
4. The thread ID of the sending or terminating thread is put into thread-2 by WAIT.
5. The size of the message sent is placed in size-item.
6. The status of the WAIT statement is placed in status-item as defined below:

| | |
| --- | --- |
| "00" | Success - message received |
| "10" | Exception - thread does not exist or terminated |
| "99" | Exception - timed-out |
| | |

7. There is no control in Size Item and Status Item, the result is setted in according with [MOVE](./MOVE) statment.
8. If the WAIT statement is successful, statement-2 executes otherwise, statement-1 executes.

### Examples

Wait for a thread to finish, in this sample the other thread has its handle in loop-thread-handle

```cobol
wait for thread loop-thread-handle
     on exception
       display message " Loop thread finished, finishing this thread now"
       goback
end-wait
```
