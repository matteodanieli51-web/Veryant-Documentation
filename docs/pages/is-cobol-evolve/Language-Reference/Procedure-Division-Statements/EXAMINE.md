## EXAMINE

#### Format 1

```cobol
EXAMINE identifier-1 TALLYING {ALL        } literal-1 [REPLACING BY literal-2]
                              {LEADING    }
                              {UNTIL FIRST}
```

#### Format 2

```cobol
EXAMINE identifier-1 REPLACING {ALL        } literal-1 BY literal-2
                               {FIRST      }
                               {LEADING    }
                               {UNTIL FIRST}
```

### General Rules

1. The special register TALLY in Format 1 is described as PIC 9(5) COMP-N. TALLY is a count which represents a value that is dependant on the keywords following the word TALLYING.
2. If TALLYING UNTIL FIRST is specified, the integer in the TALLY register after execution of an EXAMINE statement is the number of occurrences of characters in identifier-1 before the first occurrence of literal-1.
3. If TALLYING ALL is specified, every occurrence of literal-1 is counted and the result of this counting is placed in the TALLY register.
4. If TALLYING LEADING is specified, only those occurrences of literal-1 that precede any other characters in the data item named by identifier are counted. For example, if the first character of identifier is not literal-1, the EXAMINE statement ceases execution immediately.
5. If the REPLACING phrase is used in conjunction with the TALLYING phrase, then, depending upon which keywords are used with the TALLYING phrase, those occurrences of literal-1 that participate in the tallying are replaced by literal-2.

### REPLACING Phrase

6. The REPLACING phrase acts in the same manner as the REPLACING verb in the TALLYING phrase. However, since no tallying takes place, the TALLY register remains unchanged. The rules of the REPLACING phrase are stated below:

A. If REPLACING ALL is specified, all occurrences of literal-1 in identifier-1 are replaced by literal-2.

B. If REPLACING FIRST is specified, only the first occurrence of literal-1 is replaced by literal-2. If literal-1 does not appear in the data item represented by identifier-1, the data item is unchanged after execution of the EXAMINE statement.

C. If REPLACING LEADING is specified, each occurrence of literal-1 is replaced by literal-2 until the first occurrence of a character other than literal-1 or the rightmost character of the data item is examined.

D. If REPLACING UNTIL FIRST is specified, every character of the data item represented by identifier-1 is replaced by literal-2 until literal-1 is encountered in the data item. If literal-1 does not appear in the data item, the entire data item is filled with literal-2.

**Note** - this statement is supported only with the [-cv](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#compatibility-options) compiler flag.

### Examples

Format 1 - Count how many "," characters are in the string

```cobol
move "abc,cde,fgh,ijk" to ws-str
examine ws-str tallying all ","
*> Result in special register TALLY : 3
```

Format 1 - Count how many "," characters are in the string and replace them by "|"

```cobol
move "abc,cde,fgh,ijk" to ws-str
examine ws-str tallying all "," replacing by "|"
*> Result in special register TALLY : 3, new value of ws-str : abc|cde|fgh|ijk
```

Format 2 - Replace all "," by "|" on a string

```cobol
move "abc,cde,fgh,ijk" to ws-str
examine ws-str replacing all "," by "|"
*> Result in ws-str : abc|cde|fgh|ijk
```

Format 2 - Replace first "|" by "," on a string

```cobol
move "abc|cde|fgh|ijk" to ws-str
examine ws-str replacing first "|" by ","
*> Result in ws-str : abc,cde|fgh|ijk
```
