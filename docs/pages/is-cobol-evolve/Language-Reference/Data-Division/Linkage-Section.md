## LINKAGE Section

The Linkage Section appears in the called program and describes data items that are to be referred to by the calling program and the called program.

The Linkage Section in a program is meaningful if and only if the object program is to function under the control of a [CALL](../Procedure-Division-Statements/CALL) Statement or [CHAIN](../Procedure-Division-Statements/CHAIN) Statement, and the statement in the calling program contains a USING Phrase.

The Linkage Section is used for describing data that is available through the calling program but is to be referred to in both the calling and the called program. In the case of index-names, no such correspondence is established and index-names in the called and calling programs always refer to separate indices.

The structure of the Linkage Section is the same as that previously described for the Working-Storage Section, beginning with a section header, followed by noncontiguous data items and/or record description entries.

### General format

```cobol
{Data-Description} ...
```
