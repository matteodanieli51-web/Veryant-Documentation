## HIDDEN Directive

This directive allows a field to be marked as hidden. This will avoid the need to convert a field into a service field.

```cobol
>>ELK HIDDEN
```

or

```cobol
$ELK HIDDEN
```

or

```cobol
*(( ELK HIDDEN ))
```

or

```cobol
*>(( ELK HIDDEN ))
```

### Example

The field p1 will not be available in the web service:

```cobol
       Linkage Section.
       01 params.
      >>ELK HIDDEN
          03 p1 pic x(10).
          03 p2 pic x(10).
```
