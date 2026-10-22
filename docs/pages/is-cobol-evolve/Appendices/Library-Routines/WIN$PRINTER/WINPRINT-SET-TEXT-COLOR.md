### WINPRINT-SET-TEXT-COLOR

The WINPRINT-SET-TEXT-COLOR function sets the text foreground color.

#### Syntax:

```cobol
 CALL "WIN$PRINTER" USING WINPRINT-SET-TEXT-COLOR
                          WINPRINT-DATA
                   GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| WINPRINT-SET-TEXT-COLOR | Constant |  |
| WINPRINT-DATA | Group Item | Structure that contains the information to be passed to the function. This group item, defined in [isprint.def](../../Copybooks/isprint.def), has the following structure:<br>*wprtdata-text-color*<br>Specifies the color to be used, in RGB format.<br>Color value is computed as follows: *Red* + *Green* \* 256 + *Blue* \* 65536. *Red*, *Green* and *Blue* range from 0 to 255.<br>A more convenient way to define the color is to use the hexadecimal notation X#RRGGBB.<br>To print a light gray text you may use one of the following, they are equivalent:<br>or<br>For the most common colors, the following constants can be used: |

#### Return code:

returnCode can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 1 | Operation successful. |
| WPRTERR-UNSUPPORTED | The WIN$PRINTER library routine is not supported. |
| WPRTERR-BAD-ARG | The WIN$PRINTER library routine has been called with bad parameters. |
