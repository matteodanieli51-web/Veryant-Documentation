## READ

#### Format 1

```cobol
READ File-Name-1  [NEXT    ] RECORD  
                  [PREVIOUS] 
                  [BACKWARD] 
 
  [ WITH [ { NO     } ] LOCK ] 
           { KEPT   }
           { IGNORE }
           { WAIT   }
 
  [ ALLOWING UPDATERS ] 
 
  [ INTO Identifier-1 ] 
 
  [ SIZE Identifier-2 ] 
 
  [ AT END Imperative-Statement-1 ] 
 
  [ NOT AT END Imperative-Statement-2 ] 
 
[END-READ]
```

#### Format 2

```cobol
READ File-Name-1 RECORD  
 
  [ WITH [ { NO     } ] LOCK ] 
           { KEPT   }
           { IGNORE }
           { WAIT   }
 
  [ ALLOWING UPDATERS ] 
 
  [ INTO Identifier-1 ] 
 
  [ KEY IS Record-Key-Name-1 ] 
 
  [ INVALID KEY Imperative-Statement-3 ] 
 
  [ NOT INVALID KEY Imperative-Statement-4 ] 
 
[END-READ]
```

#### Format 3

```cobol
READ File-Name-1 
  [ NEXT RECORD KEY IS DataName-1 ]
```

### Syntax rules

#### All Formats

1. The INTO phrase may be specified in a READ statement:

A. If no record description entry or only one record description is subordinate to the file description entry, or

B. If the data item referenced by identifier-1 and all record-names associated with file-name-1 describe an alphanumeric group item or an elementary item of category alphanumeric or category national.

2. The storage area associated with identifier-1 and the record area associated with file-name-1 shall not be the same storage area.
3. If identifier-1 is a strongly-typed group item, there shall be at most one record area subordinate to the FD for file-name-1. This record area, if specified, shall be a strongly-typed group item of the same type as identifier-1.
4. WITH LOCK and WITH KEPT LOCK are synonymous.
5. WITH NO LOCK and ALLOWING UPDATERS are synonymous.

#### Format 1

6. PREVIOUS and BACKWARDS are synonymous.
7. None of the phrases AT END, NEXT, NOT AT END, or PREVIOUS shall be specified if ACCESS MODE RANDOM is specified in the file control entry for file-name-1.
8. If neither the NEXT phrase nor the PREVIOUS phrase is specified and ACCESS MODE SEQUENTIAL is specified in the file control entry for file-name-1, the NEXT phrase is implied.
9. If neither the NEXT phrase nor the PREVIOUS phrase is specified and ACCESS MODE DYNAMIC is specified in the file control entry for file-name-1, the NEXT phrase is implied if any of the following phrases is specified: AT END, or NOT AT END.
10. If SIZE phrase is specified, identifier-2 shall be a numeric data item.

#### Format 2

11. The KEY phrase may be specified only if ORGANIZATION IS INDEXED is specified in the file control entry for file-name-1.
12. Data-name-1 or record-key-name-1 shall be specified in the RECORD KEY clause or an ALTERNATE RECORD KEY clause associated with file-name-1.
13. Data-name-1 or record-key-name-1 may be qualified.

#### Format 3

14. DataName-1 can be qualified, and references a data item whose declaration includes an IDENTIFIED BY clause and is included in the XD record declarations for File-Name-1.

General rules

All Formats

1. The open mode of the file connector referenced by file-name-1 shall be input or I-O. If it is any other value, the execution of the READ statement is unsuccessful and the I-O status value for file-name-1 is set based on your [iscobol.file.status \*](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration) setting.
2. The execution of the READ statement causes the value of the I-O status in the file connector referenced by file-name-1 to be updated.
3. When the logical records of a file are described with more than one record description, these records automatically share the same record area in storage; this is equivalent to an implicit redefinition of the area. The contents of any data items that lie beyond the range of the current record are undefined at the completion of the execution of the READ statement.
4. The result of the successful execution of a READ statement with the INTO phrase is equivalent to the application of the following rules in the order specified:

A. The same READ statement without the INTO phrase is executed.

B. The current record is moved from the record area to the area specified by identifier-1 according to the rules for the MOVE statement without the CORRESPONDING phrase. The size of the current record is determined by rules specified in the RECORD clause. If the file description entry contains a RECORD IS VARYING clause, the implied move is an alphanumeric group move. Item identification of the data item referenced by identifier-1 is done after the record has been read and immediately before it is moved to the data item. The record is available in both the record area and the data item referenced by identifier-1.

If the execution of a READ statement with the INTO phrase is unsuccessful, the content of the data item referenced by identifier-1 is unchanged and item identification of the data item referenced by identifier-1 is not done.

5. The execution of a READ statement with the INTO phrase when there are no record description entries subordinate to the file description entry proceeds as though there were one record description entry describing an alphanumeric group item of the maximum size established by the RECORD clause.
6. Whether record locking is in effect is determined by the LOCK MODE clause.
7. If record locking is enabled for the file connector referenced by file-name-1 and the record identified for access by the general rules for the READ statement is locked by that file connector, the record lock is ignored and the READ operation proceeds as if the record were not locked.
8. If the record operation conflict condition exists as a result of the READ statement:

A. The file position indicator is unchanged.

B. A value is placed into the I-O status associated with file-name-1 to indicate the record operation conflict condition.

C. The content of the associated record area is undefined.

D. The key of reference for indexed files is unchanged.

E. The READ statement is unsuccessful.

9. If record locks are in effect, the following actions take place:

A. If single record locking is specified for the file connector associated with file-name-1, any prior record lock associated with that file connector is released by the execution of the READ statement.

B. If multiple record locking is specified for the file connector associated with file-name-1, no record locks are released, except when the NO LOCK phrase is specified and the record accessed was already locked by that file connector. In this case, that record lock is released at the completion of the successful execution of the READ statement.

C. If the lock mode is automatic, the record lock associated with a successfully accessed record is set.

D. If lock mode is manual, the record lock associated with a successfully accessed record is set only if the LOCK phrase is specified on the READ statement. The following types of lock are supported:

| Type | Action |
| --- | --- |
| [KEPT] LOCK | a lock is acquired on the read record. |
| NO LOCK | a lock is not acquired on the read record, unless [iscobol.file.index.read_lock_test (boolean) *](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration) is set to true in the configuration. In such case, a lock is acquired just to test the record status, then it’s immediately released. |
| IGNORE LOCK | a lock is not acquired on the read record. The record is always read, regardless of it’s locked or not. |
| WAIT LOCK | if a lock can't be acquired because the record is locked, the runtime waits for the record to be unlocked, then reads it with lock.<br>This feature is fully supported by c-tree RTG.<br>It is supported also by JIsam but, in a thin client or file server environment, it works only if [iscobol.file.lock_manager *](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration) is set to "com.iscobol.as.locking.InternalLockManager". |

10. If neither an at end nor an invalid key condition occurs during the execution of a READ statement, the AT END phrase or the INVALID KEY phrase is ignored, if specified, and the following actions occur:

A. The I-O status associated with file-name-1 is updated and, if the record operation conflict condition did not occur, the file position indicator is set.

B. If an exception condition that is not an at end or an invalid key condition exists, control is transferred according to the following rules:

i. If a USE AFTER EXCEPTION procedure is associated with the file connector referenced by file-name-1, control is transferred according to the rules for the specific exception condition and the rules for the USE statement following the execution of the associated declarative procedure.

ii. If there is no USE AFTER EXCEPTION procedure associated with the file connector referenced by file-name-1, control is transferred according to the rules for the specific exception condition. If the exception condition is not a fatal exception condition, control is transferred to the end of the READ statement.

C. If no exception condition exists, the record is made available in the record area and any implicit move resulting from the presence of an INTO phrase is executed. Control is transferred to the end of the READ statement, or, if the NOT AT END phrase or NOT INVALID KEY phrase is specified, to imperative-statement-2. If a procedure branching or conditional statement that causes explicit transfer of control is executed, control is transferred in accordance with the rules for that statement; otherwise, upon completion of the execution of imperative-statement-2, control is transferred to the end of the READ statement.

11. If the number of bytes in the record that is read is less than the minimum size specified by the record description entries for file-name-1, the portion of the record area that is to the right of the last valid character read is undefined. If the number of bytes in the record that is read is greater than the maximum size specified by the record description entries for file-name-1, the record is truncated on the right to the maximum size. In either of these cases, the READ statement is successful and an I-O status is set indicating a record length conflict has occurred.
12. Regardless of the method used to overlap access time with processing time, the concept of the READ statement is unchanged; a record is available to the runtime element prior to the execution of imperative-statement-2 or imperative-statement-4, if specified, or prior to the execution of any statement following the READ statement, if imperative-statement-2 or imperative-statement-4 is not specified.
13. Unless otherwise specified, at the completion of any unsuccessful execution of a READ statement, the content of the associated record area is undefined, the key of reference is undefined for indexed files, and the file position indicator is set to indicate that no valid record position has been established.

#### Format 1

14. An implicit or explicit NEXT phrase or a PREVIOUS phrase results in a sequential read: otherwise, the read is a random read and the rules for format 2 apply.
15. The setting of the file position indicator at the start of the execution of the READ statement is used in determining the record to be made available according to the following rules. Comparisons for records in sequential files relate to the record number. Comparisons for records in relative files relate to the relative key number. Comparisons for records in indexed files relate to the value of the current key of reference. For indexed files, the comparisons are made according to the collating sequence of the file.

A. If the file position indicator indicates that no valid record position has been established, execution of the READ statement is unsuccessful.

B. If the file position indicator indicates that an optional input file is not present, the I-O status value associated with file-name-1 is set based on your [iscobol.file.status \*](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration) setting, the at end condition exists.

C. If the file position indicator was established by a prior OPEN or START statement, the first existing record that is selected is either:

i. If NEXT is specified or implied, the first existing record in the physical file whose record number or key value is greater than or equal to the file position indicator, or

ii. If PREVIOUS is specified, the first existing record in the physical file whose record number or key value is less than or equal to the file position indicator.

**NOTE** - For OPEN, this means that you normally get the first record in the file for sequential or relative and normally get an at end condition for indexed.

D. If the file position indicator was established by a prior READ statement and the file is an indexed file whose current key of reference does not allow duplicates or a sequential or relative file, the first existing record in the physical file whose record number or key value is greater than the file position indicator if NEXT is specified or implied or is less than the file position indicator if PREVIOUS is specified is selected.

E. For indexed files, if the file position indicator was established by a prior READ statement, and the current key of reference does allow duplicates, the record that is selected is one of the following:

i. If NEXT is specified or implied,

a. If there exists in the physical file a record whose key value is equal to the file position indicator and whose logical position within the set of duplicates is after the record that was made available by that prior READ statement, the record within the set of duplicates that is immediately after the record that was made available by that prior READ statement;

b. otherwise; the first record in the physical file whose key value is greater than the file position indicator.

ii. If PREVIOUS is specified,

a. If there exists in the physical file a record whose key value is equal to the file position indicator and whose logical position within the set of duplicates is before the record that was made available by that prior READ statement, the record within the set of duplicates that is immediately before the record that was made available by that prior READ statement;

b. otherwise, the last record within the set of duplicates, if any, whose key value is the first key value less than the file position indicator.

If a record is found that satisfies this general rule and other general rules for the READ statement, the record is made available in the record area associated with file-name-1 unless the RELATIVE KEY clause is specified for file-name-1 and the number of significant digits in the relative record number of the selected record is larger than the size of the relative key data item. In that case, the I-O status value associated with file-name-1 is set based on your [iscobol.file.status \*](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration) setting, the at end condition exists, the file position indicator is set to indicate that no next or previous logical record exists, and execution proceeds.

**NOTE** - Except in the case of an indexed file, the record made available may have a length of zero.

If no record is found that satisfies the above rules, the file position indicator is set to indicate that no next or previous logical record exists, the I-O status value associated with file-name-1 is set based on your [iscobol.file.status \*](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration) setting, the at end condition exists, and execution proceeds.

If a record is made available, the file position indicator is updated as follows:

A. For sequential files, the file position indicator is set to the record number of the record made available.

B. For relative files, the file position indicator is set to the relative record number of the record made available.

C. For indexed files, the file position indicator is set to the value of the current key of reference of the record made available.

16. If the at end condition exists, the following occurs in the order specified:

A. The I-O status value associated with file-name-1 is set based on your [iscobol.file.status \*](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration) setting to indicate the at end condition.

B. If the AT END phrase is specified in the statement causing the condition, control is transferred to the AT END imperative-statement-1. Any USE AFTER EXCEPTION procedure associated with the file connector referenced by file-name-1 is not executed. Execution then continues according to the rules for each statement specified in imperative-statement-1. If a procedure branching or conditional statement that causes explicit transfer of control is executed, control is transferred in accordance with the rules of that statement; otherwise, upon completion of the execution of imperative-statement-1, control is transferred to the end of the READ statement and the NOT AT END phrase, if specified, is ignored.

C. If the AT END phrase is not specified and a USE AFTER EXCEPTION procedure is associated with the file connector referenced by file-name-1, that procedure is executed. Control is then transferred to the end of the READ statement. The NOT AT END phrase is ignored if it is specified.

D. If the AT END phrase is not specified and there is no USE AFTER EXCEPTION procedure associated with the file connector referenced by file-name-1, control is transferred to the end of the READ statement. The NOT AT END phrase is ignored if it is specified.

When the at end condition exists, execution of the READ statement is unsuccessful.

17. For a relative file, if the RELATIVE KEY clause is specified for file-name-1, the execution of a READ statement moves the relative record number of the record made available to the relative key data item according to the rules for the MOVE statement.
18. For an indexed file being sequentially accessed, records having the same duplicate value in an alternate record key that is the key of reference are made available in the same order, or, in the case of PREVIOUS, in the reverse order, in which they are released by execution of WRITE statements, or by execution of REWRITE statements that create such duplicate values.
19. The I-O status for the file connector referenced by file-name-1 is set based on your [iscobol.file.status \*](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration) setting if the execution of the READ statement is successful, an indexed file is being sequentially accessed, the key of reference is an alternate record key, and one of the following is true:

A. the NEXT phrase is specified or implied and the alternate record key in the record that follows the record that was successfully read duplicates the same key in the record that was successfully read, or

B. the PREVIOUS phrase is specified and the alternate record key in the record that immediately precedes the record that was successfully read duplicates the same key in the record that was successfully read.

20. If SIZE clause is used, identifier-2 is set, after a READ executed correctly, to the number of bytes read. It works on sequential files.

#### Format 2

21. If, at the time of the execution of a READ statement, the file position indicator indicates that an optional input file is not present, the invalid key condition exists and execution of the READ statement is unsuccessful.
22. For a relative file, execution of a READ statement sets the file position indicator to the value contained in the data item referenced by the RELATIVE KEY clause for the file, and the record whose relative record number equals the file position indicator is made available in the record area associated with file-name-1. If the physical file does not contain such a record, the invalid key condition exists and execution of the READ statement is unsuccessful.
23. For an indexed file accessed through a given file connector, if the KEY phrase is specified, data-name-1 or record-key-name-1 is established as the key of reference for this retrieval. If the dynamic access mode is specified, this key of reference is also used for retrievals by any subsequent executions of sequential format READ statements for the file through the file connector until a different key of reference is established for the file through that file connector.
24. For an indexed file accessed through a given file connector, if the KEY phrase is not specified, the prime record key is established as the key of reference for this retrieval. If the dynamic access mode is specified, this key of reference is also used for retrievals by any subsequent executions of sequential format READ statements for the file through the file connector until a different key of reference is established for the file through that file connector.
25. For an indexed file accessed through a given file connector, execution of a READ statement sets the file position indicator to the value in the key of reference. This value is compared with the value contained in the corresponding data item of the stored records in the file until the first record having an equal value is found. In the case of an alternate key with duplicate values, the first record found is the first record in a sequence of duplicates that was released to the operating environment. The record so found is made available in the record area associated with file-name-1. If no record is so identified, the invalid key condition exists and execution of the READ statement is unsuccessful.

#### Format 3

26. A Format 3 READ statement reads an XML document from an I/O stream or retrieves an XML element from the in-memory representation of an XML document.
27. The READ statement without NEXT KEY specified reads an XML document and creates an internal tree-based representation of that document. In addition, it populates the appropriate record definition from the XD with as much data as possible, based on the record elements and occurrence limitations of the associated XML tags. The populated elements are associated with their in-memory counterparts to allow DELETE, REWRITE, and WRITE to modify the internal representation.
28. READ NEXT finds the associated internal counterpart of the indicated key and either populates the key and all subordinate items with the next occurrence of that internal counterpart, or returns end-of-file if there is no next occurrence.
29. No stream I/O is actually performed by the READ NEXT KEY IS statement.

### Examples

Format 1- Read next record sequentially validating when end of file is reached

```cobol
read customers next
     at end display message "EOF has been reached"
            set customers-eof to true
     not at end display cust-code
end-read
```

Format 1 - Read previous record sequentially validating when top of file is reached

```cobol
read customers previous
     at end display message "TOF has been reached"
            set customers-tof to true
     not at end display cust-code
end-read
```

Format 2 - Read record by primary key, checking for invalid key

```cobol
move 1234 to cust-code 
read customers
     invalid key display message "Customer Code : " cust-code " not found!"
     not invalid key display message "Successful Read"
end-read
```

Format 2 - Read record by alternate key, checking for invalid key

```cobol
move "Smith" to cust-last-name
read customers key cust-last-name
     invalid key display message "Customer Last Name : " cust-last-name " not found!"
     not invalid key display message "Successful Read"
end-read
```

Read record and put the contents on different variable

```cobol
read customers into ws-first-customer
read customers next into ws-last-customer
```

Read record with no lock

```cobol
read customers with no lock
read customers next with no lock
```
