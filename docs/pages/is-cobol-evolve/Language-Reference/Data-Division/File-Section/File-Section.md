## FILE Section

The File Section defines the structure of data files. Each file is defined by a file description entry and one or more record description entries. Record description entries are written immediately following the file description entry.

### General format

```cobol
FILE SECTION.
 
 
  [ File-Description {Record-Description} ... ] ...
```
