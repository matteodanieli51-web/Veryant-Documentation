### Level-Number

The level-number indicates the position of a data item within the hierarchical structure of a logical record. In addition, it is used to identify entries for working storage items, linkage items, screen items, condition-names, constant names and the RENAMES clause.

#### General format

##### Format 1

```cobol
Level-Number
```

##### Format 2

```cobol
66
```

##### Format 3

```cobol
88
```

##### Format 4

```cobol
78
```

#### Syntax rules

1. A level number is required as the first element in each data description entry
2. Data description entries subordinate to an FD or SD entry must have level numbers with the values 01 through 49, 66, 77, 78 or 88.
3. Data description entries in the Working-Storage Section, Local-Storage Section and Linkage Section must have level numbers 01 through 49, 66, 77, 78 or 88.
4. Data description entries in the Screen Section must have level numbers 01 through 49, 66, 77, or 88.

#### General rules

1. The level number 01 identifies the first entry in each record description.
2. Special level-numbers have been assigned to certain entries where there is no real concept of hierarchy:

a. Level number 77 is assigned to identify noncontiguous data items and can be used only as described by [Format 1](./Data-Description#format-1) of the data description entry.

b. Level number 66 is assigned to identify RENAMES entries and can be used only as described by [Format 2](./Data-Description#format-2) of the data description entry.

c. Level number 88 is assigned to entries which define condition names associated with a conditional variable and can be used only as described by [Format 3](./Data-Description#format-3) of the data description entry.

d. Level number 78 is assigned to entries which define constant names representing literals and can be used only as described by [Format 4](./Data-Description#format-4) of the data description entry.

3. Multiple level 01 entries subordinate to any given [level indicator](../File-Section/File-description#syntax-rules) represent implicit redefinitions of the same area. See the [FILE Section](../File-Section/File-Section) in the [Data Division](../Data-Division) for details about level indicators.
