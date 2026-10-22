## DATE Directive

DATE, TIME and TIMESTAMP are special field types that are not supported natively by COBOL. To use such fields, a conversion is necessary. The DATE directive defines the conversion rules.

```cobol
>>EFD DATE [ = { DateFormatString       }  ]
               { TimeFormatString       }
               { DateTimeFormatString   }
               { JulianDateFormatString }
```

or

```cobol
$EFD DATE [ = { DateFormatString       }  ]
              { TimeFormatString       }
              { DateTimeFormatString   }
              { JulianDateFormatString }
```

or

```cobol
*(( EFD DATE [ = { DateFormatString       }  ] ))
                 { TimeFormatString       }
                 { DateTimeFormatString   }
                 { JulianDateFormatString }
```

or

```cobol
*>(( EFD DATE [ = { DateFormatString       }  ] ))
                  { TimeFormatString       }
                  { DateTimeFormatString   }
                  { JulianDateFormatString }
```

If *DateFormatString* is not specified, then six-digit (or six-character) fields are retrieved as YYMMDD from the database, while eight-digit fields are retrieved as YYYYMMDD.

Format strings are the representation of the format, composed of a sequence of characters. Each character represents a digit of the COBOL field. Possible values for characters are:

| Character | Meaning |
| --- | --- |
| J | Julian date digit |
| E | Day of year (001–366) |
| Y | Year (2 or 4 digit) |
| M | Month (01-12) |
| D | Day of month (01-31) |
| H | Hour (00-23) |
| N | Minute (00-59) |
| S | Second (00-59) |
| T | Cents (00-99) |

The following table lists all supported *DateFormatStrings*:

| DateFormatString | Meaning |
| --- | --- |
| YYMMDD | big endian date with two digit year |
| YYYYMMDD | big endian date with four digit year |
| MMDDYY | middle endian date with two digit year |
| MMDDYYYY | middle endian date with four digit year |
| DDMMYY | little endian date with two digit year |
| DDMMYYYY | little endian date with four digit year |
| YYYYEEE | four digit year followed by day of year |
| EEEYYYY | day of year followed by four digit year |
| YYEEE | two digit year followed by day of year |
| EEEYY | day of year followed by two digit year |

The following table lists all supported *TimeFormatStrings*:

| TimeFormatString | Meaning |
| --- | --- |
| HH | hours |
| HHNN | hours and minutes |
| HHNNSS | hours, minutes and seconds |
| HHNNSSTT | hours, minutes, seconds and cents |

*DateFormatStrings* and *TimeFormatStrings* from the above tables can be combined together into a *DateTimeFormatString*. There are two types of *DateTimeFormatStrings*:

1. DateFormatString + TimeFormatString
2. TimeFormatString + DateFormatString

*JulianDateFormatString* is a serie of “J” characters. Up to eight “J” characaters are allowed. Only for iss dictionaries it is possible to specify the julian base date by setting the configuration property [iscobol.compiler.iss_julian_base](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#compiler-configuration) at compile time.

When the COBOL field contains more digits than the ones required to store the value, leading digits are set to 0. When the COBOL field contains less digits than the ones required to store the value, leading digits are truncated. When the date or time values are not complete (e.g.: a time field with hours and minutes only), they’re completed with default values by the database.

You may place the DATE directive in front of a group item, so long as you also use the USE GROUP directive.

**Note**: c-tree SQL requires that the number of digits in the format string matches with the number of digits of the data-item, otherwise a conversion error occurs. In addition, c-tree SQL doesn’t support hundredths of seconds (the value T in the format string), therefore they’re truncated.

### Example

The next snippets show how to define the DATE-PURCHASED field as a date on the database. Note that when the field is a group item, the USE GROUP directive is used as well.

```cobol
>>EFD DATE=YYYYMMDD
 05 DATE-PURCHASED      PIC 9(08).
 05 PAY-METHOD          PIC X(05).
```

The column DATE_PURCHASED will have eight digits and will be type DATE in the database, with a format of YYYYMMDD.

```cobol
>>EFD DATE=YYYYMMDD, USE GROUP
 05 DATE-PURCHASED.
    10 YYYY             PIC 9(04).
    10 MM               PIC 9(02).
    10 DD               PIC 9(02).
 05 PAY-METHOD          PIC X(05).
```
