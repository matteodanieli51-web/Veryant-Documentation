### Report counters

The PAGE-COUNTER and LINE-COUNTER identifiers are generated automatically and exist independently for each report.

#### General format

```cobol
{ PAGE-COUNTER } { OF } report-name-1
{ LINE-COUNTER } { IN }
```

#### Syntax rules

1. In the report section, PAGE-COUNTER and LINE-COUNTER may be referenced only in a SOURCE clause. In the procedure division, PAGE-COUNTER and LINE-COUNTER may be referenced in any context where an integer data item may appear.

**NOTE**: Because each report maintains an independent PAGE-COUNTER and LINE-COUNTER, it is the programmer's responsibility to assign the correct values to any page numbers and to ensure that report groups are printed correctly within the limits of the page.

2. LINE-COUNTER shall not be referenced as a receiving operand.

#### General rules

1. PAGE-COUNTER and LINE-COUNTER reference temporary unsigned integer data items of class and category numeric, which are maintained for each report.
2. The initial value of PAGE-COUNTER is set to 1 by the execution of an INITIATE statement for the corresponding report and its value is updated by 1 during each page advance. It is reset to 1 when a report group that contains a NEXT GROUP clause with a RESET phrase is printed.
3. The initial value of LINE-COUNTER is set to zero by execution of an INITIATE statement for the corresponding report. It is reset to zero whenever a page advance takes place.
4. At the time each report line is printed, the value of LINE-COUNTER specifies the line number of the page on which the line is printed. The value of LINE-COUNTER after the printing of a report group is the same as the line number of the last line printed, unless a NEXT GROUP clause is defined for the report group, in which case the final value of LINE-COUNTER is defined by the general rules for the NEXT GROUP clause.
5. The values of PAGE-COUNTER and LINE-COUNTER are not affected by the processing of a dummy report group, nor by the processing of a report group whose printing is suppressed by means of the SUPPRESS statement.
