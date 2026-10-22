### ROUNDED phrase

If, after decimal point alignment, the number of places in the fractional part of the result of an arithmetic operation is greater than the number of places provided for the fraction of the resultant identifier, truncation is relative to the size provided for the resultant identifier.

When the low-order integer positions in a resultant identifier are represented by the symbol P in the picture character-string for that resultant identifier, rounding or truncation occurs relative to the rightmost integer position for which storage is allocated.

#### General format

```cobol
ROUNDED
```

#### General rules

1. If the arithmetic value cannot be exactly represented in the resultant identifier, the arithmetic value is rounded to the nearest value that can be represented in the resultant identifier. If two such values are equally near, the value whose magnitude is larger is chosen.
