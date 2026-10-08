## DELETE

#### Format 1

```cobol
DELETE File-Name RECORD
 
  [ INVALID KEY Statement-1 ] 
 
  [ NOT INVALID KEY Statement-2 ] 
 
  [END-DELETE]
```

#### Format 2

```cobol
DELETE FILE File-Name [ File-Name-2 ... ]
```

#### Format 3

```cobol
DELETE File-Name RECORD
  [ KEY IS DataName-1 ]
```

### Syntax rules

1. The Format 1 DELETE statement cannot be specified for a file with sequential or XML organization.
2. The INVALID KEY and the NOT INVALID KEY phrases shall not be specified for a DELETE statement that references a file that is in sequential access mode.
3. The Format 3 DELETE statement can be used only for a file with XML organization.
4. *DataName-1* can be qualified, and references a data item whose declaration includes an IDENTIFIED BY clause and is included in the XD record declarations for *File-Name*.

### General rules

#### Format 1

1. The open mode of the file connector referenced by file-name-1 shall be I-O and the physical file associated with that file connector shall be a mass storage file.
2. For a file that is in the sequential access mode, the last input-output statement executed for file-name-1 prior to the execution of the DELETE statement shall have been a successfully executed READ statement. The mass storage control system (MSCS) logically removes from the physical file the record that was accessed by that READ statement.
3. If the file is indexed and the access mode is random or dynamic, the mass storage control system (MSCS) logically removes from the physical file the record identified by the content of the prime record key data item associated with file-name-1. If the physical file does not contain the record specified by the key, the invalid key condition exists.
4. If the file is relative and the access mode is random or dynamic, the mass storage control system (MSCS) logically removes from the physical file that record identified by the content of the relative key data item associated with file-name-1. If the physical file does not contain the record specified by the key, the invalid key condition exists.
5. After the successful execution of a DELETE statement, the identified record has been logically removed from the physical file and can no longer be accessed.
6. The execution of a DELETE statement does not affect the content of the record area or the content of the data item referenced by the data-name specified in the DEPENDING ON phrase of the RECORD clause associated with file-name-1.
7. The file position indicator is not affected by the execution of a DELETE statement.
8. The execution of the DELETE statement causes the value of the I-O status associated with file-name-1 to be updated.
9. Transfer of control following the successful or unsuccessful execution of the DELETE operation depends on the presence or absence of the optional INVALID KEY and NOT INVALID KEY phrases in the DELETE statement.

#### Format 2

10. DELETE FILE removes File-Name from the system. File-Name must be closed before execute the DELETE FILE statement.

#### Format 3

11. A Format 3 DELETE statement deletes an XML element and all sub-elements from the in-memory representation of an XML document. No stream I/O is actually performed by the DELETE statement.
12. When KEY is specified, this deletes the internal representation of the elements and child elements associated with DataName-1. All other elements represented in the record remain unchanged.
13. If the internal representation of the XML document is modified through the use of WRITE KEY, REWRITE KEY, or DELETE KEY, and the internal representation is cleared with either a CLOSE or READ (no key) statement, then the CLOSE or READ statement will return a status of -10, indicating the operation succeeded but no write was done.

### Examples

Format 1 - Delete record by key and validate invalid key

```cobol
  move 5432 to cust-code
  delete cust-file
    invalid key display message "Key not found to delete! : " cust-code
    not invalid key display message "Successfully deleted customer : " cust-code
  end-delete
```

Format 2 - Delete temporary file after done with it.

```cobol
open output cust-tmp-file
...
close cust-tmp-file
delete file cust-tmp-file
```
