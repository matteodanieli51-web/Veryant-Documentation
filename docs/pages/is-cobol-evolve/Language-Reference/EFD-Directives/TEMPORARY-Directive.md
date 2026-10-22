## TEMPORARY Directive

The TEMPORARY directive instructs the DatabaseBridge to treat the file as a temporary table instead of a physical table.

```cobol
>>EFD TEMPORARY[=GLOBAL|PRIVATE]
```

or

```cobol
$EFD TEMPORARY[=GLOBAL|PRIVATE]
```

or

```cobol
*(( TEMPORARY[=GLOBAL|PRIVATE] ))
```

or

```cobol
*>(( TEMPORARY[=GLOBAL|PRIVATE] ))
```

If TEMPORARY=GLOBAL is used, DatabaseBridge treats the file as a global temporary table.

If TEMPORARY=PRIVATE is used, DatabaseBridge treats the file as a private temporary table. Private temporary tables are supported only by Oracle starting from version 18c. Trying to create a private temporary table on a previous Oracle version generates an error. EDBI routines for databases that are not Oracle always create global temporary tables.

If just TEMPORARY is used, then TEMPORARY=GLOBAL is assumed.

This directive is supported only by DatabaseBridge.

### Example

Define a temporary table.

```cobol
      >>EFD TEMPORARY 
       FD TEMP-TABLE.
       01 TT-RECORD.
          03 TT-KEY PIC 9(5).
          03 TT-DATA PIC X(10).
```
