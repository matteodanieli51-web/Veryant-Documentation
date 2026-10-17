## C$KEYSTROKE

The C$KEYSTROKE routine allows keystroke configuration using the Acucobol-GT syntax.

### Syntax:

```cobol
 CALL "C$KEYSTROKE" USING keySetting
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *keySetting* | PIC X(n) | is the KEYSTROKE setting you would use for the Acucobol-GT KEYSTROKE environment variable.<br>Example:<br>“EDIT=Next TERMINATE=13 ^M”<br>The last item in this setting is the keycode.  See [Acucobol-GT key codes](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) for the list of supported key codes.<br>The following EDIT values are supported: Backspace, Delete, Down, Erase-All, Erase-Field, Erase-To-End, First, Last, Next, Page-Down, Page-Up, Previous, Up. |

This routine is implemented for compatibility with Acucobol-GT. isCOBOL offers a native syntax to set keystrokes. See [Keyboard Configuration](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) for details.

### Examples:

**Example -** Set the exception of Control-A to 1 und F1 to 101 using ACU keystroke syntax

```cobol
call "c$keystroke" using "EXCEPTION=1 ^A"
call "c$keystroke" using "EXCEPTION=101 k1"
```
