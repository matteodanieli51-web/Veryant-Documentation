## Value-Format

The information that the [Value](./Value) property refers to is a numeric data item. It does not contain information about its format. In other words, examining the [Value](./Value) property, there is no way to guess what digits represent the year, what the month and so on. Moreover, when the user enters a date, its elements (year, month, day) must be combined, in order to obtain a number to be assigned to the [Value](./Value) property.

The VALUE-FORMAT property fills that gap and allows you to convert information properly. Supported values, defined in [isgui.def](../../../../Appendices/Copybooks/isgui.def) are:

|  |  |
| --- | --- |
| DAVF-YYYYMMDD | Only the eight most significant digits are used. The first four digits are used for the year, the following two for the month and the last two for the day. |
| DAVF-YYMMDD | Only the six most significant digits are used. The first two digits are used for the year, the following two for the month and the last two for the day. |
| DAVF-MMDDYYYY | Only the eight most significant digits are used. The first two digits are used for the month, the following two for the day and the last four for the year. |
| DAVF-MMDDYY | Only the six most significant digits are used. The first two digits are used for the month, the following two for the day and the last two for the year. |
| DAVF-DDMMYYYY | Only the eight most significant digits are used. The first two digits are used for the day, the following two for the month and the last four for the day. |
| DAVF-DDMMYY | Only the six most significant digits are used. The first two digits are used for the day, the following two for the month and the last two for the year. |
| DAVF-HHMM | Only the four most significant digits are used. The first two digits are used for the hours and the following two for the minutes. |
| DAVF-HHMMSS | Only the six most significant digits are used. The first two digits are used for the hours, the following two for the minutes and the following two for the seconds. The [Time](../Styles/Time) style must be set. |
| DAVF-HHMMSShh | Only the eight most significant digits are used. The first two digits are used for the hours, the following two for the minutes, the following two for the seconds, and the last two for the hundredths of second. The [Time](../Styles/Time) style must be set. |
| DAVF-YYYYMMDDHHMMSShh | Only the sixteen most significant digits are used. The first eight digits are treated as described for DAVF-YYYYMMDD and the last eight are treated as described for DAVF-HHMMSShh. The [Time](../Styles/Time) style must be set. |
| DAVF-MMDDYYYYHHMMSShh | Only the sixteen most significant digits are used. The first eight digits are treated as described for DAVF-MMDDYYYY and the last eight are treated as described for DAVF-HHMMSShh. The [Time](../Styles/Time) style must be set. |
| DAVF-DDMMYYYYHHMMSShh | Only the sixteen most significant digits are used. The first eight digits are treated as described for DAVF-DDMMYYYY and the last eight are treated as described for DAVF-HHMMSShh. The [Time](../Styles/Time) style must be set. |

**Example** - Define a date-entry control with value-format

```cobol
screen section.
...
  03 screen-1-de-1 Date-Entry
     line 21.2
     column 49.5
     size 14.5 cells
     lines 3.1 cells
     id 17
     century-date
     value-format davf-yyyymmdd
     .
```
