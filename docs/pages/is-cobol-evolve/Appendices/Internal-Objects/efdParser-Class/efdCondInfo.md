### efdCondInfo

Parses an EFD file and returns information about a specific condition.

#### General format

```cobol
efd-condition-description efdCondInfo ( efd-name, cond-index)
```

#### Syntax rules

1. *efd-name is an alphanumeric data-item or string literal.*
2. *cond-index* must be defined as PIC X(2) COMP-X.
3. *efd-condition-description* is a structure defined as follows.:

```cobol
01  efd-condition-description.
    03  efd-condition-type                       pic x comp-x.
        88  efd-equal-condition                  value 1.
        88  efd-and-condition                    value 2.
        88  efd-other-condition                  value 3.
        88  efd-gt-condition                     value 4.
        88  efd-ge-condition                     value 5.
        88  efd-lt-condition                     value 6.
        88  efd-le-condition                     value 7.
        88  efd-ne-condition                     value 8.
        88  efd-or-condition                     value 9.
        88  efd-comparison-condition             values 1, 4 through 8.
    03  efd-condition-flag                       pic x.
        88  efd-true-condition                   value 'y' false 'n'.
    03  efd-other-conditions.
        05  efd-other-fieldnum                   pic xx comp-x.
        05  efd-other-fieldname                  pic x(30).
        05  efd-other-field-val                  pic x(50).
        05  efd-other-field-nums                 redefines efd-other-field-val.
            07  efd-cond-val-1                   pic s9(18).
            07  efd-cond-val-2                   pic s9(18).
    03  efd-and-conditions                       redefines efd-other-conditions.
        05  efd-condition-1                      pic xx comp-x.
        05  efd-condition-2                      pic xx comp-x.
    03  efd-condition-tablename                  pic x(30).
```

#### General rules

1. *cond-index* must be greater than zero and specifies the ordinal position of the condition in the EFD file.

#### Code example

```cobol
...
configuration section.
repository.
    class efdParser  as "com.iscobol.lib.efdParser"
    .
...
working-storage section.
...
copy "efdParser.def"
77 efd-parser object reference efdParser.
77 cond-idx   pic xx comp-x.
77 buf-type   pic x(2).
...
procedure division.
...
move 1 to cond-idx.
set efd-condition-description to efd-parser:>efdCondInfo("fd1.xml",
                                                         cond-idx)
...
```
