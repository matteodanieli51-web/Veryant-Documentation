## SORT

#### Format 1

```cobol
SORT File-Name-1 { { ON {ASCENDING } KEY {Data-Name-1} ... } ... }
                        {DESCENDING} 
 
  { KEY AREA IS Key-Table } 
 
  [ WITH DUPLICATES IN ORDER ] 
 
  [ COLLATING SEQUENCE {IS Alphabet-Name-1 [Alphabet-Name-2] }
 
  { INPUT PROCEDURE IS Procedure-Name-1 [{THROUGH} Procedure-Name-2] } 
                                         {THRU   }
  { USING { File-Name-2 } ...                                        } 
 
  { OUTPUT PROCEDURE IS Procedure-Name-3 [{THROUGH} Procedure-Name-4] } 
                                          {THRU   }
  { GIVING { File-Name-3 } ...                                        }
```

#### Format 2

```cobol
SORT Data-Name-2  [ ON {ASCENDING  }  [KEY Data-Name-1]...]...
                       {DESCENDING }
 
  [ WITH DUPLICATES IN ORDER ]
 
  [ COLLATING SEQUENCE {IS Alphabet-Name-1 [Alphabet-Name-2] }
```

### Syntax rules

#### All Formats

1. A SORT statement may appear anywhere in the procedure.
2. Alphabet-Name-1 shall reference an alphabet that defines an alphanumeric collating sequence.
3. Alphabet-Name-2 shall reference an alphabet that defines a national collating sequence.
4. Key-Table must name a data item that is not located in the record for sort-file. Key-table may not be subordinate to an OCCURS clause, nor may it be reference modified.
5. Key-Table must reference a data item whose size is an even multiple of 7. Typically, programs will declare it with a similar format:

```cobol
01  KEY-TABLE.
    03  SORT-KEY OCCURS N TIMES.   
        05  KEY-ASCENDING   PIC X  COMP-X.   
        05  KEY-TYPE        PIC X  COMP-X.   
        05  KEY-OFFSET      PIC XX COMP-X.   
        05  KEY-SIZE        PIC XX COMP-X.   
        05  KEY-DIGITS      PIC X  COMP-X.
```

#### Format 1

6. File-name-1 shall be described in a sort-merge file description entry in the data division.
7. If the USING phrase is specified and the file description entry for file-name-1 describes variable-length records, the file description entry for file-name-2 shall describe neither records smaller than the smallest record nor larger than the largest record described for file-name-1. If the file description entry for file-name-1 describes fixed-length records, the file description entry for file-name-2 shall not describe a record that is larger than the record described for file-name-1.
8. Data-name-1 is a key data-name. Key data-names are subject to the following rules:

A. The data items identified by key data-names shall be described in records associated with file-name-1.

B. Key data items may be qualified.

C. The data items identified by key data-names shall not be variable-length data items.

D. If file-name-1 has more than one record description, then the data items identified by key data-names need be described in only one of the record descriptions. The same byte positions that are referenced by a key data-name in one record description entry are taken as the key in all records of the file.

E. None of the data items identified by key data-names may be described by an entry that either contains an OCCURS clause or is subordinate to an entry that contains an OCCURS clause.

F. If the file referenced by file-name-1 contains variable-length records, all the data items identified by key data-names shall be contained within the first x bytes of the record, where x is the number of bytes of the minimum record size for the file referenced by file-name-1.

9. The words THROUGH and THRU are equivalent.
10. File-name-2 and file-name-3 shall be described in a file description entry that is not for a report file and is not a sort-merge file description entry.
11. If file-name-3 references an indexed file, the first specification of data-name-1 shall be associated with an ASCENDING phrase and the data item referenced by that data-name-1 shall begin at the same byte location within its record and occupy the same number of bytes as the prime record key for that file.
12. If the GIVING phrase is specified and the file description entry for file-name-3 describes variable-length records, the file description entry for file-name-1 shall describe neither records smaller than the smallest record nor larger than the largest record described for file-name-3. If the file description entry for file-name-3 describes fixed-length records, the file description entry for file-name-1 shall not describe a record that is larger than the record described for file-name-3.
13. If file-name-2 references a relative or an indexed file, its access mode shall be sequential or dynamic.
14. Use the KEY AREA option when you do not know the specifics of the sort key until the program is run. You can use this to allow users to enter sort key specifications. For each key, you must specify the following information:

| | |
| --- | --- |
| KEY-ASCENDING | Enter 1 to have an ascending sort sequence, <br>0 for descending. |
| KEY-TYPE | Describes the underlying data format. The allowed values are:<br>0 Numeric edited<br>1 Unsigned numeric (DISPLAY)<br>2 Signed numeric (DISPLAY, trailing separate)<br>3 Signed numeric (DISPLAY, trailing combined)<br>4 Signed numeric (DISPLAY, leading separate)<br>5 Signed numeric (DISPLAY, leading combined)<br>6 Signed COMP-2<br>7 Unsigned COMP-2<br>8 Unsigned COMP-3<br>9 Signed COMP-3<br>10 COMP-6<br>11 Signed binary (COMP-1, COMP-4, COMP-X)<br>12 Unsigned binary (COMP-1, COMP-4, COMP-X)<br>13 Signed native (COMP-5, COMP-N)<br>14 Unsigned native (COMP-5, COMP-N)<br>15 Floating point (FLOAT, DOUBLE)<br>16 Alphanumeric<br>17 Alphanumeric (justified)<br>18 Alphabetic<br>19 Alphabetic (justified)<br>20 Alphanumeric edited<br>21 Not used<br>22 Group |
| KEY-OFFSET | Describes the distance (in standard character positions) from the beginning of the sort record to the beginning of the key field. The first field in a sort record is at offset 0. |
| KEY-SIZE | Describes the size of the key field in standard character positions. |
| KEY-DIGITS | This is used only for numeric keys. It describes the number of digits contained in the key (counting digits on both sides of the decimal point). |
| | |

If you provide invalid data in the key-table, results are undefined.

#### Format 2

15. Data-name-2 may be qualified and shall have an OCCURS clause in its data description entry.
16. Data-name-1 is a key data-name, subject to the following rules:

A. The data item identified by a key data-name shall be the same as, or subordinate to, the data item referenced by data-name-2.

B. Key data items may be qualified.

C. The data items identified by key data-names shall not be variable-length data items.

17. The KEY phrase may be omitted only if the description of the table referenced by data-name-2 contains a KEY phrase.

### General rules

#### All Formats

1. The words ASCENDING and DESCENDING are transitive across all occurrences of data-name-1 until another word ASCENDING or DESCENDING is encountered.
2. The data items referenced by the specifications of data-name-1 are the key data items that determine the order in which records are returned from the file referenced by file-name-1 or the order in which the table elements are stored after sorting takes place. The order of significance of the keys is the order in which they are specified in the SORT statement, without regard to their association with ASCENDING or DESCENDING phrases.
3. If the DUPLICATES phrase is specified and the contents of all the key data items associated with one record or table element are equal to the contents of the corresponding key data items associated with one or more other records or table elements, the order of return of these records or the relative order of the contents of these table elements is:

A. The order of the associated input files as specified in the SORT statement. Within a given input file the order is that in which the records are accessed from that file.

B. The order in which these records are released by an input procedure, when an input procedure is specified.

C. The relative order of the contents of these table elements before sorting takes place.

4. If the DUPLICATES phrase is not specified and the contents of all the key data items associated with one record or table element are equal to the contents of the corresponding key data items associated with one or more other records or table elements, the order of return of these records or the relative order of the contents of these table elements is undefined.

#### Format 1

5. If the file referenced by file-name-1 contains only fixed-length records, any record in the file referenced by file-name-2 containing fewer character positions than that fixed-length is space filled on the right to that fixed length, beginning with the first character position after the last character in the record, when that record is released to the file referenced by file-name-1, as follows:

A. If there is only one record description entry associated with the file referenced by file-name-2 and that record is described as a national data item or as an elementary data item of usage national and of category numeric, numeric-edited, or boolean, the record is filled with national space characters.

B. Otherwise, the record is space filled with alphanumeric space characters.

6. To determine the relative order in which two records are returned from the file referenced by file-name-1, the contents of corresponding key data items are compared according to the rules for comparison of operands in a relation condition, starting with the most significant key data item.

A. If the contents of the corresponding key data items are not equal and the key is associated with the ASCENDING phrase, the record containing the key data item with the lower value is returned first;

B. If the contents of the corresponding key data items are not equal and the key is associated with the DESCENDING phrase, the record containing the key data item with the higher value is returned first; and,

C. If the contents of the corresponding key data items are equal, the determination is made on the contents of the next most significant key data item.

7. The execution of the SORT statement consists of three distinct phases as follows:

A. Records are made available to the file referenced by file-name-1. If INPUT PROCEDURE is specified, the execution of RELEASE statements in the input procedure makes the records available. If USING is specified, implicit READ and RELEASE statements make the records available. If the file referenced by file-name-2 is in an open mode when this phase commences, the results of the execution of the SORT statement are undefined. When this phase terminates, the file referenced by file-name-2 is not in an open mode.

B. The file referenced by file-name-1 is sequenced. No processing of the files referenced by file-name-2 and file-name-3 takes place during this phase.

C. The records of the file referenced by file-name-1 are made available in sorted order. The sorted records are either written to the file referenced by file-name-3 or, by the execution of a RETURN statement, are made available for processing by the output procedure. If the file referenced by file-name-3 is in an open mode when this phase commences, the results of the execution of the SORT statement are undefined. When this phase terminates, the file referenced by file-name-3 is not in the open mode.

8. The input procedure may consist of any procedure needed to create the records that are to be made available to the sort mechanism by executing RELEASE statements. The range includes all statements that are executed as the result of a transfer of control in the range of the input procedure, as well as all statements in declarative procedures that are executed as a result of the execution of statements in the range of the input procedure. If the range of the input procedure causes the execution of any MERGE, RETURN, or format 1 SORT statements, the results of the execution of the SORT statement are undefined.
9. If the USING phrase is specified, all the records in the file(s) referenced by file-name-2 are transferred to the file referenced by file-name-1. For each of the files referenced by file-name-2 the execution of the SORT statement causes the following actions to be taken:

A. The processing of the file is initiated and the initiation is performed as if an OPEN statement with the INPUT phrase is executed.

B. The logical records are obtained and released to the sort operation. Each record is obtained as if a READ statement with the NEXT phrase, the IGNORING LOCK phrase, and the AT END phrase had been executed. When the at end condition exists for file-name-1, the processing for that file connector is terminated. If the file referenced by file-name-1 is described with variable-length records, the size of any record released to file-name-1 is the size of that record when it was read from file-name-2, regardless of the content of the data item referenced by the DEPENDING ON phrase of either a RECORD IS VARYING clause or an OCCURS clause specified in the sort-merge file description entry for file-name-1. If the size of the record read from the file referenced by file-name-2 is larger than the largest record allowed in the file description entry for file-name-1, the execution of the SORT statement is terminated. If file-name-1 is specified with variable-length records and the size of the record read from the file referenced by file-name-2 is smaller than the smallest record allowed in the file description entry for file-name-1, the execution of the SORT statement is terminated. If a fatal exception condition exists for file-name-1, the SORT is terminated.

C. The processing of file-name-1 is terminated. The termination is performed as if a CLOSE statement had been executed. This termination is performed before the file referenced by file-name-1 is sequenced by the SORT statement. For a relative file, the content of the relative key data item associated with file-name-2 is undefined after the execution of the SORT statement if file-name-2 is not referenced in the GIVING phrase.

The value of the data item referenced by the DEPENDING ON phrase of a RECORD IS VARYING clause specified in the file description entry for file-name-2 is undefined upon completion of the SORT statement.

10. The output procedure may consist of any procedure needed to process the records that are made available one at a time by the RETURN statement in sorted order from the file referenced by file-name-1. The range includes all statements that are executed as the result of a transfer of control in the range of the output procedure, as well as all statements in declarative procedures that are executed as a result of the execution of statements in the range of the output procedure. If the range of the output procedure causes the execution of any MERGE, RELEASE, or format 1 SORT statement, the results of the execution of the SORT statement are undefined.
11. If an output procedure is specified, control passes to it after the file referenced by file-name-1 has been sequenced by the SORT statement. The compiler inserts a return mechanism after the last statement in the output procedure. When control passes to that return mechanism, the mechanism provides for the termination of the sort and then passes control to the next executable statement after the SORT statement. Before entering the output procedure, the sort procedure reaches a point at which it selects the next record in sorted order when requested. The RETURN statements in the output procedure are the requests for the next record.

**NOTE** - This return mechanism transfers control from the end of the output procedure and is not associated with the RETURN statement.

12. If the GIVING phrase is specified, all the sorted records are written on the file referenced by file-name-3 as the implied output procedure for the SORT statement. For each of the files referenced by file-name-3, the execution of the SORT statement causes the following actions to be taken:

A. The processing of the file is initiated. The initiation is performed as if an OPEN statement with the OUTPUT phrase had been executed. This initiation is performed after the execution of any input procedure.

B. The sorted logical records are returned and written onto the file. Each record is written as if a WRITE statement without any optional phrases had been executed. If the file referenced by file-name-3 is described with variable-length records, the size of any record written to file-name-3 is the size of that record when it was read from file-name-1, regardless of the content of the data item referenced by the DEPENDING ON phrase of either a RECORD IS VARYING clause or an OCCURS clause specified in the file description entry for file-name-3.

For a relative file, the relative key data item for the first record returned has the value 1; for the second record returned, the value 2; etc. After execution of the SORT statement, the content of the relative key data item indicates the last record returned to the file.

C. The processing of the file is terminated. The termination is performed as if a CLOSE statement had been executed.

The value of the data item referenced by the DEPENDING ON phrase of a RECORD IS VARYING clause specified in the sort-merge file description entry for file-name-1 is undefined upon completion of the SORT statement for which the GIVING phrase is specified.

13. If the file referenced by file-name-3 contains only fixed-length records, any record in the file referenced by file-name-1 containing fewer character positions than that fixed-length is space filled on the right to that fixed length, beginning with the first character position after the last character in the record, when that record is returned to the file referenced by file-name-3, as follows:

A. If there is only one record description entry associated with the file referenced by file-name-2 and that record is described as a national data item or as an elementary data item of usage national and of category numeric, numeric-edited, or boolean, the record is filled with national space characters.

B. Otherwise, the record is space filled with alphanumeric space characters.

#### Format 2

14. The SORT statement sorts the table referenced by data-name-2 and presents the sorted table in data-name-2 either in the order determined by the ASCENDING or DESCENDING phrases, if specified, or in the order determined by the KEY phrase associated with data-name-2.
15. To determine the relative order in which the table elements are stored after sorting, the contents of corresponding key data items are compared according to the rules for comparison of operands in a relation condition, starting with the most significant key data item.

A. If the contents of the corresponding key data items are not equal and the key is associated with the ASCENDING phrase, the table element containing the key data item with the lower value has the lower occurrence number.

B. If the contents of the corresponding key data items are not equal and the key is associated with the DESCENDING phrase, the table element containing the key data item with the higher value has the lower occurrence number.

C. If the contents of the corresponding key data items are equal, the determination is based on the contents of the next most significant key data item.

16. The number of occurrences of table elements referenced by data-name-2 is determined by the rules in the OCCURS clause.
17. If the KEY phrase is not specified, the sequence is determined by the KEY phrase in the data description entry of the table referenced by data-name-2.
18. If the KEY phrase is specified, it overrides any KEY phrase specified in the data description entry of the table referenced by data-name-2.
19. If data-name-1 is omitted, the data item referenced by data-name-2 is the key data item.
20. The sorted table elements of the table referenced by data-name-2 are placed in the table referenced by data-name-2.

### Examples

Format 1 - Sort sequential file into another sequential file by alternate key

```cobol
 input-output section.
 file-control.
   select sort-file
          assign to sort.
 
   select seq-1-file
          assign to disk "seq1.dat"
          binary sequential
          status is seq-1-status.
 
   select seq-2-file
          assign to disk "seq2.dat"
          binary sequential.
 
 file section.
 fd  seq-1-file.
 01  seq-1-record.
     03  seq-1-key                       pic 9(10).
     03  seq-1-alt-key.
         05  seq-1-alt-key-a             pic x(30).
         05  seq-1-alt-key-b             pic 9(10).
     03  seq-1-body                      pic x(50).
 
 fd  seq-2-file.
 01  seq-2-record                        pic x(100).
 
 sd  sort-file.
 01  sort-record.
     03  sort-key                        pic x(10).
     03  sort-alt-key                    pic x(40).
     03  filler                          pic x(50).
 
....
 
 procedure division.
 main.
   sort sort-file on ascending key sort-alt-key
        using seq-1-file giving seq-2-file.
```

Format 2 - Sort an array of customers

```cobol
 working-storage section.
 77 i pic 9(3).
 
 01 cust-array occurs 5 times.
    05 cust-code pic x(3).
    05 cust-name pic x(20).
    05 cust-city pic x(20).
 
 procedure division.
 main.
   perform fill-array
   perform display-array
   perform sort-array-code
   perform display-array
   perform sort-array-name
   perform display-array
   goback.
 
 fill-array.
   move "444" to cust-code(1)
   move "Adam Smith" to cust-name(1)
   move "New York" to cust-city(1)
 
   move "222" to cust-code(2)
   move "Eve Lion" to cust-name(2)
   move "Los Angeles" to cust-city(2)
 
   move "111" to cust-code(3)
   move "Walter Darryn" to cust-name(3)
   move "Chicago" to cust-city(3)
 
   move "333" to cust-code(4)
   move "Lola Lyn" to cust-name(4)
   move "Washington" to cust-city(4)
 
   move "555" to cust-code(5)
   move "Will Smith" to cust-name(5)
   move "Riverside" to cust-city(5)
   .
 
 display-array.
   display "------ Customers "
   perform varying i from 1 by 1 until i > 5
     display cust-code(i) " " cust-name(i) " " cust-city(i)
   end-perform
   .
 sort-array-code.
   sort cust-array on ascending key cust-code.
 
 sort-array-name.
   sort cust-array on descending key cust-name.
```
