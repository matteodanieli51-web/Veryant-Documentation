### Reference Modification

Reference modification defines a data item by specifying a leftmost character and length for the data item.

#### General Format

```cobol
Data-Name ( Leftmost-Character-Position : [Length] )
```

#### Syntax Rules

1. *Data-name* is a [Data Item](../../Preface/Definitions#data-item), as defined in the [Definitions](../../Preface/Definitions) section in the Preface of this document.
2. *Leftmost-Character-Position* and Length must be arithmetic expressions.
3. Unless otherwise specified, reference modification is allowed anywhere an identifier referencing a data item of the [class alphanumeric](../Concept-of-Classes-of-Data) is permitted.
4. *Data-Name* may be qualified or subscripted.

#### General Rules

1. Each character of a data item referenced by *Data-Nam*e is assigned an ordinal number incrementing by one from the leftmost position to the rightmost position. The leftmost position is assigned the ordinal number one. If the data description entry for *Data-Name* contains a SIGN IS SEPARATE clause, the sign position is assigned an ordinal number within that data item.
2. If the data item referenced by *Data-Name* is described as numeric, numeric edited, alphabetic, or alphanumeric edited, it is operated upon for purposes of reference modification as if it were redefined as an alphanumeric data item of the same size as the data item referenced by *Data-Name*.
3. Reference modification for an operand is evaluated as follows:

a. If subscripting is specified for the operand, the reference modification is evaluated immediately after evaluation of the subscripts.

b. If the subscripting is not specified for the operand, the reference modification is evaluated at the time subscripting would be evaluated if subscripts had been specified.

4. Reference modification creates a unique data item which is a subset of the data item referenced by *Data-Name*. This unique data item is defined as follows:

a. The evaluation of *Leftmost-Character-Position* specifies the ordinal position of the leftmost character of the unique data item in relation to the leftmost character of the data item referenced by *Data-Name*. Evaluation of *Leftmost-Character-Position* must result in a positive nonzero integer less than or equal to the number of characters in the data item referenced by *Data-Name*.

b. The evaluation of length specifies the size of the data item to be used in the operation. The evaluation of length must result in a positive nonzero integer. The sum of *Leftmost-Character-Position* and length minus the value one must be less than or equal to the number of characters in the data item referenced by *Data-Name*. If length is not specified or is zero, the unique data item extends from and includes the character identified by *Leftmost-Character-Position* up to and including the rightmost character of the data item referenced by *Data-Name*.

5. The unique data item is considered an [elementary data](../Concept-of-Levels/Concept-of-Levels) item without the JUSTIFIED clause. It has the same [class and category](../Concept-of-Classes-of-Data) as that defined for the data item referenced by Data-Name except that the categories numeric, numeric edited, and alphanumeric edited are considered [class and category](../Concept-of-Classes-of-Data) alphanumeric.
