### Oracle Pro\*COBOL SQLDA implementation

SQLDA is supported by default in compatibility with Oracle Pro\*COBOL for the use on the Oracle database.

SQLDA has the following structure, that should be added to the Working-Storage Section of the program:

```cobol
01 SELDSC.
   02 SQLDNUM PIC S9(9) COMP VALUE 100.
   02 SQLDFND PIC S9(9) COMP.
   02 SELDVAR OCCURS 100 TIMES.
      03 SELDV PIC S9(9) COMP.
      03 SELDFMT PIC S9(9 COMP.
      03 SELDVLN PIC S9(9) COMP.
      03 SELDFMTL PIC S9(4) COMP.
      03 SELDVTYP PIC S9(4) COMP.
      03 SELDI PIC S9(9) COMP.
      03 SELDH-VNAME PIC S9(9) COMP.
      03 SELDH-MAX-VNAMEL PIC S9(4) COMP.
      03 SELDH-CUR-VNAMEL PIC S9(4) COMP.
      03 SELDI-VNAME PIC S9(9) COMP.
      03 SELDI-MAX-VNAMEL PIC S9(4) COMP.
      03 SELDI-CUR-VNAMEL PIC S9(4) COMP.
      03 SELDFCLP PIC S9(9) COMP.
      03 SELDFCRCP PIC S9(9) COMP.
01 XSELDI.
   03 SEL-DI OCCURS 100 TIMES PIC S9(4) COMP.
01 XSELDIVNAME.
   03 SEL-DI-VNAME OCCURS 100 TIMES PIC X(80).
01 XSELDV.
   03 SEL-DV OCCURS 100 TIMES PIC X(80).
01 XSELDHVNAME.
   03 SEL-DH-VNAME OCCURS 100 TIMES PIC X(80).
01 BNDDSC.
   02 SQLDNUM PIC S9(9) COMP VALUE 100.
   02 SQLDFND PIC S9(9) COMP.
   02 BNDDVAR OCCURS 100 TIMES.
      03 BNDDV PIC S9(9) COMP.
      03 BNDDFMT PIC S9(9) COMP.
      03 BNDDVLN PIC S9(9) COMP.
      03 BNDDFMTL PIC S9(4) COMP.
      03 BNDDVTYP PIC S9(4) COMP.
      03 BNDDI PIC S9(9) COMP.
      03 BNDDH-VNAME PIC S9(9) COMP.
      03 BNDDH-MAX-VNAMEL PIC S9(4) COMP.
      03 BNDDH-CUR-VNAMEL PIC S9(4) COMP.
      03 BNDDI-VNAME PIC S9(9) COMP.
      03 BNDDI-MAX-VNAMEL PIC S9(4) COMP.
      03 BNDDI-CUR-VNAMEL PIC S9(4) COMP.
      03 BNDDFCLP PIC S9(9) COMP.
      03 BNDDFCRCP PIC S9(9) COMP.
01 XBNDDI.
   03 BND-DI OCCURS 100 TIMES PIC S9(4) COMP.
01 XBNDDIVNAME.
   03 BND-DI-VNAME OCCURS 100 TIMES PIC X(80).
01 XBNDDV.
   03 BND-DV OCCURS 100 TIMES PIC X(80).
01 XBNDDHVNAME.
   03 BND-DH-VNAME OCCURS 100 TIMES PIC X(80).
```

SQLDA fields have the following meaning.

| | |
| --- | --- |
| SQLDNUM | Specifies the maximum number of select-list items or place-holders that can be included in [DESCRIBE](../../Embedded-SQL-Statements/DESCRIBE).<br>Set this variable to the dimension of the descriptor tables before issuing a [DESCRIBE](../../Embedded-SQL-Statements/DESCRIBE) command<br>After the [DESCRIBE](../../Embedded-SQL-Statements/DESCRIBE), you must reset it to the actual number of variables in the [DESCRIBE](../../Embedded-SQL-Statements/DESCRIBE), which is stored in SQLDFND. |
| SQLDFND | After a [DESCRIBE](../../Embedded-SQL-Statements/DESCRIBE) it holds the actual number of select-list items or place-holders found.<br>If it is negative, the [DESCRIBE](../../Embedded-SQL-Statements/DESCRIBE) command found too many select-list items or place-holders for the size of the descriptor. |
| SELDV \| BNDDV | Contains the addresses of data buffers that store select-list or bind-variable values.<br>Set the elements of SELDV or BNDDV using [IWC$GET](\).<br>Select descriptors (SELDV) store FETCHed select-list values.<br>Bind descriptors (BNDDV) must be set before issuing the [OPEN](../../Embedded-SQL-Statements/OPEN) command. |
| SELDFMT \| BNDDFMT | Contains the addresses of data buffers that store select-list or bind-variable conversion format strings. |
| SELDVLN \| BNDDVLN | Contains the lengths of select-list variables or bind-variable values stored in the data buffers. |
| SELDFMTL \| BNDDFMTL | Contains the lengths of select-list or bind-variable conversion format strings. |
| SELDVTYP \| BNDDVTYP | Contains the datatype codes of select-list or bind-variable values.See [Oracle External and Related COBOL Datatypes](./Oracle-Pro-COBOL-SQLDA-implementation#oracle-external-and-related-cobol-datatypes) for detail.s |
| SELDI \| BNDDI | Contains the addresses of data buffers that store indicator-variable values. |
| SELDH-VNAME \| BNDDH-VNAME | Contains the addresses of data buffers that store select-list or place-holder names as they appear in dynamic SQL statements.<br>Set the elements of SELDH- VNAME or BNDDH-VNAME using [IWC$GET](\) before issuing the [DESCRIBE](../../Embedded-SQL-Statements/DESCRIBE) command. |
| SELDH-MAX-VNAMEL \| BNDDH-MAX-VNAME | Contains the maximum lengths of the data buffers that store select-list or place-holder names. The buffers are addressed by the elements of SELDH-VNAME or BNDDH-VNAME.<br>Set the elements of SELDH-MAX-VNAMEL or BNDDH-MAX-VNAMEL before issuing theDESCRIBE command. |
| SELDH-CUR-VNAMEL \| BNDDH-CUR-VNAMEL | Contains the actual lengths of the names of the select-list or place-holder. The [DESCRIBE](../../Embedded-SQL-Statements/DESCRIBE) statement sets the table of actual lengths to the number of characters in eachselect-list or place-holder name. |
| SELDI-VNAME \| BNDDI-VNAME | Contains the addresses of data buffers that store indicator-variable names.<br>You can associate indicator-variable values with select-list items and bind variables. However, you can associate indicator-variable names only with bind variables. You can use this table only with bind descriptors.<br>Set the elements of BNDDI-VNAME using [IWC$GET](\) before issuing the [DESCRIBE](../../Embedded-SQL-Statements/DESCRIBE) command. |
| SELDI-MAX-VNAMEL \| BNDDI-MAX-VNAMEL | Contains the maximum lengths of the data buffers that store indicator-variable names. The buffers are addressed by the elements of SELDI-VNAME or BNDDI-VNAME.<br>You can associate indicator-variable names only with bind variables. You can use this table only with bind descriptors.<br>Set the elements BNDDI-MAX-VNAMEL(1) through BNDDI-MAX-VNAMEL(SQLDNUM)before issuing the [DESCRIBE](../../Embedded-SQL-Statements/DESCRIBE) command. Each indicator-variable name buffer can have a different length. |
| SELDI-CUR-VNAMEL \| BNDDI-CUR-VNAMEL | Contains the actual lengths of the names of the indicator variables. You can associate indicator-variable names only with bind variables. You can use this table only with bind descriptors. |
| SELDFCLP \| BNDDFCLP | Reserved for future use. |
| SELDFCRCP \| BNDDFCRCP | Reserved for future use. |

### Oracle External and Related COBOL Datatypes

| Code | Oracle data type | COBOL data type |
| --- | --- | --- |
| 1 | VARCHAR2 | PIC X(n) |
| 2 | NUMBER | PIC X(n) |
| 3 | INTEGER | PIC S9(n) COMP |
| 4 | FLOAT | COMP-1COMP-2 |
| 5 | STRING | PIC X(n) |
| 6 | VARNUM | PIC X(n) |
| 7 | DECIMAL | PIC S9(n)V9(n) COMP-3 |
| 8 | LONG | PIC X(n) |
| 9 | VARCHAR | PIC X(n) VARYING |
| 11 | ROWID | PIC X(n) |
| 12 | DATE | PIC X(n) |
| 15 | VARRAW | PIC X(n) |
| 23 | RAW | PIC X(n) |
| 24 | LONG RAW | PIC X(n) |
| 68 | UNSIGNED | Not supported |
| 91 | DISPLAY | PIC S9(n)V9(n) DISPLAY SIGN LEADING SEPARATE |
| 94 | LONG VARCHAR | PIC X(n) |
| 95 | LONG VARRAW | PIC X(n) |
| 96 | CHARF | PIC X(n) |
| 97 | CHARZ | PIC X(n) |
| 98 | CURSOR | SQL CURSOR |

### Handling NULL/Not NULL Datatypes

For every select-list column (not expression), [DESCRIBE](../../Embedded-SQL-Statements/DESCRIBE) SELECT LIST returns a NULL/not NULL indication in the datatype table of the select descriptor. If the select-list column is constrained to be not NULL, the high-order bit of SELDVTYP datatype variable is clear; otherwise, it is set.

Before using the datatype in an [OPEN](../../Embedded-SQL-Statements/OPEN) or [FETCH](../../Embedded-SQL-Statements/FETCH) statement, if the NULL status bit is set, you must clear it.

You can use the SQLNUL function to find out if a column allows NULL datatypes and to clear the datatype's NULL status bit.

#### The -cp and -dz compiler options

Since pointers are stored in PIC S9(9) COMP data item, if you’re using the [-cp](../../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#compatibility-options) compiler option, you must use also the [-dz](../../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#data-options) compiler option.
