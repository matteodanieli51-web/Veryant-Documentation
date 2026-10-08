## USE GROUP Directive

The USE GROUP directive assigns a group of items to a single service field. The default data type for the resultant field is alphanumeric.

```cobol
>>ELK USE GROUP
```

or

```cobol
$ELK USE GROUP
```

or

```cobol
*(( ELK USE GROUP ))
```

or

```cobol
*>(( ELK USE GROUP ))
```

### Example

Have a single field named "time" instead of three different fields named "hh", "mm", "ss".

```cobol
       Linkage Section.
       01 params.
          03 p1 pic x(10).
      >>ELK USE GROUP
            03 time.
                05 hh pic 99.
                05 mm pic 99.
                05 ss pic 99.
```
