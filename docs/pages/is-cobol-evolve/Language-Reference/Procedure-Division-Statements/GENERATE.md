## GENERATE

### General Format

```cobol
GENERATE { data-name-1  }
         { report-name1 }
```

### Syntax Rules

1. Data-name-1 shall name a detail report group. It may be qualified by a report-name.
2. Report-name-1 may be used only if the referenced report description entry contains a CONTROL clause.
3. If data-name-1 is defined in a containing program, the report description entry in which data-name-1 is specified and the file description entry associated with that report description entry shall contain a GLOBAL clause.
4. If report-name-1 is defined in a containing program, the file description entry associated with report-name-1 shall contain a GLOBAL clause.

### General Rules

1. Execution of a GENERATE data-name statement causes one instance of the specified detail to be printed, following any necessary control break and page fit processing, as detailed below.
2. Execution of a GENERATE report-name-1 statement results in the same processing as for a GENERATE data-name statement for the same report, except that no detail is printed. This process is called summary reporting. If all the GENERATE statements executed for a report between the execution of the INITIATE and TERMINATE statements are of this form, the report that is produced is called a summary report.
3. If a CONTROL clause is specified in the report description entry, each execution of the GENERATE statement causes the specified control data items to be saved and subsequently compared so as to sense for control breaks. This processing is described by the CONTROL clause.
4. Execution of the chronologically first GENERATE statement following an INITIATE causes the following actions to take place in order:

A. The report heading is printed if defined. If the report heading appears on a page by itself, an advance is made to the next physical page, and PAGE-COUNTER is either incremented by 1 or, if the report heading's NEXT GROUP clause has the WITH RESET phrase, set to 1.

B. A page heading is printed if defined.

C. If a CONTROL clause is defined for the report, each control heading is printed, wherever defined, in order from major to minor.

D. The specified detail is printed, unless summary reporting is specified.

5. Execution of any chronologically second and subsequent GENERATE statements following an INITIATE causes the following actions to take place in order:

A. If a CONTROL clause is defined for the report, and a control break has been detected, each control footing and control heading is printed, if defined, up to the level of the control break.

B. The specified detail is printed, unless summary reporting is specified.

6. If the associated report is divided into pages, the chronologically first body group since the INITIATE is preceded by a page heading, if defined, and the printing of any subsequent body groups is preceded by a page fit test which, if unsuccessful, results in a page advance, consisting of the following actions in this order:

A. If a page footing is defined it is printed.

B. An advance is made to the next physical page.

C. If the associated report description entry contains a CODE clause with an identifier operand, the identifier is evaluated.

D. If the page advance was preceded by the printing of a group whose description has a NEXT GROUP clause with the NEXT PAGE and WITH RESET phrases, PAGE-COUNTER is set to 1; otherwise PAGE-COUNTER is incremented by 1.

E. LINE-COUNTER is set to zero.

F. If a page heading is defined it is printed.

7. The report associated with data-name-1 or report-name-1 shall be in the active state. If it is not, the EC-REPORT-INACTIVE exception condition is set to exist.
8. If a non-fatal exception condition is raised during the execution of a GENERATE statement, execution resumes at the next report item, line, or report group, whichever follows in logical order.

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
        01  detail-line type is detail.
           02 line is plus 1.
              03 column 2    pic x(4) source prod-code.
              03 column 20   pic x(10) source prod-description.
              03 column 40   pic -$$,$$$.99 source prod-price.
...
        procedure division.
...
            generate detail-line.
...
```
