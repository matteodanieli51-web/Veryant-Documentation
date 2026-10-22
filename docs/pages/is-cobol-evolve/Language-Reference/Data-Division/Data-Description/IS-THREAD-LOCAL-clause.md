### IS THREAD-LOCAL clause

The THREAD-LOCAL clause specifies that there is a distinct copy of a data item for each thread entering a program.

#### General format

```cobol
IS THREAD-LOCAL
```

#### Syntax rules

1. The EXTERNAL and GLOBAL clauses can’t be specified along with THREAD-LOCAL.

#### General rules

1. If the THREAD-LOCAL clause is specified, a separate copy of the data item is created and set to its initial state for each new thread of execution that enters the program. The data item is only visible to the thread causing its creation. The data item is destroyed when the creating thread's execution terminates or when a CANCEL statement on the program is executed; otherwise, on subsequent calls to the program within that thread, the data item is in its last used state.
2. If the THREAD-LOCAL clause is not specified, the data item is shared by all threads entering the program.
3. In a single-threaded environment, the clause is ignored and the program behaves exactly as if the THREAD-LOCAL clause had not been specified.
