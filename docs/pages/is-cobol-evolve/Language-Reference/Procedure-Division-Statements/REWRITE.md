## REWRITE

#### Format 1

```cobol
REWRITE Record-Name-1 RECORD [ FROM Identifier-1 ]
 
  [ WITH [NO] LOCK ] 
 
  [ INVALID KEY Imperative-Statement-1 ] 
 
  [ NOT INVALID KEY Imperative-Statement-2 ] 
 
[END-REWRITE]
```

#### Format 2

```cobol
REWRITE Record-Name-1 
 
  [ KEY IS DataName-1 ] 
```

### Syntax Rules

1. Record-name-1 and identifier-1 shall not reference the same storage area.
2. Record-name-1 is the name of a logical record in the file section of the data division and may be qualified.
3. Neither the INVALID KEY phrase nor the NOT INVALID KEY phrase shall be specified for a REWRITE statement that references a file with sequential organization or a file with relative organization and sequential access mode.
4. If automatic locking has been specified for the rewrite file, neither the WITH LOCK phrase nor the WITH NO LOCK phrase shall be specified.
5. If record-name-1 is specified, identifier-1 or literal-1 shall be valid as a sending operand in a MOVE statement specifying record-name-1 as the receiving operand.
6. Data-name-1 can be qualified, and references a data item whose declaration includes an IDENTIFIED BY clause and is included in the XD record declarations for file-name-1.

### General Rules

#### Format 1

1. The rewrite file connector is the file connector referenced by the file-name associated with record-name-1.
2. The rewrite file connector shall have an open mode of I-O. If the open mode is some other value or the file is not open, the I-O status in the rewrite file connector is set based on your [iscobol.file.status \*](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration) setting and the execution of the REWRITE statement is unsuccessful.
3. The successful execution of the REWRITE statement releases a logical record to the operating environment.
4. If the rewrite file connector has an access mode of sequential, the immediately previous input-output statement executed that referenced this file connector shall have been a successfully executed READ statement. If this is not true, the I-O status in the rewrite file connector is set based on your [iscobol.file.status \*](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration) setting and the execution of the REWRITE statement is unsuccessful. For a successful REWRITE statement, the operating environment logically replaces the record that was accessed by the READ statement.

**NOTE** - Logical records in relative and sequential files may have a length of zero. Logical records in an indexed file shall always be long enough to contain the record keys.

5. The result of the execution of a REWRITE statement specifying record-name-1 and the FROM phrase is equivalent to the execution of the following statements in the order specified:

A. The statement:

MOVE identifier-1 TO record-name-1

or

MOVE literal-1 TO record-name-1

according to the rules specified for the MOVE statement.

B. The same REWRITE statement without the FROM phrase.

6. The figurative constant SPACE when specified in the REWRITE statement references one alphanumeric space character.
7. If record locks are in effect, the following actions take place at the beginning or at the successful completion of the execution of the REWRITE statement:

A. If single record locking is specified for the rewrite file connector:

i. If that file connector holds a record lock on the record to be logically replaced, that lock is released at completion unless the WITH LOCK phrase is specified.

ii. If that file connector holds a record lock on a record other than the one to be logically replaced, that lock is released at the beginning.

B. If multiple record locking is specified for the rewrite file connector, and a record lock is associated with the record to be logically replaced, that record lock is released at completion only when the WITH NO LOCK phrase is specified and the record to be logically replaced was already locked by that file connector.

C. If the WITH LOCK phrase is specified, the record lock associated with the record to be replaced is set at completion.

8. The file position indicator in the rewrite file connector is not affected by the execution of a REWRITE statement.
9. The execution of the REWRITE statement causes the I-O status value in the rewrite file connector to be updated.
10. If the execution of the REWRITE statement is unsuccessful, no logical record updating takes place, the content of the record area is unaffected, and the I-O status in the rewrite file connector is updated as indicated in other general rules.
11. When record-name-1 is specified, if the number of bytes to be written to the file is greater than the number of bytes in record-name-1, the content of the bytes that extend beyond the end of record-name-1 are undefined.

#### Sequential Files

12. If the number of bytes in the data item referenced by identifier-1, the runtime representation of literal-1, or the record referenced by record-name-1 is not equal to the number of bytes in the record being replaced, the execution of the REWRITE statement is unsuccessful and the I-O status in the rewrite file connector is set based on your [iscobol.file.status \*](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration) setting.

#### Relative and Indexed Files

13. The number of bytes in the record referenced by identifier-1, the runtime representation of literal-1, or the record referenced by record-name-1 may differ from the number of bytes in the record being replaced.
14. Transfer of control following the successful or unsuccessful execution of the REWRITE operation depends on the presence or absence of the optional INVALID KEY and NOT INVALID KEY phrases in the REWRITE statement.
15. The number of bytes in the runtime representation of literal-1, the data item referenced by identifier-1, or the record referenced by record-name-1 after any changes made to the record length by the FORMAT clause shall not be larger than the largest or smaller than the smallest number of bytes allowed by the RECORD IS VARYING clause associated with file-name-1 or the file-name associated with record-name-1. If this rule is violated, the execution of the REWRITE statement is unsuccessful and the I-O status in the rewrite file connector is set based on your [iscobol.file.status \*](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration) setting.

#### Relative Files

16. For a file accessed in either random or dynamic access mode, the operating environment logically replaces the record identified by the relative key data item specified for file-name-1 or the file-name associated with record-name-1. If the file does not contain the record specified by the key, the invalid key condition exists. When the invalid key condition is recognized, the execution of the REWRITE statement is unsuccessful and the I-O status in the rewrite file connector is set to the invalid key condition '23'.

#### Indexed Files

17. If the access mode of the rewrite file connector is random or dynamic, the record to be replaced is specified by the prime record key. If there is no existing record in the physical file with that prime record key, the execution of the REWRITE statement is unsuccessful and the I-O status in the rewrite file connector is set to the invalid key condition, '23'.
18. Execution of the REWRITE statement for a record that has an alternate record key occurs as follows:

A. When the value of a specific alternate record key is not changed, the order of retrieval when that key is the key of reference remains unchanged.

B. When the value of a specific alternate record key is changed, the subsequent order of retrieval of that record may be changed when that specific alternate record key is the key of reference. When duplicate key values are permitted, the record is logically positioned last within the set of duplicate records where the alternate record key value is equal to the same alternate key value in one or more records in the file based on the collating sequence for the file.

19. The comparison for equality for record keys is based on the collating sequence for the file according to the rules for a relation condition. The invalid key condition exists under the following circumstances:

A. When the rewrite file connector is open in the dynamic or random access mode and the value of the prime record key of the record to be replaced is not equal to the value of the prime record key of any record existing in that physical file, the I-O status associated with the rewrite file connector is set to '23'.

B. When an alternate record key of the record to be replaced does not allow duplicates and the value of that alternate record key is equal to the value of the corresponding alternate record key of a record in that physical file, the I-O status associated with the rewrite file connector is set to '22'.

When the invalid key condition is recognized, the execution of the REWRITE statement is unsuccessful, the updating operation does not take place, and the content of the record area is unaffected.

#### Format 2

20. A Format 2 REWRITE statement modifies an XML element in the in-memory representation of the XML document.
21. No stream I/O is performed by the REWRITE verb.
22. REWRITE KEY IS updates the in-memory representation of the elements and child elements associated with data-name-1. All other elements in the in-memory representation remain unchanged.
23. If the internal representation of the XML document is modified through the use of WRITE KEY, REWRITE KEY, or DELETE KEY, and the internal representation is cleared with either a CLOSE or READ (no key) statement, then the CLOSE or READ statement returns a status of -10, indicating the operation succeeded but no write was done.

### Examples

Update last read record validating the key

```cobol
move 1234 to cust-code
read customers
add ws-invoice-amount to cust-total-debt
rewrite customer-record
 invalid key display message "Customer could not be updated. Code : " cust-code
 not invalid key display message "Customer updated. Code : " cust-code
end-rewrite
```
