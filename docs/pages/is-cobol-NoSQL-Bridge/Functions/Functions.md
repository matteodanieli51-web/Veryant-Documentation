# Functions

NoSQL Bridge provides the following functions:

| | |
| --- | --- |
| [DeleteItem](./DeleteItem) | Deletes a record |
| [DescribeTable](./DescribeTable) | Returns the list of fields and their data types and tells how keys are structured |
| [GetItem](./GetItem) | Returns the content of a single record. It simulates a READ KEY operation |
| [PutItem](./PutItem) | Adds a new record or updates an existing record. It simulates a WRITE INVALID REWRITE operation |
| [Query](./Query) | Returns a list of records that match a search criteria, for example all the records whose INVOICE_NUM field is between 100 and 500 |
| [UpdateItem](./UpdateItem) | Updates a record through expressions and conditions |
| | |

All the functions are stateless and their operation is atomic: they open the file, do the requested operation and close the file.

All the functions must authenticate using basic authentication, passing user and password encoded in Base64 in the header of the request, e.g. for user "admin" with password "admin":

```cobol
Authorization: Basic YWRtaW46YWRtaW4=
```

Requests must be sent using the POST method.

## NoSQL Bridge file handling according to the EFD content

The NoSQL Bridge engine uses the information in the EFD dictionary to manage the records in the file. The NoSQL Bridge behavior has a couple of differences if compared with other products that use EFD dictionaries to process the files.

In JSON responses, fields are listed in alphabetical order, not in the order they appear in the EFD dictionary. This occurs because the fields are internally stored in a hash map, where the field name is the key.

Moving alphanumeric data into a numeric field causes an implicit numeric conversion based on zoned decimal representation.

All record definitions in the EFD dictionary are considered, and the conditions specified by the [WHEN Directive](\) are ignored. As a result, every field described in the dictionary is accepted in requests and returned in responses - except those fields explicitly marked as hidden using the [HIDDEN Directive](\).

The [DATE Directive](\) is considered only to format the date value (i.e. place separator characters between the digits), but no validation on the date value is performed.

### Expressions and conditions

Some functions require an expression or a condition as parameter.

#### Expression syntax

```cobol
SET set-action [, set-action] ...
```

Where *set-action* is

```cobol
field = { field } [ { + } { field } ]
        { value }   { - } { value }
```

Where:

- *field* is the name of a field as described in the XML dictionary. The whole hierarchy, from the root item to the desired field, must be specified (i.e. REC_NAME.PARENT_GROUP_NAME.FIELD_NAME).
- *value* can be either a string literal or a numeric literal. String literals must be delimited either by single quotes (i.e. 'string') or by escaped double quotes (i.e. \"string\").

##### Example

```cobol
SET F_REC.F_AGE = F_REC.F_AGE + 1, F_REC.F_NOTES = 'age inscreased by 1'
```

#### Condition syntaxes

```cobol
field { =       } { field }
      { <>      } { value }
      { <       }
      { <=      }
      { >       }
      { >=      }
      { =       }
```

```cobol
field { BETWEEN } { field } { AND } { field }
                  { value }         { value }
```

```cobol
field { IN } ( { field }, { field }, ...)
               { value }  { value }
```

Where:

- *field* is the name of a field as described in the XML dictionary. The whole hierarchy, from the root item to the desired field, must be specified (i.e. REC_NAME.PARENT_GROUP_NAME.FIELD_NAME).
- *value* can be either a string literal or a numeric literal. String literals must be delimited either by single quotes (i.e. 'string') or by escaped double quotes (i.e. \"string\").
- A condition can be negated by prefixing it with NOT. For example "NOT field = 1" is equivalent to "field <> 1".
- Multiple conditions can be concatenated using either AND or OR.

##### Example

```cobol
F_REC.F_AGE >= 18 AND NOT F_REC.F_TYPE IN (1, 5, 12)
```
