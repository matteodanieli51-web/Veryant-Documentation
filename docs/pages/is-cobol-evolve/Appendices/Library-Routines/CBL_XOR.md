## CBL_XOR

The CBL_XOR library routine compares each bit of its first operand to the corresponding bit of its second operand. If one bit is 0 and the other bit is 1, the corresponding result bit is set to 1. Otherwise, the corresponding result bit is set to 0.

| Source | Target | Result |
| --- | --- | --- |
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

### Syntax:

```cobol
 CALL "CBL_XOR" USING source
                      destination
                     [length]
               GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *source* | PIC X(n) | Specifies the first operand. |
| *destination* | PIC X(n) | Specifies the second operand and receives the result of the operation. |
| *length* | any numeric data item or numeric literal | Specifies the number of bytes to be considered when executing the routine. When this parameter is omitted, all bytes in source are used. |

### Return code:

*returnCode* can be any numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Operation successful. |
| 1 | Operation failed. |

### Examples:

**Example -** Get the bit level XOR result between characters 3 and 4

```cobol
move "3" to char1 *> internal bit representation 00110011
move "4" to char2 *> internal bit representation 00110100
            char-result
call "cbl_xor" using char1 char-result

if return-code = 0
   display message "XOR operation between " char1 " and " char2
                   " is " char-result
*> char-result will have internal bit representation 00000111
end-if
```
