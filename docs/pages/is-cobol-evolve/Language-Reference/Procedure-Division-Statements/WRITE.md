## WRITE

#### Format 1

```cobol
WRITE { Record-Name-1    } [ FROM {Identifier-1}  ]
      { FILE File-Name-1 }        {Literal-1   }
 
  [ {BEFORE} ADVANCING { Identifier-2    [LINE ] } ]
    {AFTER }           { Integer-1       [LINES] }
                       { PAGE                    }
 
  [ AT {END-OF-PAGE} Imperative-Statement-1 ]
       {EOP        }
 
  [ NOT AT {END-OF-PAGE} Imperative-Statement-2 ]
           {EOP        }
 
[END-WRITE]
```

#### Format 2

```cobol
WRITE { Record-Name-1    } [ FROM {Identifier-1}  ]
      { FILE File-Name-1 }        {Literal-1   }
 
  [ WITH LOCK ]
 
  [ INVALID KEY Imperative-Statement-1 ] 
 
  [ NOT INVALID KEY Imperative-Statement-2 ] 
 
[END-WRITE]
```

#### Format 3

```cobol
WRITE { Record-Name-1    } [ FROM {Identifier-1} ] [ WITH NO {CONTROL   } ] [ SIZE Identifier-3 ]
      { FILE File-Name-1 }        {Literal-1   }            {CONVERSION} 
```

#### Format 4

```cobol
WRITE Record-Name-1
  [ KEY IS { ALL data-name-1                          }
           { {PROCESSING-INSTRUCTION } { data-name-2 }}
           { { PLAIN-TEXT            } { literal-1   }}
```

### Syntax rules

1. The write file is the file referenced by file-name-1 or by the file-name associated with record-name-1.
2. If the organization of the write file is sequential, format 1 shall be specified.
3. If the organization of the write file is indexed or relative, format 2 shall be specified.
4. If identifier-1 is a function-identifier, it shall reference an alphanumeric, or national function. Record-name-1 and identifier-1 shall not reference the same storage area.
5. Record-name-1 is the name of a logical record in the file section of the data division and may be qualified.
6. If record-name-1 is specified, identifier-1 or literal-1 shall be valid as a sending operand in a MOVE statement specifying record-name-1 as the receiving operand.
7. If the FILE phrase is specified, the FROM phrase shall also be specified and identifier-1 shall be valid as a sending operand in a MOVE statement;
8. If the FILE phrase is specified, the description of identifier-1, including its subordinate data items, shall not contain a data item described with a USAGE OBJECT REFERENCE clause.
9. Identifier-2 shall reference an integer data item.
10. Integer-1 shall be positive or zero.
11. The phrases ADVANCING PAGE and END-OF-PAGE shall not both be specified in a single WRITE statement.
12. If the END-OF-PAGE or the NOT END-OF-PAGE phrase is specified, the LINAGE clause shall be specified in the file description entry associated with the write file.
13. If record-name-1 is defined in a containing program and is referenced in a contained program, the file description entry for the file-name associated with record-name-1 shall contain a GLOBAL clause.
14. If automatic locking has been specified for the write file, neither the WITH LOCK phrase nor the WITH NO LOCK phrase shall be specified.
15. END-OF-PAGE and EOP are synonymous.
16. Identifier-3 is a numeric data item or literal.
17. Record-name-1 is the name of an 01 level group item defined in an XD record declaration within the Data Division .
18. Data-name-1 can be qualified, and references a data item whose declaration includes an IDENTIFIED BY clause and is included in the XD record declarations for file-name-1.

### General rules

#### All Files

1. The write file connector is the file connector associated with the write file. If the access mode of the write file is sequential, the open mode of the write file connector shall be extend or output. Otherwise, the open mode of the write file connector shall be I-O or output. If the open mode is not as described, the execution of the WRITE statement is unsuccessful and the I-O status associated with file-name-1 is set based on your [iscobol.file.status \*](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration) setting.
2. The result of the execution of a WRITE statement specifying record-name-1 and the FROM phrase is equivalent to the execution of the following statements in the order specified:

A. The statement:

MOVE identifier-1 TO record-name-1

or

MOVE literal-1 TO record-name-1

according to the rules specified for the MOVE statement.

B. The same WRITE statement without the FROM phrase.

3. The figurative constant SPACE when specified in the WRITE statement references one alphanumeric space character.
4. The result of execution of a WRITE statement with the FILE phrase is equivalent to the execution of the following in the order specified:

— The statement:

MOVE identifier-1 TO implicit-record-1

or

MOVE literal-1 TO implicit-record-1

— The statement:

WRITE implicit-record-1

where implicit-record-1 refers to the record area for file-name-1 and is treated:

A. when identifier-1 references an intrinsic function, as though implicit-record-1 were a record description entry subordinate to the file description entry having the same class, category, usage, and length as the returned value of the intrinsic function, or

B. when identifier-1 does not reference an intrinsic function, as though implicit-record-1 were a record description entry subordinate to the file description entry having the same description as identifier-1, or

C. when literal-1 is specified, as though implicit-record-1 were a record description entry subordinate to the file description entry having the same class, category, usage, and length as literal-1.

5. If the locking mode of the write file connector is single record locking, any record lock associated with that file connector is released by the execution of the WRITE statement.
6. If record locks have an effect for the write file connector and the WITH LOCK phrase is specified, the record lock associated with the record written is set when the execution of the WRITE statement is successful.
7. The file position indicator is not affected by the execution of a WRITE statement.
8. The execution of a WRITE statement causes the value of the I-O status of the write file connector to be updated.
9. The successful execution of a WRITE statement releases a logical record to the operating environment.

**NOTE** - Logical records in relative and sequential files may have a length of zero. Logical records in an indexed file shall always be long enough to contain the record keys.

10. When record-name-1 is specified, if the number of bytes to be written to the file is greater than the number of bytes in record-name-1, the content of the bytes that extend beyond the end of record-name-1 are undefined.
11. If the execution of a WRITE statement is unsuccessful, the write operation does not take place, the content of the record area is unaffected, and the I-O status of the write file connector is set to a value indicating the cause of the condition as specified in the following general rules.

#### Sequential and Print Files

12. The successor relationship of a sequential file is established by the order of execution of WRITE statements when the physical file is created. The relationship does not change except when records are added to the end of a physical file.
13. When the organization of the write file connector is sequential and the open mode is extend, the execution of the WRITE statement will add records to the end of the physical file as though the open mode of the file connector were output. If there are records in the physical file, the first record written after the execution of the OPEN statement with the EXTEND phrase is the successor of the last record in the physical file.
14. If two or more file connectors for a sequential file add records by sharing the physical file after opening it in extend mode, the added records follow the records present in the physical file when it was opened, but are otherwise in an undefined order.
15. When an attempt is made to write beyond the externally-defined boundaries of the physical file, the execution of the WRITE statement is unsuccessful and the I-O status value associated with file-name-1 is set based on your [iscobol.file.status \*](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration) setting.
16. Both the ADVANCING phrase and the END-OF-PAGE phrase allow control of the vertical positioning of each line on a representation of a printed page. If the ADVANCING phrase is not used, automatic advancing shall be provided by the implementor to act as if the user has specified AFTER ADVANCING 1 LINE. If the physical file does not support vertical positioning, the ADVANCING and END-OF-PAGE phrases are ignored. If the physical file does support vertical positioning and the ADVANCING phrase is specified, advancing is provided as follows:

A. If integer-1 or the value of the data item referenced by identifier-2 is positive, the representation of the printed page is advanced the number of lines equal to that value.

B. If the value of the data item referenced by identifier-2 is negative, the results are undefined.

C. If integer-1 or the value of the data item referenced by identifier-2 is zero, no repositioning of the representation of the printed page is performed.

D. If the BEFORE phrase is used, the page advancement specified occurs after Record-Name-1 is added to the file.

E. If the AFTER phrase is used, the page advancement specified occurs before Record-Name-1 is added to the file.

F. If PAGE is specified and the LINAGE clause is specified in the associated file description entry, the record is presented on the logical page before or after (depending on the phrase used) the device is repositioned to the next logical page. The repositioning is to the first line that may be written on the next logical page as specified in the LINAGE clause.

G. If PAGE is specified and the LINAGE clause is not specified in the associated file description entry, the record is presented on the physical page before or after (depending on the phrase used) the device is repositioned to the next physical page. If physical page has no meaning in conjunction with a specific device, advancing will be provided as if the user had specified BEFORE or AFTER (depending on the phrase used) ADVANCING 1 LINE.

17. Both the ADVANCING phrase and the END-OF-PAGE phrase causes the file to be treated as a print file.
18. If the LINAGE clause is specified in the file description entry of the associated file, an end-of-page condition occurs when the lines written by a WRITE statement do not fit within the current page body. This occurs when:

A. The logical end of the representation of the printed page is reached. This occurs when the associated LINAGE-COUNTER is equal to or exceeds the page size. If the AFTER phrase is specified or implied, the device is repositioned to the first line that may be written on the next logical page and the logical record is presented on that line. If the BEFORE phrase is specified, the logical record is presented and the device is repositioned to the first line that may be written on the next logical page.

B. The FOOTING phrase is specified in the LINAGE clause and the execution of the WRITE statement causes printing or spacing within the footing area of a page body. This occurs when the associated LINAGE-COUNTER is equal to or exceeds the current value of the footing start and is less than the page size.

19. When an end-of-page condition occurs, the following actions take place:

A. If the END-OF-PAGE phrase is specified, control is transferred to imperative-statement-1 and execution continues according to the rules for each statement specified in imperative-statement-1. If a procedure branching or conditional statement that causes explicit transfer of control is executed, control is transferred in accordance with the rules for that statement; otherwise, upon completion of the execution of imperative-statement-1, control is transferred to the end of the WRITE statement. The NOT END-OF-PAGE phrase, if specified, is ignored.

20. If, during the successful execution of a WRITE statement with the NOT END-OF-PAGE phrase, the end-of-page condition does not occur, control is transferred to imperative-statement-2 after execution of the input-output operation and execution continues according to the rules for each statement specified in imperative-statement-2. If a procedure branching or conditional statement that causes explicit transfer of control is executed, control is transferred in accordance with the rules for that statement; otherwise, upon completion of execution of imperative-statement-1, control is transferred to the end of the WRITE statement. The END-OF-PAGE phrase, if specified, is ignored.
21. When the SIZE clause is specified, if writing on a disk file, the file must be open in EXTEND mode. Identifier-3 controls how many bytes are flushed to the file.
22. In print files trailing spaces are removed from the record.
23. When the NO CONTROL clause is specified, line feed characters are removed.
24. When the NO CONVERSION clause is specified, line feed characters are removed and trailing spaces are kept.

#### Relative Files

25. The WRITE statement proceeds as follows:

A. If the access mode of the write file connector is sequential, the successful execution of the WRITE statement causes a record to be released to the operating environment. If the open mode of the write file connector is output, the first record released after the OPEN is 1. If the open mode is extend, the first record released after the OPEN is assigned a record number that is one greater than the highest relative record number existing in the physical file. Subsequent records released have relative record numbers that are ascending ordinal numbers. If the physical file is shared and the open mode is extend, the record numbers are not necessarily consecutive. Otherwise, they are consecutive. If the RELATIVE KEY clause is specified for file-name-1 or the file-name associated with record-name-1, the relative record number of the record being released is moved into the relative key data item by the operating environment during execution of the WRITE statement according to the rules for the MOVE statement. If the maximum numeric value allowed for the relative key data item is exceeded by the relative record number that would be generated by a successful WRITE operation, the WRITE statement is unsuccessful, and the I-O status associated with file-name-1 is set based on your [iscobol.file.status \*](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration) setting.

B. If the access mode of the write file connector is random or dynamic, prior to the execution of the WRITE statement the value of the relative key data item shall be initialized by the runtime element with the relative record number to be associated with the record that is to be written. If there is no record in the physical file with a relative record number that matches the relative key value, the record is released to the operating environment. If a record in the file matches, the execution of the WRITE statement is unsuccessful, the invalid key condition exists, and the I-O status associated with file-name-1 is set based on your [iscobol.file.status \*](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration) setting.

26. When a relative file is opened with the file connector in the extend mode, records are inserted into the file through that file connector. The first record released to the operating environment has a relative record number one greater than the highest relative record number existing in the file. Subsequent records released to the operating environment have consecutively higher relative record numbers. If the RELATIVE KEY clause is specified for file-name-1 or the file-name associated with record-name-1, the relative record number of the record being released is moved into the relative key data item by the operating environment during execution of the WRITE statement according to the rules for the MOVE statement.
27. If two or more file connectors for a relative file add records by sharing the file after opening it in extend mode, the relative key values returned are ascending, but not necessarily consecutive.
28. When a relative file is opened in the I-O mode and the access mode is random or dynamic, records are to be inserted in the associated file. Prior to the execution of the WRITE statement, the value of the relative key data item shall be initialized by the runtime element with the relative record number to be associated with the record that is to be written. That record is then released to the operating environment by the execution of the WRITE statement.
29. The invalid key condition exists under the following circumstances, regardless of any locks that are associated with the record being accessed:

A. When the value of the relative key data item specifies a record that already exists in the file, the I-O status associated with file-name-1 is set based on your [iscobol.file.status \*](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration) setting.

B. When an attempt is made to write beyond the externally defined boundaries of the file, the I-O status associated with file-name-1 is set based on your [iscobol.file.status \*](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration) setting.

#### Indexed Files

30. Successful execution of a WRITE statement causes the content of the record area to be released. The operating environment utilizes the contents of the record keys in such a way that subsequent access of the record may be made based upon any of these specified record keys.
31. The comparison used for ensuring uniqueness or for ordering records in the physical file is based on the collating sequence for the file according to the rules for a relation condition.
32. The value of the prime record key shall not be equal to the value of the prime record key of any record existing in the file.
33. The data item specified as the prime record key shall be set by the runtime element to the desired value prior to the execution of the WRITE statement.
34. If the access mode of the write file connector is sequential, records shall be released to the operating environment through that file connector in ascending order of prime record key values according to the collating sequence of the file. When the open mode is extend, the first record released to the operating environment shall have a prime record key whose value is greater than the highest prime record key value existing in the physical file when it was opened through that file connector and each subsequent record released to the operating environment through that file connector shall have a prime record key whose value is greater than the highest prime record key value written referencing this file connector. If the record is not in the sequence above, the execution of the WRITE statement is unsuccessful, and the I-O status value associated with file-name-1 is set based on your [iscobol.file.status \*](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration) setting.
35. If the access mode of the write file connector is random or dynamic, WRITE statements may release records to the operating environment through that connector in any order.
36. When the ALTERNATE RECORD KEY clause is specified in the file control entry associated with the write file connector, the value of the alternate record key may be nonunique only if the DUPLICATES phrase is specified for that data item. In this case the operating environment provides storage of records such that when records are accessed sequentially, the order of retrieval of those records is the order in which the operating environment actually writes the record into the physical file. If the DUPLICATES phrase is not specified and the alternate key value is nonunique, the execution of the WRITE statement is unsuccessful, and the I-O status associated with file-name-1 is set based on your [iscobol.file.status \*](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration) setting.
37. The invalid key condition exists under the following circumstances. The comparison for equality for record keys is based on the collating sequence for the file according to the rules for a relation condition. Any record locks associated with the record being accessed are ignored in detection of these exceptions.

A. When the write file connector is open for output or extend in the sequential access mode and the value of the prime record key is not greater than the value of the prime record key of the last record written through that file connector, the I-O status value associated with file-name-1 is set based on your [iscobol.file.status \*](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration) setting.

B. When the value of the prime record key of the record to be written is equal to the value of the prime record key of any record existing in the file, the I-O status value associated with file-name-1 is set based on your [iscobol.file.status \*](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration) setting.

C. When an alternate record key of the record to be written does not allow duplicates and the value of that alternate record key is equal to the value of the corresponding alternate record key of a record in the file, the I-O status value associated with file-name-1 is set based on your [iscobol.file.status \*](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration) setting.

D. When the record that is to be released to the operating environment would reside beyond the externally defined boundaries of the physical file, the I-O status value associated with file-name-1 is set based on your [iscobol.file.status \*](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration) setting.

#### Format 4

38. A Format 4 WRITE statement writes an XML document to an I/O stream or add an XML element to the in-memory representation of the XML document.
39. WRITE without KEY IS takes the record specified, creates a new internal representation (if one does not exist already) and then writes that internal representation to the stream.

1. If the following conditions are met when an XML file is opened I-O:
  - an internal representation is created by a READ statement
  - the internal representation is modified by any combination of WRITE, REWRITE, or DELETE KEY statements
  - WRITE without the KEY IS clause is performed
2. The current contents of the record specified are ignored; instead, the internal representation as established by the READ and modified by the WRITE, REWRITE, or DELETE KEY statements, is written to the stream.
3. WRITE KEY IS PLAIN-TEXT, data-name-2 or literal-1 is a string value which contains plain text to be output to the XML stream.
4. WRITE KEY IS PLAIN-TEXT can be decoration such as "Content-type: text/xml."
5. No stream I/O is actually performed by the WRITE KEY IS statement.
6. WRITE KEY IS adds the node specified to the internal representation of the XML document immediately after the current position. If any containing nodes are required for the node specified, these are also created in the internal representation.
7. If ALL is specified, any contained nodes are also added to the internal representation of the XML document. Otherwise only the specific node and its attributes and data are added. No stream I/O is performed.
8. WRITE KEY IS PROCESSING-INSTRUCTION causes an XML processing-instruction node to be added immediately after the current position. When using sequential I/O, where your other WRITE statements have no usage of the KEY clause, a processing instruction is either written before or after the entire XML record, depending on order of execution. When using WRITE KEY IS PROCESSING-INSTRUCTION:
  - Data-name-2 is a defined level 78 or a simple data name.
  - Literal-1 is a string value which contains an XML-specific processing instruction. Upon output, this string is decorated with the XML delimiters ''.
9. WRITE KEY IS PLAIN-TEXT adds a plain text node immediately after the current position. When using sequential I/O, where your other WRITE statements have no usage of the KEY clause, plain text will either be written before or after the entire XML record, depending on order of execution.
10. If the internal representation of the XML document is modified through the use of WRITE KEY, REWRITE KEY, or DELETE KEY, and the internal representation is cleared with either a CLOSE or READ (no key) statement, then the CLOSE or READ statement returns a status of -10, indicating the operation succeeded but no write was done.

### Examples

Format 1 - Print last lines to a page and advance 1 page

```cobol
write report-line from page-subtotal-1-line after advancing 2 lines
write report-line from page-subtotal-2-line after advancing 2 lines
write report-line from page-total-line before advancing page
```

Format 2 - Write record validating invalid key

```cobol
move 1234 to cust-code
move "Adam Smith" to cust-name
write cust-rec
      invalid key display message "Invalid Customer Key : " cust-code
      not invalid key display message "Customer saved!"
end-write
```
