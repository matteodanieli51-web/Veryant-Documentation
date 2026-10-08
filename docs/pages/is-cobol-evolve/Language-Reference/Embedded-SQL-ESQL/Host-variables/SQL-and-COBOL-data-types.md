### SQL and COBOL data types

The table below shows a list of the most common SQL data types and the corresponding COBOL data type. You should define the host variables of your COBOL program according to this table.

| SQL | COBOL |
| --- | --- |
| BLOB | PIC X(n), USAGE IS SQL TYPE BLOB or [ESQL$BLOB](\) routine |
| CHAR (n) | PIC X(n) |
| CLOB | PIC X(n) or USAGE IS SQL TYPE CLOB |
| DATE / TIME | PIC X(n) and the proper date conversion function, that varies depending on the database |
| DECIMAL(n,d) | PIC S9(n-d)v9(d) |
| NCHAR(n) | PIC N(n) |
| NCLOB | PIC N(n) |
| NUMERIC(n) | PIC S9(n) |
| NVARCHAR(n) | PIC N(n) |
| VARCHAR (n) | PIC X(n) or group item as described in [Mapping a VARCHAR field to a COBOL group data item](./Mapping-a-VARCHAR-field-to-a-COBOL-group-data-item) |
