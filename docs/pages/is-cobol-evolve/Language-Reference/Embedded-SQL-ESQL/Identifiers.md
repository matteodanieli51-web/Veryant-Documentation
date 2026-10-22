## Identifiers

The database object name is known as its identifier. Servers, databases, and database objects such as tables, views, columns, indexes, triggers, procedures, constraints, rules, and so on can have identifiers. An object identifier is created when the object is defined. The identifier is then used to reference the object.

**Note**: The Compiler automatically translates identifiers to upper-case replacing hyphens with underscores unless the identifiers are enclosed between double quotes. In addition, the Compiler translates double quotes to single quotes unless the [-csqq](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#compatibility-options) option is used.

The following statement, for example:

```cobol
SELECT column-1, column-2 FROM table-1 WHERE column-1 = "x"
```

becomes:

```cobol
SELECT COLUMN_1, COLUMN_2 FROM TABLE_1 WHERE COLUMN_1 = 'x'
```

The following statement, instead, is left unaltered, assuming that the program is compiled with [-csqq](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#compatibility-options):

```cobol
SELECT "column-1", "column-2" FROM "table-1" WHERE "column-1" = 'x'
```

By compiling with [-csqq2](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#compatibility-options) instead, quotes are switched. The above statement becomes:

```cobol
SELECT 'column-1', 'column-2' FROM 'table-1' WHERE 'column-1' = "x"
```
