### WINPRINT-SET-DATA-COLUMNS

The WINPRINT-SET-DATA-COLUMNS function defines the way the buffer is split into columns. When a page is divided into columns (see the [WINPRINT-SET-PAGE-COLUMN](./WINPRINT-SET-PAGE-COLUMN) function) the program can use a single [WRITE](../../../Language-Reference/Procedure-Division-Statements/WRITE) statement to print the content of all columns at a time. You can call this function specifying all character positions or call it repeatedly specifying one character position at a time. Each time this function is called, it adds the values passed to the list that will be used to split information when the [WRITE](../../../Language-Reference/Procedure-Division-Statements/WRITE) statement is executed. To clear that list, use the [WINPRINT-CLEAR-DATA-COLUMNS](./WINPRINT-CLEAR-DATA-COLUMNS) function.

#### Syntax:

```cobol
 CALL "WIN$PRINTER" USING WINPRINT-SET-DATA-COLUMNS
                         { charPosition } ...
                   GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| WINPRINT-SET-DATA-COLUMNS | Constant |  |
| charPosition | any numeric data item or numeric literal | Contains the starting position of a character in the print buffer. If the print buffer is a non-national group item, the most convenient way is to use the [RECORD-POSITION](../../../Language-Reference/Data-Division/Data-Names/RECORD-POSITION) syntax, instead of computing values manually. |

#### Return code:

returnCode can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 1 | Operation successful. |
| WPRTERR-UNSUPPORTED | The WIN$PRINTER library routine is not supported. |
| WPRTERR-BAD-ARG | The WIN$PRINTER library routine has been called with bad parameters. |
