## DECORATION Directive

The DECORATION directive specifies if field names should be decorated or not. By default the decoration is applied, so the Web Service field names will consist in the COBOL field names followed by either “_in” or “_out”. If you wish the Web Service field names to match the COBOL field name, use DECORATION=NONE. This directive affects the whole Linkage Section.

```cobol
>>ELK DECORATION=DEFAULT|NONE
```

or

```cobol
$ELK DECORATION=DEFAULT|NONE
```

or

```cobol
*(( ELK DECORATION=DEFAULT|NONE ))
```

or

```cobol
*>(( ELK DECORATION=DEFAULT|NONE ))
```

### Example

The fields generated from the following Linkage Section will not be decorated:

```cobol
      >>ELK DECORATION=NONE
       Linkage Section.
       01 params.
          03 p1 pic x(10).
          03 p2 pic x(10).
```
