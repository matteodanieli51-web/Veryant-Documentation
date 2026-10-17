## Default Rules

| COBOL file name | RDBMS table |
| --- | --- |
| COBOL record | table row |
| COBOL field | table column |
| COBOL key | table index |

Redefines are allowed only for the entire record and must be redirected to a different RDBMS table. See [WHEN Directive](\).

FILLER data items are not mapped to table columns. You can overwrite this behavior using the [NAME Directive](\) in order to associate a column name with COBOL FILLER.

Cobol group items are not mapped to table columns, instead they are mapped to elementary fields of the group. You can change this approach using the [USE GROUP Directive](\).

There is not a corresponding RDBMS table definition for the COBOL OCCURS statement. For this reason the default behavior is to append a sequential number to the field name. For example:

```cobol
01 myoccurs occurs 10 times.
    03 customer-code pic 9(5).
    03 customer-name pic x(30).
```

Will be mapped in RDBMS as

```cobol
customer_code_1
customer-name_1
…
…
customer_code_3
customer-name_3
customer_code_4
customer-name_4
customer_code_5
customer-name_5
...
...
```
