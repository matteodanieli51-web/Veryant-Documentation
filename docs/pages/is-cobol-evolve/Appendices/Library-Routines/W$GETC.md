## W$GETC

The W$GETC library routine returns the next keystroke from the user. The keystroke is not echoed.

### Syntax:

```cobol
 CALL "W$GETC" USING keystroke
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *keystroke* | PIC X(2) | Receives the keystroke.<br>If the character is a single 8-bit value, it will be preceded by a space. For example, if the user types an A, the return value will be " A".<br>If the key typed is a special character such as a function key or Enter, W$GETC returns the two-character keycode found in the [Acucobol-GT key codes](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties). |

### Examples:

**Example -** Accept a password without doing any echo on video

```cobol
 working-storage section.
 77 pwd pic x(32).
 77 i   pic 9(2).
 77 k   pic x(2).

 procedure division.
 ...
    perform varying i from 1 by 1 until i > 32
       call "w$getc" using k
       if k = "^M" |Enter pressed
          exit perform
       else
          if k(1:1) = space |8-bit character inputted
             move k(2:1) to pwd(i:1)
          end-if
       end-if
    end-perform.
    if pwd = "secret"
    |manage the inputted password here
    ...
```
