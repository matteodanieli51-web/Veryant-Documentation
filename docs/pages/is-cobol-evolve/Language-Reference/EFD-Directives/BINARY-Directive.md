## BINARY Directive

This directive is used to specify that the data in the field could be alphanumeric data of any classification. Absolutely any data is allowed. The method of storing fields declared as binary is database-specific. For example, Oracle uses the data type RAW for the field, while PostgreSQL uses BYTEA.

You might use this directive when you need to store a key that contains LOW or HIGH values; COBOL allows a numeric field to contain LOW or HIGH values, but these are invalid for a numeric field in a database.

```cobol
>>EFD BINARY
```

or

```cobol
$EFD BINARY
```

or

```cobol
*(( EFD BINARY ))
```

or

```cobol
*>(( EFD BINARY ))
```

### Example

The field EMP-NUM will apear as a binary field in the database:

```cobol
 01 EMPLOYEE-RECORD.
    05 EMP-KEY.
>>EFD BINARY
       10 EMP-NUM           PIC 9(5).
```
