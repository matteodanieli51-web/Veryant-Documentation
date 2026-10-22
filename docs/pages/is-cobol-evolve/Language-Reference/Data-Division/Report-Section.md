## REPORT Section

The report section describes the reports to be written to report files. The description of each report begins with a report description (RD) entry and is followed by one or more report group descriptions.

### General format

```cobol
REPORT SECTION. [ report-description-entry {constant-entry                } ... ] ...
                                           {report-group-description-entry}
```

Items in the linkage section, local-storage, and the working-storage section that bear no hierarchical relationship to one another need not be grouped into records, provided they do not need to be further subdivided. Instead, they are classified and defined as noncontiguous elementary data items. Each of these items is defined in a separate data description entry that begins with the special level-number 77.

```cobol
77-level data description entry
```

#### Syntax rules

1. The report section may be specified in a function definition or a program definition. Within a class definition, the report section may be specified only in a factory definition or an instance definition, but not in a method definition. The report section shall not be specified within an interface definition.

### General format

```cobol
RD report-name-1 [ IS GLOBAL ]
  [ CODE IS { identifier-1 } ]
            { literal-1    }
 
  [ { CONTROL IS   } { data-name-1 ... }        } ]
    { CONTROLS ARE } { FINAL [ data-name-1 ] ...}
  [  LINE LIMIT IS integer-1 ]
  [  PAGE { LIMIT IS   } integer-2 { LINE   } [ HEADING integer-3 ] ]
          { LIMITS ARE }           { LINES  }
  [  FIRST DETAIL integer-4 ]
  [  LAST DETAIL integer-5 ]
  [  FOOTING integer-6 ]
```

#### Syntax rules

1. There shall be one and only one REPORT clause specifying report-name-1 in a given file description entry.
2. The clauses that follow report-name-1 may appear in any order.

#### General rules

1. If GLOBAL is specified, report-name-1 and all its constituent report groups, its PAGE-COUNTER and LINE-COUNTER, and any sum counters defined in report-name-1 are global.
2. The CODE clause can be used to prefix non-printable fields to the report records.
3. The CONTROL clause should be coded in the RD if the report has additional lines, such as total lines and subheadings, that are to be produced upon a change of value in one or more "key" fields (known as control fields or simply controls).
4. The LINE LIMIT clause indicates the maximum number of columns likely to be required for the longest line of your report. It enables report writer to check that all of your report fields appear within the limits of the report line, and to warn you if there is any danger of data being lost beyond the right-hand extremity of the lines.
5. The PAGE LIMIT clause should be coded if the report is to be divided into pages. It also allows you to sub-divide the page into regions for the headings, main data, and footings.

#### Report description entry

The report description (RD) entry gives a name to the report and defines its physical and logical subdivisions. (See [Physical subdivisions of a report](./Report-Section#physical-subdivisions-of-a-report).)

An RD entry shall be followed by one or more report group description entries. The RD entry and the report group description entries that follow fully describe one report. A report is in the active state after the successful execution of an INITIATE statement referencing that report description entry and before the successful execution of a TERMINATE statement referencing that report description entry. At any other time, it is in the inactive state.

#### Report group description entry

A report group is a block of zero, one, or more report lines that is treated, both logically and visually, as a single unit. Each report group description shall consist of a level 1 report description entry followed by zero, one, or more subordinate entries, describing the vertical and horizontal layout of the report group and the content or origin of each of its printed data items, known as printable items.

The report groups associated with the report are specified immediately following the report description entry. If several report groups are specified, the order in which they are defined is not significant. The first entry of each report group description has level number 1 and a TYPE clause and, if a data-name is also specified, this may be used subsequently to identify the report group. Further subordinate group and elementary entries may be specified to describe additional elements of the report group.

### General Format

```cobol
number [ entry-name-clause ]
       [TYPE clause]
       [NEXT GROUP clause]
       [LINE clause]       
       [PICTURE clause]
       [ USAGE IS ] DISPLAY
                    NATIONAL 
       [SIGN clause]
       [JUSTIFIED clause]
       [COLUMN clause]        
       [BLANK WHEN ZERO clause]
       source-clause
       SUM clause
       VALUE clause
       PRESENT WHEN clause
       [GROUP INDICATE]
       [OCCURS [ integer-1 TO ] integer-2 TIMES 
               [ DEPENDING ON data-name-1 ] [ STEP integer-3 ]]
       [VARYING clause]
```

#### Report subdivisions

A report has physical and logical subdivisions that interact to determine what is printed on a page.

#### Physical subdivisions of a report

##### Pages

Each report is composed of pages of equal size, defined by the PAGE clause, or one page of indefinite size. Each page heading, body group (detail, control heading, or control footing), and page footing appears in a separate subdivision of the page. Each report heading or report footing may appear in any position on the page. Advancing to a new page is executed automatically for body groups, including the printing of a page footing and page heading.

##### Lines

Each report group is divided vertically into zero, one, or more lines. Each line, or multiple line set, is represented in the report group description by a LINE clause. The NEXT GROUP clause, where defined, specifies additional vertical spacing following the report group.

##### Report Items

Each line of each report group is divided horizontally into zero, one, or more printable items. Each printable item, or adjacent set of printable items, is defined in the report group description by an elementary entry containing a COLUMN clause. The value that is placed in a printable item is determined solely by a SOURCE, SUM, or VALUE clause in its data description entry. In addition, unprintable items may be specified whose entries contain no COLUMN or LINE clause but from which printable items may be derived.

Report items shall not be accessed or referred to by any clauses in any other section of the data division or by any other procedure division statements, except in the following cases:

1. Sum counters may be inspected or altered in the procedure division.
2. Report groups of type DETAIL are accessed by the GENERATE statement.

A report item referenced in a function identifier or inline method invocation shall be an elementary report item.

##### Logical Subdivisions of a Report

Report groups of type DETAIL may be structured into a nested set of control groups. Each control group may begin with a control heading and end with a control footing.

A control break occurs when a change of value is detected in a control data item during the execution of a GENERATE statement. The hierarchy of control data items is used to check automatically for any such change in value. The detection of a control break causes the same GENERATE statement to print each defined control footing, in reverse hierarchical order, and each defined control heading, in hierarchical order.
