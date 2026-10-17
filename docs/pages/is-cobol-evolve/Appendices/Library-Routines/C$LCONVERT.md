## C$LCONVERT

The C$LCONVERT library routine extracts an item value from a buffer according to the information provided. It is particularly useful to extract values that would not be representable if extracted with a MOVE statement, for example a computational field from a record read via [I$IO](./I$IO/I$IO).

### Syntax:

```cobol
 CALL "C$LCONVERT" USING itemValue
                         buffer
                         offset,
                         size,
                         itemType,
                         digitsCount
                         scale
                        [convOpt]
                  GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *itemValue* | PIC X(n) | Receives the extracted value. |
| *buffer* | PIC X(n) | The buffer from which the value has to be extracted. |
| *offset* | PIC 9(n) | Specifies the offset of the item in the buffer, starting at 0. |
| *size* | PIC 9(n) | Specifies the size in bytes of the item. |
| *itemType* | PIC 9(n) | Specifies the item type. Possible values are listed below. |
| *digitsCount* | PIC 9(n) | Specifies the number of digits allowed by the item, including decimal digits. |
| *scale* | PIC 9(n) | Specifies the number of decimal digits allowed by the item. |
| *convOpt* | PIC 9(n) | Specifies the numeric convention. Possible values are listed below.<br>This parameter may be omitted. If omitted, the runtime retrieves the numeric convention from the compiler options stored in the program class file. |

#### Supported item types:

| Type | Value for the itemType parameter |
| --- | --- |
| Numeric Edited | 0 |
| Unsigned numeric | 1 |
| Signed numeric  where the sign is trailing separate | 2 |
| Signed numeric  where the sign is in the last byte | 3 |
| Signed numeric  where the sign is leading separate | 4 |
| Signed numeric  where the sign is in the first byte | 5 |
| Signed computational (COMP-2) | 6 |
| Unsigned computational (COMP-2) | 7 |
| Positive packed-decimal (COMP-3) | 8 |
| Signed packed-decimal (COMP-3) | 9 |
| Computational-6 | 10 |
| Signed binary (COMP-4) | 11 |
| Unsigned binary (COMP-4) | 12 |
| Signed native-order binary (COMP-5) | 13 |
| Unsigned native-order binary (COMP-5) | 14 |
| Alphanumeric | 16 |
| Alphanumeric justified | 17 |
| Alphabetic | 18 |
| Alphabetic justified | 19 |
| Alphanumeric edited | 20 |
| Group | 22 |
| Float or Double | 23 |
| National | 24 |
| National justified | 25 |
| National edited | 26 |
| Wide | 27 |
| Wide justified | 28 |
| Wide edited | 29 |
| Signed var-len native-order binary | 30 |
| Unsigned var-len native-order binary | 31 |

#### Supported numeric conventions:

| Convention | Value for the convOpts parameter |
| --- | --- |
| DCA | 0 |
| DCI | 1 |
| DCM | 2 |
| DCMI | 3 |
| DCII | 4 |
| DCD | 5 |
| DCDM | 6 |
| DCN | 7 |
| DCB | 8 |
| DCR | 9 |
| DCV | 10 |

### Return code:

*returnCode* is a signed numeric data item:

|  |  |
| --- | --- |
| 0 | Operation successful. |
| 1 | Operation failed. |
| 2 | Invalid parameters. |

### Examples:

**Example -** Extract a signed comp-4 field from a buffer under Micro Focus convention (dcm)

```cobol
working-storage section.
01 my-record.
   03 foo     pic x(10).
   03 my-item pic s9(5)v99 comp-4.
   03 foo     pic x.
01 my-buffer pic x(15) redefines my-record.
01 item-val pic x(10).

procedure division.
main.
 move 123.45 to my-item.

 call "c$lconvert" using item-val, my-buffer
                         10, 4, |offset & len
                         11,    |type
                         7, 2,  |digits & scale
                         2.     |convention

*> item-val will be set to "123.45    "
```
