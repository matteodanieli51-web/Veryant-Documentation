### COLUMN clause

The COLUMN clause identifies a printable item, or a set of printable items, and specifies their horizontal location in a report line, or specifies the horizontal screen coordinate for a screen item.

#### Format 1 (Report)

```cobol
{ COLUMN   } { NUMBER  } { IS  } integer-1 { PLUS } integer-2
{ COLUMNS  } { NUMBERS } { ARE }           {   +  }
{ COL      }
{ COLS     }
 
      { LEFT    }
      { CENTER  }
      { RIGHT   }
```

##### Syntax rules

1. COLUMN, COL, COLUMNS, and COLS are synonyms.
2. PLUS and + are synonyms.
3. The COLUMN clause may be specified only in an elementary entry. The entry shall also contain a LINE clause or shall be subordinate to an entry containing a LINE clause.
4. The keyword ARE may be specified only if COLUMNS, COLS, or NUMBERS is specified.
5. The keyword IS shall not be specified if COLUMNS, COLS, or NUMBERS is specified.
6. Neither integer-1 nor integer-2 shall exceed the page width.
7. Within a given report line, any two or more absolute items defined using column numbers that are not in increasing numerical order shall be subject to a different PRESENT WHEN clause.
8. The set of printable items within a given report line is subject to the following rules:

a. If any two or more items overlap each other, they shall each be subject to a different PRESENT WHEN clause.

b. The rightmost column positions of all absolute items shall not exceed the page width

9. If the report line ends in a set of relative printable items or consists only of such, they shall not cause the page width to be exceeded unless each of them is subject to a different PRESENT WHEN clause, in which case this rule applies only to the largest of them.
10. If LEFT, CENTER, or RIGHT is specified, all the operands shall be absolute. If any of the operands is absolute and neither LEFT, CENTER, nor RIGHT is specified, LEFT is assumed.
11. If more than one integer-1 or integer-2 operand is specified the clause is referred to as a multiple COLUMN clause and the following additional rules apply:

a. No OCCURS clause shall be specified in the same entry.

b. All the occurrences of integer-1 shall be in increasing order of magnitude.

##### General rules

1. The COLUMN clause defines one or more printable items. If a COLUMN clause is not specified, the items are not printed.
2. There is a fixed correspondence, specified by the implementor, between a column and a character in a national character set.
3. The printable-size of a printable item is the number of columns required for printing the characters described by the item's PICTURE clause or, in the absence of a PICTURE clause, the literal specified in the VALUE clause. There is a one-to-one correspondence between a column and a character in an alphanumeric character set.

**NOTE**: Columns might not line up in a report if the printable characters are not of a fixed size, such as in the characterset UTF-8.

4. Any report line shall be defined in such a way that any given column position is used for only one printable item when the line is printed. If this rule is violated the EC-REPORT-COLUMN-OVERLAP exception condition is set to exist and the results are undefined.
5. Any report line shall be defined in such a way that, when printed, the final column position of the last printable item does not exceed the page width. If this rule is violated the EC-REPORT-PAGE-WIDTH exception condition is set to exist, the report line is truncated, and the report line is printed.
6. If the integer-1 phrase is specified, the following general rules apply:

a. Integer-1 specifies an absolute column number.

b. If LEFT is specified, integer-1 is the leftmost column of the printable item. The rightmost column of the printable item is integer-1 + printable-size – 1.

c. If RIGHT is specified, integer-1 is the rightmost column of the printable item. The leftmost column of the printable item is integer-1 – printable-size + 1.

d. If CENTER is specified, the printable item is centered, as follows:

i. If the printable-size of the printable item is an odd number of columns, integer-1 identifies the center column of the printable item. The leftmost column is integer-1 - ((printable-size - 1) / 2); the rightmost column is integer-1 + (printable-size / 2), truncated to an integer.

ii. If the printable-size of the printable item is an even number of columns, integer-1 identifies the column of the printable item that is to the left of an imaginary line between the two middle columns of the printable item. The leftmost column is (integer-1 - (printable-size / 2)) + 1; the rightmost column is integer-1 + (printable-size / 2).

7. Within any given report line, a horizontal counter, representing the rightmost occupied column, is maintained and updated by each printable item in the line. At the start of the line, the horizontal counter is zero.
8. Integer-2 specifies a relative column number. If integer-2 is specified for an item that is the first printable item in the current line, it specifies the leftmost column of that item. Otherwise, the value of integer-2 is the number of column positions between the rightmost column of the preceding printable item and the leftmost column of the item being defined. The position of the item's leftmost character is obtained by adding integer-2 to the current line's horizontal counter.

**NOTE**: The value of integer-2 minus 1 is the number of blank columns, if any, immediately preceding the item.

9. The rightmost column position of each printable item becomes the new value of the horizontal counter.
10. Any unoccupied columns in each print line are filled with space characters.
11. If an entry containing a LINE clause has no subordinate entry defining a printable item, the resultant report line will be blank.
12. A multiple COLUMN clause is functionally equivalent to a COLUMN clause with a single operand, together with a simple OCCURS clause whose integer is equal to the number of operands of the COLUMN clause, except that the multiple COLUMN clause allows the printable items to be defined at unequal horizontal intervals.

#### Format 2 (Screen)

```cobol
{COLUMN  } [ NUMBER IS [PLUS] {Data-Name-3} ]
{COL     }             [+   ] {Integer-3  }
{POSITION}             [-   ]
{POS     }
```

##### Syntax rules

1. COLUMN, COL, POS and POSITION are synonyms.
2. PLUS and '+' are synonyms.
3. *Data-Name-3* shall be described in the file, working-storage, local-storage or linkage section as an elementary unsigned integer data item.
4. Neither the PLUS phrase nor the '\-' phrase shall be specified for the first elementary item in a screen record.

##### General rules

1. The COLUMN clause specifies the column in which the leftmost character of the screen item is to appear on the screen during the execution of an [ACCEPT](../../Procedure-Division-Statements/ACCEPT) screen or a [DISPLAY](../../Procedure-Division-Statements/DISPLAY) screen Statement. Positioning of the screen record and within the screen record appears the same on the terminal display regardless of whether the whole screen record or just a portion of it is referenced in an [ACCEPT](../../Procedure-Division-Statements/ACCEPT) screen or a [DISPLAY](../../Procedure-Division-Statements/DISPLAY) screen Statement.
2. If the COLUMN clause does not specify PLUS or MINUS, the clause gives the column number relative to the first column of the screen record. A column number of 1 represents the first column of the screen record.
3. If the PLUS or '\-' phrase is specified in the COLUMN clause, the column number is relative to the end of the preceding screen item in the same screen record, such that if COLUMN PLUS 1 is specified, the screen item starts immediately following the preceding screen item. PLUS denotes a column position that is increased by the value of *Data-Name-3* or *Integer-3*. '\-' denotes a column position that is decreased by the value of *Data-Name-3* or *Integer-3*.
4. A setting of COLUMN 1 is assumed for screen descriptions that specify the LINE clause but omit the COLUMN clause.
5. If both the LINE clause and the COLUMN clause are omitted, the following apply:

a. if no previous screen item has been defined, LINE 1 COLUMN 1 of the screen is assumed.

b. if a previous screen item has been defined, the line of that previous item and COLUMN PLUS 1 is assumed.

6. If a column number of zero is specified, the results are as if 1 were specified for the column number.
