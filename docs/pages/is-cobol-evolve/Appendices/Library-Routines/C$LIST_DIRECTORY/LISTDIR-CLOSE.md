### LISTDIR-CLOSE

The LISTDIR-CLOSE function closes a list of files.

#### Syntax:

```cobol
 CALL "C$LIST_DIRECTORY" USING LISTDIR-CLOSE
                               listdirHandle
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| LISTDIR-CLOSE | Constant |  |
| *listdirHandle* | USAGE HANDLE | Specifies the handle to a file list, returned by the [LISTDIR-OPEN](./LISTDIR-OPEN) function. |
