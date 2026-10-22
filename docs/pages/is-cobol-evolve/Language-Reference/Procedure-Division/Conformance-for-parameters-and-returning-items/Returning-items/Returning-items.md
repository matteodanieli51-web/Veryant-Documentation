### Returning items

A returning item shall be specified in the activating statement if and only if a returning item is specified in the procedure division header of the activated element. A returning item is implicitly specified in the activating element when an inline method invocation is referenced.

The returning item in the activated element is the sending operand, the corresponding returning item in the activating element is the receiving operand.

The rules for conformance between the sending operand and the receiving operand depend on whether at least one of the operands is an alphanumeric group item or both operands are elementary items.

**NOTE** - A national group is treated as an elementary item.
