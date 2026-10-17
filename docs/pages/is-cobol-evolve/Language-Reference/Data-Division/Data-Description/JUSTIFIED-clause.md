### JUSTIFIED clause

The JUSTIFIED clause permits alternate positioning of data within a receiving data item.

#### General format

```cobol
{JUSTIFIED} RIGHT
{JUST     }
```

#### Syntax rules

1. The JUSTIFIED clause can be specified only at the elementary item level.
2. JUST is an abbreviation for JUSTIFIED.
3. The JUSTIFIED clause cannot be specified for any data item described as numeric or for which editing is specified.
4. The JUSTIFIED clause must not be specified for an index data item.

#### General rules

1. When the receiving data item is described with the JUSTIFIED clause and the sending data item is larger than the receiving data item, the leftmost characters are truncated. When the receiving data item is described with the JUSTIFIED clause and it is larger than the sending data item, the data is aligned at the rightmost character position in the data item with space fill for the leftmost character positions.
2. When the JUSTIFIED clause is omitted, the standard rules for aligning data within an elementary item apply. See [Standard Alignment Rules](../Standard-Alignment-Rules).
3. The JUSTIFIED clause is considered when setting the data item with a MOVE statement, but it is ignored when applying the value specified by VALUE in the data item declaration.
