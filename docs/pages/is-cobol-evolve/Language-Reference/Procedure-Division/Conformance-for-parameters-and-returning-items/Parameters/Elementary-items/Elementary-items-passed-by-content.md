##### Elementary items passed by content

If the formal parameter is of class pointer or an object reference, the conformance rules shall be the same as if a [SET](../../../../Procedure-Division-Statements/SET) Statement were performed in the activating runtime element with the argument as the sending operand and the corresponding formal parameter as the receiving operand.

If the formal parameter is not of class object or pointer, the conformance rules are the following:

1. If the activated element is a program, the formal parameter shall be of the same length as the corresponding argument.
2. If the activated element is a method, then the conformance rules depend on the type of the formal parameter as specified in the following rules:

a. If the formal parameter is numeric, the conformance rules are the same as for a [COMPUTE](../../../../Procedure-Division-Statements/COMPUTE) Statement with the argument as the sending operand and the corresponding formal parameter as the receiving operand.

b. If the formal parameter is an index data item, the conformance rules are the same as for a [SET](../../../../Procedure-Division-Statements/SET) Statement with the argument as the sending operand and the corresponding formal parameter as the receiving operand.

c. If the formal parameter is described with the ANY LENGTH clause, its length is considered to match the length of the corresponding argument.

d.Otherwise, the conformance rules are the same as for a [MOVE](../../../../Procedure-Division-Statements/MOVE) Statement with the argument as the sending operand and the corresponding formal parameter as the receiving operand
