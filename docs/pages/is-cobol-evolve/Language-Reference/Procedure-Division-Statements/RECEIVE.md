## RECEIVE

### General Format

```cobol
RECEIVE Dest-Item FROM { THREAD Thread-1    } 
                       { LAST THREAD        } 
                       { ANY { THREAD  }    }
                             { THREADS }
 
  [Remaining-Phrase]
 
  [ ON EXCEPTION Imperative-Statement-1 ] 
 
  [ NOT ON EXCEPTION Imperative-Statement-2 ] 
 
[END-RECEIVE]
```

Remaining-Phrases are optional and can appear in any order.

```cobol
   BEFORE TIME Timeout  
   WITH NO WAIT         
 
  THREAD IN Thread-2 
 
  SIZE IN Size-Item 
 
  STATUS IN Status-Item
```

### Syntax rules

1. *Dest-Item* is any data item.
2. *Thread-1* and *Thread-2* are usage HANDLE or HANDLE OF THREAD data items.
3. *Timeout* is a numeric literal or data item.
4. *Size-Item* and, *Status-Item* are numeric data items.
5. *Size-Item*, *Status-Item* and *Thread-2* cannot be indexed or reference modified.
6. *Status-Item* is a two-character group item defined as, PIC X(02), or PIC 9(02).
7. *Imperative-Statement-1* and *Imperative-Statement-2* are any imperative statements.

### General rules

1. The RECEIVE statement returns the next available message into dest-item. Messages are RECEIVEd as follows:

A. FROM THREAD thread-1 specifies that only messages from the thread identified by thread-1 are allowed.

B. FROM LAST THREAD specifies that only messages from the last thread are allowed

C. FROM ANY THREAD specifies that all messages are allowed.

2. Messages are received in the order sent.
3. When BEFORE TIME is specified, the RECEIVE statement will time out after the specified number of hundredths of seconds. If this happens, the destination item (dest-item) is not updated. NO WAIT is equivalent to BEFORE TIME 0. If timeout is zero, then the RECEIVE statement times out immediately if a message is not available.
4. A timeout of zero is mandatory when receiving messages FROM ANY THREAD; other timeouts will not clean compile.
5. The thread ID of the sending thread is put into thread-2 by RECEIVE.
6. The size of the message sent is placed in size-item.
7. The status of the RECEIVE statement is placed in status-item as defined below:

| | |
| --- | --- |
| "00" | Success - message received |
| "04" | Success - message received, but it was truncated |
| "10" | Exception - sending thread does not exist or terminated |
| "99" | Exception - timed out |
| | |

8. If the RECEIVE statement is successful, statement-2 executes otherwise, statement-1 executes

### Examples

Receive a message from a parent thread

```cobol
receive msg-string from last thread
   before time 200
   not on exception
      if msg-string = "cancel thread"
         goback
      end-if
end-receive
```
