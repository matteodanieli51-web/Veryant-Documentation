### SIGN clause

The SIGN clause specifies the position and the mode of representation of the operational sign.

#### General format

```cobol
[ SIGN IS ] {LEADING } SEPARATE CHARACTER
            {TRAILING}
```

#### Syntax rules

1. The SIGN clause may be specified only for a screen description entry whose picture character-string contains the symbol 'S'.

#### General rules

1. The SIGN clause specifies the position and the mode of representation of the operational sign for the screen description entry to which it applies, or for each screen description entry subordinate to the group to which it applies.
2. If a SIGN clause is specified in a group item subordinate to a group item for which a SIGN clause is specified, the SIGN clause specified in the subordinate group item takes precedence for that subordinate group item.
3. If a SIGN clause is specified in an elementary screen description entry subordinate to a group item for which a SIGN clause is specified, the SIGN clause specified in that elementary entry takes precedence for that elementary entry.
4. If the SEPARATE CHARACTER phrase is not specified, then:

a. The operational sign is presumed to be associated with the leading (or, respectively, trailing) digit position of the data item to which it applies.

b. Valid signs for data items are '+' and '-'.

5. If the SEPARATE CHARACTER phrase is specified, then:

a. The operational sign is presumed to be the leading (or, respectively, trailing) character position of the data item to which it applies; this character position is not a digit position.

b. The operational signs for positive and negative are the basic special characters '+' and '-', respectively.
