### BLANK WHEN ZERO clause

The BLANK WHEN ZERO clause causes the blanking of an item when a value of zero is being stored in it.

#### General format

```COBOL
BLANK WHEN ZERO
```

#### Syntax rules

1. The BLANK WHEN ZERO clause may be specified only for an elementary item described by its picture Character-String as category numeric-edited or as numeric without the picture symbol 'S'.
2. The subject of the entry shall be implicitly or explicitly described as usage display or usage national.

#### General rules

1. When the BLANK WHEN ZERO clause is specified for a data item, the content of the data item is set to all spaces when the item is a receiving operand and the value being stored is zero.
2. If the subject of the entry is described by its picture character-string as category numeric, the BLANK WHEN ZERO clause defines the item as numeric-edited.
