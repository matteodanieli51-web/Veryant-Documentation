## W$KEYBUF

The W$KEYBUF library routine allows you to send keycodes to the runtime, simulating the user input as well as recording the user input to a file for playback.

**Note -** calling [WKBUF-ADD-TO-END](./WKBUF-ADD-TO-END) or [WKBUF-ADD-TO-BEGINNING](./WKBUF-ADD-TO-BEGINNING) within control’s Before Procedures is not supported.

### Syntax:

```cobol
 CALL "W$KEYBUF" USING opCode
                       parameters
                GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *opCode* | Function to be executed. Valid values, defined in [iscobol.def](../../Copybooks/iscobol.def). |  |
|  | [WKBUF-ADD-TO-END](./WKBUF-ADD-TO-END) | Add keystrokes to the end of the keyboard buffer |
|  | [WKBUF-ADD-TO-BEGINNING](./WKBUF-ADD-TO-BEGINNING) | Add keystrokes to the beginning of the keyboard buffer |
|  | [WKBUF-CLEAR-BUFFER](./WKBUF-CLEAR-BUFFER) | Clear the keyboard buffer |
|  | [WKBUF-START-RECORDING](./WKBUF-START-RECORDING) | Start recording keystrokes from the user input |
|  | [WKBUF-STOP-RECORDING](./WKBUF-STOP-RECORDING) | Stop recording keystrokes from the user input |
|  | [WKBUF-IS-RECORDING-ACTIVE](./WKBUF-IS-RECORDING-ACTIVE) | Checks whether or not the recording mechanism is on |
|  | [WKBUF-START-RECORDING-FILE](./WKBUF-START-RECORDING-FILE) | Start recording keystrokes from the user input into a new file |
|  | [WKBUF-START-RECORDING-FILE-APPEND](./WKBUF-START-RECORDING-FILE-APPEND) | Start recording keystrokes from the user input into an existing file |
|  | [WKBUF-LOAD-FROM-FILE](./WKBUF-LOAD-FROM-FILE) | Read keystrokes from a file and add them to the keyboard buffer |
| *parameter1* | Parameters depend on the opcode. |  |

### Return Code:

*returnCode* can be any signed numeric data item. The meaning depends on the opcode.

### Examples:

**Example -** Send some keystrokes to the standard input

```cobol
 move "This is an automatic text" to txt-string
 inspect txt-string replacing trailing spaces by low-values
 perform varying i from 1 by 1
           until txt-string(i:1) = low-value
         call "w$keybuf" using 2, txt-string(i:1)
 end-perform.
```
