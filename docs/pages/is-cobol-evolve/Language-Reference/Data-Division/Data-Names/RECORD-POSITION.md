### RECORD-POSITION

The RECORD-POSITION function returns the character position of a data item in a [record description](../Data-Description/Data-Description), starting at 1. It can always be used where a numeric literal is allowed.

#### General Format

```cobol
RECORD-POSITION OF Data-Name
```

#### Syntax Rules

1. *Data-name* is a [Data Item](../../Preface/Definitions#data-item), as defined in the [Definitions](../../Preface/Definitions) section in the Preface of this document.
2. *Data-Name* may be qualified.
3. *Data-Name* may not be reference modified.
4. If *Data-Name* is subordinate to an OCCURS clause, then it must be referenced with subscripting or indexing.
5. If *Data-Name* refers to a table item, the value is computed from the first occurrence of that item.
