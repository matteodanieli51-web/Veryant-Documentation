#### Elementary items

If either of the operands is an object reference, the corresponding item shall be an object reference, and the conformance rules are the same as if a [SET](../../../Procedure-Division-Statements/SET) Statement were performed in the activated runtime element with the returning item in the activated element as the sending operand and the corresponding returning item in the activating element as the receiving operand.

If the sending operand is not an object reference, the receiving operand shall have the same BLANK WHEN ZERO, JUSTIFIED, PICTURE, USAGE, and SIGN clauses, with the following exceptions:

1. Currency symbols match if and only if the corresponding currency strings are the same.
2. eriod picture symbols match if and only if the DECIMAL-POINT IS COMMA clause is in effect for both the activating and the activated runtime elements or for neither of them.
3. Comma picture symbols match if and only if the DECIMAL-POINT IS COMMA clause is in effect for both the activating and the activated runtime elements or for neither of them.

Additionally, if the sending operand is not an object reference:

1. A national group item matches an elementary data item of usage national described with the same number of national character positions.
2. If the receiving operand is described with the ANY LENGTH clause, the sending operand shall also be described with the ANY LENGTH clause.
3. If the sending operand is described with the ANY LENGTH clause, the length of the sending operand is considered to match the length of the receiving operand.
