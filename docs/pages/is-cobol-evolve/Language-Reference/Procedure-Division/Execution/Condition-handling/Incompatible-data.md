### Incompatible data

Incompatible data exists when the content of a sending operand is not valid only in the following cases:

1. When a numeric-edited data item is the sending operand of a de-editing [MOVE](../../../Procedure-Division-Statements/MOVE) Statement and the content of that data item is not a possible result for any editing operation in that data item, the result of the MOVE operation is undefined.
2. When the internal format of an any-length elementary item is not correctly formed or does not agree with the corresponding ANY LENGTH clause.
3. When the internal format of a dynamic-capacity table, as defined by the implementor, is not correctly formed or does not agree with the corresponding OCCURS clause.

If the content of a sending operand is not referenced by a given execution of a statement, any incompatible data in that operand is not detected. If part of a sending operand's content is referenced by a given execution of a statement, it is undefined whether any incompatible data in the unreferenced content is detected.

**NOTE** - The content of a data item is not referenced when the data item is a receiving operand, unless that data item is also a sending data item.
