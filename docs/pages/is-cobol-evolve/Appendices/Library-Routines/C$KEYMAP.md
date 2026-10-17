## C$KEYMAP

The C$KEYMAP library routine saves or restores the keyboard configuration. Information is saved to a stack, the routine can be called recursively.

### Syntax:

```cobol
 CALL "C$KEYMAP" USING opCode
                      [status]
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *opCode* | Any numeric data item or literal | Specifies the operation to be performed. Valid values are:<br>1 	Save configuration<br>0 	Restore configuration |
| *status* | PIC S99 COMP-1 | Optional. It returns the function status:<br>1 	Operation completed successfully.<br>0 	Operation failed. |

### Examples:

**Example -** Backup the keyboard configuration, then change the F1 exception configuration, then restore the value from backup

```cobol
set environment "key.f1" to "exception=1"
*> from here and on when you press F1 it will return exception 1
...
call "c$keymap" using 1 *> save keyboard configuration
set environment "key.f1" to "exception=101"
*> from here and on when you press F1 it will return exception 101
...
call "c$keymap" using 0 *> restore keyboard configuration
*> from here and on when you press F1 it will return exception 1
...
```
