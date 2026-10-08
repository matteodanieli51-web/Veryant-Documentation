### LINE clause

The LINE clause specifies vertical positioning for its screen item.

#### General format

```cobol
LINE [ NUMBER IS [PLUS] {Data-Name-6} ]
                 [+   ] {Integer-5  }
                 [-   ]
```

#### Syntax rules

1. PLUS and '+' are synonyms.
2. *Data-Name-6* shall be described in the file, working-storage, local-storage or linkage section as an elementary unsigned integer data item.
3. Neither the PLUS phrase nor the '\-' phrase shall be specified for the first elementary item in a screen record.

#### General rules

1. The LINE clause, in conjunction with the [COLUMN clause](./COLUMN-clause), establishes the starting coordinates for a screen item within a screen record. The LINE clause specifies the vertical coordinate. Positioning of the screen record and within the screen record appears the same on the terminal display regardless of whether the whole screen record or just a portion of it is referenced in an [ACCEPT](../../Procedure-Division-Statements/ACCEPT) screen or a [DISPLAY](../../Procedure-Division-Statements/DISPLAY) screen Statement.
2. If the LINE clause does not specify PLUS or '\-', the clause gives the line number relative to the start of the screen record. A line number of 1 represents the first line of the screen record.
3. If the PLUS or '\-' phrase is specified in the LINE clause, the line number is relative to the end of the preceding screen item in the same screen record. PLUS denotes a line position that is increased by the value of *Data-Name-6* or *Integer-5*. '\-' denotes a line position that is decreased by the value of *Data-Name-6* or *Integer-5*.
4. If the LINE clause is omitted, the following apply:

a. if no previous screen item has been defined, LINE 1 of the screen record is assumed.

b. if a previous screen item has been defined, the line of that previous item is assumed
