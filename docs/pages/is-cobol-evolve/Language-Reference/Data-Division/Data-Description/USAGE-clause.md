### USAGE clause

The USAGE clause specifies the format of a data item in the computer storage.

#### General format

```cobol
[ USAGE IS ] {Usage-String-1}
             {Usage-String-2}
```

#### Usage-String-1 format:

```cobol
  { DISPLAY         }
  { DISPLAY-1         }
  { NATIONAL         }
{ {BINARY          [(size)] } }
  {COMP-5          [(size)] } 
  {COMPUTATIONAL-5 [(size)] }
{ {COMP                     } }
  {COMPUTATIONAL            }
  {COMP-4          [(size)] }
  {COMPUTATIONAL-4 [(size)] }
{ {COMP-1         } }
  {COMPUTATIONAL-1}
{ {COMP-2         } }
  {COMPUTATIONAL-2}
{ {COMP-3         } }
  {COMPUTATIONAL-3}
  {PACKED-DECIMAL }
{ {COMP-6         } }
  {COMPUTATIONAL-6}
{ {COMP-9         } }
  {COMPUTATIONAL-9}
{ {COMP-N         } }
  {COMPUTATIONAL-N}
{ {COMP-X         } }
  {COMPUTATIONAL-X}
{ {COMP-0         } }
  {COMPUTATIONAL-0}
```

#### Usage-String-2 format:

```cobol

{ CDATA                                                       }
{ DOUBLE                                                      }
{ FLOAT                                                       }
{ INDEX                                                       }
{ OBJECT REFERENCE [ { [ FACTORY OF ] Class-Name [ ONLY ] } ] }
                   [ { [ FACTORY OF ] ACTIVE-CLASS  ]     }   }
{ {SIGNED-INT}                                                }
  {INTEGER   }
{ SHORT                                                       }
{ INT                                                         }
{ LONG                                                        }
{ SIGNED-INT                                                  }
{ SIGNED-LONG                                                 }
{ SIGNED-SHORT                                                }
{ UNSIGNED-INT                                                }
{ UNSIGNED-LONG                                               }
{ UNSIGNED-SHORT                                              }
{ {HANDLE } [ OF { Control                 } ]                }
  {POINTER}      { MENU                    }
                 { SUBWINDOW               }
                 { THREAD                  }
                 { VARIANT                 }
                 { LAYOUT-MANAGER          }
                 { control-class           }
                 { FONT [DEFAULT-FONT    ] }
                        [FIXED-FONT      ]
                        [LARGE-FONT      ]
                        [MEDIUM-FONT     ]
                        [SMALL-FONT      ]
                        [TRADITIONAL-FONT]
{ SQL TYPE IS { BLOB   [(Lob-Length)]                         }
              { CLOB   [(Lob-Length)]                         }
              { DBCLOB [(Lob-Length)]                         }
              { BLOB-LOCATOR                                  }
              { CLOB-LOCATOR                                  }
              { DBCLOB-LOCATOR                                }
{ BIT                                                         }
```

#### Syntax rules

1. The USAGE clause may be specified for both group and elementary data items.
2. If the USAGE clause is written in the data description entry for a group item, it may also be written in the data description entry for any subordinate elementary item or group item, but the same usage must be specified in both entries.
3. An elementary data item whose declaration contains, or an elementary data item subordinate to a group item whose declaration contains, a USAGE clause specifying Usage-String-1 must be declared with a PICTURE character-string that describes a numeric item, i.e., a PICTURE character-string that contains only the symbols 'P', 'S', 'V', and '9' (see the [PICTURE clause](./PICTURE-clause)). Data items with USAGE COMP-N, USAGE COMP-5 and USAGE COMP-X may also be declared PICTURE character-string containing only 'X' symbols.
4. The words COMP, COMPUTATIONAL, COMP-4, COMPUTATIONAL-4 and BINARY are equivalent.
5. size is a numeric literal.
6. The words COMP-1 and COMPUTATIONAL-1 are equivalent.
7. The words COMP-2 and COMPUTATIONAL-2 are equivalent.
8. The words COMP-3 and COMPUTATIONAL-3 are equivalent.
9. The words COMP-5 and COMPUTATIONAL-5 are equivalent.
10. The words COMP-6 and COMPUTATIONAL-6 are equivalent.
11. The words COMP-9 and COMPUTATIONAL-9 are equivalent.
12. The words COMP-N and COMPUTATIONAL-N are equivalent.
13. The words COMP-X and COMPUTATIONAL-X are equivalent.
14. The words SIGNED-INT and INTEGER are equivalent.
15. The [BLANK WHEN ZERO](./BLANK-WHEN-ZERO-clause), [JUSTIFIED](./JUSTIFIED-clause), [PICTURE](./PICTURE-clause), [SYNCHRONIZED](./SYNCHRONIZED-clause), and [VALUE](./VALUE-clause) clauses must not be specified for data items whose usage is Usage-String-2.
16. Class-Name may be a [Nonnumeric Literal](../../Preface/Definitions#nonnumeric-literal) referring to a primitive Java type (i.e. "int") an existing class (i.e. "java.lang.Integer") or a class defined in the [REPOSITORY Paragraph](../../Environment-Division/Configuration-Section/Repository) in the Configuration Section of the ENVIRONMENT DIVISION. You can add "\[\]" to specify an array. You can add the class type enclosed between < and > (generics). When referring to a primitive Java type or to an existing class, you can add the "..." suffix to define a variable number of occurrences of the class (varargs).
17. Control may be one of the supported controls. See the [Controls Reference](../../../User-Interface/Controls-Reference/Controls-Reference) for the complete list.
18. The words COMP-0, COMPUTATIONAL-0 and SIGNED-SHORT are equivalent.
19. The ACTIVE-CLASS phrase may be specified only in a factory definition, an instance definition, or the linkage or working-storage section of a method definition.
20. *Lob-Length* is a numeric literal optionally followed by K to specify Kilobytes, M to specify Megabytes or G to specify Gigabytes. K, M and G are case insensitive. If the literal is not followed by K, M or G, the length is expressed in Bytes.

#### General rules

1. If the USAGE clause is written at a group level, it applies to each elementary item in the group.
2. The USAGE clause specifies the manner in which a data item is represented in the storage of a computer. It does not affect the use of the data item, although the specifications for some statements in the Procedure Division may restrict the USAGE clause of the operands referred to. The USAGE clause may affect the radix or type of character representation of the item.
3. If the USAGE clause is not specified for an elementary item, or for any group to which the item belongs, the usage is implicitly DISPLAY.
4. Decimal storage means that only half of a byte is used to store the value of a digit in binary format.
5. Binary storage means that one byte is used to store the value of one or more digits.
6. Big Endian and Little Endian refer to sequencing methods used to store bytes. Big Endian (big units first) means that bytes are stored from left to right, that is, from lowest to highest memory address. Little Endian (little units first) means that bytes are stored from right to left, that is, from highest to lowest memory address.
7. The DISPLAY-1 phrase defines an item as DBCS. The data item is stored in character form, with each character occupying 2 bytes of storage.
8. The NATIONAL phrase defines an item whose content is represented in storage in UTF-16. The class and category of the data item depend on the picture symbols that are specified in the associated PICTURE clause.
9. The USAGE IS DISPLAY clause (whether specified explicitly or implicitly) specifies that a standard data format is used to represent a data item in the storage of the computer, and that the data item is aligned on a character boundary. The effective size of data item depends on the [PICTURE](./PICTURE-clause) and [SIGN](./SIGN-clause) clauses. Each digit occupies one byte. If the data item is signed, the sign is stored in the rightmost byte. The [SIGN clause](./SIGN-clause), and the [Compiler Options](../../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options) may affect this behavior. The following table shows a mapping of digits to characters stored in USAGE DISPLAY items when specifying the different data storage compatibility compiler options:

| | | | Compiler Option | | | |
| --- | --- | --- | --- | --- | --- | --- |
| DIGIT | -Dca<br>-Dcb<br>-Dcd<br>-Dcdm<br>-Dcm<br>-Dcmi<br>-Dcr | -Dcm<br>-Dcmi | -Dci<br>-Dcii<br>-Dcn<br>-Dcv | -Dca<br>-Dcd<br>-Dcdm<br>-Dci<br>-Dcii<br>-Dcn | -Dcb | -Dcr |
|  | Positive | Negative | Positive | Negative | Negative | Negative |
| 0 | ‘0’ | ‘p’ | ‘{‘ | ‘}’ | ‘@’ | x’20’ |
| 1 | ‘1’ | ‘q’ | ‘A’ | ‘J’ | ‘A’ | ! |
| 2 | ‘2’ | ‘r’ | ‘B’ | ‘K’ | ‘B’ | “ |
| 3 | ‘3’ | ‘s’ | ‘C’ | ‘L’ | ‘C’ | # |
| 4 | ‘4’ | ‘t’ | ‘D’ | ‘M’ | ‘D’ | $ |
| 5 | ‘5’ | ‘u’ | ‘E’ | ‘N’ | ‘E’ | % |
| 6 | ‘6’ | ‘v’ | ‘F’ | ‘O’ | ‘F’ | & |
| 7 | ‘7’ | ‘w’ | ‘G’ | ‘P’ | ‘G’ | ‘ |
| 8 | ‘8’ | ‘x’ | ‘H’ | ‘Q’ | ‘H’ | ( |
| 9 | ‘9’ | ‘y’ | ‘I’ | ‘R’ | ‘I’ | ) |

10. The USAGE IS COMPUTATIONAL clause specifies that the numeric item is stored in Big Endian binary format. The data item may be signed.

The effective size of data item depends on the [PICTURE clause](./PICTURE-clause) and compile flags, according to the following table:

| Number of digits | Bytes<br><br> -Dca<br>-Dcb<br>-Dcmi<br>-Dci<br>-Dcii<br>-Dcv | Bytes<br><br> -Dcd<br>-Dcm<br>-Dcr | Bytes<br><br> -Dcdm | Bytes<br><br> -Dci + -D1<br>-Dcn |
| --- | --- | --- | --- | --- |
| 1-2 | 2 | 1 | 1 | 1 |
| 3-4 | 2 | 2 | 2 | 2 |
| 5-6 | 4 | 3 | 3 | 4 |
| 7 | 4 | 3 | 4 | 4 |
| 8-9 | 4 | 4 | 4 | 4 |
| 10-11 | 8 | 5 | 5 | 8 |
| 12 | 8 | 5 | 6 | 8 |
| 13-14 | 8 | 6 | 6 | 8 |
| 15-16 | 8 | 7 | 7 | 8 |
| 17-18 | 8 | 8 | 8 | 8 |
| 19 | 12 | 8 | 9 | 12 |
| 20-21 | 12 | 9 | 9 | 12 |
| 22-23 | 12 | 10 | 10 | 12 |
| 24 | 12 | 10 | 11 | 12 |
| 25-26 | 12 | 11 | 11 | 12 |
| 27-28 | 12 | 12 | 12 | 12 |
| 29-31 | 16 | 13 | 13 | 16 |

If size is specified, it takes priority on the above table.

11. The USAGE IS COMPUTATIONAL-1 clause specifies that the numeric item is stored in Big Endian binary format. The data item occupies two bytes and it is always signed. It can store values from -32767 to +32767, regardless of the [PICTURE clause](./PICTURE-clause). Under the [-cv](../../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#compatibility-options) compiler option, COMPUTATIONAL-1 is treated as FLOAT and occupies four bytes.
12. The USAGE IS COMPUTATIONAL-2 clause specifies that the numeric item is stored in Big Endian decimal format. Each digit occupies one byte and uses only the low-order half-byte. When the data item is signed, an additional trailing byte is used.

The following table shows the rightmost byte value used to represent the sign representation for USAGE COMP-2 items when specifying the different data storage compatibility compiler options:

| | Compiler Option | |
| --- | --- | --- |
| -Dca<br>-Dcd<br>-Dcdm | -Dcb<br>-Dci<br>-Dcii<br>-Dcm<br>-Dcmi<br>-Dcn<br>-Dcr<br>-Dcv | -Dca<br>-Dcb<br>-Dcd<br>-Dcdm<br>-Dci<br>-Dcii<br>-Dcm<br>-Dcmi<br>-Dcn<br>-Dcr<br>-Dcv |
| Positive | Positive | Negative |
| x‘0B’ | x‘0C’ | x‘0D’ |

Under the [-cv](../../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#compatibility-options) compiler option, COMPUTATIONAL-2 is treated as DOUBLE.

13. The USAGE IS COMPUTATIONAL-3 clause specifies that the numeric item is stored in Big Endian decimal format. Each digit occupies half of a byte. The last trailing half-byte is always reserved for sign, even if the [PICTURE clause](./PICTURE-clause) does not contain the 'S' symbol.

The effective size of data item depends on the [PICTURE clause](./PICTURE-clause), according to the following table:

| Number of digits | Bytes |
| --- | --- |
| 1 | 1 |
| 2-3 | 2 |
| 4-5 | 3 |
| 6-7 | 4 |
| 8-9 | 5 |
| 10-11 | 6 |
| 12-13 | 7 |
| 14-15 | 8 |
| 16-17 | 9 |
| 18-19 | 10 |
| 20-21 | 11 |
| 22-23 | 12 |
| 24-25 | 13 |
| 26-27 | 14 |
| 28-29 | 15 |
| 30-31 | 16 |

The following table shows the rightmost nibble value used to represent the sign representation for USAGE COMP-3 items when specifying the different data storage compatibility compiler options:

| Compiler Option | Compiler Option | Compiler Option | Compiler Option | | |
| --- | --- | --- | --- | --- | --- |
| -Dca<br>-Dcd<br>-Dcdm | -Dcb<br>-Dci<br>-Dcii<br>-Dcm<br>-Dcmi<br>-Dcr<br>-Dcv | -Dcn | -Dca<br>-Dcb<br>-Dcd<br>-Dcdm<br>-Dci<br>-Dcii<br>-Dcm<br>-Dcmi<br>-Dcn<br>-Dcr<br>-Dcv | -Dca<br>-Dcb<br>-Dcd<br>-Dcdm<br>-Dci<br>-Dcii<br>-Dcm<br>-Dcmi<br>-Dcn<br>-Dcr | -Dcv |
| Positive | Positive | Positive | Negative | Unsigned | Unsigned |
| x‘0F’ | x‘0C’ | x’0B’ | x‘0D’ | x‘0F’ | x‘0C’ |

14. The USAGE IS COMPUTATIONAL-5 is primarily used to communicate with external programs that expect native data storage. The format of a COMPUTATIONAL-5 data item is identical to a COMPUTATIONAL data item, except that the data is stored in a machine-dependent format. A VALUE clause for a COMPUTATIONAL-5 data item is stored in a machine-independent format and is adjusted when it is loaded into the data item. If COMPUTATIONAL-5 is used with a PIC X(n) data item and assigned an alphanumeric value, the results are undefined. A PIC X(n) data item used with COMPUTATIONAL-5 cannot be signed.
15. The USAGE IS COMPUTATIONAL-6 clause specifies that the numeric item is stored in Big Endian decimal format. Each digit occupies half of a byte. The data item may not be signed.

The effective size of data item depends on the [PICTURE clause](./PICTURE-clause), according to the following table:

| Number of digits | Bytes |
| --- | --- |
| 1-2 | 1 |
| 3-4 | 2 |
| 5-6 | 3 |
| 7-8 | 4 |
| 9-10 | 5 |
| 11-12 | 6 |
| 13-14 | 7 |
| 15-16 | 8 |
| 17-18 | 9 |
| 19-20 | 10 |
| 21-22 | 11 |
| 23-24 | 12 |
| 25-26 | 13 |
| 27-28 | 14 |
| 29-30 | 15 |
| 31 | 16 |

16. The USAGE IS COMPUTATIONAL-9 clause specifies that the numeric item is stored in Big Endian decimal format. Each digit occupies half of abyte. The first leading half-byte is always reserved for sign, even if the [PICTURE clause](./PICTURE-clause) does not contain the 'S' symbol.

The effective size of data item depends on the [PICTURE clause](./PICTURE-clause), according to the following table:

| Number of digits | Bytes |
| --- | --- |
| 1 | 1 |
| 2-3 | 2 |
| 4-5 | 3 |
| 6-7 | 4 |
| 8-9 | 5 |
| 10-11 | 6 |
| 12-13 | 7 |
| 14-15 | 8 |
| 16-17 | 9 |
| 18-19 | 10 |
| 20-21 | 11 |
| 22-23 | 12 |
| 24-25 | 13 |
| 26-27 | 14 |
| 28-29 | 15 |
| 30-31 | 16 |

17. The USAGE IS COMPUTATIONAL-N clause specifies that the numeric item is stored in Big Endian binary format.

The effective size of data item depends on the [PICTURE clause](./PICTURE-clause), according to the following table:

| Number of digits | Bytes |
| --- | --- |
| 1-2 | 1 |
| 3-4 | 2 |
| 5-7 | 3 |
| 8-9 | 4 |
| 10-12 | 5 |
| 13-14 | 6 |
| 15-16 | 7 |
| 17-18 | 8 |

When the [PICTURE clause](./PICTURE-clause) contains only 'X' symbols, the number of 'X's represent the actual storage size of the data item. The maximum size of the item is 8. The maximum value that the data item can store is summarized in the following table:

| Size | Value |
| --- | --- |
| 1 | 255 |
| 2 | 65.535 |
| 3 | 16.777.215 |
| 4 | 4.294.967.295 |
| 5 | 1.099.511.627.775 |
| 6 | 281.474.976.710.655 |
| 7 | 72.057.594.037.927.935 |
| 8 | 9.223.372.036.854.775.807 |

18. The USAGE IS COMPUTATIONAL-X clause specifies that the numeric item is stored in Big Endian binary format.

The effective size of data item depends on the [PICTURE clause](./PICTURE-clause), according to the following table:

| Number of digits | Bytes |
| --- | --- |
| 1-2 | 1 |
| 3-4 | 2 |
| 5-7 | 3 |
| 8-9 | 4 |
| 10-12 | 5 |
| 13-14 | 6 |
| 15-16 | 7 |
| 17-19 | 8 |
| 20-21 | 9 |
| 22-24 | 10 |
| 25-26 | 11 |
| 27-28 | 12 |
| 29-31 | 13 |

When the [PICTURE clause](./PICTURE-clause) contains only 'X' symbols, the number of 'X's represent the actual storage size of the data item. The maximum allowed size of the item is 8. The maximum value that the data item can store is summarized in the following table:

| Size | Value |
| --- | --- |
| Size | Value |
| 1 | 255 |
| 2 | 65.535 |
| 3 | 16.777.215 |
| 4 | 4.294.967.295 |
| 5 | 1.099.511.627.775 |
| 6 | 281.474.976.710.655 |
| 7 | 72.057.594.037.927.935 |
| 8 | 9.223.372.036.854.775.807 |

19. The USAGE IS DOUBLE clause specifies that the numeric item is stored as a floating point double precision type.
20. The USAGE IS FLOAT clause specifies that the numeric item is stored as a floating point single precision type.
21. The USAGE IS INDEX clause specifies that the numeric item is stored in Big Endian binary format. The data item occupies four bytes. The data item can store positive integers ranging from 0 to 4.294.967.295.
22. The USAGE IS OBJECT clause specifies that the data item is a reference to an object.

a. The USAGE IS OBJECT clause may be specified only for 01 or 77 data items.

b. If none of the optional phrases is specified, the data item being defined is called a universal object reference. Its content may be a reference to any object.

c. If *Class-Name* is specified, the object referenced by this data item shall be an object of *Class-Name* or of a subclass of *Class-Name*, subject to the following rules:

i. If the FACTORY phrase is specified, the object referenced by this data item shall be the factory object of the specified class.

ii. If the FACTORY phrase is not specified, the object referenced by this data item shall be an instance object of the specified class.

The ONLY phrase is treated as a commentary.

When *Class-Name* is suffixed with "\[\]" the compiler internally treats it as array of objects of *Class-Name*.

When *Class-Name* is suffixed with "<type\>", where type is the fully qualified name of another class, the compiler internally treats it as a Java generic; the alternative syntax "\[type\]", with square brackets instead of less and greater signs, is supported for compatibility with other COBOLs; *type* can be either a fully qualified class name (i.e. "java.lang.String") or an identifier defined in the REPOSITORY paragraph.

When *Class-Name* is suffixed with "..." the compiler internally treats it as array of objects of *Class-Name*.

If a *Class-Name* is suffixed with "..." is used in the USING clause of PROCEDURE DIVISION or ENTRY POINT, it must be the last parameter and it’s considered as varargs, so the runtime expects variable number of occurrences of this parameter.

If a *Class-Name* is suffixed with "..." is used in the WORKING-STORAGE SECTION, the compiler treats it as a standard array. In this case "...". is synonymous of "\[\]".

d. If ACTIVE-CLASS is specified, the object referenced by this data item shall be of the same class as the object that was used to invoke the method in which this data description entry is specified, subject to the following rules

i. If the FACTORY phrase is specified, the object referenced by this data item shall be the factory object of the specified class.

ii. If the FACTORY phrase is not specified, the object referenced by this data item shall be an instance object of the specified class.

23. The USAGE IS SIGNED-INT clause specifies that the numeric item is stored as a C-style int type.
24. The USAGE IS SIGNED-LONG clause specifies that the numeric item is stored as a C-style long type.
25. The USAGE IS SIGNED-SHORT clause specifies that the numeric item is stored as a C-style short type.
26. The USAGE IS UNSIGNED-INT clause specifies that the numeric item is stored as a C-style unsigned int type.
27. The USAGE IS UNSIGNED-LONG clause specifies that the numeric item is stored as a C-style unsigned long type.
28. The USAGE IS UNSIGNED-SHORT clause specifies that the numeric item is stored as a C-style unsigned short type.
29. The USAGE IS HANDLE clause specifies that the data item refers to a COBOL object.

a. If none of the optional phrases is specified, the data item being defined is a generic handle. Its type is returned by the [HANDLE-TYPE](\) function.

b. Items defined as USAGE IS HANDLE OF Control can be used with the [DISPLAY](../../Procedure-Division-Statements/DISPLAY), [ACCEPT](../../Procedure-Division-Statements/ACCEPT), [MODIFY](../../Procedure-Division-Statements/MODIFY), [INQUIRE](../../Procedure-Division-Statements/INQUIRE) and [DESTROY](../../Procedure-Division-Statements/DESTROY) Statements.

c. Items defined as USAGE IS HANDLE OF MENU can be used with the [W$MENU](../../../Appendices/Library-Routines/W$MENU/W$MENU) routine and as an argument of the POP-UP property of [Controls](../../../User-Interface/Controls-Reference/Controls-Reference).

d. Items defined as USAGE IS HANDLE OF SUBWINDOW can be used with the [DISPLAY](../../Procedure-Division-Statements/DISPLAY) and [CLOSE](../../Procedure-Division-Statements/CLOSE) Statements.

e. Items defined as USAGE IS HANDLE OF THREAD can be used with the [ACCEPT](../../Procedure-Division-Statements/ACCEPT), [CALL](../../Procedure-Division-Statements/CALL), [PERFORM](../../Procedure-Division-Statements/PERFORM), [RECEIVE](../../Procedure-Division-Statements/RECEIVE), [SEND](../../Procedure-Division-Statements/SEND) and [WAIT](../../Procedure-Division-Statements/WAIT) Statements.

f. Items defined as USAGE IS HANDLE OF FONT can be used with the [W$FONT](../../../Appendices/Library-Routines/W$FONT/W$FONT) routine, as an argument of the FONT and CONTROL FONT properties of [Controls](../../../User-Interface/Controls-Reference/Controls-Reference) and with the [DESTROY](../../Procedure-Division-Statements/DESTROY) Statement.

When one of the optional phrases DEFAULT-FONT, FIXED-FONT, LARGE-FONT, MEDIUM-FONT, SMALL-FONT or TRADITIONAL-FONT is specified, the data item being defined will refer to the corresponding font. The iscobol.font.\* properties can be used to set the fonts to be used.

30. USAGE POINTER is treated as synoymous of USAGE HANDLE, unless the [-cp](../../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#compatibility-options) compiler option is used. With the [-cp](../../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#compatibility-options) compiler option USAGE POINTER is treated as a real POINTER and can be shared with external C routines.
31. USAGE VARIANT is reserved for future use and it’s currently treated as USAGE DISPLAY.
32. USAGE CDATA can be used only for variable whose parent is an XML element, otherwise an error is raised.

When writing an XML document the content of variable with such a USAGE is generated between the CDATA tags. For example, the following variable:

```cobol
05 xml-cdata pic x any length cdata value "<<<TEST>>>".
```

generates:

```cobol
<![CDATA[<<<TEST>>>]]>
```

If a variable contains the sequence "\]\]>" in some point, then as many CDATA tags as the number of such occurrences are generated in order to be compliant with the XML syntax.

This clause doesn’t work in conjunction with BASE64BINARY, BOOLEAN, HEXBINARY and RAW caluses.

33. The USAGE IS COMPUTATIONAL-0 is a Microsoft COBOL extension and requires the [-cms](../../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#compatibility-options) compile flag.
34. The USAGE IS SQL TYPE is used in programs with Embedded SQL to map large objects.

BLOB, CLOB and DBCLOB specify that the host variable maps a large object field on the table. The data item is internally expanded in a group item where data and length are held in separate fields. For example, the following data definition:

```cobol
     01 BLOB-ITEM USAGE IS SQL TYPE IS BLOB(2M). 
```

is expanded by the compiler to

```cobol
     01 BLOB-ITEM. 
        49 BLOB-ITEM-LENGTH PIC S9(9) COMP-5. 
        49 BLOB-ITEM-DATA PIC X(2097152). 
```

BLOB-LOCATOR, CLOB-LOCATOR and DBCLOB-LOCATOR specify that the host variable is a pointer to a large object field in the table.

35. The USAGE BIT clause specifies that bits are used to represent a boolean data item. A data item described with USAGE BIT is a bit data item.
