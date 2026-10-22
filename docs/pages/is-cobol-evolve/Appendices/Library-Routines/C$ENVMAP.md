## C$ENVMAP

The C$ENVMAP library routine saves or restores a subset of environment variables. Information is saved to a stack, the routine can be called recursively.

### Syntax:

```cobol
 CALL "C$ENVMAP" USING opCode
                      [status]
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *opCode* | Any numeric data item or literal | Specifies the operation to be performed. Valid values are:<br>1 	Save variables<br>0 	Restore variables |
| *status* | PIC S99 COMP-1 | Receives the function status:<br>1 	Operation completed successfully.<br>0 	Operation failed. |

### Examples:

**Example -** Backup the environment, then change one variable temporarily, then restore the value from backup

```cobol
set environment "tempdatapath" to "/myapp/data/temp1"
call "c$envmap" using 1 *> save environment
set environment "tempdatapath" to "/myapp/data/temp2"
accept path-to-temp-data from environment "tempdatapath"
*> path-to-temp-data will be /myapp/data/temp2
call "c$envmap" using 0 *> restore environment
accept path-to-temp-data from environment "tempdatapath"
*> path-to-temp-data will be /myapp/data/temp1
```
