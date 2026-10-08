### IS TYPEDEF clause

The TYPEDEF clause defines a record as a programmer-defined type definition.

#### General format

```cobol
IS TYPEDEF
```

#### Syntax rules

1. The TYPEDEF clause can be specified only in data description entries whose level-number is 01 or 77.
2. The following clauses cannot be specified along with TYPEDEF: EXTERNAL, GLOBAL, OCCURS, REDEFINES, VALUE.
3. If the TYPEDEF clause is specified for a group item, then subordinate items can be specified with OCCURS or REDEFINES clauses.
4. The VALUE clause cannot be specified either in the data descriptions specifying the TYPEDEF clause or in any subordinate item except for condition-names (88 level entries) within the TYPEDEF structure.
5. If the TYPEDEF clause is specified for a data description, then that same data description must include a data-name, that means it must not be specified with either an implicit or explicit FILLER clause.

#### General rules

1. The purpose of using the TYPEDEF clause is to create a programmer-defined usage or structure that can subsequently be referenced in the USAGE clause.
2. A record declared with the TYPEDEF clause does not allocate any storage.
3. A TYPEDEF defined in the Working-Storage Section of a FACTORY paragraph can be referenced by all the methods of the FACTORY’s Procedure Division and all the methods of the OBJECT’s Procedure Division. A TYPEDEF defined in the Working-Storage Section of a OBJECT paragraph can be referenced by all the methods of the OBJECT’s Procedure Division. A TYPEDEF defined in the Working-Storage Section of a method can be referenced only by that method.
