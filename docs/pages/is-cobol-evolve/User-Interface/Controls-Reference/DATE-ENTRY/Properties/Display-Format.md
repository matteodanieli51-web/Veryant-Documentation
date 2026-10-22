## Display-Format

This property allows you to set the pattern string that will be used to display the information. Within date and time pattern strings, unquoted letters from 'A' to 'Z' and from 'a' to 'z' are interpreted as pattern letters representing the components of a date or time string. Text can be quoted using single quotes (') to avoid interpretation. "''" represents a single quote. All other characters are not interpreted, they are simply copied into the output string during formatting or matched against the input string during parsing.

The following pattern letters are defined (all other characters from 'A' to 'Z' and from 'a' to 'z' are reserved):

| Letter | Date or Time Component | Presentation | Examples |
| --- | --- | --- | --- |
| G | Era designator | Text | AD |
| y | Year | Year | 1996; 96 |
| M | Month in year | Month | July; Jul; 07 |
| w | Week in year | Number | 27 |
| W | Week in month | Number | 2 |
| D | Day in year | Number | 189 |
| d | Day in month | Number | 10 |
| F | Day of week in month | Number | 2 |
| E | Day in week | Text | Tuesday; Tue |
| a | Am/pm marker | Text | PM |
| H | Hour in day (0-23) | Number | 0 |
| k | Hour in day (1-24) | Number | 24 |
| K | Hour in am/pm (0-11) | Number | 0 |
| h | Hour in am/pm (1-12) | Number | 12 |
| m | Minute in hour | Number | 30 |
| s | Second in minute | Number | 55 |
| S | Millisecond | Number | 978 |
| z | Time zone | General time | Pacific Standard Time; PST; GMT-08:00 |
| Z | Time zone | RFC 822 time zone | -0800 |

Pattern letters are usually repeated, as their number determines the exact presentation:

|  |  |
| --- | --- |
| Text | For formatting, if the number of pattern letters is 4 or more, the full form is used; otherwise a short or abbreviated form is used if available. For parsing, both forms are accepted, independently from the number of pattern letters. |
| Number | For formatting, the number of pattern letters is the minimum number of digits and shorter numbers are zero-padded to this amount. For parsing, the number of pattern letters is ignored unless it is needed to separate two adjacent fields. |
| Year | For formatting, if the number of pattern letters is 2, the year is truncated to 2 digits; otherwise it is interpreted as a number.<br>For parsing, if the number of pattern letters is more than 2, the year is interpreted literally, regardless of the number of digits. So using the pattern "MM/dd/yyyy", "01/11/12" parses to Jan 11, 12 A.D.<br>For parsing with the abbreviated year pattern ("y" or "yy"), SimpleDateFormat must interpret the abbreviated year relative to some century. It does this by adjusting dates to be within 80 years before and 20 years after the time the SimpleDateFormat instance is created. For example, using a pattern of "MM/dd/yy" and a SimpleDateFormat instance created on Jan 1, 1997, the string "01/11/12" would be interpreted as Jan 11, 2012 while the string "05/04/64" would be interpreted as May 4, 1964. During parsing, only strings consisting of exactly two digits, as defined by Character.isDigit(char), will be parsed into the default century. Any other numeric string, such as a one digit string, a three or more digit string, or a two digit string that is not all digits (for example, "-1"), is interpreted literally. So, "01/02/3" or "01/02/003" are parsed as "Jan 2, 3 AD", using the same pattern. Likewise, "01/02/-3" is parsed as "Jan 2, 4 BC". |
| Month | If the number of pattern letters is 3 or more, the month is interpreted as text; otherwise, it is interpreted as a number. |
| General time zone | Time zones are interpreted as text if they have names. For time zones representing a GMT offset value, the following syntax is used:<br>GMTOffsetTimeZone:<br>GMT Sign Hours : Minutes<br>Sign: one of<br>+ -<br>Hours:<br>Digit<br>Digit Digit<br>Minutes:<br>Digit Digit<br>Digit: one of<br>0 1 2 3 4 5 6 7 8 9<br>Hours must be between 0 and 23, and Minutes must be between 00 and 59. The format is locale independent and digits must be taken from the Basic Latin block of the Unicode standard.<br>For parsing, RFC 822 time zones are also accepted. |
| RFC 822 time zone | For formatting, the RFC 822 4-digit time zone format is used:<br>RFC822TimeZone:<br>Sign TwoDigitHours Minutes<br>TwoDigitHours:<br>Digit Digit<br>TwoDigitHours must be between 00 and 23. Other definitions are as for general time zones.<br>For parsing, general time zones are also accepted. |

Localized date and time pattern strings are also supported. In these strings, the pattern letters described above may be replaced with other, locale dependent, pattern letters.

If this property is not set, then the display format is retrieved by the current operating system international settings.

**Example -** Define a date-entry control with display format that include era designator, year, month and day

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
     decoration-background-visible
     display-format "G, y-MM-d"
     value-format davf-yyyymmdd
     calendar-font Bell-MT-10v0-b
     decoration-background 12
     .
```
