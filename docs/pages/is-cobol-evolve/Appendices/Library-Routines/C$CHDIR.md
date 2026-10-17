## C$CHDIR

The C$CHDIR library routine sets or retrieves the current working directory for relative file paths.

When the current working directory is different from the initial one, all the file names are treated as absolute paths, even if no file-prefix or paths have been specified. This rule could cause strange behaviors with some interfaces.

This routine changes the working directory only for files opened by the COBOL program.

### Syntax:

```cobol
 CALL "C$CHDIR" USING directoryName
                     [errorNumber]
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *directoryName* | PIC X(n) | When set to spaces, it receives the name of the current working directory.<br>When set to a valid path, it represents the working directory to be set. |
| *errorNumber* | PIC 9(9) COMP-4 | Receives the status of the operation: zero if successful or the operating system's error number if an error has occurred. |

### Examples:

**Example -** Getting the current directory and setting a different current directory

```cobol
working-storage section.
77 dirName pic x(256).
77 errNum  pic 9(9) comp-4.
...
procedure division.
...
get-curr-dir.
  move spaces to dirName
  call "c$chdir" using dirName errNum
  if errNum = 0
     display message "Current directory is : " dirName
  else
     display message "Error " errNum " when getting current dir"
  end-if.

set-curr-dir.
  move "c:\myapp\mydir1" to dirName
  call "c$chdir" using dirName errNum
  if errNum = 0
     display message "Current directory was set to : " dirName.
  else
     display message "Error " errNum " when setting current dir"
  end-if.
```
