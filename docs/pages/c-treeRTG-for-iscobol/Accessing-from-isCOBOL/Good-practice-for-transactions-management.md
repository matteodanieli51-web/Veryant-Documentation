## Good practice for transactions management

c-treeRTG supports transactions management via the START TRANSACTION, COMMIT and ROLLBACK statements. These statements don’t trigger a connection to the c-tree server, though.

Although it’s good practice to start a transaction only after the files have been opened, some programmers prefer to start the transaction before opening the files, e.g.:

```cobol
 start transaction.
 open i-o file1.
```

The START TRANSACTION in the above snippet may fail if the connection to c-tree hasn’t been acquired yet. Only the OPEN statement triggers a connection to the c-tree server. The same workaround explained in [Multithread programs](./Multithread-programs) can be applied, for instance:

```cobol
 open input a-file.
 close a-file.
 start transaction.
 open i-o file1.
```

Note, however, that the workaround would not be necessary if you start the transaction after opening the file, e.g:

```cobol
 open i-o file1.
 start transaction.
```
