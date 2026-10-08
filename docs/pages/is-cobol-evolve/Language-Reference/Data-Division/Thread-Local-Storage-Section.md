## THREAD-LOCAL-STORAGE Section

The Thread-Local-Storage Section describes data which is unique to each thread, and is persistent across calls.

### General format

```cobol
{Data-Description} ...
```

### Syntax rules

1. The EXTERNAL and GLOBAL clauses in Data-Description are not permitted.

### General rules

1. A separate copy of each data item in thread-local storage is created and set to its initial state for each new thread of execution that enters the program. The data item is only visible to the thread causing its execution. The data item is destroyed when the creating thread's execution terminates, or when a CANCEL statement on the program is executed; otherwise, on subsequent calls to the program within that thread, the data item is in its last used state.
2. In a single-threaded environment, thread-local storage behaves as working storage.
