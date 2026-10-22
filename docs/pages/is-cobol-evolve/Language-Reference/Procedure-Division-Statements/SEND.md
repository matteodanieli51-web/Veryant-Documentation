## SEND

### General Format

```cobol
SEND { Literal-1   } TO { THREAD Dest-Thread }
     { Data-Item-1 }    { LAST THREAD        }
                        { ALL {THREAD }      }
                              {THREADS}

```

### Syntax rules

1. *Literal-1* is a literal or data item.
2. *Dest-Thread* is a USAGE HANDLE or HANDLE OF THREAD data item.

### General rules

1. The SEND statement sends a message containing the data in Literal-1 to one or more threads using the following logic:

A. THREAD Dest-Thread causes the message to be sent to the thread identified by Dest-Thread. More than one Dest-Thread can be specified.

B. LAST THREAD causes the message to be sent to the last thread

C. ALL THREADS causes the message to be sent to all currently existing threads, except the sending thread.

2. The size of the message is equal to the size of Literal-1.
3. The THREAD Dest-Thread and LAST THREAD options create a queued message for the specified Dest-THREAD.
4. The ALL THREADS option creates a broadcast message which are available by any Thread.

### Examples

Send a message to the parent thread

```cobol
send "cancel main" to last thread
```
