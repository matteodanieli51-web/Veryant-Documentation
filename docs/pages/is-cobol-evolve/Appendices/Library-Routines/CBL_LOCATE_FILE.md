## CBL_LOCATE_FILE

The CBL_LOCATE_FILE library routine has two uses: it can be used to expand an environment variable in a file specification, where the environment variable contains a list of several paths. It can also determine whether an OPEN INPUT statement using a particular file specification finds the file on disk.

### Syntax:

```cobol
 CALL "CBL_LOCATE_FILE" USING userFileSpec
                              userMode
                              actualFileSpec
                              existFlag
                              pathFlag
                       GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *userFileSpec* | PIC X(n) | Contains the filename specification; this can include an embedded environment variable. |
| *userMode* | PIC X COMP-X | Specifies the action to perform. Possible values are:<br>**0** - Check whether the file exists.<br>If *userFileSpec* includes an embedded environment variable, the file is searched for along each path specified in that variable.<br>If the file is found, *actualFileSpec* on exit contains the file specification with the environment variable expanded to the successful path. Otherwise, *actualFileSpec* on exit contains the file specification with the environment variable expanded to the first path it contained.<br>**1** - If *userFileSpec* includes an environment variable, *actualFileSpec* on exit contains the file specification with the environment variable expanded to the first path it contained. The file is not searched for.<br>**2** - If *userFileSpec* includes an environment variable, *actualFileSpec* on exit contains the file specification with the environment variable expanded to the next path it contained. |
| *actualFileSpec* | Group item | Group item defined as follows:<br>On exit:<br>*buffer-len* is the size of the buffer.<br>*buffer* receives the resolved file specification, as described under *userMode*. If the resolved file specification is larger than the size specified by *buffer-len*, the contents of *buffer* remain unchanged and *returnCode* is set accordingly. |
| *existFlag* | PIC X COMP-X | If *userMode* is 0, on exit this data item contains 3 if the file specified in *userFileSpec* exists or 0 if not.<br>If *userMode* is not 0, on exit this data item contains 0. |
| *pathFlag* | PIC X COMP-X | On exit contains a value greater than 0 if *userFileSpec* contained an embedded environment variable that has been expanded in *actualFileSpec* or 0 if not. |

### Return code:

*returnCode* can be any numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Operation successful. |
| 1 | Environment variable not found. |
| 2 | No next path. |
| 3 | Buffer overflow. |
| 4 | The resulting file name is invalid. |
| 255 | Other error. |

### Examples:

**Example -** Check whether the dyncall.dll library is in the PATH and show its full path on Windows:.

```cobol
       WORKING-STORAGE SECTION.
       77  user-file-spec   pic x(128).
       77  user-mode        pic x comp-x.
       01  actual-file-spec.
           03 buffer-len    pic x(2) comp-x.
           03 buffer        pic x(128).
       77  exist-flag       pic x comp-x.
       77  path-flag        pic x comp-x.
       PROCEDURE DIVISION.
       MAIN.
           move "$PATH/dyncall.dll" to user-file-spec
           move 0 to user-mode
           initialize actual-file-spec
           move 128 to buffer-len
           call "CBL_LOCATE_FILE" using user-file-spec
                                        user-mode
                                        actual-file-spec
                                        exist-flag
                                        path-flag.
           if return-code = 0
              if exist-flag = 3
                 display "Found : " buffer
              else
                 display "Not found"
              end-if
           else
              display "Error " return-code
           end-if.
```
