## W$MOUSE

The W$MOUSE library routine provides a number of functions to manage the mouse.

### Syntax:

```cobol
 CALL "W$MOUSE" USING opCode
                      parameters
               GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *opCode* | Function to be executed. Valid values, defined in [isgui.def](../../Copybooks/isgui.def), are: |  |
|  | [SET-MOUSE-SHAPE](./SET-MOUSE-SHAPE) | Modify the mouse pointer shape. |
|  | [GET-MOUSE-SHAPE](./GET-MOUSE-SHAPE) | Returns the mouse pointer shape. |
|  | [GET-MOUSE-STATUS](./GET-MOUSE-STATUS) | Returns coordinates of the mouse pointer. |
|  | [TEST-MOUSE-PRESENCE](./TEST-MOUSE-PRESENCE) | Detects the presence of a mouse. |
| *parameters* | Parameters depend on the opcode. |  |

### Return Code:

*returnCode* definition and meaning depend on the opcode.

### Examples:

**Example -** Get mouse position

```cobol
*> copy "isgui.def" on working-storage
call "w$mouse" using get-mouse-status
                     mouse-info
display "row: "   at 0270
display mouse-row at 0275
display "col: "   at 0470
display mouse-col at 0475.
```

**Example -** Change mouse shape to wait pointer

```cobol
*> copy "isgui.def" on working-storage
call "w$mouse" using set-mouse-shape, wait-pointer.
```
