## CBL_IMP

The CBL_IMP library routine compares each bit of the first operand to the corresponding bit of its second operand. If the bit of the second operand is 0 and the bit of the first operand is 1, the corresponding result bit is set to 0. Otherwise, the corresponding result bit is set to 1.

| Source | Target | Result |
| --- | --- | --- |
| 0 | 0 | 1 |
| 0 | 1 | 1 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

### Syntax:

```cobol
 CALL "CBL_IMP" USING source
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

**Example -** Get the bit level IMP result between characters 3 and 4

```cobol
move "3" to char1 *> internal bit representation 00110011
move "4" to char2 *> internal bit representation 00110100
            char-imp-result
call "cbl_imp" using char1 char-imp-result

if return-code = 0
   display message "IMP operation between " char1 " and " char2
                   " is " char-imp-result
*> char-imp-result will be 0xFC (with internal bit representation 11111100)
end-if
```
