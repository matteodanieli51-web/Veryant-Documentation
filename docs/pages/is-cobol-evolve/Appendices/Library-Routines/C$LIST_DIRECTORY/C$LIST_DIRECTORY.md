## C$LIST_DIRECTORY

The C$LIST_DIRECTORY library routine provides a number of functions to retrieve the content of a directory.

### Syntax:

```cobol
 CALL "C$LIST_DIRECTORY" USING opCode
                               parameters
                        GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *opCode* | It is the function to be executed. Valid values, defined in [iscobol.def](../../Copybooks/iscobol.def), are: |  |
|  | [LISTDIR-OPEN](./LISTDIR-OPEN) | Open a directory to retrieve its content. |
|  | [LISTDIR-NEXT](./LISTDIR-NEXT) | Retrieve the next file in the directory |
|  | [LISTDIR-CLOSE](./LISTDIR-CLOSE) | Close a previously open directory. |
| *parameters* | Parameters depend on the opcode. |  |

### Return code:

*returnCode* definition and meaning depend on the opcode.

### Examples:

**Example -** The following program displays on the system output the list of all files and directories in C:\

```cobol
       PROGRAM-ID. dir.
       WORKING-STORAGE SECTION.
       copy "iscobol.def".
       01  fileEntry.
           05 fileType             pic x(6).
           05 fileName             pic x(74).
       77  listdirHandle           usage handle.
       PROCEDURE DIVISION.
       mainLogic.
           CALL "C$LIST-DIRECTORY" using  LISTDIR-OPEN, "C:\", "*"
                                   giving listdirHandle
           if listdirHandle not = 0
              perform until exit
                 CALL "C$LIST-DIRECTORY" using LISTDIR-NEXT
                                               listdirHandle
                                               fileName
                                               listdir-file-information
                 if fileName = spaces
                    exit perform
                 end-if
                 if listdir-file-type = "D"
                    move "<DIR>" to fileType
                 else
                    move spaces to fileType
                 end-if
                 display fileEntry upon sysout
              end-perform
              CALL "C$LIST-DIRECTORY" using LISTDIR-CLOSE, listdirHandle
           end-if
           goback
           .
```
