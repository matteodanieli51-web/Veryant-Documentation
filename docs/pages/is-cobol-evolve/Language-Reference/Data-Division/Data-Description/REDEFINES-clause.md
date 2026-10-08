### REDEFINES clause

The REDEFINES clause allows the same computer storage area to be described by different data description entries.

#### General format

```cobol
Level-Number [Data-Name-1] [ REDEFINES Data-Name-2 ]
             [FILLER     ]
```

**NOTE** - Level-Number, Data-Name-1, and FILLER are shown in the above format to improve clarity. Level-Number, Data-Name-1, and FILLER are not part of the REDEFINES clause.

#### Syntax rules

1. *Level-Number* of *Data-Name-2* and *Level-Number* of the item being described must be identical.
2. This clause must not be used in level 01 entries in the File Section.
3. The data description entry for *Data-Name-2* cannot contain an OCCURS clause. However, *Data-Name-2* may be subordinate to an item whose data description entry contains an OCCURS clause. In this case, the reference to *Data-Name-2* may not be subscripted. Neither the original definition nor the redefinition can include a variable occurrence data item.
4. The number of character positions described by *Data-Name-1* need not be the same as the number of character positions in the subject of the REDEFINES clause. The compiler generates a warning, however, if the number of character positions is greater in the subject of the REDEFINES clause than in *Data-Name-1*. By default the warning is returned only if *Data-Name-1* and *Data-Name-2* are not group items. In order to extend the check on REDEFINES lenght also to group items, use the [-wr](../../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#warning-options) compiler option.
5. *Data-Name-2* must not be qualified even if it is not unique since no ambiguity of reference exists in this case because of the required placement of the REDEFINES clause within the source program.
6. The entries giving the new description of the character positions must not contain any VALUE clauses, except in subordinate condition-name entries.
7. No entry having a level number numerically lower than the level number of *Data-Name-2* and the subject of the entry may occur between the data description entries of *Data-Name-2* and the subject of the entry.
8. The entries giving the new descriptions of the character positions must follow the entries defining the area of *Data-Name-2*, without intervening entries that define new character positions.
9. *Data-Name-2* may be subordinate to an entry which contains a REDEFINES clause.

#### General rules

1. Storage allocation starts at *Data-Name-2* and continues over a storage area sufficient to contain the number of character positions in the data item referenced by *Data-Name-1* or the FILLER clause.
2. When the same character position is defined by more than one data description entry, the data-name associated with any of those data description entries can be used to reference that character position.
