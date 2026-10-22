### GET-MOUSE-SHAPE

The GET-MOUSE-SHAPE returns the shape of the mouse pointer.

#### Syntax:

```cobol
 CALL "W$MOUSE" USING GET-MOUSE-SHAPE
               GIVING returnCode
```

#### Parameters:

|  |  |  |  |
| --- | --- | --- | --- |
| GET-MOUSE-SHAPE | Constant |  |  |

#### Return Code:

*returnCode* can be any signed numeric data item and returns the mouse shape. Valid values, defined in [isgui.def](../../Copybooks/isgui.def), are:

|  |  |
| --- | --- |
| 1 | ARROW-POINTER |
| 2 | BAR-POINTER |
| 3 | CROSS-POINTER |
| 4 | WAIT-POINTER |
| 5 | HELP-POINTER |
| 9 | CUSTOM-POINTER |
