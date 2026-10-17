## WORKING-STORAGE Section

The Working-Storage Section is located in the Data Division of a program, factory, object, function or method.

Data described in the Working-Storage Section are static data. The Working-Storage Section describes records and subordinate data items that are not part of data files.

The Working-Storage Section is composed of the section header, followed by record description entries and/or data description entries for noncontiguous data items.

### General format

```cobol
{  [ {PUBLIC   } . ]  Data-Description }
     {PRIVATE  }
     {PROTECTED}
```

### Syntax rules

1. The PUBLIC, PRIVATE and PROTECTED phrases may be used only in the OBJECT Paragraph.
2. When one of the optional phrases PUBLIC, PRIVATE or PROTECTED is specified, the subsequent data item must have level numbers 01 or 77.

### General rules

1. When the PUBLIC phrase is specified, the subsequent data items and all their subordinate items can be used by any program using the object in which they are defined.
2. When the PRIVATE phrase is specified, the subsequent data items and all their subordinate items can be used only by the class containing the object in which they are defined.
3. When the PROTECTED phrase is specified, the subsequent data items and all their subordinate items can be used by the class containing the object in which they are defined and by those classes that inherit from it.
4. If neither PUBLIC nor PRIVATE nor PROTECTED are specified, data items are PRIVATE.
5. In the Data Division of a method, the data items are local or not depending if the Local-Storage Section is present as well.

If both the Working-Storage Section and the Local-Storage Section are present, then data items defined under the Local-Storage Section are local while data items defined under the Working-Storage Section are not local.

If only the Working-Storage Section is present, then data items defined under the Working-Storage Section are local.

6. In the Data Division of a function, data items defined in the Working-Storage Section are preserved across multiple invocations of the function, whereas data items defined in the Local-Storage Section are initialized at each invocation.
