### JUSTIFIED clause

The JUSTIFIED clause specifies right justification of data within a receiving data item or screen item.

#### General format

```cobol
{JUSTIFIED} RIGHT
{JUST     }
```

#### Syntax rules

1. JUSTIFIED and JUST are synonyms.
2. The JUSTIFIED clause may be specified only at the elementary item level.
3. The JUSTIFIED clause may be specified only for a data item whose category is alphabetic, alphanumeric, or national.
4. The JUSTIFIED clause shall not be specified for an any-length elementary item.

#### General rules

1. When the receiving data item is described with the JUSTIFIED clause and the sending operand is larger than the receiving data item, the leftmost character positions of the sending operand shall be truncated.
2. When the receiving data item is described with the JUSTIFIED clause and it is larger than the sending operand, the data is aligned at the rightmost character position in the data item space fill for the leftmost character positions. For data items implicitly or explicitly described as usage national, national zeros shall be used for zero fill and national spaces shall be used for space fill. For data items implicitly or explicitly described as usage display, alphanumeric zeros shall be used for zero fill and alphanumeric spaces shall be used for space fill.
3. When the JUSTIFIED clause is omitted, the standard rules for aligning data within an elementary item apply. See [Standard Alignment Rules](../Standard-Alignment-Rules).
