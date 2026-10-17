### PRESENT WHEN clause

1. The PRESENT WHEN clause specifies a condition under which a report section entry will be processed.
2. The PRESENT WHEN clause also enables conditional selection of data description entries by the VALIDATE statement.

#### General format

##### Format 1 (report-writer):

```cobol
PRESENT WHEN Condition-1
```

##### Format 2 (validation):

```cobol
PRESENT WHEN Condition-1
```

#### Syntax rules

##### Format 2

1. The PRESENT WHEN clause shall not be specified for a strongly-typed group item or any item subordinate to a strongly-typed group item.

#### General rules

##### Formats 1 and 2

1. If the PRESENT WHEN clause is specified in a report group description entry, the general rules for format 1 apply, otherwise, the general rules for format 2 apply.

##### Format 1

2. If a report group contains any entries that have a PRESENT WHEN clause, condition-1 of each PRESENT WHEN clause is evaluated before the processing of any LINE clauses for the report group. The effect of the PRESENT WHEN clause depends on the value of condition-1 as follows:

a. If condition-1 is true, the corresponding data item is declared to be present and the PRESENT WHEN clause does not affect the processing for this instance of the report group.

b. If condition-1 is false, the corresponding data item is declared to be absent and the effect on processing is as though the entry were omitted from the description of the report group. If the data description entry is not an elementary entry, all its subordinate data items are also declared to be absent, irrespective of any PRESENT WHEN clauses they may also contain. Furthermore, if the entry is a level-01 entry, the effect on processing is as though the entire report group description were omitted.

3. Within a report group description, any PRESENT WHEN clauses are taken into account when assessing the validity of the arrangement of LINE and COLUMN clauses, the manner in which the report group will be printed and the effect of sum counters, as follows:

a. The rules for positioning the first line of the report group ignore any LINE clauses specified at the start of the report group where the LINE clauses are associated with absent data items. (See [LINE clause](../Screen-Description/LINE-clause))

b. The rules forbidding overlap of absolute lines in the report group are not applied to lines associated with absent data items. (See [LINE clause](../Screen-Description/LINE-clause)).

c. The rules preventing trailing relative lines in the report group from exceeding the report group's lower limit are not applied to lines associated with absent data items. (See [LINE clause](../Screen-Description/LINE-clause))

d. The page fit test for body groups disregards all lines associated with absent data items. (See [LINE clause](../Screen-Description/LINE-clause))

e. The rules forbidding overlap of absolute printable items in a report line are not applied to items associated with absent data items. (See [COLUMN clause](../Screen-Description/COLUMN-clause), general rule 4.)

f. The rules preventing trailing relative printable items in the line from exceeding the page width are not applied to items associated with absent data items. (See [COLUMN clause](../Screen-Description/COLUMN-clause))

g. If an entry with a SUM clause is associated with an absent data item, the sum counter is not printed and is not reset to zero.

##### Format 2

4. The PRESENT WHEN clause takes effect during the execution of a VALIDATE statement that directly or indirectly references the subject of the entry.
5. Condition-2 is evaluated at the beginning of the execution of the format validation stage, with the following two possible results:

a. If condition-2 is true, the data item that is the subject of the entry is processed during further execution of the VALIDATE statement.

b. If condition-2 is false, the data item that is the subject of the entry and all data items subordinate to it are not processed at this and all subsequent stages of the execution of the VALIDATE statement.

**NOTE** - If condition-2 is false, the contents of the data item will not be checked unless the data item is redefined.

6. Condition-2 shall not reference any data item that is, or shares any storage with, an operand of a DESTINATION clause appearing later in the description of a data item referred to by the same VALIDATE statement.
