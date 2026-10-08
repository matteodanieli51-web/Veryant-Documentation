## NAME Directive

The NAME directive assigns an RDBMS column name to the field defined on the next line. This directive can be used to avoid problems created by columns with incompatible or duplicate names.

If the name is written between quotes, then the case is preserved, otherwise it’s made uppercase.

```cobol
>>EFD NAME=ColumnName
```

or

```cobol
$EFD NAME=ColumnName
```

or

```cobol
*(( EFD NAME=ColumnName ))
```

or

```cobol
*>(( EFD NAME=ColumnName ))
```

### Example

In the RDBMS, the COBOL field cus-cod will map to an RDBMS field named CUSTOMERCODE.

```cobol
>>EFD NAME=CUSTOMERCODE
 05 CUS-COD        PIC 9(05).
```
