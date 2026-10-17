## HIDDEN Directive

This directive allows a field to be marked as hidden. This will avoid the need to convert a field into a database field. The field will be ignored by the external interfaces that read the EFD file.

```cobol
>>EFD HIDDEN
```

or

```cobol
$EFD HIDDEN
```

or

```cobol
*(( EFD HIDDEN ))
```

or

```cobol
*>(( EFD HIDDEN ))
```

### Example

The field USELESS will not appear in the database

```cobol
>>EFD HIDDEN
 05 USELESS        PIC X(32).
```
