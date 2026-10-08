### REPORT clause

The REPORT clause identifies the reports that may be written to a report file.

#### General format

```cobol
{ REPORT  IS  }  { report-name-1 } ...
{ REPORTS ARE }
```

#### Syntax rules

1. Each report-name-1 shall be the subject of a report description entry in the report section of the same source element. The order of appearance of each report-name-1 is not significant.
2. Each report-name-1 may appear in only one REPORT clause.
3. The subject of a file description entry that specifies a REPORT clause may be referenced in the procedure division only by the USE statement, the CLOSE statement, or the OPEN statement with the OUTPUT or EXTEND phrase.

#### General rules

1. The presence of more than one report-name-1 indicates that more than one report may be written to the file.
2. After execution of an INITIATE statement and before the execution of a TERMINATE statement for the same report, no OPEN or CLOSE statements shall be executed that reference the report file.
