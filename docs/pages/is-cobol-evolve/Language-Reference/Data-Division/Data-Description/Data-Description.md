## Data Description

To make data as computer-independent as possible, the characteristics or properties of the data are described in relation to a standard data format rather than an equipment-oriented format. This standard data format is oriented to general data processing applications and uses the decimal system to represent numbers (regardless of the radix used by the computer) and all characters of the COBOL character set to describe nonnumeric data items.

The initial value of data items is spaces, except for items possessing the external attribute whose initial value is binary zeros (NULL).

### General format

#### Format 1

```cobol
Level-Number {Data-Name-1 } { [REDEFINES clause]            }
             {FILLER      }   [IS EXTERNAL clause]
                              [IS EXTERNAL-FORM clause]
                              [IS GLOBAL clause]
                              [IS IDENTIFIED clause]
                              [IS SPECIAL-NAMES clause]
                              [IS THREAD-LOCAL clause]
                              [IS TYPEDEF clause]
                              PICTURE clause 
                              {[USAGE clause]      }
                              {[GROUP-DYNAMIC clause]}
                              {[GROUP-USAGE clause]}
                              [SIGN clause]
                              [OCCURS clause]
                              [SYNCHRONIZED clause]
                              [JUSTIFIED clause]
                              [BLANK WHEN ZERO clause]
                              [VALUE clause]
                              [PROPERTY clause]
                              
                            { SAME AS clause                }
```

#### Format 2

```cobol
66 Data-Name-1 RENAMES clause
```

#### Format 3

```cobol
88 Condition-Name-1 
 
  {VALUE } [IS ] { Literal-2 [ {THROUGH} Literal-3 ] } ... [ WHEN SET TO FALSE Literal-4 ] .
  {VALUES} [ARE]               {THRU   }
```

#### Format 4

```cobol
78 Constant-Name-1 
 
  [CONSTANT] VALUE IS { Nonnumeric-Literal-1                            } .
                      { Numeric-Literal-1 [ {+} Numeric-Literal-2 ] ... }
                                            {-}
                                            {*}
                                            {/}
           { LENGTH OF Data-Name-9                           }
           { BYTE-LENGTH OF Data-Name-10                     }
           { START OF Data-Name-10                           }
```

#### Format 5

```cobol
01 Constant-Name-1
 
  CONSTANT AS { Nonnumeric-Literal-1                            } .
              { Numeric-Literal-1 [ {+} Numeric-Literal-2 ] ... }
                                    {-}
                                    {*}
                                    {/}
              { BYTE-LENGTH OF Data-Name-9                      }
              { LENGTH OF Data-Name-10                          }
              { START OF Data-Name-10                           }
```

### Syntax rules

1. *Data-Name-1* or the FILLER clause, if specified, must immediately follow *Level-Number*.
2. If the REDEFINES clause is specified, the IDENTIFIED clause, if any, is ignored.
3. *Data-Name-1*, *Constant-Name-1* and *Condition-Name-1* are [User-defined word](../../Preface/Definitions#user-defined-word)s, as defined in the [Definitions](../../Preface/Definitions) section in the Preface of this document.
4. *Literal-1* is a [Literal](../../Preface/Definitions#literal), as defined in the [Definitions](../../Preface/Definitions) section in the Preface of this document. The [category](./PICTURE-clause) of *Literal-1* must match the [category](./PICTURE-clause) of the item being described.
5. *Nonnumeric-Literal-1* is a [Nonnumeric Literal](../../Preface/Definitions#nonnumeric-literal), as defined in the [Definitions](../../Preface/Definitions) section in the Preface of this document.
6. *Numeric-Literal-1* and *Numeric-Literal-2* are [Numeric Literal](../../Preface/Definitions#numeric-literal)s, as defined in the [Definitions](../../Preface/Definitions) section in the Preface of this document.
7. *Literal-2, Literal-3* and *Literal-4* are [Literal](../../Preface/Definitions#literal)s, as defined in the [Definitions](../../Preface/Definitions) section in the Preface of this document.
8. *Nonnumeric-Literal-1, Numeric-Literal-1* and *Numeric-Literal-2* cannot be figurative constants.

### General rules

#### Format 1

1. Level-Number must be 01 thru 49, or 77.
2. The SYNCHRONIZED, PICTURE, JUSTIFIED, and BLANK WHEN ZERO clauses must not be specified except for an elementary data item.

#### Format 3

1. Format 3 is used for each condition-name. Each condition-name requires a separate entry with level-number 88. Format 3 contains the name of the condition and the value, values, or range of values associated with the condition-name. The condition-name entries for a particular conditional variable must immediately follow the entry describing the item with which the condition-name is associated. A condition-name can be associated with any data description entry which contains a level-number except the following:

a. Another condition-name.

b. A level 66 item.

c. A group containing items with descriptions including JUSTIFIED, SYNCHRONIZED, or USAGE (other than USAGE IS DISPLAY).

d. An index data item.

2. Multiple level 01 entries subordinate to any given [level indicator](../File-Section/File-description#syntax-rules), represent implicit redefinitions of the same area. See the [FILE Section](../File-Section/File-Section) in the [Data Division](../Data-Division) for details about level indicators.
3. *Data-Name-1* specifies the name of the data item being described. The key word FILLER may be used to specify a data item which is not referenced explicitly. If neither *Data-Name-1* nor FILLER are specified, FILLER is implied.
4. The VALUE clause and the condition-name itself are the only two clauses permitted in the entry. The characteristics of a condition-name are implicitly those of its conditional variable.
5. Wherever the THRU phrase is used, *Literal-2* must be less than *Literal-3*.

#### Format 4

1. The name of a constant can be used anywhere the corresponding [Literal](../../Preface/Definitions#literal) can be used.
2. If *Nonnumeric-Literal-1* is specified, the [class and category](../Concept-of-Classes-of-Data) of *Constant-Name-1* is the same as that of *Nonnumeric-Literal-1*.
3. If *Numeric-Literal-1* is specified, the [class and category](../Concept-of-Classes-of-Data) of *Constant-Name-1* is numeric.
4. If the BYTE-LENGTH phrase is specified, the [class and category](../Concept-of-Classes-of-Data) of *Constant-Name-1* is numeric. *Constant-Name-1* is an integer. The value of *Constant-Name-1* is determined as specified in the BYTE-LENGTH intrinsic function with the exception that when *Data-Name-9* is an occurs-depending group item, the maximum size of the data item is used.
5. If the LENGTH phrase is specified, the [class and category](../Concept-of-Classes-of-Data) of *Constant-Name-1* is numeric. *Constant-Name-1* is an integer. The value of *Constant-Name-1* is determined as specified in the LENGTH intrinsic function with the exception that when *Data-Name-10* is an occurs-depending group item, the maximum size of the data item is used.
6. If the START phrase is specified, the [class and category](../Concept-of-Classes-of-Data) of *Constant-Name-1* is numeric. *Constant-Name-1* is an integer. The value of *Constant-Name-1* is determined as the offset of *Data-Name-10*.
7. *Constant-Name-1* may be omitted to specify a data item which is not referenced explicitly.

#### Format 5

1. Constant-name-1 may be used anywhere the corresponding [Literal](../../Preface/Definitions) can be used.
2. If Nonnumeric-Literal-1 is specified, the [class and category](../Concept-of-Classes-of-Data) of *Constant-Name-1* is the same as that of Nonnumeric-Literal-1.
3. If Numeric-Literal-1 is specified, the [class and category](../Concept-of-Classes-of-Data) of *Constant-Name-1* is numeric.
4. If the BYTE-LENGTH phrase is specified, the [class and category](../Concept-of-Classes-of-Data) of *Constant-Name-1* is numeric. *Constant-Name-*1 is an integer. The value of *Constant-Name-1* is determined as specified in the BYTE-LENGTH intrinsic function with the exception that when *Data-Name-1* is an occurs-depending group item, the maximum size of the data item is used.
5. If the LENGTH phrase is specified, the [class and category](../Concept-of-Classes-of-Data) of Constant-Name-1 is numeric. *Constant-Name-1* is an integer. The value of *Constant-Name-1* is determined as specified in the LENGTH intrinsic function with the exception that when *Data-Name-*2 is an occurs-depending group item, the maximum size of the data item is used.
