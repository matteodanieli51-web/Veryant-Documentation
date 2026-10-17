## CURRENT-DATE

The CURRENT-DATE function returns the calendar date, the time of day and and the local time in a 21-character alphanumeric value.

### Syntax 1

```cobol
function current-date ()
```

### Syntax 2

```cobol
$current-date ()
```

### Result

The function returns a 21-character string with the following meaning:

| Character Positions | Content |
| --- | --- |
| 1-4 | The year in the Gregorian calendar. |
| 5-6 | The month of the year, in the range 01 through 12. |
| 7-8 | The day of the month, in the range 01 through 31. |
| 9-10 | The hours past midnight, in the range 00 through 23. |
| 11-12 | The minutes past the hour, in the range 00 through 59. |
| 13-14 | The seconds past the minute, in the range 00 through 59. |
| 15-16 | The hundredths of a second past the second, in the range 00 through 99. |
| 17 | The character "-" if the local time indicated in the previous character positions is behind Greenwich Mean Time.<br>The character "+" if the local time indicated is the same or ahead of Greenwich Mean Time. |
| 18-19 | Two numeric digits in the range 00 through 12 indicating the number of hours that the reported time is behind Greenwich Mean Time if character position 17 is "-".<br>Two numeric digits in the range 00 through 13 indicating the number of hours that the reported time is ahead of Greenwich Mean Time if character position 17 is "+". |
| 20-21 | Two numeric digits in the range 00 through 59 indicating the number of additional minutes that the reported time is ahead of or behind Greenwich Mean Time, depending on whether character position 17 is "+" or "-" , respectively. |

### Examples

**Example -** Set a timestamp field to the current date and time.

```cobol
working-storage section.
01 w-date-time.
   03 w-date.
      05 w-year  pic 9(4).
      05 w-month pic 9(2).
      05 w-day   pic 9(2).
   03 w-time.
      05 w-hour  pic 9(2).
      05 w-min   pic 9(2).
      05 w-sec   pic 9(2).
      05 w-cent  pic 9(2).
   03 w-timezone pic x(5).
...
procedure division.
...
move function current-date() to w-date-time.
```
