### LISTDIR-OPEN

The LISTDIR-OPEN function searches a directory for a file or subdirectory name that matches a specified name.

#### Syntax:

```cobol
 CALL "C$LIST_DIRECTORY" USING LISTDIR-OPEN
                               directoryName
                               pattern
                        GIVING listdirHandle
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| LISTDIR-OPEN | Constant |  |
| *directoryName* | PIC X(n) | Specifies the name of an existing the directory. |
| *pattern* | PIC X(n) | Specifies a value representing the name to be matched. It can contain wildcard characters, for example, an asterisk (\*) or a question mark (?). |

#### Return code:

*listdirHandle* must be an USAGE HANDLE data item. It receives the handle of the list of matching files and will be used with the [LISTDIR-NEXT](./LISTDIR-NEXT) and [LISTDIR-CLOSE](./LISTDIR-CLOSE) functions. It receives 0 if the directory doesn’t exist.
