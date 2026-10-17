## CBL_SPLIT_FILENAME

The CBL_SPLIT_FILENAME library routine splits a filename into its component parts; that is, the pathname, basename and extension.

### Syntax:

```cobol
 CALL "CBL_SPLIT_FILENAME" USING cbltSplitjoinBuf
                                 splitBuffer
                          GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *cbltSplitjoinBuf* | Group Item | Group item defined as follows:<br>On entry:<br>*param-length* is the length of the structure in bytes. It should be set to 24. The value 0 is treated as if it were the structure dimension.<br>*splitjoin-flag1*’s bit 1 says that the strings are null-terminated if set to 1, while they are space-terminated if set to 0.<br>*splitjoin-flag1*’s bit 2 says that the filename is folded to upper case if set to 1, while the original case is preserved if set to 0.<br>*split-buf-len* specifies the length in bytes of splitBuffer.<br>On exit:<br>*splitjoin-flag2*’s bit 2 is set if there is a significant space in the filename.<br>*splitjoin-flag2*’s bit 1 is set if there is a wildcard in the path.<br>*splitjoin-flag2’*s bit 0 is set if there is a wildcard in basename or extension.<br>device-offset returns the start of pathname in splitBuffer, from one.<br>device-length returns the length of the pathname.<br>*basename-offset* returns the start of basename in splitBuffer, from one.<br>*basename-length* returns the length of the basename.<br>*extension-offset* returns the start of extension in splitBuffer, from one.<br>*extension-length* returns the length of the extension.<br>*total-length* returns the total number of characters in splitBuffer.<br>*first-component-length* returns the number of characters up to and including the first backslash or slash or colon in splitBuffer. |
| *splitBuffer* | PIC X(n) | Specifies the string to split. |

### Return code:

*returnCode* can be any numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Operation successful. |
| 4 | Invalid filename. |

### Examples:

**Example -** Get the extension in a full pathname

```cobol
move "C:\temp\print_01.pdf" to the-path. |the-path is a pic x(n) data-item
call "CBL_SPLIT_FILENAME" using cblt-splitjoin-buf, the-path.
display the-path(extension-offset:extension-length)|it will display ‘pdf’
```
