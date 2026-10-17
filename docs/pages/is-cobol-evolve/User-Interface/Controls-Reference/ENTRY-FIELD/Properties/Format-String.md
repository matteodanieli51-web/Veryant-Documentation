## Format-String

This property is used in conjunction with the [Fill-Char](./Fill-Char) property to assign a special format to an entry-field. The entry-field value is immediately formatted while the user is typing.

The following special characters can be used to define the format:

|  |  |
| --- | --- |
| # | A digit. |
| U | Any alphabetic character, no numbers are allowed. Letters are converted to upper-case. |
| L | Any alphabetic character, no numbers are allowed. Letters are converted to lower-case. |
| A | Any alphanumeric character. |
| ? | Any alphabetic character, no numbers are allowed. |
| \* | Any character, including symbols. |
| H | Any hex digit, namely 0-9, A-F and a-f. |
| Others | Characters not listed above are shown in the entry-field and are used as separators that cannot be modified.<br>To be used as separators, characters described above must be preceded by a single quote ('). |

All characters described above can be combined to define complex formatting strings.

"###-?????-###" would define a string that must be three digits, five letters and three digits, separated by dashes.

Note that the value of the field for the program will be stripped of separator characters. For example, having the format string ##/##/##, the user types "101217" and sees "10/12/17", but the program will receive only "101217".

When this property is set, LOWER, NUMERIC and UPPER styles are ignored. Use the Format-String syntax in order to obtain the same effect.

**Example** - Define an entry-field control with a fill char of underscores and a format-string

```cobol
screen section.
...
  03 screen-1-ef-2 Entry-Field
     line 29.0
     column 49.5
     size 13.1 cells
     lines 4.6 cells
     id 19
     3-d
     fill-char '_'
     format-string "###-?????-###"
     .
```
