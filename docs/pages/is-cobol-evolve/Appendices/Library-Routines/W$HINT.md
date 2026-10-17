## W$HINT

The W$HINT library routine allows you to show hints programmatically.

### Syntax:

```cobol
 CALL "W$HINT" USING hintText
                     x
                     y
                    [timeout]
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *hintText* | PIC X(n) | Specifies the text to be shown in the hint box. It can include HTML tags for text formatting. |
| *x* | any numeric data item | Specifies the x coordinate where the hint box must be shown. The value is expressed in cells. |
| *y* | any numeric data item | Specifies the y coordinate where the hint box must be shown. The value is expressed in cells. |
| *timeout* | any numeric data item | Specifies how many hundreds of seconds the hint box must stay on video. If passed, this parameter overrides the [iscobol.gui.hints_on](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) and [iscobol.gui.hints_off](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) settings.<br>The user can close a hint before the timeout expires by pressing one of these keys: |

### Examples:

**Example -** Show a notification hint at line 2 column 2 and make it stay on video for 2 seconds

```cobol
procedure division.
main.
  call "w$hint" using "Download completed", 2, 2, 200.
```
