## LOCAL-STORAGE Section

The Local-Storage Section is located in the Data Division of a program or method.

Data described in the Local-Storage Section are automatic data.

The Local-Storage Section is provided specifically for use in methods and recursive calls.

The Local-Storage Section is composed of the section header, followed by record description entries and/or data description entries for noncontiguous data items.

### General format

```cobol
{Data-Description} ...
```

### Syntax rules

1. The EXTERNAL and GLOBAL clauses in Data-Description are not permitted.

### General rules

1. A separate copy of the Local-Storage Section is created each time the runtime element is activated and exists only during the lifetime of that activation.
