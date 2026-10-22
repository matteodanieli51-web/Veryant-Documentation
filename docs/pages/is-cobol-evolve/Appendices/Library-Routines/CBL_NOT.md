## CBL_NOT

The CBL_NOT library routine examines each bit of the operand. If the bit is 1, the corresponding result bit is set to 0. Otherwise, the corresponding result bit is set to 1.

| Before | After |
| --- | --- |
| 0 | 1 |
| 1 | 0 |

### Syntax:

```cobol
 CALL "CBL_NOT" USING destination
                     [length]
               GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *destination* | PIC X(n) | Specifies the operand and receives the result of the operation. |
| *length* | any numeric data item or numeric literal | Specifies the number of bytes to be considered when executing the routine. When this parameter is omitted, all bytes in destination are used. |

### Return code:

*returnCode* can be any numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Operation successful. |
| 1 | Operation failed. |

### Examples:

**Example -** Get the bit level NOT result of a character

```cobol
move "3" to char1 *> internal bit representation 00110011
            char-result
call "cbl_not" using char-result
if return-code = 0
   display message "NOT " char1 " = " char-result
*> char-result will have internal bit representation 11001100
end-if
```
