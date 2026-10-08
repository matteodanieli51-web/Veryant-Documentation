## FIX-LENGTH Directive

This directive forces an alphanumeric COBOL field to be defined as CHAR on the database.

```cobol
>>EFD FIX-LENGTH
```

or

```cobol
$EFD FIX-LENGTH
```

or

```cobol
*(( EFD FIX-LENGTH ))
```

or

```cobol
*>(( EFD FIX-LENGTH ))
```

### Example

```cobol
>>EFD FIX-LENGTH
 03 CUS-NAME PIC X(32).
```
