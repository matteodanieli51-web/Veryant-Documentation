## UNSTRING

### General Format

```cobol
UNSTRING Identifier-1
 
  [ DELIMITED BY [ALL] {Identifier-2} { [ OR [ALL] {Identifier-3} ] } ... ]
                       {Literal-1   }              {Literal-2   }
 
  INTO { Identifier-4 [ DELIMITER IN Identifier-5 ] [ COUNT IN Identifier-6 ] } ...
 
  [ WITH POINTER Pointer-Var-1 ] 
 
  [ TALLYING IN Identifier-7 ] 
 
  [ ON OVERFLOW Imperative-Statement-1 ] 
 
  [ NOT ON OVERFLOW Imperative-Statement-2 ] 
 
[END-UNSTRING]
```

### Syntax rules

1. Literal-1 and literal-2 shall be literals of the category alphanumeric or national and shall not be a figurative constant that begins with the word ALL.
2. Identifier-1, identifier-2, identifier-3, and identifier-5 shall reference data items of category alphanumeric or national.
3. If any of identifier-1, identifier-2, identifier-3, identifier-4, identifier-5, literal-1, or literal-2 are of category national, then all shall be of category national.
4. Identifier-4 shall be described implicitly or explicitly as usage display and category alphabetic, alphanumeric, or numeric; or as usage national and category national or numeric. The [-cm](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#compatibility-options) option removes this restriction. Numeric items shall not be specified with the symbol 'P' in their picture character-string.
5. Identifier-6 and Identifier-7 shall reference integer data items. The symbol 'P' shall not be used in the picture character-string.
6. Pointer-Var-1 shall be described as an elementary numeric integer data item of sufficient size to contain a value equal to 1 plus the size of the data item referenced by identifier-1. The symbol 'P' shall not be used in the picture character-string of Pointer-Var-1.
7. The DELIMITER IN phrase and the COUNT IN phrase may be specified only if the DELIMITED BY phrase is specified.
8. The data item referenced by identifier-1 is the sending operand.
9. The data item referenced by identifier-4 is the receiving operand for data. The data item referenced by identifier-5 is the receiving operand for delimiters.

### General rules

1. All references to identifier-2 and literal-1 apply equally to identifier-3 and literal-2, respectively, and all recursions thereof.
2. If the data item referenced by identifier-1 is a zero-length item, execution of the UNSTRING statement terminates immediately.
3. Literal-1 or the data item referenced by identifier-2 specifies a delimiter.
4. The data item referenced by identifier-6 represents the count of the number of characters within the data item referenced by identifier-1 isolated by the delimiters for the move to the data item referenced by identifier-4.

This value does not include a count of the delimiter character(s).

5. The data item referenced by Pointer-Var-1 contains a value that indicates a relative character position within the area referenced by identifier-1.
6. The data item referenced by Identifier-7 is a counter that is incremented by 1 for each occurrence of the data item referenced by identifier-4 accessed during the UNSTRING operation.
7. When a figurative constant is used as the delimiter, it stands for a single-character national literal if identifier-1 is a national data item; otherwise, it stands for a single-character alphanumeric literal.

When the ALL phrase is specified, one occurrence or two or more contiguous occurrences of literal-1 (figurative constant or not) or the content of the data item referenced by identifier-2 are treated as if they were only one occurrence, and one occurrence of literal-1 or the data item referenced by identifier-2 is moved to the receiving data item according to the rules in general rule 11d.

8. When any examination encounters two contiguous delimiters, the current receiving area shall be space-filled if it is described as alphabetic, alphanumeric, or national; or zero-filled if it is described as numeric.
9. Each literal-1 or the data item referenced by identifier-2 represents one delimiter. When a delimiter contains two or more characters, all of the characters shall be present in contiguous positions of the sending item, and in the order given, to be recognized as a delimiter. If the data item referenced by identifier-2 or identifier-3 is a zero-length item, that delimiter is ignored. When neither literal-1 nor literal-2 is specified and all data items referenced by identifier-2 and identifier-3 are zero-length items, it is as if the DELIMITED phrase were not specified.
10. When two or more delimiters are specified in the DELIMITED BY phrase, an OR condition exists between them. Each delimiter is compared to the sending field. If a match occurs, the character(s) in the sending field is considered to be a single delimiter. No character(s) in the sending field shall be considered a part of more than one delimiter.

Each delimiter is applied to the sending field in the sequence specified in the UNSTRING statement.

11. When the UNSTRING statement is initiated, the current receiving area is the data item referenced by identifier-4. Data is transferred from the data item referenced by identifier-1 to the data item referenced by identifier-4 according to the following rules:

A. If the POINTER phrase is specified, the string of characters referenced by identifier-1 is examined beginning with the relative character position indicated by the content of the data item referenced by Pointer-Var-1. If the POINTER phrase is not specified, the string of characters is examined beginning with the leftmost character position.

B. If the DELIMITED BY phrase is specified, the examination proceeds left to right until a delimiter specified by either literal-1 or the value of the data item referenced by identifier-2 is encountered. (See general rule 9.) If the DELIMITED BY phrase is not specified, the number of characters examined is equal to the size of the current receiving area. However, if the sign of the receiving item is defined as occupying a separate character position, the number of characters examined is one less than the size of the current receiving area. Size is defined as number of character positions.

If the end of the data item referenced by identifier-1 is encountered before the delimiting condition is met, the examination terminates with the last character examined.

C. The characters examined, excluding any delimiting characters, shall be treated as an elementary national data item if identifier-1 is of category national, and otherwise as an elementary alphanumeric data item, and shall be moved into the current receiving area according to the rules for the MOVE statement.

D. If the DELIMITER IN phrase is specified the delimiting character(s) shall be treated as an elementary national data item if identifier-1 is of category national, and otherwise as an elementary alphanumeric data item and shall be moved into the data item referenced by identifier-5 according to the rules for the MOVE statement. If the delimiting condition is the end of the data item referenced by identifier-1, then the data item referenced by identifier-5 is space filled.

E. If the COUNT IN phrase is specified, a value equal to the number of characters examined, excluding any delimiter characters, shall be moved into the area referenced by identifier-6 according to the rules for an elementary move.

F. If the DELIMITED BY phrase is specified the string of characters is further examined beginning with the first character position to the right of the delimiter. If the DELIMITED BY phrase is not specified the string of characters is further examined beginning with the character position to the right of the last character transferred.

G. After data is transferred to the data item referenced by identifier-4, the current receiving area is the data item referenced by the next recurrence of identifier-4. The behavior described in general rules 11b through 11f is repeated until either all the characters are exhausted in the data item referenced by identifier-1, or until there are no more receiving areas.

12. The initialization of the contents of the data items associated with the POINTER phrase or the TALLYING phrase is the responsibility of the user.
13. The content of the data item referenced by Pointer-Var-1 will be incremented by one for each character examined in the data item referenced by identifier-1. When the execution of an UNSTRING statement with a POINTER phrase is completed, the content of the data item referenced by Pointer-Var-1 will contain a value equal to the initial value plus the number of characters examined in the data item referenced by identifier-1.
14. When the execution of an UNSTRING statement with a TALLYING phrase is completed, the content of the data item referenced by Identifier-7 contains a value equal to its value at the beginning of the execution of the statement plus a value equal to the number of identifier-4 receiving data items accessed during execution of the statement.
15. Either of the following situations causes an overflow condition:

A. An UNSTRING is initiated, and the value in the data item referenced by Pointer-Var-1 is less than 1 or greater than the number of character positions described for the data item referenced by identifier-1.

B. If, during execution of an UNSTRING statement, all receiving areas have been acted upon, and the data item referenced by identifier-1 contains characters that have not been examined.

16. When an overflow condition exists, the following occurs:

A. The UNSTRING operation is terminated.

B. If the ON OVERFLOW phrase is specified, control is transferred to imperative-statement-1 and execution continues according to the rules for each statement in imperative-statement-1. If a procedure branching or conditional statement that causes explicit transfer of control is executed, control is transferred in accordance with the rules for that statement: otherwise, upon completion of the execution of imperative-statement-1 control is transferred to the end of the UNSTRING statement.

C. If the ON OVERFLOW phrase is not specified, execution continues.

D. The NOT ON OVERFLOW phrase, if specified, is ignored.

17. If, at the time of execution of an UNSTRING statement, the conditions described in general rule 15 are not encountered, after completion of the transfer of data according to the other general rules, the ON OVERFLOW phrase, if specified, is ignored and control is transferred to the end of the UNSTRING statement or, if the NOT ON OVERFLOW phrase is specified, to imperative-statement-2. If control is transferred to imperative-statement-2, execution continues according to the rules for each statement specified in imperative-statement-2. If a procedure branching or conditional statement that causes explicit transfer of control is executed, control is transferred in accordance with the rules for that statement; otherwise, upon completion of the execution of imperative-statement-2, control is transferred to the end of the UNSTRING statement.
18. If identifier-1, identifier-2, or identifier-3, occupies the same storage area as identifier-4, identifier-5, identifier-6, Pointer-Var-1, or Identifier-7, or if identifier-4, identifier-5, or identifier-6, occupies the same storage area as Pointer-Var-1 or Identifier-7, or if Pointer-Var-1 and Identifier-7 occupy the same storage area, the result of the execution of this statement is undefined.

### Examples

Get words from a full string and put them into an array, words are separated by "," or "|"

```cobol
working-storage section.
01 ws-str     pic x(50).
01 words      pic x(10) occurs 10 times.
01 str-idx    pic 9(3).
01 word-idx   pic 9(3).
01 word-count pic 9(3).
 
procedure division.
main.
   move "one|two,apple,pear|peach|last" to ws-str
   move 0 to word-count
   move 1 to str-idx word-idx
   perform until str-idx > 50
     unstring ws-str delimited by "|" or ","
         into words(word-idx)
      pointer str-idx
      tallying word-count
     end-unstring
     add 1 to word-idx
   end-perform.
   perform varying word-idx from 1 by 1 until word-idx > word-count
     display words(word-idx)
   end-perform
   display word-count.
*> word-count will be 6
*> every words(i) will contain one word only
```
