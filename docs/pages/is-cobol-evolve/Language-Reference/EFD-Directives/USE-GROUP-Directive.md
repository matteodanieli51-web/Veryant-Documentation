## USE GROUP Directive

The USE GROUP directive assigns a group of items to a single column in the table. The default data type for the resultant dataset in the database column is alphanumeric (CHAR (n), where n=1-max column length). The directive may be combined with other directives if the data is stored as a different type (DATE, NUMERIC). Combining fields into groups improves processing speed on the database, so effort is made to determine which fields can be combined.

```cobol
>>EFD USE GROUP
```

or

```cobol
$EFD USE GROUP
```

or

```cobol
*(( EFD USE GROUP ))
```

or

```cobol
*>(( EFD USE GROUP ))
```

### Example

By adding the USE GROUP directive, the data is stored as a single numeric field where the column name is code-key.

```cobol
 01 CODE-RECORD.
>>EFD USE GROUP
    05 CODE-KEY.
       10 AREA-CODE-NUM    PIC 9(03).
       10 CODE-NUM         PIC 9(07).
```

The USE GROUP directive can be combined with other directives. The fields are mapped into a single DATE type data column in the database.

```cobol
>>EFD DATE, USE GROUP
    05 DATE-PURCHASED.
       10 YYYY             PIC 9(04).
       10 MM               PIC 9(02).
       10 DD               PIC 9(02).
```
