### efdFieldInfo

Parses an EFD file and returns information about a specific field. Only fields that are not marked as "hidden" are returned.

#### General format

```cobol
efd-field-description efdFieldInfo ( efd-name, field-index)
```

#### Syntax rules

1. *efd-name is an alphanumeric data-item or string literal.*
2. *field-index* is a numeric data-item or numeric literal.
3. *efd-field-description* is a structure defined as follows.:

```cobol
01  efd-field-description.
    03  efd-field-offset                         pic x(4) comp-x.
    03  efd-field-length                         pic x(4) comp-x.
    03  efd-field-type                           pic x comp-x.
        88  efd-signed-field                     values efd-NumSignSep
                                                        efd-NumSigned
                                                        efd-NumSepLead
                                                        efd-NumLeading
                                                        efd-CompSigned
                                                        efd-PackedSigned
                                                        efd-BinarySigned
                                                        efd-NativeSigned.
        88  efd-numeric-field                    values efd-NumEdited thru efd-NativeUnsigned.
        88  efd-float-field                      value  efd-Flt.
        88  efd-ascii-field                      values efd-Alphanum  thru efd-Group.
        88  efd-national-field                   values efd-Nat-type  thru efd-NatEdited.
        88  efd-wide-field                       values efd-Wide-type thru efd-WideEdited.
    03  efd-field-digits                         pic x(4) comp-x.
    03  efd-field-scale                          pic s99 comp-4.
    03  efd-field-user-type                      pic xx comp-x.
    03  efd-field-condition                      pic xx comp-x.
    03  efd-field-level                          pic x comp-x.
    03  efd-field-name                           pic x(30).
    03  efd-field-occurs-depth                   pic x comp-x.
    03  efd-field-occurs-table                   occurs efdMaxNumKeyFields times
                                                 indexed by efd-field-occurs-level.
        05  efd-field-occ-max-idx                pic xx comp-x.
        05  efd-field-occ-offset                 pic xx comp-x.
```

#### General rules

1. *field-index* must be greater than zero and not greater than efd-total-number-fields (returned by [efdDescr](./efdDescr)) and specifies the ordinal position of the field in the EFD file.

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
77 field-idx  pic 9(3).
77 buf-type   pic x(20).
...
procedure division.
...
move 1 to field-idx.
set efd-field-description to efd-parser:>efdFieldInfo("fd1.xml",
                                                       field-idx)
...
```
