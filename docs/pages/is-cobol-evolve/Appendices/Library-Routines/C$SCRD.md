## C$SCRD

The C$SCRD library routine writes the contents of the screen to an alphanumeric data item.

### Syntax:

```cobol
 CALL "C$SCRD" USING screenBufer
                    [bufferSize]
                    [screenLine]
                    [screenPos]
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *screenBuffer* | PIC X(n) | Receives the characters read from the terminal display screen |
| *bufferSize* | PIC 9 COMP-1 | Specifies the number of characters to be read.  If the value is 0 or the parameter is omitted, the actual size of *screenBuffer* is used |
| *screenLine* | PIC 9 COMP-1 | Specifies the line where the cursor is to be placed prior to the screen read.  If omitted, a value of 1 is used. |
| *screenPos* | PIC 9 COMP-1 | Specifies the position where the cursor is to be placed prior to the screen read.  If omitted, a value of 1 is used. |

### Examples:

**Example -** Read 3 characters from the screen at line 2 position 2

```cobol
 move 3 to buffer-size.
 move 2 to w-line.
 move 2 to w-col.
 call "c$scrd" using buffer,
                     buffer-size,
                     w-line, w-col.
```
