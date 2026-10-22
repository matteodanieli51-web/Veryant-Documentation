### GET-MOUSE-STATUS

The GET-MOUSE-STATUS returns information about the mouse's location and the state of each of its buttons.

The various row and column fields are set to the location of the mouse within the current window. If the mouse is outside of the current window, then these values are set to zero.

After an ACCEPT statement is executed, all CALLs to GET-MOUSE-STATUS relate to that ACCEPT statement, until another ACCEPT is executed.

#### Syntax:

```cobol
 CALL "W$MOUSE" USING GET-MOUSE-STATUS
                      MOUSE-INFO
```

#### Parameters:

|  |  |  |  |
| --- | --- | --- | --- |
| GET-MOUSE-STATUS | Constant |  |  |
| MOUSE-INFO | Group item | Group item defined in [isgui.def](../../Copybooks/isgui.def) as follows: 01 mouse-info.   03  mouse-row                pic xx comp-x.       88 mouse-off-screen      value zero.      03  mouse-col                pic xx comp-x.   03  lbutton-status           pic 9.       88 lbutton-down          value 1.   03  mbutton-status           pic 9.       88 mbutton-down          value 1.   03  rbutton-status           pic 9.       88 rbutton-down          value 1.   03  mouse-row-ex             pic 9(6)v99 comp-4 sync.   03  mouse-col-ex             pic 9(6)v99 comp-4.   03  mouse-row-pixel          pic 9(8) comp-4.   03  mouse-col-pixel          pic 9(8) comp-4. |  |
