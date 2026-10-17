## C$SCWR

The C$SWR library routine allows you to quickly display a large amount of information containing multiple display attributes.

### Syntax:

```cobol
 CALL "C$SCWR" USING displayDesc
                     textCharacters
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *displayDesc* | Group item | Group data item defined as follows:<br>DISPLAY-VERSION must be set to a value of 0.<br>DISPLAY-UNIT is the unit number of the terminal to which the display is directed. This value must be set to 0.<br>DISPLAY-LINE is the one-relative line number in the current window where the text is to be displayed.  If set to a value of 0, the display begins on the current line.<br>DISPLAY-POSITION is the one-relative column number in the current window where the text is to be displayed.  If set to a value of 0, the display begins at the current column.<br>DISPLAY-LENGTH is the number of characters of text to display.  If set to a value of 0 or omitted, the actual length of text-characters is used.<br>DISPLAY-EXCEPTION-CODE is set to a value of 0 if this function succeeds.  Otherwise, one of the below exception codes is returned.<br>DISPLAY-EXCEPTION-VALUE is set to a value of 0 if this function succeeds.  Otherwise, one of the below exception codes is returned.<br>Exception codes:<br>1: Invalid DISPLAY-VERSION. This data item must be set to a value of 0.<br>2: Invalid or missing parameters.<br>3: DISPLAY-LINE is greater than the number of lines on the window or screen.<br>4: DISPLAY-POSITION is greater than the number of columns on the screen. |
| *textCharacters* | PIC X(n) | Specifies the characters to be displayed. |

### Examples:

**Example -** Display “hello” at line 2 position 2

```cobol
 move 2 to display-line.
 move 2 to display-position.
 move "hello" to text-buffer.
 call "c$scwr" using display-description,
                     text-buffer.
```
