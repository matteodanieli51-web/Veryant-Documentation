## CBL_JOIN_FILENAME

The CBL_JOIN_FILENAME library routine forms a filename by joining together its component parts; that is, the pathname, basename and extension.

### Syntax:

```cobol
 CALL "CBL_JOIN_FILENAME" USING cbltSplitjoinBuf
                                joinBuffer
                                pathBuffer
                                basenameBuffer
                                extensionBuffer
                         GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *cbltSplitjoinBuf* | Group Item | Group item defined as follows:<br>On entry:<br>*param-length* is the length of the structure in bytes. It should be set to 24.<br>*splitjoin-flg1’s bit 1* says that the strings are null-terminated if set to 1, while they are space-terminated if set to 0.<br>*splitjoin-flg1’s bit 2* says that the filename is folded to upper case if set to 1, while the original case is preserved if set to 0.<br>*split-buf-len* specifies the length in bytes of *joinBuffer*.<br>*splitjoin-flg2’s bit 2* is set if there is a significant space in the filename.<br>*splitjoin-flg2’s bit 1* is set if there is a wildcard in the path.<br>*splitjoin-flg2’s bit 0* is set if there is a wildcard in basename or extension.<br>*device-offset* specifies the start of pathname in *joinBuffer*, from one.<br>*device-length* specifies the length of the pathname.<br>*basename-offset* specifies the start of basename in *joinBuffer*, from one.<br>*basename-length* specifies the length of the basename.<br>*extension-offset* specifies the start of extension in *joinBuffer*, from one.<br>*extension-length* specifies the length of the extension.<br>*first-component-length* specifies the number of characters up to and including the first backslash or slash or colon in *joinBuffer*.<br>On exit:<br>*total-length* specifies the total number of characters in *joinBuffer*. |
| *joinBuffer* | PIC X(n) | Specifies the area to store the joined file name. |
| *pathBuffer* | PIC X(n) | Specifies the pathname. |
| *basenameBuffer* | PIC X(n) | Specifies the basename. |
| *extensionBufffer* | PIC X(n) | Specifies the extension. |

### Return code:

*returnCode* can be any numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Operation successful. |
| 1 | Buffer overflow. |
| 4 | File name is invalid. |

### Examples:

**Example -** Build the file name “C:\Temp\myfile.txt”.

```cobol
  WORKING-STORAGE SECTION.
  77  fi-base-name            pic x(30) value "myfile".
  77  fi-extension            pic x(10) value "txt".
  77  fi-path                 pic x(256) value "C:\Temp".
  01  join-buffer             pic x(256).

   PROCEDURE DIVISION.
   MAIN.
        move 1 to device-offset
                  basename-offset
                  extension-offset

        move length of fi-path      to device-length
        move length of fi-base-name to basename-length
        move length of fi-extension to extension-length
        move length of join-buffer  to join-buf-len

        move 0 to split-join-flag1
        move 24 to param-length

        call "CBL_JOIN_FILENAME" using cblt-splitjoin-buf
                                       join-buffer
                                       fi-path
                                       fi-base-name
                                       fi-extension
```
