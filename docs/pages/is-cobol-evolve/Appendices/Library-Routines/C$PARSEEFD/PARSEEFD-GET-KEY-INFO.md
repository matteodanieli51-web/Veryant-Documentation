### PARSEEFD-GET-KEY-INFO

The PARSEEFD-GET-KEY-INFO function retrieves information about a key.

#### Syntax:

```cobol
 CALL "C$PARSEEFD" USING PARSEEFD-GET-KEY-INFO
                         efdHandle
                         keyNum
                         PARSEEFD-KEY-DESCRIPTION
                  GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *PARSEEFD-GET-KEY-INFO* | Constant |  |
| efdHandle | USAGE HANDLE | Handle returned by the [PARSEEFD-PARSE](./PARSEEFD-PARSE) function. |
| keyNum | PIC 9(n) | Specifies the key number.<br>A value of 0 references the primary key, a value of 1 references the first alternate key, a value of 2 references the second alternate key, and so on. |
| PARSEEFD-KEY-DESCRIPTION | Group Item | Structure that contains the information returned by the function. This group item, defined in [isparseefd.def](../../Copybooks/isparseefd.def), has the following structure: |
|  | 01  parseefd-key-description.    03  parseefd-number-segments              pic x comp-n.    03  parseefd-dup-flag                     pic x comp-n.        88  parseefd-allow-duplicates         value 1 false 0.    03  parseefd-segment-description            occurs max-segs times            indexed by parseefd-seg-idx.        05  parseefd-segment-length           pic x comp-n.        05  parseefd-segment-offset           pic x(4) comp-n.    03  parseefd-number-key-fields            pic x comp-n.    03  parseefd-key-fields            occurs parseefd-maxnumkeyfields times            indexed by parseefd-key-field-idx.        05  parseefd-key-field-num            pic xx comp-n. |  |
|  | PARSEEFD-NUMBER-SEGMENTS | Number of segments in this key. |
|  | PARSEEFD-DUP-FLAG | A value of 1 indicates that duplicates are allowed; a value of 0 indicates no duplicates. |
|  | PARSEEFD-SEGMENT-LENGTH and SEGMENT-OFFSET | Length and offset of each segment. The offset value is zero-based, so offset 0 is the beginning of the record. There is one SEGMENT-LENGTH and SEGMENT-OFFSET value for each segment. |
|  | PARSEEFD-NUMBER-KEY-FIELDS | Number of fields that make up this key. This is always at least as large as the number of segments, but may be larger if a segment holds multiple fields. |
|  | PARSEEFD-KEY-FIELDS | Table of key fields. This table has PARSEEFD-NUMBER-KEY-FIELDS valid elements. |
|  | PARSEEFD-KEY-FIELD-NUM | Nmber of this key field. Get information about the key field by looking at this field number. |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 1 | Operation successful. |
| 0 | Operation failed. Either the EFD handle or the key number is invalid. |
