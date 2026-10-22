## UNLOCK

#### Format 1

```cobol
UNLOCK {File-Name-1} ALL {RECORD }
                         {RECORDS}
```

#### Format 2

```cobol
UNLOCK ALL {RECORD }
           {RECORDS}
```

### Syntax rules

1. File-name-1 shall not refer to a sort file or a merge file.
2. RECORD and RECORDS are synonymous.

### General rules

#### Format 1

1. Any record locks associated with the file connector referenced by file-name-1 are released by the execution of the UNLOCK statement. The presence or absence of any record locks does not affect the success of the execution of the UNLOCK statement.

**NOTE** - To unlock one particular record, use the READ statement with the NO LOCK phrase.

2. File-name-1 shall reference a file connector in the open mode.
3. The execution of the UNLOCK statement causes the value of the I-O status of the file connector referenced by file-name-1 to be updated.

#### Format 2

4. This format releases all records locked by all the open files in that program.
5. The execution of the UNLOCK ALL is always successfull, the I-O status is not updated, and no declaratives are executed.

### Examples

Format 1 - Unlock all records of one file

```cobol
unlock customers
```

Format 2 - Unlock all records of all files

```cobol
unlock all
```
