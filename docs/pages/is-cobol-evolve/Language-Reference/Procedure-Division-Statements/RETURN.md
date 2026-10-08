## RETURN

### General Format

```cobol
RETURN File-Name-1 RECORD [ INTO Identifier-1 ]
 
  [ AT END Imperative-Statement-1 ] 
 
  [ NOT AT END Imperative-Statement-2 ] 
 
[END-RETURN]
```

### Syntax rules

1. The storage area associated with identifier-1 and the record area associated with file-name-1 shall not be the same storage area.
2. File-name-1 shall be described by a sort-merge file description entry in the data division.
3. The INTO phrase may be specified in a RETURN statement.
4. If identifier-1 is a strongly-typed group item, there shall be exactly one record area subordinate to the SD for file-name-1. This record area shall be a strongly-typed group item of the same type as identifier-1.

### General rules

1. A RETURN statement may be executed only when it is within the range of an output procedure being executed by a MERGE or SORT statement that references file-name.
2. When the logical records in a file are described with more than one record description, these records automatically share the same storage area; this is equivalent to an implicit redefinition of the area. The contents of any data items that lie beyond the range of the current record are undefined at the completion of the execution of the RETURN statement.
3. The execution of the RETURN statement causes the next existing record in the file referenced by file-name-1, as determined by the keys listed in the SORT or MERGE statement, to be made available in the record area associated with file-name-1. If no next logical record exists in the file referenced by file-name-1, the at end condition is set to exist and control is transferred to imperative-statement-1 of the AT END phrase. Execution continues according to the rules for each statement specified in imperative-statement-1. If a procedure branching or conditional statement that causes explicit transfer of control is executed, control is transferred according to the rules for that statement; otherwise, upon completion of the execution of imperative-statement-1, control is transferred to the end of the RETURN statement and the NOT AT END phrase is ignored, if specified. When the at end condition exists, execution of the RETURN statement is unsuccessful and the contents of the record area associated with file-name-1 are undefined.
4. If an at end condition does not exist during the execution of a RETURN statement, then after the record is made available and after executing any implicit move resulting from the presence of an INTO phrase, control is transferred to imperative-statement-2, if specified; otherwise, control is transferred to the end of the RETURN statement.
5. The result of the execution of a RETURN statement with the INTO phrase is equivalent to the application of the following rules in the order specified:

A. The same RETURN statement without the INTO phrase is executed.

B. The current record is moved from the record area to the area specified by identifier-1 according to the rules for the MOVE statement without the CORRESPONDING phrase. The implied MOVE statement does not occur if the execution of the RETURN statement was unsuccessful. Item identification of the data item referenced by identifier-1 is done after the record has been read and immediately before it is moved to the data item. The record is available in both the record area and the data item referenced by identifier-1.

### Examples

Use Return on output procedure of Sort to provide output records

```cobol
 input-output section.
 file-control.
   select work-file assign to "sort-workfile".
 
 file section.
 sd work-file.
 01 work-rec.
    03 wr-key-1 pic x(5).
    03 wr-key-2 pic x(5).
 
 working-storage section.
 01 eof-flag pic x.
    88 eof-sort value "Y" false "N".
 
 procedure division.
 main.
  display x"0d0a" "First sort descending on key 1, ascending on key 2"
  sort work-file on descending key wr-key-1
                    ascending  key wr-key-2
       input procedure is input-proc
       output procedure is output-proc.
  display x"0d0a" "Second sort descending on key 2, ascending on key 1"
  sort work-file on descending key wr-key-2
                    ascending  key wr-key-1
       input procedure is input-proc
       output procedure is output-proc.
  goback.
 
  input-proc.
     release work-rec from "aaaaabbbb1"
     release work-rec from "aaaaazzzz2"
     release work-rec from "ccccczzzz3"
     release work-rec from "cccccdddd4"
     release work-rec from "cccccmmmm5"
     release work-rec from "zzzzzcccc6"
     release work-rec from "zzzzzaaaa7"
     release work-rec from "zzzzznnnn8".
 
  output-proc.
      set eof-sort to false
      perform until eof-sort
        return work-file
         at end set eof-sort to true
         not at end display work-rec
        end-return
      end-perform.
```
