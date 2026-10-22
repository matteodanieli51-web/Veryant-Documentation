### efdDescr

Parses an EFD file and returns general information about it.

#### General format

```cobol
efd-description efdDescr ( efd-name )
```

#### Syntax rules

1. *efd-name is an alphanumeric data-item or string literal.*
2. *efd-description* is a structure defined as follows.:

```cobol
01  efd-description.
  03  efd-version                                pic x    comp-x.
  03  efd-select-name                            pic x(30).
  03  efd-filename                               pic x(30).
  03  efd-filetype                               pic x    comp-x.
  03  efd-max-record-size                        pic x(4) comp-x.
  03  efd-min-record-size                        pic x(4) comp-x.
  03  efd-number-of-keys                         pic x    comp-x.
  03  efd-number-conditions                      pic xx   comp-x.
  03  efd-number-fields                          pic xx   comp-x.
  03  efd-total-number-fields                    pic xx   comp-x.
  03  efd-total-number-allfields                    pic xx   comp-x.
  03  efd-key-index                              pic xx   comp-x.
  03  efd-field-index                            pic xx   comp-x.
  03  save-efd-field-index                       pic xx   comp-x.
  03  min-efd-field-index                        pic xx   comp-x.
  03  max-efd-field-index                        pic xx   comp-x.
  03  efd-cond-index                             pic xx   comp-x.
  03  efd-max-field-name-len                     pic xx   comp-x.
  03  efd-num-key-flds                           pic x    comp-x occurs 120 times.
```

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
...
procedure division.
...
set efd-description to efd-parser:>efdDescr("fd1.xml")
...
```
