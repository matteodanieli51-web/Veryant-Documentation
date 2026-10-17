### RENAMES clause

The RENAMES clause permits alternative, possibly overlapping, groupings of elementary items.

#### General format

```cobol
66 Data-Name-6 RENAMES Data-Name-7 [ {THROUGH} Data-Name-8 ] .
                                     {THRU   }
```

**NOTE** - The level number 66 and Data-Name-6 are shown in the above format to improve clarity. The level number 66 and Data-Name-6 are not part of the RENAMES clause.

#### Syntax rules

1. Any number of RENAMES entries may be written for a logical record.
2. All RENAMES entries referring to data items within a given logical record must immediately follow the last data description entry of the associated record description entry.
3. *Data-Name-6* cannot be used as a qualifier, and can only be qualified by the names of the associated level 01, FD, or SD entries. Neither *Data-Name-7* nor *Data-Name-8* may have an OCCURS clause in its data description entry nor be subordinate to an item that has an OCCURS clause in its data description entry.
4. *Data-Name-7* and *Data-Name-8* must be names of elementary items or groups of elementary items in the same logical record, and cannot be the same data-name. A 66 level entry cannot rename another 66 level entry nor can it rename an 88 level entry, but it can rename a 77 or 01 level entry when compiling with the [-m1](../../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#memory-options) option.
5. *Data-Name-7* and *Data-Name-8* may be qualified.
6. None of the items within the range, including *Data-Name-7* and *Data-Name-8*, if specified, can be variable occurrence data items.
7. The words THROUGH and THRU are equivalent.
8. The beginning of the area described by *Data-Name-8* must not be to the left of the beginning of the area described by *Data-Name-7*. The end of the area described by *Data-Name-8* must be to the right of the end of the area described by *Data-Name-7*. *Data-Name-8*, therefore, cannot be subordinate to *Data-Name-7*.

#### General rules

1. When *Data-Name-8* is specified, *Data-Name-6* is a group item which includes all elementary items starting with *Data-Name-7* (if *Data-Name-7* is an elementary item) or the first elementary item in *Data-Name-7* (if *Data-Name-7* is a group item), and concluding with *Data-Name-8* (if *Data-Name-8* is an elementary item) or the last elementary item in *Data-Name-8* (if *Data-Name-8* is a group item).
2. When *Data-Name-8* is not specified, all of the data attributes of *Data-Name-7* become the data attributes for *Data-Name-6*.
