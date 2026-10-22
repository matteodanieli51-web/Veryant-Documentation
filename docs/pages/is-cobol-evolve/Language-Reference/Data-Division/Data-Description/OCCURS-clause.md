### OCCURS clause

The OCCURS clause eliminates the need for separate entries for repeated data items and supplies information required for the application of subscripts.

#### General format

##### Format 1

```cobol
OCCURS Integer-2 TIMES
 
  [ {ASCENDING } KEY IS {Data-Name-4} ... ] ...
    {DESCENDING}
 
  [ INDEXED BY {Index-Name} ... ]
```

##### Format 2

```cobol
OCCURS FROM Integer-1 TO Integer-2 TIMES DEPENDING ON Data-Name-3
 
  [ {ASCENDING } KEY IS {Data-Name-4} ... ] ...
    {DESCENDING}
 
  [ INDEXED BY {Index-Name} ... ]
```

##### Format 3

```cobol
OCCURS DYNAMIC [ CAPACITY IN Data-Name-5 ] [FROM Integer-1 ] [ TO Integer-2 ] [ INITIALIZED ]
 
  [ {ASCENDING } KEY IS {Data-Name-4} ... ] ...
    {DESCENDING}
 
  [ INDEXED BY {Index-Name} ... ]
```

##### Format 4 (report writer):

```cobol
OCCURS[ integer-1 TO] integer-2 TIMES [ DEPENDING ON data-name-1 ] [ STEP integer-3 ]
```

##### Format 5 (object oriented programming)

```cobol
OCCURS Integer-2 TIMES
```

#### Syntax rules

1. The OCCURS clause must not be specified in a data description entry that has a variable occurrence data item subordinate to it.
2. *Data-Name-3* and *Data-Name-4* may be qualified.
3. The first specification of *Data-Name-4* must be the name of either the entry containing the OCCURS clause or an entry subordinate to the entry containing the OCCURS clause. Subsequent specification of *Data-Name-4* must be subordinate to the entry containing the OCCURS clause.
4. If *Data-Name-4* is subordinate to an alphanumeric group item or national group item that is subordinate to the entry containing the OCCURS clause, that group item shall not contain an OCCURS clause.
5. *Data-Name-4* must be specified without the subscripting normally required.
6. The data item identified by *Data-Name-4* shall not contain an OCCURS clause except when *Data-Name-4* is the subject of the entry.
7. *Data-Name-4* shall not reference a variable-length group.
8. Where both *Integer-1* and *Integer-2* are used, *Integer-1* must be greater than or equal to zero and *Integer-2* must be greater than *Integer-1*.
9. If the DEPENDING ON phrase is not specified, an OCCURS clause may be subordinate to a data description entry that contains another OCCURS clause as long as the number of subscripts required does not exceed sixteen.
10. *Data-Name-3* must describe an integer.
11. In Format 2, the data item defined by *Data-Name-3* must not occupy a character position within the range of the first character position defined by the data description entry containing the OCCURS clause and the last character position defined by the record description entry containing that OCCURS clause.
12. If the OCCURS clause is specified in a data description entry included in a record description entry containing the EXTERNAL clause, *Data-Name-3* shall reference a data item possessing the external attribute that is described in the same data division.
13. A data description entry that contains Format 2 of the OCCURS clause may only be followed, within that record description, by data description entries which are subordinate to it.
14. An INDEXED BY phrase is required if the subject of this entry, or an entry subordinate to this entry, is to be referenced by indexing.
15. *Index-name* must be a unique word within the program.
16. *Data-name-5* shall not be defined elsewhere in the source element. If qualifiers are required for uniqueness, it shall be treated as though implicitly defined at the same level as the entry containing the OCCURS clause.
17. *Data-name-5* shall not be referenced as a receiving item, except as the operand of a variable-table format [SET](../../Procedure-Division-Statements/SET) Statement.
18. In Format 3, FROM and TO are treated as commentary.
19. When Format 3 occurs is included in group items, it doesn't alter the group item size and the offset the other sub-items in the group. Any COBOL statement performed on the group item will not consider the dynamic occurs inside.
20. When a Format 3 occurs is nested within another Format 3 OCCURS, the capacity of the nested OCCURS is set to the highest capacity. In order to retrieve the exact capacity of a nested Format 3 OCCURS, use a Format 15 [SET](../../Procedure-Division-Statements/SET) statement.
21. Format 3 occurs items can be passed to a called program, but the called program must define the item in the same exact way (including the CAPACITY clause, if present) in order to receive these parameters correctly.
22. A Format 3 occurs cannot be mixed with other formats of occurs.
23. If a Format 3 occurs specifies a CAPACITY phrase, the capacity of the dynamic-capacity table may be increased or decreased explicitly by a SET statement. If the capacity of the table is thereby reduced, the appropriate number of higher occurrences is deleted and any resources they were using are freed.
24. In Format 4, if the DEPENDING ON phrase is not specified, an OCCURS clause may be subordinate to a data description entry that contains another OCCURS clause as long as the number of subscripts required does not exceed seven.
25. In Format 4, integer-1 shall be greater than or equal to zero and integer-2 shall be greater than integer-1.
26. In Format 4, data-name-1 shall describe an integer.
27. In Format 4, if the OCCURS clause is specified in an entry subordinate to one containing the GLOBAL clause, data-name-1, if specified, shall be a global name and shall reference a data item that is described in the same data division.
28. In Format 4, the TO and DEPENDING phrases shall either be both absent or both present.
29. In Format 4, the STEP phrase shall be specified if the entry:

a. contains an absolute LINE clause, or

b. has an entry with an absolute LINE clause subordinate to it, or

c. contains an absolute COLUMN clause, or

d. is subordinate to an entry with a LINE clause and has an entry with an absolute COLUMN clause subordinate to it. In all other cases, the STEP phrase is optional.

30. In Format 4, the value of integer-3 shall be sufficient to prevent the overlapping of any line (in the case of vertical repetition) or column (in the case of horizontal repetition) of any two consecutive repetitions of the associated report item.
31. In Format 4, a report group description entry that contains an OCCURS clause with a DEPENDING phrase may be followed within that report group only by report group description entries that are subordinate to it.
32. A Format 5 occurs is used to create tables of OBJECT REFERENCE data items.
33. A Format 5 occurs can be used only for elementary items whose level number is either 01 or 77.

#### General rules

1. Except for the OCCURS clause itself, all data description clauses associated with an item whose description includes an OCCURS clause apply to each occurrence of the item described.
2. Format 3 defines a dynamic-capacity table.
3. The number of occurrences of the subject entry is defined as follows:

a. In Format 1, the value of *Integer-2* represents the exact number of occurrences.

b. In Format 2, the current value of the data item referenced by *Data-Name-3* represents the number of occurrences.

This format specifies that the subject of this entry has a variable number of occurrences. The value of *Integer-2* represents the maximum number of occurrences and the value of *Integer-1* represents the minimum number of occurrences. This does not imply that the length of the subject of the entry is variable, but that the number of occurrences is variable.

At the time the subject of entry is referenced or any data item subordinate or superordinate to the subject of entry is referenced, the value of the data item referenced by *Data-Name-3* must fall within the range *Integer-1* through *Integer-2*.

c. In Format 3, *Data-Name-5* contains the current capacity of the associated table. Its value is automatically updated as soon as the number of items in the associated table changes.

4. When a group data item, having subordinate to it an entry that specifies Format 2 of the OCCURS clause, is referenced, the part of the table area used in the operation is determined as follows:

a. If the data item referenced by *Data-Name-3* is outside the group, only that part of the table area that is specified by the value of the data item referenced by *Data-Name-3* at the start of the operation will be used.

b. If the data item referenced by *Data-Name-3* is included in the same group and the group data item is referenced as a sending item, only that part of the table area that is specified by the value of the data item referenced by *Data-Name-3* at the start of the operation will be used in the operation. If the group is a receiving item, the maximum length of the group will be used.

5. When the KEY IS phrase is specified, the repeated data must be arranged in ascending or descending order according to the values contained in *Data-Name-4*. The ascending or descending order is determined according to the rules for the comparison of operands. The data-names are listed in their descending order of significance.
6. If Format 2 is specified in a record description entry and the associated file description or sort description entry contains the VARYING phrase of the RECORD clause, the records are variable length. If the DEPENDING ON phrase of the RECORD clause is not specified, the content of the data item referenced by *Data-Name-3* of the OCCURS clause must be set to the number of occurrences to be written before the execution of any [RELEASE](../../Procedure-Division-Statements/RELEASE), [REWRITE](../../Procedure-Division-Statements/REWRITE), or [WRITE](../../Procedure-Division-Statements/WRITE) Statement.
7. *Data-name-5* defines a numeric data item that contains the current capacity of the associated table. *Data-name-5* shall not be referenced as a receiving operand.
8. If INITIALIZED is specified, any unreferenced locations of each new entry added to the table are implicitly initialized.
9. The number of items stored in a Format 3 Occurs is stored in *Data-Name-5*.
10. In Format 4, if the OCCURS clause is written without any of the optional phrases, it causes the entry to define integer-2 distinct report items. The effect of the OCCURS clause on each repetition depends on the position of the entry containing the clause in the report group definition, as follows:

a. If the entry also contains a relative COLUMN clause, each repetition behaves as though it had the same relative COLUMN clause.

b. If the entry is a group entry having subordinate entries with relative COLUMN clauses, and being itself subordinate to an entry with a LINE clause, each repetition behaves as though it had the same subordinate entries with the same relative COLUMN clauses.

c. If the entry also contains a relative LINE clause, each repetition behaves as though it had the same relative LINE clause.

d. If the entry is a group entry having subordinate entries with relative LINE clauses, each repetition behaves as though it had the same subordinate entries with the same relative LINE clauses.

11. In Format 4, any PICTURE, USAGE, SIGN, VALUE, JUSTIFIED, BLANK WHEN ZERO, or GROUP INDICATE clauses have the same effect on each repetition as they would on a single data item without the OCCURS clause. This applies also to any SOURCE, SUM, or PRESENT WHEN clauses if no VARYING clause is present. If a VARYING clause is present, the action of these clauses may vary from one repetition to another. (See [VARYING clause](./VARYING-clause).)
12. In Format 4, the STEP phrase, if specified, defines the vertical or horizontal interval between successive occurrences of the associated report item after the first occurrence, as follows:

a. If the entry contains a COLUMN clause, each successive occurrence is printed at a horizontal distance integer-3 columns to the right of the preceding occurrence.

b. If the entry is a group entry having subordinate entries with COLUMN clauses and being itself subordinate to an entry with a LINE clause, printable items in each successive occurrence are positioned integer-5 columns to the right of the column they occupy in the preceding occurrence.

c. If the entry contains a LINE clause, each successive occurrence is positioned integer-3 lines vertically beneath the preceding occurrence.

d. If the entry is a group entry having subordinate entries with LINE clauses, report lines in successive occurrences are positioned integer-3 lines vertically beneath the line they occupy in the preceding occurrence.

If no STEP phrase is specified, the vertical or horizontal interval between successive occurrences is defined by the relative LINE or COLUMN numbers, respectively, specified in the corresponding report section entries.

13. In Format 4, if the DEPENDING phrase is specified, the value of data-name-1 is evaluated just before the processing of the first LINE clause of the report group. If the value of data-name-1 is not in the range integer-1 to (integer-2 - 1), the report group is processed as though the OCCURS clause had been written without the TO and DEPENDING phrases. If the value of data-name-1 is in the range integer-1 to (integer-2 - 1), the OCCURS clause has the same effect as an OCCURS clause with no TO or DEPENDING phrases and with an integer-2 equal to the current value of data-name-1.
14. If you are using nested OCCURS DEPENDING clauses, you must use [-cod1](../../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#compatibility-options) compiler option.
