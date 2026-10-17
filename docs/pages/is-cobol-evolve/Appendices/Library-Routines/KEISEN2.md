## KEISEN2

The KEISEN2 routine allows you to draw a line of type 2 in a Japanese character-based program.

### Syntax:

```cobol
 CALL "KEISEN2" USING KEISEN2
               GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *KEISEN2* | Group Item | Structure defined in [iskeisen.def](../Copybooks/iskeisen.def).<br>KEI2-CMD:<br>0 - default<br>1 - clear screen<br>2 - Line<br>3 - Boxes<br>9 - Termination<br>KEI2-START-LINE:<br>opening lines, values range: 1 to 24<br>KEI2-START-COL:<br>start column, values range: 1 to 80<br>KEI2-END-LINE:<br>line termination, values range: 1 to 24<br>KEI2-END-COL<br>column end, values range: 1 to 80<br>KEI2-PRN:<br>linetype<br>1 - solid<br>2 - dashed<br>3 - dotted line<br>4 - dashed line<br>5 - two-dot chain<br>KEI2-COLOR:<br>0 - black<br>1 - blue<br>2 - green<br>3 - blue, green<br>4 - red<br>5 - scarlet<br>6 - brown<br>7 - white |

### Return Code

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| -1 | Operation failed. |
| 0 | Operation successful. |

### Examples:

See [KEISEN](./KEISEN) for examples.
