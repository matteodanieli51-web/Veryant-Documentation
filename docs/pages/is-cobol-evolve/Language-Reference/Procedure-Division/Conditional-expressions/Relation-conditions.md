### Relation conditions

A relation condition specifies the comparison of two operands. The relational operator that joins the two operands specifies the type of comparison. The relation condition is true if the specified relation exists between the two operands; the relation condition is false if the specified relation does not exist.

Syntax

```cobol
operand-1  [ IS ]  [ NOT ]  { GREATER THAN               }                operand-2
                            { LESS THAN                  }
                            { EQUAL TO                   }
                            { >                          }
                            { <                          }
                            { <>                         }
                            { =                          }
                            { >=                         }
                            { <=                         }
                            { LIKE [ TRIMMED { LEFT  } ] }
                                             { RIGHT }
                                   [ CASE-INSENSITIVE  ]
                                   [ CASE-SENSITIVE    ]
                                   [ APPROX { numeric-literal-1   } ]
                                            { numeric-data-item-1 }
```

This additional syntax is supported when compiling with [-cm](../../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#compatibility-options):.

```cobol
operand-1 { EQUALS        }  operand-2
          { IS UNEQUAL TO }
          { EXCEEDS       }
```

- *operand-1* and *operand-2* may be either an arithmetic expression, a data name, or a literal.
- When the LIKE operator is used, *operand-2* identifies a regular expression. Refer to the Java documentation at [Pattern](https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html) for the supported regular expressions syntax.Multiple consecutive '\*' characters are considered as a single '\*' (i.e. "A\*", "A\*\*", "A\*\*\*" and so on are equivalent).

The LIKE operator supports the following clauses:

- TRIMMED - This clause specifies if the key value must be considered entirely or trimmed. If the TRIMMED LEFT phrase is specified, leading spaces in the key value are ignored. If the TRIMMED RIGHT phrase is specified, trailing spaces in the key value are ignored. If the TRIMMED clause is specified without LEFT or RIGHT, both leading and trailing spaces in the key value are ignored.
- CASE-INSENSITIVE - This clause specifies that a case insensitive match of the key value to the pattern value must be done. If this clause is not used or CASE-SENSITIVE is used instead, a case sensitive match of the key value to the pattern is done.
- APPROX - This clause allows for an approximate match to the pattern. After the APPROX clause an integer value must be specified, specifying the maximum number of allowed errors, computed according to the Levenshtein distance.
