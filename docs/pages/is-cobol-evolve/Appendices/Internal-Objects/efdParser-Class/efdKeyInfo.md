### efdKeyInfo

Parses an EFD file and returns information about a specific field.

#### General format

```cobol
efd-key-description efdKeyInfo ( efd-name, key-index )
```

#### Syntax rules

1. *efd-name is an alphanumeric data-item or string literal.*
2. *field-index* must be defined as PIC 9(3).
3. *efd-key-description* is a structure as follows.:

```cobol
01 efd-key-description-group.
    03  efd-key-description.
        05  efd-number-of-segments               pic 99.
        05  efd-allow-dup-flag                   pic 9.
            88  efd-allow-duplicates             value 1 false 0.
        05  efd-segment-description              occurs efdmax-segs times indexed by efd-seg-idx.
            07  efd-segment-length               pic x    comp-x.
            07  efd-segment-offset               pic x(4) comp-x.
        05  efd-num-of-key-fields                pic x    comp-x.
        05  efd-key-fields                       occurs efdMaxNumKeyFields times indexed by efd-key-field-idx.
            07  efd-key-field-name               pic x(30).
            07  efd-key-field-num                pic xx   comp-x.
    03  efd-key-index-buf                        pic xx   comp-x.
```

#### General rules

1. *key-index* must be greater than zero and specifies the ordinal position of the field in the EFD file.

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
77 key-idx    pic 9(3).
...
procedure division.
...
move 1 to key-idx.
set efd-key-description to efd-parser:>efdKeyInfo("fd1.xml",
                                                  key-idx)
...
```
