## TERMINATE

### General Format

```cobol
TERMINATE report-name-1
```

### Syntax Rules

1. Report-name-1 shall be defined by a report description entry in the report section.
2. If report-name-1 is defined in a containing program, the file description entry associated with report-name-1 shall contain a GLOBAL clause.

### General Rules

1. The TERMINATE statement may be executed only for a report that is in the active state. If the report is not in the active state, the EC-REPORT-INACTIVE exception condition is set to exist and the execution of the statement has no other effect.
2. If no GENERATE statement has been executed for a report during the interval between the execution of an INITIATE statement and a TERMINATE statement for that report, the TERMINATE statement causes no processing of any kind to take place for any report groups and has the sole effect of changing the state of the report to inactive.
3. If at least one GENERATE statement has been executed for a report during the interval between the execution of an INITIATE statement and a TERMINATE statement for that report, the TERMINATE statement causes the following actions to take place:

A. The contents of any control data items are changed to their prior values.

B. Each control footing is printed, if defined, beginning with the minor control footing, as defined for the GENERATE statement, as though a control break has been sensed in the most major control data item.

C. The report footing is printed, if defined.

D. The contents of any control data items are restored to the values they had at the start of execution of the TERMINATE statement.

4. The result of executing a TERMINATE statement in which more than one report-name-1 is specified is as though a separate TERMINATE statement had been executed for each report-name-1 in the same order as specified in the statement. If an implicit TERMINATE statement results in the execution of a declarative procedure that executes a RESUME statement with the NEXT STATEMENT phrase, processing resumes at the next implicit TERMINATE statement, if any.
5. If a non-fatal exception condition is raised during the execution of a TERMINATE statement, execution resumes at the next report item, line, or report group, whichever follows in logical order.
6. The TERMINATE statement does not close the file associated with report-name-1.

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
           terminate my-report.
...
```
