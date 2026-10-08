### TYPE clause

The TYPE clause in a report group description entry identifies the circumstances under which a report group will be printed.

#### General format

```cobol
TYPE IS { REPORT HEADING }
        { RH }
 
        { PAGE HEADING }
        { PH }
 
        { CONTROL HEADING } [{ ON } ] { data-name-1 } [ OR PAGE ]
        { CH }              [{ FOR }] { FINAL }
 
        { DETAIL }
        { DE }
 
        { CONTROL FOOTING } [{ ON } ] { data-name-2 } [ OR PAGE ]
        { CF }              [{ FOR }] { FINAL }
 
        { PAGE FOOTING }
        { PF }
 
        { REPORT FOOTING }
        { RF }
```

#### Syntax rules

1. RH is an abbreviation for REPORT HEADING.
PH is an abbreviation for PAGE HEADING.
CH is an abbreviation for CONTROL HEADING.
DE is an abbreviation for DETAIL.
CF is an abbreviation for CONTROL FOOTING.
PF is an abbreviation for PAGE FOOTING.
RF is an abbreviation for REPORT FOOTING.
2. Data-name-1 and data-name-2 may be qualified and reference modified. If data-name-1 or data-name-2 is reference modified, leftmost-position and length shall be integer literals. Each data-name-1, data-name-2, and FINAL, if specified, shall be the same as one of the operands of the CONTROL clause of the corresponding report description entry.
3. Following CONTROL HEADING or CONTROL FOOTING, data-name-1, data-name-2, or FINAL may be omitted only if the CONTROL clause in the corresponding report description entry contains exactly one operand.
4. PAGE HEADING and PAGE FOOTING and the OR PAGE phrase are allowed only if a PAGE clause that defines the page limit is specified in the report description entry.
5. REPORT HEADING, PAGE HEADING, REPORT FOOTING, and PAGE FOOTING may each appear no more than once in any given report description.
6. At most one CONTROL HEADING and at most one CONTROL FOOTING may be defined for each control data item or FINAL of the CONTROL clause for any given report. Either or both of CONTROL HEADING and CONTROL FOOTING may be omitted for any given level of control.
7. Groups of type DETAIL, CONTROL HEADING, and CONTROL FOOTING are referred to as body groups. Each report description shall include at least one body group.
8. If no GENERATE data-name statements are specified in the procedure division, the report description need not contain a DETAIL.

#### General rules

1. Report groups are printed only during the execution of a GENERATE or a TERMINATE statement. Detail report groups are printed when referenced explicitly in a GENERATE statement. All other report groups are printed implicitly according to the general rules that follow.
2. The conditions under which a given report group is printed depend on its type as follows:

a. The report heading, if defined, is printed as the first report group in the report, when the chronologically first GENERATE statement for the report, if any, is executed.

b. The page heading, if defined, is printed immediately before, and on the same page as, the chronologically first body group to be printed for the report, and subsequently as the first report group in each new page whenever a page advance takes place, except when the report group about to be printed is a report footing on a page by itself.

c. Each control heading without the OR PAGE phrase, wherever defined, is printed automatically, in either of the following events:

i. when the chronologically first GENERATE statement following an INITIATE statement for the report is executed, in order of control levels from highest to lowest,

ii. immediately preceding any detail printed as the result of the execution of a GENERATE statement when a control break has been detected, in order of control levels from the level of the control break down to the lowest. The OR PAGE phrase causes the associated control heading to be printed in addition after each page advance, following any page heading, provided that the page advance did not take place just before the printing of a control footing at a lower control level.

d. A detail is printed as the result of the execution of an explicit GENERATE statement that references it.

e. Each control footing, wherever defined, is printed automatically in either of the following events:

i. when a GENERATE statement is executed where a control break has been detected, preceding any control heading and detail groups, in order of controls from the lowest up to the level of the control break

ii. when the TERMINATE statement is executed for the report, provided that at least one GENERATE statement has been executed after the chronologically last INITIATE statement for the report, in order of controls from lowest to highest.

f. The page footing, if defined, is printed as the last report group on each page of the current report, except in the following cases:

i. on the first page, if it is occupied only by a report heading group;

ii. on the last page, if it is occupied only by a report footing group;

If a report footing is defined and is not on a page by itself, the page footing on the last page is immediately followed by the report footing.

g. The report footing, if defined, is printed, as the very last report group in the report, when a TERMINATE for the report is executed, provided that at least one GENERATE statement has been executed for the report since the chronologically last INITIATE statement was executed for the report.

3. The upper limit is defined to be the uppermost permitted line on the page that may be occupied by the report group's first line. It is calculated as follows:

a. The upper limit for a report heading or a page heading where no report heading appears on the same page is the line given by the HEADING integer.

b. The upper limit for a page heading where a report heading appears on the same page is the line following the last line of the report heading.

c. The upper limit for a body group, if there is no control heading defined in the report with the OR PAGE phrase, is the line given by the FIRST DETAIL integer.

d. If there is at least one control heading defined in the report with the OR PAGE phrase, the upper limit for a body group is determined as follows:

i. If the body group is a control heading at the same or a higher control level than the highest-level control heading that has an OR PAGE phrase, the upper limit is the line given by the FIRST DETAIL integer.

ii. If the body group is a control heading at a lower control level than the highest-level control heading that has an OR PAGE phrase, the upper limit is the line following the last line of the next higher-level control heading.

iii. If the body group is a detail, the upper limit is the line following the last line of the lowest-level control heading that has an OR PAGE phrase.

iv. If the body group is a control footing, the upper limit is the line following the last line of the lowest-level control heading with an OR PAGE phrase at the same level as the control footing, or higher. If no such control heading is defined, the upper limit is the FIRST DETAIL integer.

e. The upper limit for a page footing is the line number obtained by adding 1 to the FOOTING integer.

f. The upper limit for a report footing that appears on a page by itself is the line given by the HEADING integer.

g. The upper limit for a report footing that does not appear on a page by itself is the line following the last line of the page footing, if specified, or the line number obtained by adding 1 to the FOOTING integer, if no page footing is defined for the report.

4. The lower limit is defined to be the lowermost permitted line on the page that may be occupied by the report group's last line. It is calculated as follows:

a. The lower limit for a report heading that appears on a page by itself is the page limit.

b. The lower limit for a report heading that does not appear on a page by itself is the line preceding the first line of the page heading. If no page heading is defined for the report, the lower limit is the value obtained by subtracting 1 from the FIRST DETAIL integer.

c. The lower limit for a page heading is the line number obtained by subtracting 1 from the FIRST DETAIL integer.

d. The lower limit for a control heading is the line given by the LAST CONTROL HEADING integer.

e. The lower limit for a detail is the line given by the LAST DETAIL integer.

f. The lower limit for a control footing is the line given by the FOOTING integer.

g. The lower limit for a page footing or report footing is the page limit.
