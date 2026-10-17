## ISSORT (External Sort)

The ISSORT utility enables you to sort or merge indexed, relative, binary sequential, and line sequential files.

The utility internally uses the SORT verb, so it’s affected by the configuration settings whose name starts with "iscobol.sort" (e.g. [iscobol.sort.memsize](..//Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration)). The utility uses the file handler specified in the configuration to sort a specific kind of file. For example, when sorting indexed files, the utility uses the file handler specified by the [iscobol.file.index](../Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration) property. The activity of this utility is traced in the isCOBOL log if [iscobol.tracelevel](../Compiler-and-Runtime/Configuration/Configuration-Properties#general-runtime-configuration) includes the value 8 (trace file activity).

### Usage

ISSORT accepts a quite complex set of instructions in order to fulfill the user requirements.

The instructions may appear directly on the command line,

```cobol
issort <instructions>
```

or they may be included in a separate text file

```cobol
issort take <filename>
```

Passing instructions directly on the command line is appropriate if you want to execute a simple sort with few parameters. When you choose this method, you must ensure that the operating system conventions and limits are fulfilled.

Passing instructions through a text file is appropriate if you need to execute a sort with a large number of options.

ISSORT uses the isCOBOL framework, so any configuration on it is inherited by ISSORT.

One of the following exit status is returned:

| | |
| --- | --- |
| 0 | Success |
| 2 | Unsupported feature |
| 15 | Command statement error(s) detected |
| 100 | I/O error |
| | |

### Instructions

The following instructions are accepted by ISSORT.

- SORT / MERGE

These instructions specify either a sort or a merge option and must be followed by a FIELDS instruction specifying the field(s) to be used. Only one between these two options can be used.

- FIELDS

FIELDS allows you to specify the fields on which the file is sorted/merged; the syntax for this instruction is:

```cobol
FIELDS (<start>,<length>,<type>,<order>[,<start>,<length>,<type>,<order>]...)
```

Where:

  - *start* is the offset in bytes of the field starting from 1
  - *length* is the length in byes of the field
  - *type* is a two letters code indicating the format of the data. Allowed codes are:

| | |
| --- | --- |
| bi | PIC 9 COMP |
| c5 | PIC 9 COMP-5 |
| c6 | PIC 9 COMP-6 |
| ch | Alphanumeric |
| cx | COMP-X |
| fl | floating point (length must be 4 or 8) |
| li | PIC S9 DISPLAY LEADING |
| ls | PIC S9 DISPLAY LEADING SEPARATE |
| nu | PIC 9 DISPLAY |
| pd | PIC S9 COMP-3 |
| s5 | PIC S9 COMP-5 |
| sb | PIC S9 COMP |
| ti/zd | PIC S9 DISPLAY TRAILING INCLUDED |
| ts | PIC S9 DISPLAY TRAILING SEPARATE |
| | |

  - *order* is a one letter code indicating the ordering of the field in the output file. Allowed codes are:

| | |
| --- | --- |
| a | ascending |
| d | descending |
| | |

  - enclosing the FIELDS value between parenthesis provides better readability, but it’s not mandatory.

- USE / GIVE

These instructions allow you to specify the input file and output file, respectively, of a sort or merge process. The input and output file descriptions may include ORG, RECORD, and KEY phrases, which define the file's characteristics. The syntax for these instructions is as follows:

```cobol
USE <filename>
               ORG <filetype>
               RECORD { F <r-length>             }
                      { V <r-length> <r-max-len> }
               KEY (<k-start>,<k-length>,<key-type>[,<k-start>,<k-length>,<key-type>]...)
 
               
GIVE <filename>
               ORG <filetype>
               RECORD { F <r-length>             }
                      { V <r-length> <r-max-len> }
               KEY (<k-start>,<k-length>,<key-type>[,<k-start>,<k-length>,<key-type>]...)
```

Where:

  - *filename* is name of the file: it will be searched for according to the rules specified for the isCOBOL framework
  - *filetype* is a two letter code indicating the format of the file. Allowed codes are:

| | |
| --- | --- |
| ix | indexed file |
| ls | line sequential file |
| rl | relative file |
| sq | sequential file |
| | |

  - *r-length* is the length in bytes of the record
  - *r-max-len* is the maximum length in bytes of the record
  - *k-start* is the offset in bytes of the key, starting from 1
  - *k-length* is the length in bytes of the key
  - *key-type* is a code indicating the key type. Allowed codes are:

| | |
| --- | --- |
| p | primary key |
| a | alternate key |
| ad | alternate key with duplicates |
| c | segment of the previous key |
| | |

  - enclosing the KEY value between parenthesis provides better readability, but it’s not mandatory.

**Note** - The primary key must be specified before any other key.

If *filetype* is not specified then ORG=sq is implied.

RECORD F means that the record length is fixed while RECORD V means that the record length is variable. In the case of RECORD V, you must supply the maximum record length.

**Note** - the KEY instruction must be specified only when indexed files are involved.

• INCLUDE / OMIT

These instructions allow to specify a condition under which records may be included or excluded from, respectively, the output file. Only one of these instructions may be specified. Note that the comma characters can always be omitted in order to improve the readability of the expression.

The syntax for these instructions is as follows:

```cobol
INCLUDE [<format-clause>] <cond-clause> [<format-clause>]
OMIT    [<format-clause>] <cond-clause> [<format-clause>]
```

Where:

  - *Format-clause* has the following syntax:

```cobol
FORMAT [=] <type>
```

Where *type* is a two letter code indicating the format of the data, as specified in the FIELDS instruction.

This clause allows you to set a default data type to be used when no explicit data type is indicated. If this clause is omitted then its default value is 'nu'.

  - *Cond-clause* has the following syntax:

```cobol
COND [=] (<left-value>, <comp-op>, <right-value>
                             [,<log-op>, <left-value>, <comp-op>, <right-value>]...)
```

Where *left-value* is the combination of start, length and type with the same format and meaning as for the FIELDS instruction except that a further type 'ss' can be used: in such a case a substring search is performed, as explained below.

*comp-op* is one of the following two letters codes:

| | |
| --- | --- |
| eq | equal to |
| ne | not equal to |
| gt | greater than |
| lt | less than |
| ge | equal to or greater than |
| le | equal to or less than |
| | |

*right-value* can be either

  - a combination of start, length and type as for left-value
  - a constant string preceded by the letter c (e.g. c'some data')
  - a constant number

*log-op* is one of the following codes:

| | |
| --- | --- |
| and | and |
| & | and |
| or | or |
| \| | or |
| | |

The logical operators AND and OR are evaluated following the common precedence rule (AND is evaluated before OR), however the evaluation order can be altered by inserting parenthesis in the appropriate positions.

When the 'ss' type is used in a left-value then the following restrictions apply:

- *comp-op* must be either 'eq' or 'ne';
- *right-value* must be a constant string.

In such a case a substring search is performed: if *left-value* is bigger in size than *right-value* then the record is checked for an occurrence of what specified in *right-value*, otherwise if *right-value* is bigger in size than *left-value* then the string specified as *right-value* will be searched for an occurrence of the content of the record.

For example:

```cobol
cond=15,3,ss,eq,c'J69L92'
```

is true if the record, starting at position 15 for 3 bytes, contains any of the following sequence: J69,69L,9L9,L92;

```cobol
cond=1,10,ss,eq,c'J82'
```

is true if the record, starting at position 1 for 10 bytes, contains the sequence J82 in any position.

### Syntax rules

All the keywords are case-insensitive.

Constant strings within the instructions can be enclosed in quote or double quote: in order to use the quotes in a string you must double them: for example if you want to process a file named *my'file* you can use one of the following expressions:

```cobol
"my'file"
'my''file'
```

### Example

The below commands sorts an indexed file and stores the sorted records in a line sequential text file.

The input file *idxfile* is an indexed file with a primary key with 2 segments and an alternate key with duplicates. Its record length is 40 bytes and it is fixed.

The output file *output.txt* is a line sequential file.

The sort is performed on the first 6 characters in descending order. Only the records containing a number, in unsigned display format starting at offset 37 and 4 bytes long, whose value is greater or equal to 902 are included in the output file.

```cobol
issort take sort.cmd
```

Content of *sort.cmd*:

```cobol

sort
 fields (1, 6, ch, d) 
 use idxfile
     org ix record f 40 key (1, 6, p, 7, 15, c, 22, 15, ad)
 give output.txt 
     org ls record f 40
 include cond = 37,4,ge,902
```

### Thin Client

ISSORT can’t be launched directly by the isCOBOL Client. If you need to perform a sort in thin client environment, either on the client machine or the server machine, you should consider calling the [C$SORT](\) routine.
