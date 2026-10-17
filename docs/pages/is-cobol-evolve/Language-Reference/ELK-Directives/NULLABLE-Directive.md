## NULLABLE Directive

The NULLABLE directive mars the field as nullable. Whenever the value of the field is empty, the field will be filled with the word 'null' before being returned in a JSON stream.

```cobol
>>ELK NULLABLE
```

or

```cobol
$ELK NULLABLE
```

or

```cobol
*(( ELK NULLABLE ))
```

or

```cobol
*>(( ELK NULLABLE ))
```

### Example

In the resulting Web Service, the field p3 will be set to 'null' whenever the p3 data item is spaces:.

```cobol
       Linkage Section.
      >>ELK INPUT
       01 p1 pic x(10).
       01 p2 pic x(10).
      >>ELK OUTPUT NULLABLE
       01 p3 pic x(10).
```
