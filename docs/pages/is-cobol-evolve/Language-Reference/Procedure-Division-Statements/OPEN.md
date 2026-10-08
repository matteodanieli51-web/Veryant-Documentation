## OPEN

### General Format

```cobol
OPEN [ EXCLUSIVE ] 
 
  { {INPUT } { [Sharing-Phrase] { File-name-1 [ WITH NO REWIND ] } ... } ... 
    {OUTPUT} { File-name-1 [Lock-Option] (only with -CA option)  }
    {I-O   } 
    {EXTEND}
```

Where *Sharing-Phrase* is:

```cobol
  SHARING WITH { ALL OTHER }
               { NO OTHER  }
               { READ ONLY }
```

Where *Lock-Option* is:

```cobol
  { ALLOWING { NO OTHERS } } 
             { OTHERS   } 
             { READERS   } 
             { WRITERS   }
             { UPDATERS  } 
             { ALL       } 
 
  { {WITH} {LOCK       }    } 
    {FOR } {MASS-UPDATE}
           {BULK-ADDITION}
```

### Syntax rules

1. The OPEN statement for a report file shall not contain the INPUT phrase or the I-O phrase.
2. The EXTEND phrase shall be specified only if the access mode of the file connector referenced by file-name-1 is sequential.
3. The files referenced in the OPEN statement need not all have the same organization or access.
4. The NO REWIND phrase may be specified only for sequential files.
5. The NO REWIND phrase may be specified only when the INPUT or OUTPUT phrase is specified.
6. If the SHARING phrase is omitted from the OPEN statement and the ALL phrase is specified in the SHARING clause of the file control entry for file-name-1 or if the ALL phrase is specified on the OPEN statement, the LOCK MODE clause shall be specified in the file control entry for file-name-1.
7. The I-O phase shall not be specified if the FORMAT clause is specified in the file description entry for file-name-1.

### General rules

1. The file connector referenced by file-name-1 shall not be open. If it is open, the execution of the OPEN statement is unsuccessful and the I-O status associated with file-name-1 is set based on your [iscobol.file.status \*](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration) setting.
2. The successful execution of an OPEN statement associates the file connector referenced by file-name-1 with a physical file if the physical file is available, and sets the open mode of the file connector to input, output, I-O, or extend, depending on the keywords INPUT, OUTPUT, I-O or EXTEND specified in the OPEN statement. The open mode determines the input-output statements that are allowed to reference the file connector as shown in the following table.

| Open mode | File is available | File is unavailable |
| --- | --- | --- |
| INPUT | Normal open | Open is unsuccessful |
| INPUT (optional file) | Normal open | Normal open; the first read causes the at end condition or invalid key condition |
| I-O | Normal open | Open is unsuccessful |
| I-O (optional file) | Normal open | Open causes the file to be created |
| OUTPUT | Normal open; the file contains no records | Open causes the file to be created |
| EXTEND | Normal open | Open is unsuccessful |
| EXTEND (optional file) | Normal open | Open causes the file to be created |

A physical file is available if it is physically present and is recognized by the operating environment. The table above shows the results of opening available and unavailable physical files that are not currently open by another file connector. The table below shows the results of opening available physical files that are currently open by another file connector, including those implicitly opened by the SORT and MERGE statements.

| Open request | | | Most restrictive existing sharing mode and open mode | | |
| --- | --- | --- | --- | --- | --- |
| | sharing with no other | sharing with read only | sharing with read only | sharing with all other | sharing with all other |
| | extend<br>I-O<br>inputoutput | extend<br>I-O<br>output | input | extend<br>I-O<br>output | input |
| SHARING WITH NO OTHER | Unsuccessful open | Unsuccessful open | Unsuccessful open | Unsuccessful open | Unsuccessful open |
| SHARING WITH READ ONLY | Unsuccessful open | Unsuccessful open | Unsuccessful open | Unsuccessful open | Normal open |
| SHARING WITH READ ONLY| Unsuccessful open | Unsuccessful open | Normal open | Unsuccessful open | Normal open |
| SHARING WITH READ ONLY | Unsuccessful open | Unsuccessful open | Unsuccessful open | Unsuccessful open | Unsuccessful open |
| SHARING WITH ALL OTHER | Unsuccessful open | Unsuccessful open | Unsuccessful open | Normal open | Normal open |
| SHARING WITH ALL OTHER | Unsuccessful open | Normal open | Normal open | Normal open | Normal open |
| SHARING WITH ALL OTHER| Unsuccessful open | Unsuccessful open | Unsuccessful open | Unsuccessful open | Unsuccessful open |

3. The successful execution of an OPEN statement makes the associated record area available to the runtime element. If the file connector associated with file-name is an external file connector, there is only one record area associated with the file connector for the run unit.
4. When a file connector is not open, no statement shall be executed that references the associated file-name, either explicitly or implicitly, except for a MERGE or SORT statement with the USING or GIVING phrase, or an OPEN statement.
5. The OPEN statement for a report file connector shall be executed before the execution of an INITIATE statement that references a report-name that is associated with file-name-1.
6. For a given file connector, an OPEN statement shall be successfully executed prior to the execution of any other permissible input-output statement. In the table below, an 'X' at an intersection indicates that the specified statement, used in the access mode given for that row, may be used with the open mode given at the top of the column.

| Access mode | Statement | | Open mode | | |
| --- | --- | --- | --- | --- | --- |
| | | Input | Output | I-O | Extend |
| Sequential | READ | X |  | X |  |
| Sequential | WRITE |  | X |  | X |
| Sequential | REWRITE |  |  | X |  |
| Sequential | START | X |  | X |  |
| Sequential <br>(relative and indexed files only) | DELETE |  |  | X |  |
| Random | READ | X |  | X |  |
| Random | WRITE |  | X | X |  |
| Random | REWRITE |  |  | X |  |
| Random | START |  |  |  |  |
| Random | DELETE |  |  | X |  |
| Dynamic | READ | X |  | X |  |
| Dynamic | WRITE |  | X | X |  |
| Dynamic | REWRITE |  |  | X |  |
| Dynamic | START | X |  | X |  |
| Dynamic | DELETE |  |  | X |  |

7. Execution of the OPEN statement does not obtain or release the first record.
8. During the execution of the OPEN statement when the file connector is matched with the physical file and the physical file exists, the attributes of the file connector as specified in the file control paragraph and the file description entry are compared with the fixed file attributes of the physical file. If the attributes don't match, a file attribute conflict condition occurs, the execution of the OPEN statement is unsuccessful, and the I-O status associated with file-name-1 is set based on your [iscobol.file.status \*](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration) setting. The implementor defines which of the fixed-file attributes are validated during the execution of the OPEN statement. The validation of fixed-file attributes may vary depending on the organization of the file.
9. If the physical file is not present, and the INPUT phrase is specified in the OPEN statement, and the OPTIONAL clause is specified in the file control entry for file-name-1, the file position indicator in the file connector referenced by file-name-1 is set to indicate that an optional input file is not present.
10. When the organization of the file referenced by file-name-1 is sequential or relative and the INPUT or I-O phrase is specified in the OPEN statement, the file position indicator for that file connector is set to 1. When the organization is indexed, the file position indicator is set to the characters that have the lowest ordinal position in the collating sequence associated with the file, and the prime record key is established as the key of reference.
11. When the EXTEND phrase is specified, the OPEN statement positions the file immediately after the last logical record for that file. The last logical record for a sequential file is the last record written in the file. The last logical record for a relative file is the currently existing record with the highest relative record number. The last logical record for an indexed file is the currently existing record with the highest prime key value.
12. If the I-O phrase is specified, the physical file shall support the input and output statements that are permitted for the organization of that file when opened in the I-O mode. If the physical file does not support those statements, the I-O status value for file-name-1 is set based on your [iscobol.file.status \*](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration) setting and the execution of the OPEN statement is unsuccessful. The successful execution of an OPEN statement with the I-O phrase sets the open mode of file connector referenced by file-name-1 to open in the I-O mode.
13. If the physical file is not present, and the EXTEND or I-O phrase is specified in the OPEN statement, and the OPTIONAL clause is specified in the file control entry for file-name-1, the OPEN statement creates the file. This creation takes place as if the following statements were executed in the order shown:

OPEN OUTPUT file-name.

CLOSE file-name.

These statements are followed by execution of the OPEN statement specified in the source element.

14. If the OUTPUT phrase is specified, the successful execution of the OPEN statement creates the physical file. After the creation of the physical file, the file contains no records. If physical pages have meaning for the physical file, the positioning of the output medium with respect to physical page boundaries is implementordefined following the successful execution of the OPEN statement.
15. Upon successful execution of the OPEN statement, the current volume pointer is set:

A. To point to the first or only reel/unit in the physical file if INPUT or I-O is specified.

B. To point to the reel/unit containing the last record in the physical file if EXTEND is specified.

C. To point to the newly created reel/unit in the physical file for an unavailable file if EXTEND, I-O, or OUTPUT is specified.

16. If more than one file-name is specified in an OPEN statement, the result of executing this OPEN statement is the same as if a separate OPEN statement had been written for each file-name in the same order as specified in the OPEN statement. These separate OPEN statements would each have the same open mode specification, the sharing-phrase, retry-phrase, and REWIND phrase as specified in the OPEN statement. If an implicit OPEN statement results in the execution of a declarative procedure that executes a RESUME statement with the NEXT STATEMENT phrase, processing resumes at the next implicit OPEN statement, if any.
17. The SHARING phrase is effective only for files that are shareable.
18. The SHARING phrase specifies the level of sharing permitted for the physical file associated with file-name-1 and specifies the operations that may be performed on the physical file through other file connectors sharing the physical file.
19. The SHARING phrase overrides any SHARING clause in the file control entry of file-name-1. If there is no SHARING phrase on the OPEN statement, then file sharing is completely specified in the file control entry. If neither a SHARING phrase on the OPEN statement nor a SHARING clause in the file control entry is specified, the implementor shall define the sharing mode that is established for each file connector.
20. The ALLOWING phrase is similar to SHARING phrase. It is supported by the compiler only with –ca compiler option.

A. The ALLOWING phrase permits the following types of file locking: ALLOWING ALL, ALLOWING READERS, and ALLOWING NO OTHERS. File locking is enforced for all file types residing on disk but may not be enforced for non-disk files for some operating systems.

B. The following phrases imply the ALLOWING ALL form of file locking:

i. No lock-option specified

ii. ALLOWING ALL

iii. ALLOWING WRITERS

iv. ALLOWING UPDATERS

This file locking mode indicates that other programs can access the file without restriction except that another program may not execute an OPEN OUTPUT while this program keeps the file open

C. The following phrases imply the ALLOWING READERS form of file locking:

i. ALLOWING READERS

ii. EXCLUSIVE or WITH LOCK specified with the INPUT phrase

A file open in this mode does not allow any other program to open this file other than with the INPUT phrase. Also, this OPEN will fail if any other programs currently have the file open unless the INPUT phrase was used by all of these other programs

D. These phrases imply the ALLOWING NO OTHERS form of file locking:

i. ALLOWING NO OTHERS

ii. EXCLUSIVE or WITH LOCK specified with the OUTPUT, I-O, or EXTEND phrases

iii. WITH MASS-UPDATE

iv. WITH BULK-ADDITION

This form of file locking does not allow any other programs to open the file, and this OPEN will fail if any other programs currently have the file open.

21. If the file connector referenced by file-name-1 is locked by a previously-executed CLOSE statement with the LOCK phrase, the execution of the OPEN statement is unsuccessful and the I-O status associated with that file connector is set based on your [iscobol.file.status \*](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#file-handling-configuration) setting.
22. If the execution of the OPEN statement is unsuccessful, the physical file is not affected and the value is placed in the I-O status associated with file-name to indicate the condition that caused the OPEN statement to be unsuccessful.
23. The WITH MASS-UPDATE phrase indicates to the runtime system that the file will be heavily updated by the program. The runtime system may be able to use this information to access the file more efficiently.
24. The WITH BULK-ADDITION is similar to WITH MASS-UPDATE. It behaves differently depending on the file handler.

A. JIsam treats BULK-ADDITION the same way as MASS-UPDATE

B. c-tree supports BULK-ADDITION from version 9.5.46192 and manages it by creating indexes at the close of the file. Unique key violations are traced in the c-tree server log file without triggering Declaratives.

### Examples

Open several files for input, output and i-o

```cobol
open input  customers invoices purchase-orders
open output rep-customers rep-invoices
open i-o    invoice-detail
```

Open files and lock them until they get closed

```cobol
open i-o customers with lock
open input invoices with lock
```

Open files locking them for massive update or addition

```cobol
open i-o pay-receipts for mass-update
open i-o pending-invoices for bulk-addition
```
