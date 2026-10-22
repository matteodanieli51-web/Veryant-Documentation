## ALPHA Directive

In order to store non-numeric data (like, LOW-VALUES or special codes) in numeric keys, this directive allows a data item that has been defined as numeric in the COBOL program to be treated as alphanumeric text (CHAR (n) n 1-max column length) in the database.

```cobol
>>EFD ALPHA
```

or

```cobol
$EFD ALPHA
```

or

```cobol
*(( EFD ALPHA ))
```

or

```cobol
*>(( EFD ALPHA ))
```

Moving a non-numeric value such as "A234" into numeric fields without using the $EFD ALPHA directive will cause the field content to be treated as invalid data.

### Example

In the following example, the KEY IS code-key has been specified and the following record definition is present. CODE-NUM is a numeric value and is the key field, since group items are disregarded in the database.

```cobol
01 EMPLOYEE-RECORD.
    05 EMP-KEY.
       10 EMP-NUM           PIC 9(5).
```

Using the $EFD ALPHA directive will change a non-numeric value such as "A234" so that the record will not be rejected by the database, since "A234" is an alphanumeric value and CODE-NUM is a numeric value.

```cobol
 01 EMPLOYEE-RECORD.
    05 EMP-KEY.
>>EFD ALPHA
       10 EMP-NUM           PIC 9(5).
```

Now, the following operation can be used without worrying about rejection.

```cobol
MOVE "C0531" TO CODE-KEY.
WRITE CODE-RECORD.
```
