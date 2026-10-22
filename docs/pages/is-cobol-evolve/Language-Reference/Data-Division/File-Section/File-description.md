### File description

In a COBOL program the file description entry (FD or SD entry) represents the highest level of organization in the File Section. The File Section header is followed by a file description entry consisting of a level indicator (FD/SD), a file-name, and a series of independent clauses. The clauses of a file description entry specify the size of the logical and physical records, the names of the records which comprise the file, and finally the number of lines to be written on a logical printer page.

#### General format

```cobol
Level-Indicator File-Name
   [ IS EXTERNAL [ AS External-Name ] ]
 
   [ IS GLOBAL ]
 
   [ IS THREAD-LOCAL ]
 
   [ CODE-SET  [IS ] Alphabet-1 ]
 
   [ LABEL {RECORD } [IS ] {STANDARD} ] 
           {RECORDS} [ARE] {OMITTED } 
 
   [ BLOCK CONTAINS [Integer-1 TO] Integer-2 {RECORDS   } ]  
                                             {CHARACTERS}  
 
   [ RECORD { CONTAINS Integer-3 CHARACTERS                                                             } ] 
            { IS VARYING IN SIZE [ FROM Integer-4 ] [ TO Integer-5 ] CHARACTERS [ DEPENDING ON Depend ] }
            { CONTAINS Integer-6 TO Integer-7 CHARACTERS                                                }
 
   [ VALUE OF LABEL IS Literal-1 ]
 
   [ VALUE OF {FILE-ID} IS Id-Name ] 
              {ID     }  
 
   [ VALUE OF Literal-1 IS {Literal-2  } ] 
                           {Data-item-1}
 
   [ LINAGE IS Page-Lines LINES
 
     [WITH FOOTING AT Footing-Line ]
 
     [LINES AT TOP Top-Lines ]
 
     [LINES AT BOTTOM Bottom-Lines ] ]
 
   [ DATA {RECORD  IS } {Record-Name} ... ] 
          {RECORDS ARE}
   [ RECORDING MODE IS {V}          ]
                       {F}
                       {U}
                       {S}
                       {VARIABLE}
                       {FIXED}
   [ {REPORT } [IS ] Report-Name ]
     {REPORTS} [ARE]
```

#### Syntax rules

1. *Level-Indicator* must precede *File-Name*.
2. *File-Name* is a [User-defined word](../../Preface/Definitions#user-defined-word), as defined in the [Definitions](../../Preface/Definitions) section in the Preface of this document.
3. *File-Name* must have a corresponding entry in the [FILE-CONTROL Paragraph](../../Environment-Division/Input-Output-Section/File-Control-Paragraph) of the [INPUT-OUTPUT Section](../../Environment-Division/Input-Output-Section/Input-Output-Section) in the [Environment Division](../../Environment-Division/Environment-Division).
4. The clauses which follow *File-Name* may appear in any order.
5. *Integer-1, Integer-2, Integer-3, Integer-4, Integer-5, Integer-6 and Integer-7* are [Integer](../../Preface/Definitions#integer)s, as defined in the [Definitions](../../Preface/Definitions) section in the Preface of this document.
6. *Depend* is a [Numeric Data Item](../../Preface/Definitions#numeric-data-item), as defined in the [Definitions](../../Preface/Definitions) section in the Preface of this document.
7. *Id-Name* can be either a [Data Item](../../Preface/Definitions#data-item) or a [Nonnumeric Literal](../../Preface/Definitions#nonnumeric-literal), as defined in the [Definitions](../../Preface/Definitions) section in the Preface of this document.
8. *Page-Lines, Footing-Line, Top-Lines and Bottom-Lines* can be either [Numeric Data Item](../../Preface/Definitions#numeric-data-item)s or a [Integer](../../Preface/Definitions#integer)s, as defined in the [Definitions](../../Preface/Definitions) section in the Preface of this document.
9. V and VARIABLE are synonymous.
10. F and FIXED are synonymous.
11. Literal-1 and Literal-2 are non-numeric literals.
12. Data-Item-1 is an alphanumeric data item.
13. *Alphabet*-1 is the name of an alphabet declared in the [SPECIAL-NAMES Paragraph](../../Environment-Division/Configuration-Section/Special-names).
14. The CODE-SET clause may be associated only with a sequential file.
15. If the CODE-SET clause is used, then only USAGE DISPLAY items may appear in the file's record description entry. In addition, every signed numeric field must have a SIGN IS SEPARATE clause.
16. THREAD-LOCAL can’t be specified along with EXTERNAL and GLOBAL.
17. *Report-Name* must be the same as the *Report-Name* used in the Report Description (RD) entry.

#### General rules

1. *Level-Indicator* may be FD to identify the beginning of a file description entry, SD to identify the beginning of a sort file description entry or XD to identify the beginning of an XML file description entry.
2. When the IS EXTERNAL clause is specified, the file will be shared among all programs that declare it.
3. The AS phrase of the EXTERNAL clause is treated as a commentary.
4. The IS GLOBAL clause declares a data-name as visible to all programs nested within the program that defines it, so contained programs can reference it without re-declaring it.
5. The LABEL clause is treated as a commentary.
6. VALUE OF Literal-1 is treated as a commentary.
7. *Integer*-1 must be less than or equal to *Integer*-2. The BLOCK clause is treated as a commentary.
8. The RECORD clause specifies the number of character positions in a fixed length record, or specifies the range of character positions in a variable length record. If the number of character positions does vary, the clause specifies the minimum and maximum number of character positions.

a. If the RECORD clause is not specified, the size of each data record is completely defined in the record description entry. Relative Files cannot have variable record size, so the maximum record size is used.

b. No record description entry for the file may specify a number of character positions greater than *Integer*-3.

c. When *Integer*-3 is specified, the record length is fixed. *Integer*-3 specifies the number of character positions contained in each record in the file.

d. Record descriptions for the file must not describe records which contain a lesser number of character positions than that specified by *Integer*-4 nor records which contain a greater number of character positions than that specified by *Integer*-5.

e. Integer-4 must be less than or equal to *Integer*-5.

f. The VARYING clause is used to specify variable length records. *Integer*-4 specifies the minimum number of character positions to be contained in any record of the file. *Integer*-5 specifies the maximum number of character positions in any record of the file.

g. The number of character positions associated with a record description is determined by the sum of the number of character positions in all [elementary data items](../Concept-of-Levels/Concept-of-Levels) excluding redefinitions and renamings, plus any implicit FILLER due to [synchronization](../Item-Alignment). If a table is specified:

i. The minimum number of table elements described in the record is used in the summation above to determine the minimum number of character positions associated with the record description.

ii. The maximum number of table elements described in the record is used in the summation above to determine the maximum number of character positions associated with the record description.

h. If *Integer*-4 is not specified, the minimum number of character positions to be contained in any record of the file is equal to the least number of character positions described for a record in that file.

i. If *Integer*-5 is not specified, the maximum number of character positions to be contained in any record of the file is equal to the greatest number of character positions described for a record in that file.

j. If *Depend* is specified, the number of character positions in the record must be placed into the data item referenced by *Depend* before any [RELEASE](../../Procedure-Division-Statements/RELEASE), [REWRITE](../../Procedure-Division-Statements/REWRITE), or [WRITE](../../Procedure-Division-Statements/WRITE) Statement is executed for the file.

k. If *Depend* is specified, the execution of a [DELETE](../../Procedure-Division-Statements/DELETE), [RELEASE](../../Procedure-Division-Statements/RELEASE), [REWRITE](../../Procedure-Division-Statements/REWRITE), [START](../../Procedure-Division-Statements/START), or [WRITE](../../Procedure-Division-Statements/WRITE) Statement or the unsuccessful execution of a [READ](../../Procedure-Division-Statements/READ) or [RETURN](../../Procedure-Division-Statements/RETURN) Statement does not alter the content of the data item referenced by *Depend*.

l. During the execution of a [RELEASE](../../Procedure-Division-Statements/RELEASE), [REWRITE](../../Procedure-Division-Statements/REWRITE), or [WRITE](../../Procedure-Division-Statements/WRITE) Statement, the number of character positions in the record is determined by the following conditions:

i. If *Depend* is specified, by the content of the data item referenced by *Depend*.

ii. If *Depend* is not specified and the record does not contain a variable occurrence data item, by the number of character positions in the record.

iii. If *Depend* is not specified and the record does contain a variable occurrence data item, by the sum of the fixed portion and that portion of the table described by the number of occurrences at the time of execution of the I-O Statement.

m. If *Depend* is specified, after the successful execution of a [READ](../../Procedure-Division-Statements/READ) or [RETURN](../../Procedure-Division-Statements/RETURN) Statement for the file, the contents of the data item referenced by *Depend* will indicate the number of character positions in the record just read.

n. If the INTO Phrase is specified in the [READ](../../Procedure-Division-Statements/READ) or [RETURN](../../Procedure-Division-Statements/RETURN) Statement, the number of character positions in the current record that participate as the sending data items in the implicit [MOVE](../../Procedure-Division-Statements/MOVE) Statement is determined by the following conditions:

i. If *Depend* is specified, by the content of the data item referenced by *Depend*.

ii. If *Depend* is not specified, by the value that would have been moved into the data item referenced by *Depend* had *Depend* been specified.

o. When *Integer*-6 and *Integer*-7 are specified, they refer to the minimum number of characters in the smallest size data record and the maximum number of characters in the largest size data record, respectively. However, in this case, the size of each data record is completely defined in the record description entry.

p. The size of each data record is specified in terms of the number of character positions required to store the logical record, regardless of the types of characters used to represent the items within the logical record. The size of a record is determined by the sum of the number of characters in all fixed length [elementary items](../Concept-of-Levels/Concept-of-Levels) plus the sum of the maximum number of characters in any variable length item subordinate to the record. This sum may be different from the actual size of the record.

9. *Id-Name* is the name of the file to be opened. Its value overrides the value of File specified in the [FILE-CONTROL Paragraph](../../Environment-Division/Input-Output-Section/File-Control-Paragraph) of the [INPUT-OUTPUT Section](../../Environment-Division/Input-Output-Section/Input-Output-Section) in the [Environment Division](../../Environment-Division/Environment-Division).
10. The LINAGE clause provides a means for specifying the depth of a logical page in terms of number of lines. It also provides for specifying the size of the top and bottom margins on the logical page, and the line number, within the page body, at which the footing area begins.

a. The LINAGE clause can be specified only for [Sequential File](../../Environment-Division/Input-Output-Section/File-Control-Paragraph#sequential-file)s.

b. The LINAGE clause provides a means for specifying the size of a logical page in terms of number of lines. The logical page size is the sum of the values referenced by each phrase except the FOOTING Phrase. If the LINES AT TOP or LINES AT BOTTOM Phrases are not specified, the values of these items are zero. If the FOOTING Phrase is not specified, no end-of-page condition independent of the page overflow condition exists.

There is not necessarily any relationship between the size of the logical page and the size of a physical page.

c. *Page-Lines* specifies the number of lines that can be written and/or spaced on the logical page. The value must be greater than zero. That part of the logical page in which these lines can be written and/or spaced is called the page body.

d. *Footing-Line* specifies the line number within the page body at which the footing area begins. The value must be greater than zero and not greater than *Page-Lines*.

The footing area comprises the area of the page body between the line represented by Footing-Line and the line represented by *Page-Lines*, inclusive.

e. *Top-Lines* specifies the number of lines that comprise the top margin on the logical page. This area is not writable. The value may be zero.

f. *Bottom-Lines* specifies the number of lines that comprise the bottom margin on the logical page. This area is not writable. The value may be zero.

g. *Page-Lines*, *Top-Lines*, and *Bottom-Lines*, if specified, are used at the time the file is opened by the execution of an [OPEN](../../Procedure-Division-Statements/OPEN) Statement with the OUTPUT Phrase, to specify the number of lines that comprise each of the indicated sections of a logical page. *Footing-Line*, if specified, is used at that time to define the footing area. These values are used for all logical pages written for that file during a given execution of the program.

h. The values of the data items referenced by *Page-Lines*, *Top-Lines*, and *Bottom-Lines*, if specified, are used as follows:

i. The values of the data items at the time an [OPEN](../../Procedure-Division-Statements/OPEN) Statement with the OUTPUT Phrase is executed for the file are used to specify the number of lines that are to comprise each of the indicated sections for the first logical page.

ii. The values of the data items, at the time a [WRITE](../../Procedure-Division-Statements/WRITE) Statement with the ADVANCING PAGE Phrase is executed or a page overflow condition occurs are used to specify the number of lines that are to comprise each of the indicated sections for the next logical page.

i. *Footing-Line* is used to define the footing area for the first logical page at the time an [OPEN](../../Procedure-Division-Statements/OPEN) Statement with the OUTPUT Phrase is executed for the file. At the time a [WRITE](../../Procedure-Division-Statements/WRITE) Statement with the ADVANCING PAGE Phrase is executed or a page overflow condition occurs, it is used to define the footing area for the next logical page.

j. A LINAGE-COUNTER is generated by the presence of a LINAGE clause. The value in the LINAGE-COUNTER at any given time represents the line number at which the device is positioned within the current page body. The rules governing the LINAGE-COUNTER are as follows:

i. A separate LINAGE-COUNTER is supplied for each file described in the File Section whose file description entry contains a LINAGE clause.

ii. LINAGE-COUNTER may be referenced only in Procedure Division statements; however only the input-output control system may change the value of LINAGE-COUNTER. Since more than one LINAGE-COUNTER may exist in a program, the user must qualify LINAGE-COUNTER by *File-Name* when necessary.

iii. LINAGE-COUNTER is automatically modified, according to the following rules, during the execution of a [WRITE](../../Procedure-Division-Statements/WRITE) Statement to an associated file:

- When the ADVANCING PAGE Phrase of the [WRITE](../../Procedure-Division-Statements/WRITE) Statement is specified, the LINAGE-COUNTER is automatically reset to one. During the resetting of LINAGE-COUNTER to the value one, the value of LINAGE-COUNTER is implicitly increased incrementally to exceed the value specified by *Page-Lines*.
- When the ADVANCING *Line-Count* Phrase of the [WRITE](../../Procedure-Division-Statements/WRITE) Statement is specified, the LINAGE-COUNTER is increased incrementally by *Line-Count*.
- When the ADVANCING Phrase of the [WRITE](../../Procedure-Division-Statements/WRITE) Statement is not specified, the LINAGE-COUNTER is increased incrementally by the value one.
- The value of LINAGE-COUNTER is automatically reset to one when the device is repositioned to the first line that can be written on for each of the succeeding logical pages.

iv. The value of LINAGE-COUNTER is automatically set to one at the time an [OPEN](../../Procedure-Division-Statements/OPEN) Statement with the OUTPUT Phrase is executed for the associated file.

k. Each logical page is contiguous to the next with no additional spacing provided.

11. The DATA RECORDS clause is treated as a commentary.
12. RECORDING MODE requires the [-cv](../../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#compatibility-options) compiler option and is treated as a commentary.
13. The CODE-SET clause associates a character set with a sequential file. If the character set is not the native character set, then a translation to the native set is also implied.
14. If the THREAD-LOCAL clause is specified, a separate copy of the file connector is created and set to its initial state for each new thread of execution that enters the program. The file connector is only visible to the thread causing its creation. The file connector is destroyed when the creating thread's execution terminates or when a CANCEL statement on the program is executed; otherwise, on subsequent calls to the program within that thread, the file connector is in its last used state.
15. The REPORT clause is used to link a report name to a file. The report name specified in the REPORT clause must match the name used in the Report Description (RD) entry in the REPORT SECTION of the Data Division. If a record description is specified after the REPORT clause, then it’s possible to write report lines with both the GENERATE <rd-item\> statement and the WRITE <fd-item\> statement. If no record description is specified after the REPORT clause, then it’s possible to write report lines only with the GENERATE <rd-item\> statement.
