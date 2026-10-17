### NEXT GROUP clause

The NEXT GROUP clause specifies additional blank lines following the printing of the last line of a report group.

#### General format

```cobol
NEXT GROUP IS integer-1 { PLUS } integer-2  NEXT PAGE [ WITH RESET ]
                        { + }
```

#### Syntax rules

1. Integer-1 specifies an absolute line number. Integer-2 specifies a relative vertical distance. Integer-1 and integer-2 shall not exceed the page limit, or 9999 if the report is not divided into pages. Integer-1 and integer-2 shall be unsigned.
2. PLUS and + are synonyms.
3. If the report is not divided into pages, only the relative form of the clause may be specified.
4. The NEXT GROUP clause shall not be specified in a page heading or report footing.
5. The NEXT PAGE phrase shall not be specified in a page footing.
6. If the absolute form is used, the following checks apply:

a. If the current report group is a report heading, integer-1 shall be greater than the minimum last line number of the report group and less than the FIRST DETAIL integer.

b. If the current report group is a body group, integer-1 shall lie between the FIRST DETAIL integer and the FOOTING integer, inclusive.

c. If the current report group is a page footing, integer-1 shall be greater than the minimum last line number of the report group.

7. If the relative form is used, the following checks apply:

a. If the current report group is a report heading, the minimum last line number of the report group plus integer-2 shall be less than the FIRST DETAIL integer.

b. If the current report group is a page footing, the minimum last line number of the report group plus integer-2 shall not exceed the page limit.

#### General rules

1. The NEXT GROUP clause has no effect when it is specified in a control footing that is at a level other than the highest level at which the control break is detected.

2. The NEXT GROUP clause modifies the value of the current report's LINE-COUNTER after the printing of the last line, if any, of the report group in whose description the clause appears. The effect of this clause depends on the type of report group whose description contains the clause, as covered in the following general rules.

3. If the report group is a report heading, the effect of the absolute and relative forms is to increase the line number on which the immediately next report group is printed, namely the first body group when the report is not divided into pages, or the first page heading when the page heading consists only of relative lines. The effect on LINE-COUNTER in each case is as follows:

a. If the NEXT GROUP clause is absolute, LINE-COUNTER is set equal to integer-1.

b. If the NEXT GROUP clause is relative, integer-2 is added to LINE-COUNTER.

c. If NEXT GROUP NEXT PAGE is specified, the report heading is printed on the first page of the report as the only report group on that page and LINE-COUNTER is then set equal to zero.

4. If the report group is a body group:

a. If the NEXT GROUP clause is absolute, a check is made as to whether LINE-COUNTER is less than integer-1. If so, LINE-COUNTER is set equal to integer-1. Otherwise, integer-1 is placed in a save location and LINE-COUNTER is set equal to the FOOTING integer, causing a page advance to take place just before any other non-dummy body group is printed for the report. The NEXT GROUP clause has no further effect on the current body group and will have no effect at all if a TERMINATE is next executed for the report. But it will affect the location of the next non-dummy body group, at the time that it is printed, in the following way:

i. If the next body group begins with an absolute LINE clause without the NEXT PAGE phrase, the save location is moved to LINE-COUNTER and the page fit test is re-applied before the first line of the body group is printed.

ii. If the next body group begins with an absolute LINE clause with the NEXT PAGE phrase, a page advance takes place, the save location is moved to LINE-COUNTER and a new page fit test and subsequent processing take place as for an identical report group without the NEXT PAGE phrase.

iii. If the next body group contains only relative LINE clauses, its first line will be printed on the next line following the line number in the save location, unless this will result in some line of this body group being printed beyond its lower permitted limit. In the latter case, a second page advance takes place, resulting in a page devoid of body groups, and the next body group is printed on the following page with no reference to the save location.

b. If the NEXT GROUP clause is relative and if the sum of integer-2 and LINE-COUNTER is less than the FOOTING integer, integer-2 is added to LINE-COUNTER; otherwise the FOOTING integer is moved to LINE-COUNTER.

c. If NEXT GROUP NEXT PAGE is specified, the FOOTING integer is moved to LINE-COUNTER.

5. If the report group is a page footing, the NEXT GROUP clause affects any report footing defined in the current report using only relative LINE clauses, by changing LINE-COUNTER in the following ways:

a. If the NEXT GROUP clause is absolute, LINE-COUNTER is set equal to integer-1.

b. If the NEXT GROUP clause is relative, integer-2 is added to LINE-COUNTER.

6. If the WITH RESET phrase is present, the value of PAGE-COUNTER for the report is set to 1 (one) immediately after the page feed caused by the next page advance, chronologically between the printing of any page footing and the printing of any page heading. Whether the current group is a report heading or a body group, this phrase ensures that PAGE-COUNTER will be one, effective from the start of the next page (unless procedurally altered).
