## C$LOCKPID

The C$LOCKPID routine returns the c-tree task ID that is locking a record or a file.

The routine requires a c-tree version 10.4.0.39701 or greater and works only with the "ctreej" and "fscsc" file handlers. The "ctree" and "ctree2" file handlers don’t support this routine.

Calling the routine after a “file locked” error is supported only with “ctreej” file handler using c-tree version 11.2.22002 or greater. Using a previous c-tree version or using “fscsc” file handler, the routine can be called only after a “record locked” error.

### Syntax:

```cobol
 CALL "C$LOCKPID" GIVING taskID
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *taskID* | PIC 9(n) | Receives the c-tree task ID. You can obtain information about the client associated to this ID by using c-tree administration utilities like [c-treeACEMonitor](../../../c-treeRTG-for-iscobol/c-tree-Utilities/Graphical-utilities/NET-utilities/c-treeACEMonitor). |

### Examples:

**Example -** Displays the ID of the client that is locking the next record having *iscobol.file.errors_ok=1*:

```cobol
read file1 next.
if file-status = "51"
   call "C$LOCKPID" giving taskID
   display message "Record locked by " taskID
end-if.
```
