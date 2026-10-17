### LISTDIR-NEXT

The LISTDIR-NEXT function retrieves the next file in a list.

#### Syntax:

```cobol
 CALL "C$LIST_DIRECTORY" USING LISTDIR-NEXT
                               listdirHandle
                               fileName
                              [LISTDIR-FILE-INFORMATION]
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| LISTDIR-NEXT | Constant |  |
| *listdirHandle* | USAGE HANDLE | Specifies the handle to a file list, returned by the [LISTDIR-OPEN](./LISTDIR-OPEN) function |
| *fileName* | PIC X(n) | Receives the name of the next file in the list. When no more files are available, fileName is set to spaces. |
| *LISTDIR-FILE-INFORMATION* | Group Item | Receives the file information. This group item, defined in [iscobol.def](../../Copybooks/iscobol.def), has the following structure: |
|  |  | *listdir-file-type*<br>File type. It can be one of the following values:<br>"D" 	Directory<br>"F" 	Standard file<br>"U" 	Unknown<br>*listdir-file-creation-time*<br>This information is not returned. Fields are reserved for future use.<br>*listdir-file-last-access-time*<br>This information is not returned. Fields are reserved for future use.<br>*listdir-file-last-modification-time*<br>File last modification time<br>*listdir-file-size*<br>File size |
