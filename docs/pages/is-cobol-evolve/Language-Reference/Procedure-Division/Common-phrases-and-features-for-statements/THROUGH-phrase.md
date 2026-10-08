### THROUGH phrase

This specification applies to THROUGH phrases specified in the VALUE clause and the [EVALUATE](../../Procedure-Division-Statements/EVALUATE) Statement.

A THROUGH phrase specifies a range of values, *literal-1* through *literal-2*. The set of values included in the range is determined by the following rules:

1. When the range of values is defined by numeric literals, the range of values includes *literal-1*, *literal-2*, and all algebraic values between *literal-1* and *literal-2*.
2. When the range of values is defined by alphanumeric or national literals, the range of values depends on the collating sequence used for evaluation of the range.

When the value of *literal-1* is greater than the value of *literal-2* in the collating sequence in effect at runtime, the Invalid Range exception condition is set to exist, and, upon completion of any exception processing, execution proceeds as if the range of values were empty.
