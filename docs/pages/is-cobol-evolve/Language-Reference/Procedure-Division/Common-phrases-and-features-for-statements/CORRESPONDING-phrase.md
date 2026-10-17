### CORRESPONDING phrase

For the purpose of this discussion, D1 and D2 are identifiers that refer to alphanumeric group items, national group items, or variable-length groups.

**NOTE** - When D1 and D2 refer to national groups, D1 and D2 are processed as group items and not as elementary items.

A pair of data items correspond if:

1. A data item in D1 and a data item in D2 are not implicitly or explicitly described with the keyword FILLER and have the same data-name and the same qualifiers, if any, up to, but not including, D1 and D2.
2. In a [MOVE](../../Procedure-Division-Statements/MOVE) Statement, at least one of the data items is an elementary data item and the resulting move is valid according to the rules for the [MOVE](../../Procedure-Division-Statements/MOVE) Statement.
3. Neither data item contains an OCCURS, REDEFINES, or RENAMES clause or is of class index, object, pointer or handle.
4. Neither data item is subordinate to a group item that is subordinate to D1 or D2 when the group item contains an OCCURS or REDEFINES clause.
5. The name of each data item that satisfies the above conditions is unique after application of the implied qualifiers.

Any item identification associated with a corresponding pair of operands is done at the start of the execution of the statement containing the CORRESPONDING phrase, not at the start of the implied statement used for the pair of operands. The implied statements are executed in the order in which the elements in the group data item immediately following CORRESPONDING are specified.

For the arithmetic statements with the CORRESPONDING phrase, if the SIZE ERROR phrase is not specified and any of the implied statements raises a size error condition, the Size Error exception condition for the last of the implied statements that raised a size error condition is set to exist after all of the implied statements are completed.

For any statement with the CORRESPONDING phrase, if any of the implied statements would raise the Data Incompatible exception condition to exist, the Data Incompatible exception condition is set to exist after all of the implied statements are completed.
