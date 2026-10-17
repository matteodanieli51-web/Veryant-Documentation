### BLANK WHEN ZERO clause

The BLANK WHEN ZERO clause permits the blanking of an item when its value is zero.

#### General format

```cobol
BLANK WHEN ZERO
```

#### Syntax rules

1. The BLANK WHEN ZERO clause can be specified only for an elementary item whose PICTURE is specified as numeric or numeric edited.
2. The numeric or numeric edited data description entry to which the BLANK WHEN ZERO clause applies must be described, either implicitly or explicitly, as USAGE IS DISPLAY.

#### General rules

1. When the BLANK WHEN ZERO clause is used, the item will contain nothing but spaces if the value of the item is zero.
2. When the BLANK WHEN ZERO clause is used for an item whose PICTURE is numeric, the category of the item is considered to be numeric edited.
3. The BLANK WHEN ZERO clause is considered when setting the data item with a MOVE statement, but it is ignored when applying the value specified by VALUE in the data item declaration.
