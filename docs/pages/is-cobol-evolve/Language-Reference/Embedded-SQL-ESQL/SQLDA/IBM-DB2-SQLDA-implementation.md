### IBM DB2 SQLDA implementation

SQLDA is supported in compatibility with IBM DB2 for the use on the IBM DB2 database.

In order to enable the compatibility with IBM DB2, use the [-csdb2](../../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#compatibility-options) compiler option.

SQLDA has the following structure, that should be added to the Working-Storage Section of the program:

```cobol
      *****************************************************
      * SQL DESCRIPTOR AREA *
      *****************************************************
       01 SQLDA.
          02 SQLDAID PIC X(8) VALUE 'SQLDA '.
          02 SQLDABC PIC S9(8) COMPUTATIONAL VALUE 33016.
          02 SQLN PIC S9(4) COMPUTATIONAL VALUE 750.
          02 SQLD PIC S9(4) COMPUTATIONAL VALUE 0.
          02 SQLVAR OCCURS 1 TO 750 TIMES DEPENDING ON SQLN.
             03 SQLTYPE PIC S9(4) COMPUTATIONAL.
             03 SQLLEN PIC S9(4) COMPUTATIONAL.
             03 SQLDATA POINTER.
             03 SQLIND POINTER.
             03 SQLNAME.
                49 SQLNAMEL PIC S9(4) COMPUTATIONAL.
                49 SQLNAMEC PIC X(30).
```

SQLDA fields are set by the database manager after a [DESCRIBE](../../Embedded-SQL-Statements/DESCRIBE) or a [PREPARE](../../Embedded-SQL-Statements/PREPARE) statement and they have the following meaning.

| | |
| --- | --- |
| SQLDAID | Contains the string 'SQLDA ' |
| SQLDABC | Length of the SQLDA |
| SQLN | Unchanged in this context |
| SQLD | Number of columns described by occurrences of SQLVAR |
| SQLTYPE | The data type of the column.<br>See [SQLTYPE values](./IBM-DB2-SQLDA-implementation#sqltype-values) below for the list of possible values |
| SQLLEN | The length attribute of the column. If the data is decimal, the first byte contains the precision; the second byte contains the scale. |
| SQLDATA | Not used |
| SQLIND | Not used |
| SQLNAME | The unqualified name of the column.<br>This is a varchar field: SQLNAMEL contains the length of the value, while SQLNAMEC contains the value. |

SQLDA fields can also set by the user prior to executing a [FETCH](../../Embedded-SQL-Statements/FETCH) statement, an [OPEN](../../Embedded-SQL-Statements/OPEN) statement, a [CALL](../../Embedded-SQL-Statements/CALL) statement or an [EXECUTE](../../Embedded-SQL-Statements/EXECUTE) statement. In these cases they have the following meaning.

| | |
| --- | --- |
| SQLDAID | Contains the string 'SQLDA ' |
| SQLDABC | Length of the SQLDA |
| SQLN | Total number of occurrences of SQLVAR provided in the SQLDA |
| SQLD | Number of occurrences of SQLVAR entries in the SQLDA that are used when executing the statement. It must be set to a value greater than or equal to zero and less than or equal to SQLN |
| SQLTYPE | The data type of the host variable and whether an indicator variable is provided.<br>See [SQLTYPE values](./IBM-DB2-SQLDA-implementation#sqltype-values) below for the list of possible values |
| SQLLEN | The length attribute of the host variable |
| SQLDATA | Contains the address of the host variable |
| SQLIND | Contains the address of the indicator variable. It’s ignored if there is no indicator variable (as indicated by an even value of SQLTYPE) |
| SQLNAME | Not used |
| | |

**Note** - due to the presence of POINTER data items that can be reused and included in arithmetic expressions, programs including SQLDA should be compiled with the [-cp](../../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#compatibility-options) option and, if you’re on a 64-bit platform, with [-d64](../../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#data-options) option as well. If [-cp](../../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#compatibility-options) is not already used for other purposes and you wish to avoid using it only due to SQLDA, contact Veryant to have some advice on alternate approaches that don’t require arithmetic operations on POINTER data items.

### SQLTYPE values

| Value without indicator | Value with indicator | Type |
| --- | --- | --- |
| 384 | 385 | Date |
| 388 | 389 | Time |
| 392 | 393 | Timestamp |
| 396 | 397 | DataLink |
| 404 | 405 | BLOB |
| 408 | 409 | CLOB |
| 412 | 413 | DBCLOB |
| 448 | 449 | Varying-length character string |
| 452 | 453 | Fixed-length character string |
| 456 | 457 | Long varying-length character string |
| 480 | 481 | Floating point |
| 484 | 485 | Packed decimal |
| 488 | 489 | Zoned decimal |
| 492 | 493 | Big integer |
| 496 | 497 | Large integer |
| 500 | 501 | Small integer |
| 904 | 905 | ROWID |
| 908 | 909 | Varying-length binary string |
| 912 | 913 | Fixed-length binary string |
| 988 | 989 | XML |
