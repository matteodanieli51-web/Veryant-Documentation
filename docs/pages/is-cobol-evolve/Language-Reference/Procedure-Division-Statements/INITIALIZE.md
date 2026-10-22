## INITIALIZE

### Format 1

```cobol
INITIALIZE { Identifier-1 } ... [ WITH FILLER ] 
 
  [ REPLACING { {ALPHABETIC         } DATA BY Identifier-2 } ... ] 
                {ALPHANUMERIC       } 
                {NUMERIC            } 
                {ALPHANUMERIC-EDITED} 
                {NUMERIC-EDITED     }
  [ {ALL           } TO VALUE ]
    {category-names}
  [ THEN REPLACING { ALPHABETIC          } DATA BY { identifier-3 } ]
                   { ALPHANUMERIC        }
                   { ALPHANUMERIC-EDITED }
                   { BOOLEAN             }
                   { NATIONAL            }
                   { NATIONAL-EDITED     }
                   { NUMERIC             }
                   { NUMERIC-EDITED      }
                   { OBJECT-REFERENCE    }
  [ THEN TO DEFAULT ]
```

### Format 2

```cobol
INITIALIZE  Identifier-4 [ WITH SIZE Identifier-5 ]
```

### Syntax Rules

Format 1

1. If the REPLACING phrase is used, a MOVE statement with identifier-2 or literal-1 as the sending item and an item of the specified category as the receiving operand shall be valid.
2. The data description entry for the data item referenced by identifier-1 shall not contain a RENAMES clause.
3. The data item referenced by identifier-1 is the receiving operand.
4. If the REPLACING phrase is specified, literal-1 or the data item referenced by identifier-2 is the sending operand. If the REPLACING phrase is not specified, the sending operand is determined according to the general rules of the INITIALIZE statement.
5. The same category shall not be repeated in a REPLACING phrase.
6. The keywords in category-names correspond to a category of data: alphabetic, alphanumeric, alphanumeric-edit, numeric, numeric-edited. If ALL is specified in the VALUE phrase it is as if all of the categories listed in category-names were specified.

Format 2

7. Identifier-4 must be an ANY LENGTH item.
8. Identifier-5 can be any numeric data item or literal.

### General Rules

Format 1

1. When identifier-1 references a bit group item or a national group item, identifier-1 is processed as a group item. When identifier-2 references a bit group item or a national group item, identifier-2 is processed as an elementary data item.
2. If more than one identifier-1 is specified in an INITIALIZE statement, the result of executing this INITIALIZE statement is the same as if a separate INITIALIZE statement had been written for each identifier-1 in the same order as specified in the INITIALIZE statement.
3. Whether identifier-1 references an elementary item or a group item, the effect of the execution of the INITIALIZE statement is as though a series of implicit MOVE or SET statements, each of which has an elementary data item as its receiving operand, were executed.

The implicit statement is:

MOVE sending-operand TO receiving-operand.

4. The receiving-operand in each implicit MOVE or SET statement is determined by applying the following steps in order:

A. First, the following data items are excluded as receiving-operands:

i. Any identifiers that are not valid receiving operands of a MOVE statement.

ii. If the FILLER phrase is not specified, elementary data items with an explicit or implicit FILLER clause.

iii. Any elementary data item subordinate to identifier-1 whose data description entry contains a REDEFINES or RENAMES clause or is subordinate to a data item whose data description entry contains a REDEFINES clause. However, identifier-1 may itself have a REDEFINES clause or be subordinate to a data item with a REDEFINES clause.

B. Second, an elementary data item is a possible receiving item if:

i. It is explicitly referenced by identifier-1; or

ii. It is contained within the group data item referenced by identifier-1. If the elementary data item is a table element, each occurrence of the elementary data item is a possible receiving-operand.

C. Finally, each possible receiving-operand is a receiving-operand if at least one of the following is true:

i. The VALUE phrase is specified, the category of the elementary data item is one of the categories specified or implied in the VALUE phrase, and the following is true:

a. A data-item format or table format VALUE clause is specified in the data description entry of the elementary data item.

ii. The REPLACING phrase is specified and the category of the elementary data item is one of the categories specified in the REPLACING phrase.

iii. The DEFAULT phrase is specified.

iv. Neither the REPLACING phrase nor the VALUE phrase is specified.

5. The sending-operand in each implicit MOVE and SET statement is determined as follows:

A. If the data item qualifies as a receiving-operand because of the VALUE phrase:

i. The sending-operand is determined by the literal in the VALUE clause specified in the data description entry of the data item. If the data item is a table element, the literal in the VALUE clause that corresponds to the occurrence being initialized determines the sending-operand. The actual sending-operand is a literal that, when moved to the receiving-operand with a MOVE statement, produces the same result as the initial value of the data item as produced by the application of the VALUE clause.

B. If the data item does not qualify as a receiving-operand because of the VALUE phrase, but does qualify because of the REPLACING phrase, the sending-operand is the literal-1 or identifier-2 associated with the category specified in the REPLACING phrase.

C. The sending-operand used depends on the category of the receiving-operand as follows:

| Receiving operand | Figurative constant |
| --- | --- |
| Alphabetic | Figurative constant alphanumeric SPACES |
| Alphanumeric | Figurative constant alphanumeric SPACES |
| Alphanumeric-edited | Figurative constant alphanumeric SPACES |
| Boolean | Figurative constant ZEROES |
| National | Figurative constant national SPACES |
| National-edited | Figurative constant national SPACES |
| Numeric | Figurative constant ZEROES |
| Numeric-edited | Figurative constant ZEROES |
| Object-reference | Predefined object reference NULL |

6. If identifier-1 references a group data item, affected elementary data items are initialized in the sequence of their definition within the group data item. For a variable-occurrence data item, the number of occurrences initialized is determined by the rules of the OCCURS clause for a receiving data item.
7. If identifier-1 occupies the same storage area as identifier-2, the result of the execution of this statement is undefined, even if they are defined by the same data description entry.
8. Index data items and elementary FILLER data items are not affected by the INITIALIZE statement, unless the optional WITH FILLER phrase is specified, in which case FILLER data items are initialized.

Format 2

9. A Format 2 INITIALIZE statement clears and resize ANY LENGTH items.
10. Identifier-5 specifies the new size of Identifier-4; if the SIZE clause is omitted or if a negative size is specified, then a size of zero is assumed. After the resizing, all the characters in the item are set to space.

### Examples

Format 1

Use INITIALIZE to clear a group data item, then use INITIALIZE ALL TO VALUE to reset the group item to the default values that were specified in the item definition.

```cobol
       working-storage section.
       01 var1.
          05 num1   pic 9(3) value 125.
          05 str1   pic x(3) value "abc".
          05 num-ed pic zz,zz9 value 1234.
       procedure division.
           display "var1 : "  var1.
           initialize var1.
           display "var1 : "  var1.
           initialize var1 all to value.
           display "var1 : " var1.
           
      * Program output
      * var1 : 125abc 1,234
      * var1 : 000        0
      * var1 : 125abc 1,234  
```

Initialize group item to specific values by type

```cobol
       working-storage section.
       01 var1.
          05 num1   pic 9(3) value 125.
          05 str1   pic x(3) value "abc".
          05 num-ed pic zz,zz9 value 1234.
       procedure division.
           initialize var1 replacing 
                alphanumeric   by all "x"
                numeric        by all "9"
                numeric-edited by "0".
           display "var1 : " var1.
           
           
      * Program output
      * var1 : 999xxx     0  
```

Initialize group item without including FILLERs (default), then including FILLERs (WITH FILLER clause)

```cobol
       working-storage section.
       01 var1.
          05 str1   pic x(3).
          05 filler pic x(3).
          05 str2   pic x(3).
          
       procedure division.
           move all "a" to var1.
           initialize var1.
           display "var1 : " var1.
           initialize var1 with filler.
           display "var1 : " var1.           
           
      * Program output
      *var1 :    aaa   
      *var1 :    
```

Format 2

Resize an empty X ANY LENGTH data item:

```cobol
       working-storage section.
       01 varany pic x any length.
          
       procedure division.
           display "varany is " function length(varany) " bytes".
           initialize varany with size 100.
           display "varany is " function length(varany) " bytes".
           
      * Program output
      * varany is 0 bytes
      * varany is 100 bytes
```
