## INSPECT

#### Format 1

```cobol
INSPECT identifier-1 TALLYING tallying-phrase
```

#### Format 2

```cobol
INSPECT identifier-1 REPLACING replacing-phrase
```

#### Format 3

```cobol
INSPECT identifier-1 TALLYING tallying-phrase REPLACING replacing-phrase
```

#### Format 4

```cobol
INSPECT identifier-1 CONVERTING {identifier-6} TO {identifier-7} [after-before-phrase]
                                {literal-4   }    {literal-5   }
```

where tallying-phrase is:

```cobol
{ identifier-2 FOR {CHARACTERS [ after-before-phrase ]           } ... } ...
                   {ALL { {identifier-3} [ after-before-phrase ] } ... }
                          {literal-1   }
                   {LEADING { {identifier-3} [ after-before-phrase ] ... }
                              {literal-1   }
                   {TRAILING { {identifier-3} [ after-before-phrase ] ... }
                               {literal-1   }
```

where after-before-phrase is:

```cobol
{ [ AFTER INITIAL  {identifier-4} ]            }
                   {literal-2   }
{ [ BEFORE INITIAL [TRAILING] {identifier-4} ] }
                              {literal-2   }
```

where replacement-phrase is:

```cobol
{ CHARACTERS                BY replacement-item [ after-before-phrase ]       } ...
{ ALL      { {identifier-3} BY replacement-item [ after-before-phrase ] } ... }
             {literal-1   }
{ LEADING  { {identifier-3} BY replacement-item [ after-before-phrase ] } ... }
             {literal-1   }
{ FIRST    { {identifier-3} BY replacement-item [ after-before-phrase ] } ... }
             {literal-1   }
{ TRAILING { {identifier-3} BY replacement-item [ after-before-phrase ] } ... }
             {literal-1   }
```

where replacement-item is:

```cobol
{ identifier-5 }
{ literal-3    }
```

### Syntax Rules

#### All Formats

1. Identifier-1 shall reference either an alphanumeric or national group item or an elementary item described implicitly or explicitly as usage display or national.
2. Identifier-3, ... , identifier-n shall reference an elementary item described implicitly or explicitly as usage display or national.
3. Each literal shall be an alphanumeric, boolean, or national literal. Literal-1, literal-2, literal-3, literal-4 shall not be a figurative constant that begins with the word All. If literal-1, literal-2, or literal-4 is a figurative constant, it refers to an implicit one character data item. When identifier-1 is of class national, the class of the figurative constant is national; when identifier-1 is of class boolean, the figurative constant is of class boolean and only the figurative constant ZERO may be specified; otherwise, the class of the figurative constant is alphanumeric.
4. If any of identifier-1, identifier-3, identifier-4, identifier-5, identifier-6, identifier-7, literal-1, literal-2, literal-3, literal-4, or literal-5 references an elementary data item or literal of class boolean or national, then all shall reference a data item or literal of class boolean or national, respectively.

#### Formats 1 AND 3

5. Identifier-2 shall reference an elementary numeric data item.
6. the FOR clause can be repeated in the tallying-phrase to specify different criteria.

#### Formats 2 AND 3

7. When both literal-1 and literal-3 are specified, they shall be the same size except when literal-3 is a figurative constant, in which case it is expanded or contracted to be the size of literal-1.
8. When the CHARACTERS phrase is specified, literal-3 shall be one character in length.

#### Format 1

9. Identifier-1 is a sending operand.

#### Format 4

10. When both literal-4 and literal-5 are specified they shall be the same size except when literal-5 is a figurative constant.

### General Rules

#### All Formats

1. For the purpose of determining its length, identifier-1 is treated as if it were a sending data item. If the data item referenced by identifier-1 is a zero-length item, execution of the INSPECT statement terminates immediately.
2. Inspection (which includes the comparison cycle, the establishment of boundaries for the BEFORE or AFTER phrase, and the mechanism for tallying and/or replacing) begins at the leftmost character position of the data item referenced by identifier-1, regardless of its class, and proceeds from left to right to the rightmost character position as described in general rules 6 through 8.
3. For use in the INSPECT statement, the content of the data item referenced by identifier-1, identifier-3, identifier-4, identifier-5, identifier-6, or identifier-7 shall be treated as follows:

A. If any of identifier-1, identifier-3, identifier-4, identifier-5, identifier-6, or identifier-7 references an alphabetic, alphanumeric, boolean, or national data item, the INSPECT statement shall treat the content of each such identifier as a character-string of the category associated with that identifier.

B. If any of identifier-1, identifier-3, identifier-4, identifier-5, identifier-6, or identifier-7 references an alphanumeric-edited data item, or a numeric-edited or unsigned numeric data item described explicitly or implicitly with usage display, the data item is inspected as though it had been redefined as alphanumeric (see general rule 3a) and the INSPECT statement had been written to reference the redefined data item.

C. If any of identifier-1, identifier-3, identifier-4, identifier-5, identifier-6, or identifier-7 references a national-edited data item, or a numeric-edited or unsigned numeric data item described explicitly or implicitly with usage national, the data item is inspected as though it had been redefined as category national and the INSPECT statement has been written to reference the redefined data item.

D. If any of identifier-1, identifier-3, identifier-4, identifier-5, identifier-6, or identifier-7 references a signed numeric data item, the data item is inspected as though it had been moved to an unsigned numeric data item with length equal to the length of the signed item excluding any separate sign position, and then the rules in general rule 3b or 3c had been applied. If identifier-1 is a signed numeric item, the original value of the sign is retained upon completion of the INSPECT statement.

4. In general rules 6 through 21, all references to literal-1, literal-2, literal-3, literal-4, or literal-5 apply equally to the content of the data item referenced by identifier-3, identifier-4, identifier-5, identifier-6, or identifier-7 respectively.
5. Item identification for any identifier is done only once as the first operation in the execution of the INSPECT statement.
6. If any of literal-1, literal-2, literal-3, literal-4, or literal-5 is an empty string literal, it is treated as a space; "" is treated as " ".

#### Formats 1 AND 2

7. During inspection of the content of the data item referenced by identifier-1, each properly matched occurrence of literal-1 is tallied (format 1) or replaced by literal-3 (format 2).
8. The comparison operation to determine the occurrence of literal-1 to be tallied or to be replaced, occurs as follows:

A. The operands of the TALLYING or REPLACING phrase are considered in the order they are specified in the INSPECT statement from left to right. The first literal-1 is compared to an equal number of contiguous characters, starting with the leftmost character position in the data item referenced by identifier-1. Literal-1 matches that portion of the content of the data item referenced by identifier-1 if they are equal, character for character and:

i. If neither LEADING nor FIRST is specified; or

ii. If the LEADING adjective applies to literal-1 and literal-1 is a leading occurrence as defined in general rules 11 and 16; or

iii. If the FIRST adjective applies to literal-1 and literal-1 is the first occurrence as defined in general rule 16.

B. If no match occurs in the comparison of the first literal-1, the comparison is repeated with each successive literal-1, if any, until either a match is found or there is no next successive literal-1. When there is no next successive literal-1, the character position in the data item referenced by identifier-1 immediately to the right of the leftmost character position considered in the last comparison cycle is considered as the leftmost character position, and the comparison cycle begins again with the first literal-1.

C. Whenever a match occurs, tallying or replacing takes place as described in general rules 12 and 15. The character position in the data item referenced by identifier-1 immediately to the right of the rightmost character position that participated in the match is now considered to be the leftmost character position of the data item referenced by identifier-1, and the comparison cycle starts again with the first literal-1.

D. The comparison operation continues until the rightmost character position of the data item referenced by identifier-1 has participated in a match or has been considered as the leftmost character position. When this occurs, inspection is terminated.

E. If the CHARACTERS phrase is specified, an implied one character operand participates in the cycle described in general rules 7a through 7d above as if it had been specified by literal-1, except that no comparison to the content of the data item referenced by identifier-1 takes place. This implied character is considered always to match the leftmost character of the content of the data item referenced by identifier-1 participating in the current comparison cycle.

9. The comparison operation defined in general rule 7 is restricted by the BEFORE and AFTER phrase as follows:

A. If neither the BEFORE nor AFTER phrase is specified or identifier-4 references a zero-length item, literal-1 or the implied operand of the CHARACTERS phrase participates in the comparison operation as described in general rule 7. Literal-1 or the implied operand of the CHARACTERS phrase is first eligible to participate in matching at the leftmost character position of identifier-1.

B. If the BEFORE phrase is specified, the associated literal-1 or the implied operand of the CHARACTERS phrase participates only in those comparison cycles that involve that portion of the content of the data item referenced by identifier-1 from its leftmost character position up to, but not including, the first occurrence of literal-2 within the content of the data item referenced by identifier-1. If the TRAILING clause is specified, all the rightmost contiguous characters identified by Literal-2 will not be included. The position of this first occurrence is determined before the first cycle of the comparison operation described in general rule 7 is begun. If, on any comparison cycle, literal-1 or the implied operand of the CHARACTERS phrase is not eligible to participate, it is considered not to match the content of the data item referenced by identifier-1. If there is no occurrence of literal-2 within the content of the data item referenced by identifier-1, its associated literal-1 or the implied operand of the CHARACTERS phrase participates in the comparison operation as though the BEFORE phrase had not been specified.

C. If the AFTER phrase is specified, the associated literal-1 or the implied operand of the CHARACTERS phrase participate only in those comparison cycles that involve that portion of the content of the data item referenced by identifier-1 from the character position immediately to the right of the rightmost character position of the first occurrence of literal-2 within the content of the data item referenced by identifier-1 to the rightmost character position of the data item referenced by identifier-1. This is the character position at which literal-1 or the implied operand of the CHARACTERS phrase is first eligible to participate in matching. The position of this first occurrence is determined before the first cycle of the comparison operation described in general rule 7 is begun. If, on any comparison cycle, literal-1 or the implied operand of the CHARACTERS phrase is not eligible to participate, it is considered not to match the content of the data item referenced by identifier-1. If there is no occurrence of literal-2 within the content of the data item referenced by identifier-1, its associated literal-1 or the implied operand of the CHARACTERS phrase is never eligible to participate in the comparison operation.

#### Format 1

10. Both the ALL and LEADING phrases are transitive across the operands that follow them until another All or LEADING phrase is encountered.
11. The content of the data item referenced by identifier-2 is not initialized by the execution of the INSPECT statement.
12. The rules for tallying are as follows:

A. If the ALL phrase is specified, the content of the data item referenced by identifier-2 is incremented by one for each occurrence of literal-1 matched within the content of the data item referenced by identifier-1.

B. If the LEADING phrase is specified, the content of the data item referenced by identifier-2 is incremented by one for the first and each subsequent contiguous occurrence of literal-1 matched within the content of the data item referenced by identifier-1, provided that the leftmost such occurrence is at the point where comparison began in the first comparison cycle in which literal-1 was eligible to participate.

C. If the CHARACTERS phrase is specified, the content of the data item referenced by identifier-2 is incremented by one for each character matched, in the sense of general rule 7e, within the content of the data item referenced by identifier-1.

D. The TRAILING phrase is used to find the rightmost occurrence, or set of contiguous occurrences, in identifier-1. If a TRAILING occurrence is found, a right to left scan of identifier-1 is made to find contiguous occurrences.

13. If identifier-1, identifier-3, or identifier-4 occupies the same storage area as identifier-2, the result of the execution of this statement is undefined.
14. If multiple FOR clauses are specified in the tallyling-phrase, the runtime resolves each one of them by analyzing Identifier-1 from the position of the previous verified condition. If [-ca](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#compatibility-options) compiler option is used, instead, the runtime analyzes Identifier-1 from the beginning when resolving each one of the FOR clauses.

#### Formats 2 and 3

15. The size of literal-3 or the data item referenced by identifier-5 shall be equal to the size of literal-1 or the data item referenced by identifier-3.
16. When the CHARACTERS phrase is used, the data item referenced by identifier-5 shall be one character in length.

#### Format 2

17. The ALL, FIRST, and LEADING phrases are transitive across the operands that follow them until another All, FIRST, or LEADING phrase is encountered.
18. The rules for replacement are as follows:

A. When the CHARACTERS phrase is specified, each character matched, in the sense of general rule 7e, in the content of the data item referenced by identifier-1 is replaced by literal-3.

B. When the adjective All is specified, each occurrence of literal-1 matched in the content of the data item referenced by identifier-1 is replaced by literal-3.

C. When the adjective LEADING is specified, the first and each successive contiguous occurrence of literal-1 matched in the content of the data item referenced by identifier-1 is replaced by literal-3, provided that the leftmost occurrence is at the point where comparison began in the first comparison cycle in which literal-1 was eligible to participate.

D. When the adjective FIRST is specified, the leftmost occurrence of literal-1 matched within the content of the data item referenced by identifier-1 is replaced by literal-3. This rule applies to each successive specification of the FIRST phrase regardless of the value of literal-1.

E. If the TRAILING phrase is present, the REPLACING option causes all contiguous occurrences of identifier-3 to be replaced by replacement-item, provided that these occurrences end in the rightmost character position of identifier-1.

19. If identifier-3, identifier-4, or identifier-5 occupies the same storage area as identifier-1, the result of the execution of this statement is undefined.

#### Format 3

20. A format 3 INSPECT statement is interpreted and executed as though two successive INSPECT statements specifying the same identifier-1 had been written with one statement being a format 1 statement with TALLYING phrases identical to those specified in the format 3 statement, and the other statement being a format 2 statement with REPLACING phrases identical to those specified in the format 3 statement. The general rules given for matching and counting apply to the format 1 statement and the general rules given for matching and replacing apply to the format 2 statement. Item identification of any identifier in the format 2 statement is done only once before executing the format 1 statement.

#### Format 4

21. A format 4 INSPECT statement is interpreted and executed as though a format 2 INSPECT statement specifying the same identifier-1 had been written with a series of All phrases, one for each character of literal-4. The effect is as if each of these All phrases referenced, as literal-1, a single character of literal-4 and referenced, as literal-3, the corresponding single character of literal-5. Correspondence between the characters of literal-4 and the characters of literal-5 is by ordinal position within the data item.
22. If identifier-4, identifier-6, or identifier-7 occupies the same storage area as identifier-1, the result of the execution of this statement is undefined.
23. The size of literal-5 or the data item referenced by identifier-7 shall be equal to the size of literal-4 or the data item referenced by identifier-6. If these sizes are not equal, the results of the execution of the INSPECT statement are undefined.
24. If the same character appears more than once in the data item referenced by identifier-6 or in literal-4, the first occurrence of the character is used for replacement.

### Examples

Format 1 - Counting some capital letters on a string

```cobol
initialize ws-count
move    "Another Beautiful Day" to ws-str
inspect ws-str tallying ws-count 
        for all "A" "B" "C" "D" "E" "F"
*> Value of ws-count : 3
```

Format 2 - Changing "a" by "o" not from the beginning but after another character.

```cobol
move "a first sentence with a. Hella Warld!" to ws-str
inspect ws-str replacing all "a" by "o" after initial "."
*> New value for ws-str: a first sentence with a. Hello World!
```

Format 2 - Replace all characters in string by zeroes

```cobol
move "hello world!" to ws-str
inspect ws-str replacing characters by zero
*> New value for ws-str : 000000000000000
```

Format 2 - Replace characters by zeroes before the first quote

```cobol
move 'hello world! "do not change"' to ws-str
inspect ws-str replacing 
        characters by zeros
        before initial quote
*> New value for ws-str : 0000000000000"do not change"
```

Format 3 - Count the leading zeroes on a string and also change the first "a" by "2" after a specific character

```cobol
initialize ws-count
move "00academy00" to ws-str
inspect ws-str tallying ws-count for leading "0"
        replacing first "a" by "2"
        after initial "c"
*> New value for ws-count : 2
*> New value for ws-str   : 00ac2demy00
```

Format 4 - Converting Uppercase to Lowercase

```cobol
move "THIS IS THE SENTENCE" to ws-str
inspect ws-str 
        converting "ABCDEFGHIJKLMNOPQRSTUVWXYZ" to
                   "abcdefghijklmnopqrstuvwxyz"
*> New value for ws-str : this is the sentence
```
