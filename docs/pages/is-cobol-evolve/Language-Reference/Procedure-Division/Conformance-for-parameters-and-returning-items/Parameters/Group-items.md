#### Group items

If either the formal parameter or the argument is an alphanumeric group item:

1. If the argument is passed by reference, that argument or the formal parameter corresponding to that argument shall be an alphanumeric group item or an elementary item of category alphanumeric, and the formal parameter shall be described with the same number or a smaller number of bytes as the corresponding argument.
2. If the argument is passed by content, the conformance rules are the same as for a [MOVE](../../../Procedure-Division-Statements/MOVE) Statement with the argument as the sending operand and the corresponding formal parameter as the receiving operand.

**NOTE** - If an argument is a group with a level number other than 1 and its subordinate items are described such that the implementation inserts slack bits or bytes, the alignment of the subordinate elementary items might not correspond between the argument and the formal parameter.

For an argument or formal parameter that is described as an occurs-depending group item passed by reference, the maximum length is used. For an occurs-depending group item passed by content, the length of the argument is determined by the rules of the OCCURS clause for a sending data item.
