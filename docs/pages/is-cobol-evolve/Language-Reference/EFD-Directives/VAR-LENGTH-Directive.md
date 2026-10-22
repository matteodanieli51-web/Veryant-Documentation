## VAR-LENGTH Directive

This directive forces an alphanumeric COBOL field to be defined as VARCHAR in the database.

```cobol
>>EFD VAR-LENGTH
```

or

```cobol
$EFD VAR-LENGTH
```

or

```cobol
*(( EFD VAR-LENGTH ))
```

or

```cobol
*>(( EFD VAR-LENGTH ))
```

### Example

```cobol
>>EFD VAR-LENGTH
  03 CUS-NAME PIC X(32).
```

This directive is not supported by c-tree SQL.
