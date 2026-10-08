### SUM clause

The SUM clause specifies one or more data items that are to be totalled to provide the value of the associated elementary report item.

#### General format

```cobol
SUM OF { data-name-1  }       [ UPON { data-name-2 } ... ]
       { identifier-1 } 
       { arithmetic-expression-1}
 
RESET ON data-name-3 FINAL  [ ROUNDED ]
```

#### Syntax rules

1. Each data-name-1, identifier-1 or arithmetic-expression-1 is an addend. The whole clause is referred to as a SUM clause even though the SUM keyword may appear more than once.
2. The category of the subject of the entry shall be valid as the category of a receiving operand in a MOVE statement for a sending operand of the category numeric.
3. Data-name-1 shall be the name of a numeric data item in the report section. It may be qualified. If it is associated with an OCCURS clause, it shall be specified without the subscripting normally required. When data-name-1 is specified, the following rules also apply:

a. The UPON phrase shall not be specified.

b. If data-name-1 is specified in the same report group description as the subject of the entry, data-name-1 shall be a repeating item, as defined in [Report group description entry](../Report-Section#report-group-description-entry), general rule 3, and subject to at least one more level of repetition than the subject of the entry.

c. If data-name-1 is specified in a different report group description than the subject of the entry, data-name-1 either shall not be a repeating item or shall be a repeating item that is subject to at least the same number of levels of repetition as the subject of the entry.

d. The maximum number of repetitions of data-name-1 and the subject of the entry shall be equal at each corresponding level taken in order beginning with the lowest level of nesting. Levels superordinate to those corresponding levels may specify any number of repetitions.

e. Any chain of reference shall terminate at an entry that does not contain a SUM clause referring to a dataname-1 defined in the report section.

f. If data-name-1 specifies an entry in a report group description other than the current report group description, only the following combinations of report types of each report group are permitted: The current report group may be a control footing and data-name-1 may be defined in a detail or in a control footing associated with a lower level of control. The current report group may be a detail and data-name-1 may be defined in a different detail. The current report group may be a report footing and data-name-1 may be defined in any other report group other than a report heading. The current report group may be a page footing and data-name-1 may be defined in any body group.

g. If data-name-1 specifies an entry in a different report description, there are no restrictions on the combinations of report types of each report group.

4. If the addend is identifier-1, it shall specify a numeric data item not defined in the report section.
5. If the addend is arithmetic-expression-1, any identifiers it contains may reference entries in any section of the data division other than the report section.
6. Data-name-2 shall be the name of a detail. It may be qualified by a report-name.
7. Data-name-3 may be qualified and reference modified. Data-name-3 or FINAL shall be an operand of the CONTROL clause of the current report description. If data-name-3 is reference modified, leftmost-position and length shall be integer literals. If the current report group is a control footing, its level of control shall be a lower level than that of data-name-3.

#### General rules

1. Each entry containing a SUM clause establishes an independent sum counter and size error indicator. The sum counter is an internal register that behaves as a data item of the category numeric. The number of decimal digits in the sum counter, both integral and fractional, is derived from the corresponding number of digits, excluding insertion editing characters, in the PICTURE clause of the entry containing the SUM clause. The sum counter is signed, whether or not the corresponding PICTURE clause has an operational sign.
2. The sum counter is set to zero and its associated size error indicator is unset when the INITIATE statement for the current report is executed. Subsequently, the sum counter is reset to zero and the size error indicator is unset at the end of the processing of the report group in which it is printed or, if the RESET phrase is specified, at the end of the processing of the control footing for the specified level of control. If no such control footing is defined, it is assumed to be present and to consist of a 01-level entry alone.
3. The current content of each addend is implicitly added into the sum counter during execution of GENERATE and TERMINATE statements at specific times defined below. The adding is consistent with the general rules of the ADD statement with the ON SIZE ERROR phrase or, in the case of an arithmetic expression, the COMPUTE statement with the ON SIZE ERROR phrase. Any algebraic sign of the addend is taken into account. Each addition is tested for size error; if a size error occurs, the associated size error indicator is set.
4. If the entry also contains a COLUMN clause, the sum counter acts as a source data item. If the associated size error indicator is not set, the content of the sum counter is moved, according to the general rules of the MOVE statement, to the printable item for printing. If the associated size error indicator is set, an EC-REPORT-SUM-SIZE exception condition is set to exist and the printable item is filled with spaces.
5. If a data-name immediately follows the level number in the entry containing the SUM clause, the data-name is the name of the sum counter, not the name of the associated printable item, if any.
6. If data-name-1 specifies an item whose entry contains a SUM clause, the value added is that of the corresponding sum counter. The additions necessary to compute its value are completed before the adding of the operand into the current sum counter. If data-name-1 specifies an item whose entry has a SOURCE or VALUE clause, the value added is that of the operand of the SOURCE or VALUE clause.
7. The times at which addition takes place are defined as follows:

a. If data-name-1 is the name of an entry in a different report group description, adding takes place when the report group description containing data-name-1 is processed.

b. If data-name-1 is the name of an entry in the current report group description, adding takes place during the processing of the current report group before any of the report group's lines are printed.

c. If the addend is identifier-1 or arithmetic-expression-1, adding takes place either:

i. if no UPON phrase is specified, whenever any GENERATE statement is executed for the current report or any detail defined for the current report, or

ii. If an UPON phrase is specified, whenever any GENERATE statement is executed for a detail referenced by the UPON phrase. If two or more instances of data-name-1 or identifier-1 specify the same data item, this data item is added into the sum counter as many times as data-name-1 or identifier-1 is referenced in the SUM clause. It is permissible for the UPON phrase to contain two or more instances of data-name-2 that specify the same detail. When a GENERATE statement for such a detail is executed, the adding takes place as many times as data-name-2 appears in the UPON phrase.

8. If the addend is data-name-1 and data-name-1 is a repeating item, repetitions of the addend are either all added into the same sum counter or are each added into a different corresponding occurrence of the sum counter, according to the following rules:

a. If the addend and the sum counter are subject to the same number of levels of repetition, each occurrence of the addend is added into the corresponding occurrence of the sum counter.

b. If the addend is subject to a greater number of levels of repetition than the sum counter, the number of levels of repetition of the addend is effectively reduced to that of the sum counter by forming the total of a complete table of occurrences of the addend at one or more levels into each occurrence of the sum counter. The levels at which these totals are formed are those of the highest level of repetition of the addend, excluding any OCCURS, multiple LINE, or multiple COLUMN clauses to which the addend and the entry containing the SUM clause are both subject.

9. If the SUM clause specifies more than one addend, the result is the same as when all the addends were summed separately according to the above rules and the results added together.
10. If the entry is associated with an absent data item as a result of a PRESENT WHEN clause or an OCCURS clause with the DEPENDING phrase, the corresponding sum counter is not printed and is not reset to zero for the current instance of the report group.
11. If the operand is data-name-1 and is declared to be absent as a result of a PRESENT WHEN clause or an OCCURS clause with the DEPENDING phrase, data-name-1 is not added into the sum counter during the processing instance of the report group in which data-name-1 is defined.
12. It is permissible for procedure division statements to alter the content of sum counters.
