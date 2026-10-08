## Overlapping operands

When a sending and a receiving data item in any statement share a part or all of their storage areas, yet are not defined by the same data description entry, the result of the execution of such a statement is undefined. For statements in which the sending and receiving data items are defined by the same data description entry, the results of the execution of the statement may be defined or undefined depending on the general rules associated with the applicable statement. If there are no specific rules addressing such overlapping operands, the results are undefined.

In the case of reference modification, the unique data item produced by reference modification is not considered to be the same data description entry as any other data description entry. Therefore, if an overlapping situation exists, the results of the operation are undefined.
