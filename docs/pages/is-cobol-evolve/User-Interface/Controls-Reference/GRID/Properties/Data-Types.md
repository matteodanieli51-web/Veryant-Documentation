## Data-Types

This property specifies the type and the length of data contained in the Grid control cells. Multiple values can be specified enclosed between parentheses. Values are applied to cells, starting from the first.

Data types are represented by single characters optionally followed by a number enclosed between parentheses. This number represents the maximum number of characters the user can enter in the cell. If the character representing the data type is not followed by any number, the user can type a number of characters equal to the column size. Double-byte characters count for 2. For example, with a Data-Types whose number of characters is 10 you can input 10 Latin characters or 5 Chinese characters. The value -1 indicates that the user can type an unlimited number of characters.

Valid values are:

|  |  |
| --- | --- |
| X | Any alphanumeric character. This is the default. |
| U | Any alphanumeric character, converted to upper case. |
| L | Any alphanumeric character, converted to lower case. |
| 9 | 0 through 9, decimal point, sign, space. |
| Z | 0 through 9, decimal point, sign, space, currency symbols. |
| I | 0 through 9, sign, space. Suited for integer numbers. |
| P | 0 through 9, space. Suited for positive integer numbers. |
| D | 0 through 9, space, slash, hyphen.<br>Suitable for dates that use either slash or hyphen as a separator. |
| E | 0 through 9, space, slash, hyphen and period.<br>Suitable for dates that use slash, hyphen or period as a separator. |

Values can be combined to obtain more accurate filtering.

When even more accurate filtering or formatting is needed, you can display an Entry-Field upon the cell.

Since this setting affects the data type of every single column, a list of values is needed.

When values are enclosed between parentheses, a new list is defined at once. The snippet below specifies that the 1st column allows numeric input and the 2nd column allows date input. The other columns, if any, will allow any alphanumeric input.

```cobol
DATA-TYPES = ("9", "D")
```

When set to space or spaces, the list is reset.

When a single value other than space is set, it is appended to the list. This is useful to define a user-defined appearance.

#### Data-Types for date and time

Data types "D" and "E" can be followed by the date format string:

```cobol
D,format-string
E,format-string
```

*format-string* can contain any of the following characters:

| character | meaning | sample values (comma separated) |
| --- | --- | --- |
| G | Era designator | AD |
| y | Year | 2012 |
| M | Month | 07, July, Jul |
| w | Week in year (1-52) | 37 |
| W | Week in month (1-4) | 3 |
| D | Day in year (1-365) | 201 |
| d | Day in month (1-31) | 28 |
| F | Day of week in numbers (1-7) | 7 |
| E | Day of week in text | Monday, Mon |
| a | AM/PM  marker | AM, PM |
| H | Hour in day (0-23) | 23 |
| k | Hour in day (1-24) | 24 |
| K | Hour in AM/PM (0-11) | 11 |
| h | Hour in AM/PM (1-12) | 12 |
| m | Minute in hour (0-59) | 30 |
| s | Second in minute (0-59) | 30 |
| S | Millisecond in second (0-999) | 567 |
| z | Timezone General | Pacific Standard Time, PST, GMT-08:00 |
| Z | Timezone RFC 822 | -0800 |

Example:

```cobol
"D,yyyy/MM/dd"
```

**Example** - Modify a grid to set its column types, alphanumeric, alphanumeric and date

```cobol
procedure division.
...
  modify screen-1-gr-1
         column-dividers ( 1 1 1 )
         data-columns ( 1 17 25 )
         display-columns ( 1 21 29 )
         ( 5 5 5 )
         alignment ( "U" "U" "U" )
         data-types ( "X" "X" "D,yyyy/MM/dd" )
         editor-show-always ( 0 0 0 )
         .
...
```
