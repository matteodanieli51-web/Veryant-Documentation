## EXIT

#### Format 1

```cobol
EXIT
```

#### Format 2

```cobol
EXIT PROGRAM [ {RETURNING} Return-Value ] 
               {GIVING   } 
```

#### Format 3

```cobol
EXIT PERFORM [CYCLE]
```

#### Format 4

```cobol
EXIT {PARAGRAPH}
     {SECTION  }
```

#### Format 5

```cobol
EXIT METHOD
```

### Syntax rules

#### Format 1

1. The EXIT statement shall appear in a sentence by itself that shall be the only sentence in the paragraph.

#### Format 2

1. Return-Value can be any data item or literal.
2. GIVING and RETURNING are synonymous.
3. An EXIT PROGRAM statement may be specified only in a program procedure division.

#### Format 3

4. The EXIT PERFORM statement may be specified only in an inline PERFORM statement.

#### Format 4

5. The EXIT statement with the SECTION phrase may be specified only in a section.

#### Format 5

6. An EXIT METHOD statement may be specified only in a method procedure division.

### General Rules

#### Format 1

1. An EXIT statement serves only to enable the user to assign a procedure-name to a given point in a procedure division. Such an EXIT statement has no other effect on the compilation or execution.

#### Format 2

2. If the EXIT PROGRAM statement is executed in a program that is not under the control of a calling runtime element, the EXIT PROGRAM statement is treated as if it were a CONTINUE statement.
3. The execution of an EXIT PROGRAM statement causes the executing program to terminate, and control to return to the calling statement. If a RETURNING or GIVING phrase is specified, its value it is assigned to return-code (runtime register) before the program is exited and it is returned to the invoking call if the RETURNING or GIVING clause is also defined on a CALL statement.

If the calling runtime element is a COBOL element, execution continues in the calling element as specified in the rules for the CALL statement. The state of the calling runtime element is not altered and is identical to that which existed at the time it executed the CALL statement except that the contents of data items and the contents of files shared between the calling runtime element and the called program may have been changed.

If the program in which the EXIT PROGRAM statement is specified is an initial program, an implicit CANCEL statement referencing that program is executed upon return to the calling runtime element.

#### Format 3

4. The execution of an EXIT PERFORM statement without the CYCLE phrase causes control to be passed to an implicit CONTINUE statement immediately following the END-PERFORM phrase that matches the most closely preceding, and as yet unterminated, inline PERFORM statement.
5. The execution of an EXIT PERFORM statement with the CYCLE phrase causes control to be passed to an implicit CONTINUE statement immediately preceding the END-PERFORM phrase that matches the most closely preceding, and as yet unterminated, inline PERFORM statement.

#### Format 4

6. The execution of an EXIT PARAGRAPH statement causes control to be passed to an implicit CONTINUE statement immediately following the last explicit statement of the current paragraph, preceding any return mechanisms for that paragraph.

**NOTE** - The return mechanisms mentioned in the rules for EXIT PARAGRAPH and EXIT SECTION are those associated with language elements such as PERFORM, SORT and USE.

7. The execution of an EXIT SECTION statement causes control to be passed to an unnamed empty paragraph immediately following the last paragraph of the current section, preceding any return mechanisms for that section.

#### Format 5

8. The execution of an EXIT METHOD statement causes the executing method to terminate, and control to return to the invoking statement. If a RETURNING phrase is present in the containing method definition, the value in the data item referenced by the RETURNING phrase becomes the result of the method invocation.

### Examples

Format 1 - Exit placed at the end of a paragraphs block

```cobol
procedure division.
main.
     perform elab-1 thru elab-1-exit.
     goback.
elab-1.
     add 1 to w-item.
elab-1-exit.
     exit.
```

Format 2 - Exit the program

```cobol
exit program
```

Format 3 - Exit a perform loop

```cobol
perform until 1 = 1 *> Would be infinite loop
  read customers next 
       at end exit perform *> Loop is ended here
  end-read
  display cust-code cust-name 
end-perform
```

Format 4 - Exit a paragraph

```cobol
process-interest.
  if ws-amount not > 0
     exit paragraph
  end-if
  compute ws-interest = ws-amount * ws-rate / 100 / 12
  move ws-interest to loan-interest
  .
```

Format 5 - Exit a method at the first valid condition

```cobol
method-id. check-age as "checkAge".
working-storage section.
77 age-range pic 9.
88 invalid-age value 0.
88 is-child    value 1.
88 is-teen     value 2.
88 is-adult    value 3.
linkage section.
77 age pic 9(3).
procedure division using age returning age-range.
main.
   if age = 0
      set invalid-age to true
      exit method
   end-if
   if age > 0 and age < 14
      set is-child to true
      exit method
   end-if
   if age > 13 and age < 20
      set is-teen to true
      exit method
   end-if
   if age > 19 
      set is-adult to true
   end-if
   goback.
 end method.
```
