## C$SBAR

The C$SBAR library routine displays a status bar made by only 1 panel in which the program can display text. The status bar doesn't use the last line of the window's client area, but it's appended to the bottom of the window increasing the window's height.

**Note -** This routine is supported for compatibility. If you’re creating new programs with isCOBOL, you should consider using the [STATUS-BAR](../../User-Interface/Controls-Reference/STATUS-BAR/STATUS-BAR) control instead.

### Syntax:

```cobol
 CALL "C$SBAR" [ USING statusText [, exitCode] ]
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *statusText* | Any alphanumeric data item or literal | Specifies the text to be displayed in the status bar. |
| *exitCode* | PIC 9(n) BINARY | Optional parameter that returns the status. It will receive zero for success and non-zero for failure. |

Calling this routine with no arguments turns off the status bar.

### Examples:

**Example -** Display the message "Ready" in the status bar

```cobol
 call "c$sbar" using "Ready".
```
