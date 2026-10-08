### OCCURS clause

The OCCURS clause describes repeated screen items and supplies information required for the application of subscripts.

#### General format

```cobol
OCCURS Integer-6 TIMES
```

#### Syntax rules

1. The maximum number of dimensions for a table described in a screen description entry is two.
2. If a screen description entry includes the OCCURS clause, then if it or any item subordinate to it has a description that includes the [TO](./TO-clause), [FROM](./FROM-clause), or [USING](./USING-clause) clause, that screen description entry shall be part of a table with the same number of dimensions and number of occurrences in each dimension as the identifier representing the receiving or sending operand. The identifier representing the receiving or sending operand shall not be subordinate to an OCCURS clause with the DEPENDING phrase.
3. If a screen description entry that includes the OCCURS clause also contains the [COLUMN clause](./COLUMN-clause), then the [COLUMN clause](./COLUMN-clause) shall include the PLUS or '\-' phrase, unless the screen description entry also includes a [LINE clause](./LINE-clause) with a PLUS or '\-' phrase.
4. If a screen description entry that includes the OCCURS clause also contains the [LINE clause](./LINE-clause), then the [LINE clause](./LINE-clause) shall include the PLUS or '\-' phrase, unless the screen description entry also includes a [COLUMN clause](./COLUMN-clause) with a PLUS or '\-' phrase.

#### General rules

1. Except for the OCCURS clause itself, all data description clauses associated with an item whose description includes an OCCURS clause apply to each occurrence of the item described.
2. The value of *Integer-6* represents the fixed number of occurrences of the subject of the entry.
3. During a [DISPLAY](../../Procedure-Division-Statements/DISPLAY) screen or an [ACCEPT](../../Procedure-Division-Statements/ACCEPT) screen Statement that references a screen item whose description includes the OCCURS clause and whose description or whose subordinate's description includes a [FROM](./FROM-clause), [TO](./TO-clause), or [USING](./USING-clause) clause, the data values for corresponding table elements are moved from the data table element to the screen table element or from the screen table element to the data table element.
4. If the description of a screen item includes the OCCURS clause, the positioning within the screen record of each occurrence of that screen item is as follows:

a. If the description of that screen item contains a [COLUMN clause](./COLUMN-clause), each occurrence behaves as though it had the same [COLUMN clause](./COLUMN-clause) specified.

b. If that screen item is a group item with a subordinate screen item whose description contains a [COLUMN clause](./COLUMN-clause) with the PLUS or '\-' phrase and that group screen item is subordinate to a screen item whose description contains a [LINE clause](./LINE-clause), each occurrence behaves as though it had the same subordinate entries with the same [COLUMN clause](./COLUMN-clause) specified.

c. If the description of that screen item contains a [LINE clause](./LINE-clause) with the PLUS or '\-' phrase, each occurrence behaves as though it had the same [LINE clause](./LINE-clause) specified.

d. If that screen item is a group item with a subordinate screen item whose description contains a [LINE clause](./LINE-clause) with the PLUS or '\-' phrase, each occurrence behaves as though it had the same subordinate entries with the same [LINE clause](./LINE-clause) specified.
