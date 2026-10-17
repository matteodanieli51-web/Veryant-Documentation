### PARSEEFD-GET-COND-INFO

The PARSEEFD-GET-COND-INFO function retrieves information about conditions that use the [WHEN Directive](../../../Language-Reference/EFD-Directives/WHEN-Directive) within the EFD file

#### Syntax:

```cobol
 CALL "C$PARSEEFD" USING PARSEEFD-GET-COND-INFO
                         efdHandle
                         condIndex
                         PARSEEFD-CONDITION-DESCRIPTION
                  GIVING returnCode
```

#### Parameters:

|  |  |  |
| --- | --- | --- |
| *PARSEEFD-GET-COND-INFO* | Constant |  |
| efdHandle | USAGE HANDLE | Handle returned by the [PARSEEFD-PARSE](./PARSEEFD-PARSE) function. |
| condIndex | PIC 9(n) | Specifies the condition number.<br>A value of 0 references the first condition, a value of 1 references the second condition, a value of 2 references the third condition, and so on. |
| PARSEEFD-CONDITION-DESCRIPTION | Group Item | Structure that contains the information returned by the function. This group item, defined in [isparseefd.def](../../Copybooks/isparseefd.def), has the following structure: |
|  | 01  parseefd-condition-description.    03  parseefd-condition-type                 pic x comp-n.        88  parseefd-equal-condition             value 1.        88  parseefd-and-condition               value 2.        88  parseefd-other-condition             value 3.        88  parseefd-gt-condition                value 4.        88  parseefd-ge-condition                value 5.        88  parseefd-lt-condition                value 6.        88  parseefd-le-condition                value 7.        88  parseefd-ne-condition                value 8.        88  parseefd-or-condition                value 9.        88  parseefd-comparison-cond    values 1, 4 through 8.    03  parseefd-condition-flag                 pic x.        88  parseefd-true-condition       value 'Y' false 'N'.    03  parseefd-comparison-conditions.        05  parseefd-comp-fieldnum              pic xx comp-n.        05  parseefd-comp-fieldname             pic x(30).        05  parseefd-comp-field-val             pic x(50).    03  parseefd-other-conditions                redefines parseefd-comparison-conditions.        05  parseefd-other-fieldnum             pic xx comp-n.        05  parseefd-other-fieldname            pic x(30).    03  parseefd-and-or-conditions                redefines parseefd-comparison-conditions.        05  parseefd-condition-1                pic xx comp-n.        05  parseefd-condition-2                pic xx comp-n.    03  parseefd-condition-tablename            pic x(30). |  |
|  | PARSEEFD-CONDITION-TYPE | Condition type: EQUAL condition, AND condition, etc. |
|  | PARSEEFD-CONDITION-FLAG | Tells whether this condition is TRUE. This is only valid after [PARSEEFD-TEST-CONDITIONS](./PARSEEFD-TEST-CONDITIONS) has been called. |
|  | PARSEEFD-CONDITION-TABLENAME | Table name specified in the TABLENAME clause of the [WHEN Directive](../../../Language-Reference/EFD-Directives/WHEN-Directive). |
|  | For EQUAL, GT (greater than), GE (greater than or equal to), LT (less than), LE (less than or equal to), and NE (not equal to) conditions, the following fields are valid: |  |
|  | PARSEEFD-COMP-FIELDNUM | Field number of the field whose value will be tested against the value of the condition. |
|  | PARSEEFD-COMP-FIELDNAME | Name of that field. |
|  | PARSEEFD-COMP-FIELD-VAL | Value to be tested. This is the value specified in the [WHEN Directive](../../../Language-Reference/EFD-Directives/WHEN-Directive) of the FD used to create this EFD. |
|  | For OTHER conditions, the following fields are valid: |  |
|  | PARSEEFD-OTHER-FIELDNUM | Field number of the field whose value will be different than all the other conditions which use this field. |
|  | PARSEEFD-OTHER-FIELDNAME | Name of that field. |
|  | For AND and OR conditions, the following fields are valid: |  |
|  | PARSEEFD-CONDITION-1 and PARSEEFD-CONDITION-2 | conditions tested to determine whether this condition is true. For AND, both conditions must be true. For OR, one or both conditions must be true. |

#### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 1 | Operation successful. |
| 0 | Operation failed.  Either the EFD handle or the condition number is invalid. |
