## RELEASE

### General Format

```cobol
RELEASE Record-name-1 [ FROM {Identifier-1} ]
                             {Literal-1   }
```

### Syntax rules

1. Record-name-1 shall be the name of a logical record in a sort-merge file description entry and it may be qualified.
2. If identifier-1 is a function-identifier, it shall reference an alphanumeric or national function. Record-name-1 and identifier-1 shall not reference the same storage area.
3. Identifier-1 or literal-1 shall be valid as a sending operand in a MOVE statement specifying record-name-1 as the receiving operand.

### General rules

1. A RELEASE statement may be executed only when it is within the range of an input procedure being executed by a SORT statement that references the file-name associated with record-name-1.
2. The execution of a RELEASE statement causes the record named by record-name-1 to be released to the initial phase of a sort operation.
3. The result of the execution of a RELEASE statement with the FROM phrase is equivalent to the execution of the following statements in the order specified:

A. The statement:

MOVE identifier-1 TO record-name-1

or

MOVE literal-1 TO record-name-1

according to the rules specified for the MOVE statement.

B. The same RELEASE statement without the FROM phrase.

4. If the number of bytes to be released to the sort operation is greater than the number of bytes in record-name-1, the content of the bytes that extend beyond the end of record-name-1 are undefined.

### Examples

Use Release on input procedure of Sort to provide input records

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
