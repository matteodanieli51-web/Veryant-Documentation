## NUMERIC Directive

The NUMERIC directive causes the subsequent field to be treated as a numeric if it is declared as alphanumeric.

```cobol
>>EFD NUMERIC
```

or

```cobol
$EFD NUMERIC
```

or

```cobol
*(( EFD NUMERIC ))
```

or

```cobol
*>(( EFD NUMERIC ))
```

### Example

The field customer-code will be stored as numeric data type in the table.

```cobol
>>EFD NUMERIC
 03 CUSTOMER-CODE PIC X(7).
```
