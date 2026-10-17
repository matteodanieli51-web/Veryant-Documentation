## SEARCH

#### Format 1

```cobol
SEARCH Identifier-1 [ VARYING {Identifier-2} ] 
                              {Index-Name-1}
 
  [ AT END Imperative-Statement-1 ] 
 
  { WHEN Condition-1 { Imperative-statement-2 } } ... 
                     { NEXT SENTENCE          } 
 
[END-SEARCH]
```

#### Format 2

```cobol
SEARCH ALL Identifier-1
 
  [ AT END Imperative-Statement-1 ] 
 
  WHEN {Data-Name-1 {IS EQUAL TO} {Identifier-3           } }
                    {IS =       } {Literal-1              }
                                  {Arithmetic-Expression-1}
 
  [AND {Data-Name-2 {IS EQUAL TO} {Identifier-4           } } ] ...
                    {IS =       } {Literal-2              }
                                  {Arithmetic-Expression-2}
 
  { Imperative-statement-2 } }
  { NEXT SENTENCE          } 
 
[END-SEARCH]
```

### Syntax rules

#### All Formats

1. Identifier-1 shall not be subscripted or reference modified and its data description entry shall contain an OCCURS clause including an INDEXED phrase.

#### Format 1

2. Identifier-2 shall reference a data item whose usage is index or a data item that is an integer. Identifier-2 shall not be subscripted by the first or only index-name specified in the INDEXED phrase in the OCCURS clause specified in the data description entry for identifier-1.
3. Condition-1 may be any conditional expression, as described in [Conditional expressions](../Procedure-Division/Conditional-expressions/Conditional-expressions).

#### Format 2

4. The OCCURS clause associated with identifier-1 shall contain the KEY phrase.
5. Data-name-1 and all repetitions of data-name-2 may be qualified.
6. All referenced condition-names shall be defined as having only a single value and shall be subscripted by the first index-name associated with identifier-1, along with any subscripts required to uniquely identify the condition-name. The data-name associated with each condition-name shall be specified in the KEY phrase in the OCCURS clause associated with identifier-1. The index-name subscript shall not be followed by a '+' or a '–'.
7. Identifier-3, identifier-4, identifiers specified in arithmetic-expression-1, and identifiers specified in arithmetic-expression-2 shall be neither referenced in the KEY phrase of the OCCURS clause associated with identifier-1 nor subscripted by the first index-name associated with identifier-1.
8. When a data-name in the KEY phrase in the OCCURS clause associated with identifier-1 is referenced or when a condition-name associated with a data-name in the KEY phrase in the OCCURS clause associated with identifier-1 is referenced, all preceding data-names in that KEY phrase or their associated condition-names shall also be referenced.

### General rules

#### All Formats

1. The SEARCH statement automatically varies the first or only index associated with identifier-1 and tests conditions specified in WHEN phrases in the SEARCH statement to determine whether a table element satisfies these conditions. Any subscripting specified in a WHEN phrase is evaluated each time the conditions in that WHEN phrase are evaluated. For Format 1, an additional index or data item may be varied. If identifier-1 references a data item that is subordinate to a data item whose data description entry contains an OCCURS clause, only the setting of an index associated with identifier-1 (and any data item referenced by identifier-2 or any index referenced by index-name-1, if specified) is modified by the execution of the SEARCH statement. The subscript that is used to determine the occurrence of each superordinate table to search is specified by the user in the WHEN phrases. Therefore, each appropriate subscript shall be set to the desired value before the SEARCH statement is executed.

Upon completion of the search operation, one of the following occurs:

A. If the search operation is successful according to the general rules that follow, then: the search operation is terminated immediately; the index being varied by the search operation remains set at the occurrence number that caused a WHEN condition to be satisfied; if the WHEN phrase contains the NEXT SENTENCE phrase, control is transferred to an implicit CONTINUE statement immediately preceding the next separator period; if the WHEN phrase contains imperative-statement-2, control is transferred to that imperative-statement-2 and execution continues according to the rules for each statement specified in that imperative-statement-2. If the execution of a procedure branching or conditional statement results in an explicit transfer of control, control is transferred in accordance with the rules for that statement; otherwise, upon completion of the execution of that imperative-statement-2, control is transferred to the end of the SEARCH statement.

B. If the search operation is unsuccessful according to the general rules that follow, then:

i. If the AT END phrase is specified, control is transferred to imperative-statement-1 and execution continues according to the rules for each statement specified in imperative-statement-1. If the execution of a procedure branching or conditional statement results in an explicit transfer of control, control is transferred in accordance with the rules for that statement; otherwise, upon completion of the execution of imperative-statement-1, control is transferred to the end of the SEARCH statement.

ii. If the AT END phrase is not specified and the exception condition was raised during the execution of the SEARCH statement, control is transferred to the end of the SEARCH statement.

iii. If the AT END phrase is not specified and neither exception condition was raised because the checking for those exception conditions was not enabled, control is transferred to the end of the SEARCH statement.

2. The comparison associated with each WHEN phrase is executed in accordance with the rules specified for conditional expressions.

#### Format 1

3. The index to be varied by the search operation is referred to as the search index and it is determined as follows:

A. If the VARYING phrase is not specified, the search index is the index referenced by the first (or only) index-name specified in the INDEXED phrase in the OCCURS clause associated with identifier-1.

B. If the VARYING identifier-2 phrase is specified, the search index is the same as in general rule 3a and the following also applies:

i. If identifier-2 references an index data item, that data item is incremented by the same amount as, and at the same time as, the search index.

ii. If identifier-2 references an integer data item, that data item is incremented by the value one at the same time as the search index is incremented.

C. If the VARYING index-name-1 phrase is specified, the search index depends on the following:

i. If index-name-1 is specified in the INDEXED BY phrase in the OCCURS clause associated with identifier-1, the index referenced by index-name-1 is the search index.

ii. If index-name-1 is not one of the indexes specified in the INDEXED phrase in the OCCURS clause associated with identifier-1, the search index is the same as in general rule 3a. The index referenced by index-name-1 is incremented by one occurrence number at the same time as the search index is incremented.

Only the data item and indexes indicated are varied by the search operation. All other indexes associated with identifier-1 are unchanged by the search operation.

4. The search operation is serial, starting from the occurrence number that corresponds to the value of the search index at the beginning of the execution of the SEARCH statement. If, at the start of the execution, the search index contains a value that corresponds to an occurrence number that is negative, zero, or greater than the highest permissible occurrence number for identifier-1, the search operation is unsuccessful, and execution proceeds as indicated in general rule 1b. The number of occurrences of identifier-1, the last of which is permissible, is specified in the OCCURS clause. If, at the start of the execution of the SEARCH statement, the search index contains a value that corresponds to an occurrence number that is not greater than the highest permissible occurrence number for identifier-1, the search operation proceeds by evaluating the conditions in the order they are written. If none of the conditions is satisfied, the search index is incremented by one occurrence number. The process is then repeated using the new index setting unless the new value for the search index corresponds to a table element outside the permissible range of occurrence values, in which case the search operation is unsuccessful and execution proceeds as indicated in general rule 1b. If one of the conditions is satisfied upon its evaluation, the search operation is successful and the execution proceeds as indicated in general rule 1a.

#### Format 2

5. At the start of the execution of a SEARCH statement with the ALL phrase specified, the following conditions shall be true:

A. The contents of each key data item referenced in the WHEN phrase shall be sequenced in the table according to the ASCENDING or DESCENDING phrase associated with that key data item.

B. If identifier-1 is subordinate to one or more data description entries that contain an OCCURS clause, the evaluation of the conditions within a WHEN phrase that reference a key data item subordinate to identifier-1 shall result in the same occurrence number for any subscripts associated with a given level of the superordinate tables. That is, the outermost level occurrence numbers shall all be equal, the next level occurrence numbers shall all be equal down to, but not including, the innermost table.

6. If any condition specified in general rule 5 is not satisfied:

A. If one or more settings of the search index satisfy all conditions in the WHEN phrase, one of the following occurs:

i. the final setting of the search index is set equal to one of those settings, but it is undefined which one; execution proceeds as in general rule 1a;

ii. the final setting of the search index is undefined and execution proceeds as in general rule 1b.

It is undefined which of these alternatives occurs.

B. If no such setting of the search index exists, the final setting of the search index is undefined, execution proceeds as in general rule 1b.

7. If both conditions specified in general rule 5 are satisfied and there is more than one setting of the search index for which all conditions in the WHEN phrase can be satisfied, the search operation is successful. The final setting of the search index is equal to one of them, but it is undefined which one.
8. The search index is the index referenced by the first (or only) index-name specified in the INDEXED phrase in the OCCURS clause associated with identifier-1. Any other indexes associated with identifier-1 remain unchanged by the search operation.

### Examples

Format 1 - Search by name on a staff table

```cobol
 working-storage section.
 01 staff-table occurs 5 times indexed by table-idx.
    05 tbl-code pic 9(2).
    05 tbl-name pic x(10).
    05 tbl-salary pic 9(6).
 77 search-name pic x(10).
 
 procedure division.
 main.
   perform fill-table
   perform search-table
   goback.
 
 fill-table.
   move 1        to tbl-code(1) 
   move "Adam"   to tbl-name(1)
   move 84000    to tbl-salary(1)
   move 2        to tbl-code(2) 
   move "Eve"    to tbl-name(2)
   move 74000    to tbl-salary(2)
   move 3        to tbl-code(3) 
   move "Jack"   to tbl-name(3)
   move 93500    to tbl-salary(3)
   move 4        to tbl-code(4) 
   move "Allan"  to tbl-name(4)
   move 63400    to tbl-salary(4)
   move 5        to tbl-code(5) 
   move "Lilian" to tbl-name(5)
   move 53300    to tbl-salary(5)
   .
 
 search-table.
   move "Jack" to search-name
   move 1 to table-idx
   search staff-table 
     at end display message "Name not found"
     when tbl-name(table-idx) = search-name
            display message 
              tbl-code(table-idx) ", " tbl-name(table-idx) ", " tbl-salary(table-idx)
   end-search.
```

Format 2 - Search all by name on staff table

```cobol
 working-storage section.
 77 search-name pic x(10).
 01 staff-table occurs 5 times 
                ascending key is tbl-first-name
                indexed by table-idx.
    05 tbl-code       pic 9(2).
    05 tbl-first-name pic x(10).
    05 tbl-last-name  pic x(10).
    05 tbl-salary     pic 9(6).
 
 procedure division.
 main.
   perform fill-table
   perform search-all-table
   goback.
 
 fill-table.
   move 1        to tbl-code(1) 
   move "Adam"   to tbl-first-name(1)
   move "Smith"  to tbl-last-name(1)
   move 84000    to tbl-salary(1)
 
   move 2        to tbl-code(2) 
   move "Eve"    to tbl-first-name(2)
   move "Green"  to tbl-last-name(2)
   move 74000    to tbl-salary(2)
 
   move 3        to tbl-code(3) 
   move "Jack"   to tbl-first-name(3)
   move "Yellow" to tbl-last-name(3)
   move 93500    to tbl-salary(3)
 
   move 4        to tbl-code(4) 
   move "Allan"  to tbl-first-name(4)
   move "Poe"    to tbl-last-name(4)
   move 63400    to tbl-salary(4)
 
   move 5        to tbl-code(5) 
   move "Jack"   to tbl-first-name(5)
   move "Samco"  to tbl-last-name(5)
   move 53300    to tbl-salary(5)
   .
 
 search-all-table.
   display "----- Search All"
   move "Jack" to search-name
   move 1 to table-idx
 
   search all staff-table 
     at end display "Name not found"
     when tbl-first-name(table-idx) = search-name
            display 
              tbl-code(table-idx) ", " tbl-first-name(table-idx) ", " 
              tbl-last-name(table-idx) ", " tbl-salary(table-idx)
   end-search.
```
