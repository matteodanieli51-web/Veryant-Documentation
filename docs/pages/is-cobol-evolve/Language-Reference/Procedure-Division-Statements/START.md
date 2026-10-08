## START

#### Format 1

```cobol
START file-name-1 {FIRST}
                  {LAST}
                  { [ KEY {IS relational-operator {data-name-1      } }] }
                                                {record-key-name-1}
                        {IS FIRST                                   }
                        {IS LAST                                    }
                           [{WITH LENGTH} arithmetic-expression-1] ]
                            {WITH SIZE  }
                  [ WHILE KEY IS relational-operator {data-name-2} ] 
                                                     {literal-1}
   [INVALID KEY imperative-statement-1]
     [NOT INVALID KEY inperative-statement-2]
[END-START]
```

#### Format 2

```cobol
START TRANSACTION
```

#### Format 3

```cobol
START file-name-1
   KEY IS data-name-3 [ INDEX IS { literal-1   } ]
                                 { data-name-4 }
```

Syntax Rules

1. The access mode of the file referenced by file-name-1 shall be either sequential or dynamic.
2. If the organization of the file referenced by file-name-1 is sequential, either the FIRST or the LAST phrase shall be specified.
3. In the KEY phrase, relational-operator is a relational operator specified in the general-relation format, with the exception of the relational operators 'IS NOT EQUAL TO' or 'IS NOT=' and 'LIKE'. See [Relation conditions](../Procedure-Division/Conditional-expressions/Relation-conditions) for more information on relational operators.
4. Data-name-1 or record-key-name-1 may be qualified.
5. For relative files, data-name-1, if specified, shall be the data item specified in the RELATIVE KEY clause in the associated file control entry.
6. For indexed files, data-name-1, if specified, shall reference either:

A. A data item specified as a prime or alternate record key associated with file-name-1, or

B. A data item with the following characteristics:

i. Its leftmost character position within a record of the file corresponds to the leftmost character position of a prime or alternate record key that is associated with file-name-1 and that is defined without the SOURCE phrase in the RECORD KEY clause or ALTERNATE RECORD KEY clause.

ii. It has the same class, category, and usage as that record key.

iii. Its length is not greater than the length of that record key.

7. Record-key-name-1 shall be specified with the SOURCE phrase in the RECORD KEY clause or in the ALTERNATE RECORD KEY clause in the file control entry for file-name-1.
8. With the WHILE clause only the LIKE relational operator is admitted. With the KEY clause the following relational operators are admitted: <>, <, <=, >, >=, = (optionally preceded by the NOT word), LESS, NOT LESS, GREATER, NOT GREATER and EQUAL. See [Relation conditions](../Procedure-Division/Conditional-expressions/Relation-conditions) for more information on relational opeators.

9. If the LENGTH or SIZE phrase is specified, file-name-1 shall reference a file with indexed organization.
10. Data-Name-2 and Literal-1 are regular expressions.
11. START and TRANSACTION are required words.
12. data-name-3 is a data item whose declaration includes an IDENTIFIED BY clause, and is included in the XD record declarations for file-name-1.
13. data-name-4 and literal-1 are numeric values indicating which occurence of the tag name referenced by xml_file_record_node is returned by the next READ NEXT statement.

### General Rules

#### Format 1

1. The open mode of the file connector referenced by file-name-1 shall be input or I-O.
2. The execution of the START statement does not alter either the content of the record area or the content of the data item referenced by the data-name specified in the DEPENDING ON phrase of the RECORD clause associated with file-name-1.
3. The execution of the START statement does not detect, acquire, or release record locks.
4. The execution of the START statement causes the value of the I-O status associated with file-name-1 to be updated.
5. If, at the time of the execution of the START statement, the file position indicator indicates that an optional input file is not present, the invalid key condition exists and the execution of the START statement is unsuccessful.
6. Transfer of control following the successful or unsuccessful execution of the START operation depends on the presence or absence of the optional INVALID KEY and NOT INVALID KEY phrases in the START statement.
7. Following the unsuccessful execution of a START statement, the file position indicator is set to indicate that no valid record position has been established. For indexed files, the key of reference is undefined.

#### Relative Files

8. If the KEY phrase is omitted, the START statement behaves as though KEY IS EQUAL TO data-name-1 had been specified, where data-name-1 is the name of the key specified in the RELATIVE KEY clause associated with file-name-1.
9. The type of comparison specified by the relational operator in the KEY phrase occurs between a key associated with a record in the file referenced by file-name-1 and a data item. Numeric comparison rules apply.

A. If the relational operator is EQUAL, GREATER, NOT LESS, or GREATER OR EQUAL, the file position indicator is set to the relative record number of the first logical record in the file whose key satisfies the comparison searching the file sequentially.

B. If the relational operator is LESS, NOT GREATER, or LESS OR EQUAL, the file position indicator is set to the relative record number of the first logical record in the file whose key satisfies the comparison searching the file in reverse order.

C. If the comparison is not satisfied by any record in the file, the invalid key condition exists and the execution of the START statement is unsuccessful.

10. The comparison uses the data item referenced by the RELATIVE KEY phrase of the ACCESS MODE clause associated with file-name-1.
11. If FIRST is specified, the file position indicator is set to the relative record number of the first existing logical record in the file. If no records exist in the file, the invalid key condition exists and the execution of the START statement is unsuccessful.
12. If LAST is specified, the file position indicator is set to the relative record number of the last existing logical record in the file. If no records exist in the file, the invalid key condition exists and the execution of the START statement is unsuccessful.

#### Indexed Files

13. The value of arithmetic-expression-1 reflects the number of characters that will be used as a partial key for positioning to a record in file-name-1. If data-name-1 or record-key-name-1 is of class alphanumeric, arithmetic-expression-1 is the number of alphanumeric character positions; if data-name-1 or record-key-name-1 is of class national, arithmetic-expression-1 is the number of national character positions.
14. If arithmetic-expression-1 does not evaluate to a positive non-zero integer that is less than or equal to the length of the associated key, the I-O status value in the file connector referenced by file-name-1 is set to '23', the invalid key condition exists, and the execution of the START statement is unsuccessful.
15. If the KEY phrase is not specified, the behavior is the same as if KEY IS EQUAL TO data-name-1 or record-key-name-1 had been specified, with data-name-1 or record-key-name-1 being the prime record key for the file.
16. The key specified in the KEY phrase, or that shares a leftmost character with the data item specified in the KEY phrase, becomes the key of reference. This key of reference is used to establish the ordering of records for the purpose of this START statement. If the execution of the START statement is successful, this key of reference is used for subsequent sequential READ statements referencing file-name-1.
17. Execution of the START statement behaves as if:

A. The specified key is set up by moving the relevant parts of the record area into a temporary data area.

B. The length of this temporary area is considered to be the length specified in the LENGTH or SIZE clause, if specified, or else the length of record-key-name-1, if specified, or else the length of data-name-1.

C. If the relational operator is EQUAL, GREATER, NOT LESS, or GREATER OR EQUAL, the file is searched sequentially with the key of reference being extracted from each record in turn into another temporary area. This second temporary area is truncated to the same length as the first.

D. If the relational operator is LESS, NOT GREATER, or LESS OR EQUAL, the file is searched in reverse order with the key of reference being extracted from each record in turn into another temporary area. This second temporary area is truncated to the same length as the first.

E. The comparison specified by the relational operator in the KEY phrase is made between these two temporary areas, with the second temporary area on the left hand side, and according to the collating sequence of the file. Comparison proceeds as specified for items of the class of data-name-1 and operands of equal length. Then, either:

i. The file position indicator is set to the value of the key of reference in the first logical record whose key satisfies the comparison, or

ii. If the comparison is not satisfied by any record in the file, the invalid key condition exists and the execution of the START statement is unsuccessful.

18. If FIRST is specified, the file position indicator is set to the value of the primary key of the first existing logical record in the physical file and the key of reference is set to the primary key. If no records exist in the file, the I-O status value in the file connector referenced by file-name-1 is set to '23', the invalid key condition exists, and the execution of the START statement is unsuccessful.
19. If LAST is specified, the file position indicator is set to the value of the primary key of the last existing logical record in the physical file and the key of reference is set to the primary key. If no records exist in the file, the I-O status value in the file connector referenced by file-name-1 is set to '23', the invalid key condition exists, and the execution of the START statement is unsuccessful.
20. The implied subject of the WHILE filter in a START statement is the key value of the key of reference in the record that would be accessed by the READ statement. Records with key of reference values that match the specified pattern regular expression are returned during subsequent sequential READ statements. Records with key of reference values that do not match the specified pattern regular expression are skipped during subsequent sequential READ statements. If the word NOT is specified in the WHILE phrase, then filtering is reversed.

#### Sequential Files

21. If FIRST is specified, the file position indicator is set to 1 if records exist in the physical file. If no records exist in the file, or the physical file does not support the ability to position at the first record, the I-O status value in the file connector referenced by file-name-1 is set to '23', the invalid key condition exists, and the execution of the START statement is unsuccessful.
22. If LAST is specified, the file position indicator is set to the record number of the last existing logical record in the physical file. If no records exist in the file, or the physical file does not support the ability to position at the last record, the I-O status value in the file connector referenced by file-name-1 is set to '23', the invalid key condition exists, and the execution of the START statement is unsuccessful.

#### Format 2

23. The START TRANSACTION statement identifies the beginning of a transaction. This feature, which invokes the transaction natively implemented by the file system in use, may not work for all file system supported .
24. After the START TRANSACTION, each file update operation is recorded until the next COMMIT or ROLLBACK.
25. If the START TRANSACTION statement fails, the special register TRANSACTION-STATUS will be updated with value "98".

#### Format 3

26. A Format 3 START statement resets the position of a key in XML syntax. The KEY IS clause resets the current internal counterpart so that a subsequent READ NEXT reads the occurrence of that key specified by data-name-3.
27. If the INDEX clause is omitted, the index is assumed to be 1.
28. Once a START request is performed, the indicated key and all sub-keys are associated with a position, and not with any data in the internal representation.
29. If a START is followed immediately by WRITE KEY, that key is placed immediately before the node that would have been read if a START had been followed with READ NEXT. To add a node after this node, use a READ NEXT statement specifying the same key specified on the START.

### Examples

Format 1 - Start on exact key checking for invalid key

```cobol
move 1234 to cust-code
start customers key = cust-code
      invalid key display message "Invalid key!"
      not invalid key display message "Started Ok"
end-start
```

Format 1 - Start on key equal or greater than a value

```cobol
move 956 to cust-code
start customers key not < cust-code
```

Format 1 - Start on first key of an ISAM file

```cobol
start customers key is first
```

Format 1 - Start on last key of an ISAM file

```cobol
start customers key is last
```

Format 1 - Start on first record of a sequential file

```cobol
start customers first
```

Format 1 - Start on last record of a sequential file

```cobol
start customers last
```

Format 1 - Start filtering all records whose primary key value includes "SALT" (case insensitive)

```cobol
start customers-file while key is like "(?i).*salt.*".
```

Format 2 - Start transaction

```cobol
*> This sample will work only with a file system that supports transactions
*> The select should include lock clause with rollback: lock automatic with rollback
...
input-output section.
file-control.
select invoices assign to inv-path
   organization indexed
   access dynamic
   record key cust-code
   lock mode manual with rollback |the rollback clause is required to
   status inv-status.             |activate transaction management
...
procedure division.
...
   start transaction
   display "Customer to apply 10% discount? "
   accept ws-cust-code
   move ws-cust-code to cust-code
   read customers 
        invalid key display message "Customer not found"
                    rollback
                    exit paragraph
   end-read
   accept ws-date from date
   move ws-date to cust-last-date-discount
   rewrite cust-rec
   move ws-cust-code to inv-cust-code
   start invoices key = inv-cust-code
         invalid key set end-of-invoices to true
         not invalid key set end-of-invoices to false
   end-start
   perform until end-of-invoices
     read invoices next at end exit perform
          not at end 
              if inv-cust-code not = ws-cust-code
                 exit perform
              end-if
     end-read
     if inv-paid-status = "N"
        move 10 to inv-discount
        rewrite invoice-rec
     end-if
   end-perform
   display "Changes applied, confirm Commit: (Y/N)"
   accept apply-commit
   if apply-commit = "Y"
      commit *> All changes are definitely applied
   else
      rollback *> All changes get undone
   end-if.
```
