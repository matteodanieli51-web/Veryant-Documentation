#### Group items

If either the sending or the receiving operand is an alphanumeric group item, the corresponding returning item shall be an alphanumeric group item or an elementary item of category alphanumeric, and the receiving operand shall be of the same length as the sending operand.

**NOTE** - If a returning item in an activating element is a group with a level number other than 1 and its subordinate items are described such that the implementation inserts slack bits or bytes, the alignment of the subordinate elementary items might not correspond between the returning item in the activating runtime element and the returning item in the activated runtime element.

For an operand that is described as a variable-occurrence data item, the maximum length is used.
