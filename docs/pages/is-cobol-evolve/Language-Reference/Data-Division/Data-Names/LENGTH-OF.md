### LENGTH OF

The LENGTH OF function returns the size in bytes of a data item. It can always be used where a numeric literal is allowed.

#### General Format

```cobol
LENGTH OF Data-Name
```

#### Syntax Rules

1. *Data-name* is a [Data Item](../../Preface/Definitions#data-item), as defined in the [Definitions](../../Preface/Definitions) section in the Preface of this document.
2. *Data-Name* may be qualified.
3. *Data-Name* may not be reference modified.

#### General Rules

1. If *Data-Name* is a national item, then the number of digits is returned instead of the number of bytes.
2. If *Data-Name* specifies the [OCCURS clause](../Data-Description/OCCURS-clause), then the size of the first occurrence is returned.
