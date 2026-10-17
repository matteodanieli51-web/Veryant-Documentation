## INITIATE

### General Format

```cobol
INITIATE report-name-1
```

### Syntax Rules

1. Report-name-1 shall be defined by a report description entry in the report section.
2. If report-name-1 is defined in a containing program, the file description entry associated with report-name-1 shall contain a GLOBAL clause.

### General Rules

1. The INITIATE statement initializes
  - all the report's sum counters to zero
  - the report LINE-COUNTER to zero
  - the report PAGE-COUNTER to one

Before the INITIATE statement is executed the file associated with the Report must have been opened for OUTPUT or EXTEND.

### Examples

A code snippet from the REPORT-SECTION.cbl sample program installed with isCOBOL under sample/data-access/files

```cobol
...
       report section.
       rd  my-report
           controls are group-name
           page limit is 22
           heading 1
           first detail 4
           last detail 18
           footing 20.
...
       PROCEDURE DIVISION.
...
           initiate my-report.
...
```
