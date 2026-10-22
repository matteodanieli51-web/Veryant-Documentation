### PARSEEFD-GET-FIELD-INFO

The PARSEEFD-GET-FIELD-INFO function retrieves information about the field.

#### Syntax:

```cobol
 CALL "C$PARSEEFD" USING PARSEEFD-GET-FIELD-INFO
                         efdHandle
                         fieldNum
                         PARSEEFD-FIELD-DESCRIPTION
                  GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *PARSEEFD-GET-FIELD-INFO* | Constant |  |
| efdHandle | USAGE HANDLE | Handle returned by the [PARSEEFD-PARSE](./PARSEEFD-PARSE) function. |
| fieldNum | PIC 9(n) | Specifies the field number.<br>A value of 0 references the first field, a value of 1 references the second field, a value of 2 references the third field, and so on. |
| PARSEEFD-FIELD-DESCRIPTION | Group Item | Structure that contains the information returned by the function. This group item, defined in [isparseefd.def](../../Copybooks/isparseefd.def), has the following structure: |
|  | 01  parseefd-field-description.    03  parseefd-field-offset                pic x(4) comp-n.    03  parseefd-field-length                pic x(4) comp-n.    03  parseefd-field-type                  pic x comp-n.        88  parseefd-signed-field  values parseefd-numsignsep                                         parseefd-numsigned                                         parseefd-numseplead                                         parseefd-numleading                                         parseefd-compsigned                                         parseefd-packedsigned                                        parseefd-binarysigned                                         parseefd-nativesigned.        88  parseefd-num-field     values               parseefd-numedited thru parseefd-nativeunsigned.        88  parseefd-float-field   value  parseefd-flt.        88  parseefd-ascii-field   values                         parseefd-alphanum thru parseefd-group.        88  parseefd-nat-field     values                     parseefd-nat-type thru parseefd-natedited.        88  parseefd-wide-field    values                   parseefd-wide-type thru parseefd-wideedited.    03  parseefd-field-digits                pic x comp-n.    03  parseefd-field-scale                 signed-short.    03  parseefd-field-user-type             pic xx comp-n.    03  parseefd-field-condition             pic xx comp-n.    03  parseefd-field-level                 pic x comp-n.    03  parseefd-field-name                  pic x(30).    03  parseefd-field-format                pic x(30).    03  parseefd-field-occurs-depth          pic x comp-n.    03  parseefd-field-occurs-table            occurs parseefd-maxnumkeyfields times            indexed by parseefd-field-occurs-level.        05  parseefd-field-occ-max-idx       pic xx comp-n.        05  parseefd-field-occ-this-idx      pic xx comp-n.    03  parseefd-field-in-key-flag           pic x.        88  parseefd-field-is-in-key      value 'Y' false 'N'.    03  parseefd-field-secondary-flag        pic x.        88  parseefd-field-is-secondary   value 'Y' false 'N'.    03  parseefd-field-hidden-flag           pic x.        88  parseefd-field-is-hidden      value 'Y' false 'N'.    03  parseefd-field-read-only-flag        pic x.        88  parseefd-field-is-read-only   value 'Y' false 'N'.    03  parseefd-field-dbtype                pic x(32).    03  parseefd-field-type-description      pic x(30). |  |
|  | PARSEEFD-FIELD-OFFSET | Offset of the field in the record buffer (zero-based). |
|  | PARSEEFD-FIELD-LENGTH | Number of bytes this field requires. |
|  | PARSEEFD-FIELD-TYPE | Numeric representation of the field type. The types are defined in [isparseefd.def](../../Copybooks/isparseefd.def). |
|  | PARSEEFD-FIELD-DIGITS | Either the number of digits in this numeric field, or the length if the field is non-numeric. |
|  | PARSEEFD-FIELD-SCALE | Either the scale of the numeric field or 0 if the field is non-numeric. The scale is defined as the power of ten by which the numeric value must be multiplied in order to get the actual value. For example, if the scale is -2, then there are two digits to the right of the decimal point. |
|  | PARSEEFD-USER-TYPE | Describes some of the EFD directives, as listed in [isparseefd.def](../../Copybooks/isparseefd.def). |
|  | PARSEEFD-FIELD-CONDITION | Condition that the field depends on. A condition of 0 means that the field is always included; 999 means that the field will never be included. |
|  | PARSEEFD-FIELD-LEVEL | Level number of the field in the FD used to create this EFD. |
|  | PARSEEFD-FIELD-NAME | Name of the field. If EXCLUDE-ARRAYS was NOT used when parsing the EFD, and the field is part of a table, then the field name may include array indices. |
|  | PARSEEFD-FIELD-FORMAT | Date format specified in the [DATE Directive](../../../Language-Reference/EFD-Directives/DATE-Directive) |
|  | PARSEEFD-FIELD-OCCURS-DEPTH | Number of valid elements in the OCCURS-TABLE. |
|  | PARSEEFD-FIELD-OCCURS-TABLE | Information about the element of a table. The OCC-MAX-IDX is the maximum index allowed. The OCC-THIS-IDX is the index of this element. |
|  | PARSEEFD-FIELD-IN-KEY-FLAG | Indicates whether this field is part of a key. The value is Y if this field is a part of one or more keys, or N if not. |
|  | PARSEEFD-FIELD-SECONDARY-FLAG | Reserved for future use. |
|  | PARSEEFD-FIELD-HIDDEN-FLAG | Indicates whether the [HIDDEN Directive](../../../Language-Reference/EFD-Directives/HIDDEN-Directive) was used on this field. The value is Y if so or N if not. |
|  | PARSEEFD-FIELD-READ-ONLY-FLAG | Indicates whether the [READ-ONLY Directive](../../../Language-Reference/EFD-Directives/READ-ONLY-Directive) was used on this field. |
|  | PARSEEFD-FIELD-DBTYPE | Alphanumeric representation of the type that will be used on the database for this field. This value is space if no EFD directives were used for this field. |
|  | PARSEEFD-FIELD-TYPE-DESCRIPTION | Alphanumeric representation of the field type. |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 1 | Operation successful. |
| 0 | Operation failed. Either the EFD handle or the field number is invalid. |
