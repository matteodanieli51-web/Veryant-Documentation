### IS EXTERNAL clause

The EXTERNAL clause specifies that a data item or a [File connector](../Logical-Record-Concept/File-connector) is external. The constituent data items and group data items of an external data record are available in a run unit to every runtime element that describes the record as external.

#### General format

```cobol
IS EXTERNAL
```

#### Syntax rules

1. The EXTERNAL clause may be specified only in file description entries or in record description entries in the Working-Storage Section.
2. In the same source element, the externalized name of the subject of the entry that includes the EXTERNAL clause shall not be the same as the externalized name of any other entry that includes the EXTERNAL clause.

#### General rules

1. If the EXTERNAL clause is specified in a record description entry, the data contained in the record is external and may be accessed within the run unit by any runtime element that describes the same record as external, subject to the following rules.
2. If the EXTERNAL clause is specified in a file description entry:

a. the [File connector](../Logical-Record-Concept/File-connector) associated with this file description entry is an external [File connector](../Logical-Record-Concept/File-connector); and

b. the data contained in all record description entries subordinate to that file description entry is external and may be accessed by any runtime element in the run unit that describes the same file and records as external, subject to the following rules.

3. Within a run unit, if two or more source elements describe the same external data record, each name that externalized to the operating environment for the record description entries shall be the same; the VALUE clause specification, if any, for each record name of the associated record description entries shall be identical; and the records shall define the same number of bytes. A source element that describes an external record may contain a data description entry including the REDEFINES clause that redefines the complete external record, and this complete redefinition need not occur identically in other source elements in the run unit.
