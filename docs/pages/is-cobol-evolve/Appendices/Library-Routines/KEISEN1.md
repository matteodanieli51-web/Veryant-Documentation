## KEISEN1

The KEISEN1 routine allows you to draw a line of type 1 in a Japanese character-based program.

### Syntax:

```cobol
 CALL "KEISEN1" USING KEISEN
               GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *KEISEN* | Group Item | Structure defined in [iskeisen.def](../Copybooks/iskeisen.def).<br>KEI-CMD:<br>0 - default (clear screen)<br>1 - underline (bottom)<br>2 - over the line (top)<br>3 - batikarurain (left)<br>4 - batikarurain (right)<br>5 - box<br>6 - vertical (left) and underline (below)<br>9 - termination<br>KEI-LINE:<br>opening lines, values range: 1 to 24<br>KEI-COL:<br>start column, values range: 1 to 80<br>KEI-LNG1:<br>wire, if KEI-CMD is 1,2 or 5 (Horizontal), values from 1 to 80 are allowed. if KEI-CMD is 3 or 4 (Vertical), values from 1 to 24 are allowed.<br>KEI-LNG2:<br>wire, if KEI-CMD is 5, values from 1 to 24 are allowed.<br>KEI-COLOR:<br>0 - black<br>1 - blue<br>2 - green<br>3 - blue, green<br>4 - red<br>5 - scarlet<br>6 - brown<br>7 - white<br>KEI-PTN:<br>linetype<br>1 - solid<br>2 - dashed<br>3 - dotted line<br>4 - dashed line<br>5 - two-dot chain |

### Return Code

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| -1 | Operation failed. |
| 0 | Operation successful. |

### Examples:

See [KEISEN](./KEISEN) for examples.
