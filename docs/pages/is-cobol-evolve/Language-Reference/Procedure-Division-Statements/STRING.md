## STRING

### General Format

```cobol
STRING { { Identifier-1 } ... [ DELIMITED BY { [TRAILING] {Identifier-2} } ] } ... 
         { Literal-1    }                    {            {Literal-2   } }
                                             { SIZE                      }
 
  INTO Identifier-3
 
  [ WITH POINTER Identifier-4 ] 
 
  [ ON OVERFLOW Imperative-Statement-1 ] 
 
  [ NOT ON OVERFLOW Imperative-Statement-2 ] 
 
[END-STRING]
```

### Syntax rules

1. All literals shall be described as alphanumeric, boolean, or national literals, and all identifiers, except identifier-4, shall be described implicitly or explicitly as usage display or national. If any one of literal-1, literal-2, identifier-1, identifier-2, or identifier-3 is of class national, then all shall be of class national.
2. Literal-1 or literal-2 shall not be a figurative constant that begins with the word ALL.
3. Identifier-3 shall not be reference modified.
4. Identifier-3 shall not reference an edited data item and shall not be described with the JUSTIFIED clause. JUSTIFIED destination items are allowed only with the [-cm](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#compatibility-options) compiler option.
5. Identifier-3 shall not reference a strongly-typed group item.
6. Identifier-4 shall be described as an elementary numeric integer data item of sufficient size to contain a value equal to 1 plus the size of the data item referenced by identifier-3. The symbol 'P' shall not be used in the picture character-string of identifier-4.
7. Where identifier-1 or identifier-2 is an elementary numeric data item, it shall be described as an integer without the symbol 'P' in its picture character-string.
8. The DELIMITED phrase may be omitted only immediately preceding the INTO phrase. If it is omitted, DELIMITED BY SIZE is implied.
9. If the TRAILING clause is set, the rightmost contiguous character specified by Literal-1 of the source is not transferred to the receiver, Identifier-3.
10. Literal-1 or the data item referenced by identifier-1 is the sending operand. The data item referenced by identifier-3 is the receiving operand.
11. isCOBOL accepts numeric data items that are not USAGE DISPLAY as identifier-1. When identifier-1 is not USAGE DISPLAY the informational error #[288](\) is generated. The memory content of identifier-1 is then used in the STRING statement.

### General rules

1. Literal-2 or the content of the data item referenced by identifier-2 indicates the character(s) delimiting the move. If the SIZE phrase is used, the content of the complete data item defined by identifier-1 or literal-1 is moved.
2. When a figurative constant is specified as literal-1 or literal-2, it refers to an implicit one character data item whose usage shall be the same as the usage of identifier-3, either display or national.
3. When the STRING statement is executed, the transfer of data is governed by the following rules:

A. Characters from literal-1 or from the content of the data item referenced by identifier-1 are transferred to the data item referenced by identifier-3 in accordance with the MOVE statement rules for alphanumeric-to-alphanumeric moves.

B. If the DELIMITED phrase is specified and literal-2 is specified or identifier-2 is specified and is not a zerolength item, the content of the data item referenced by identifier-1, or the value of literal-1, is transferred to the receiving data item in the sequence specified in the STRING statement beginning with the leftmost character positions and continuing from left to right until the end of the sending data item is reached or the end of the receiving data item is reached or until the character(s) specified by literal-2, or by the content of the data item referenced by identifier-2, are encountered. The character(s) specified by literal-2 or by the data item referenced by identifier-2 are not transferred.

C. If the DELIMITED phrase is specified and the SIZE phrase is specified or identifier-2 is specified and is a zero-length item, the entire content of literal-1, or the content of the data item referenced by identifier-1, is transferred, in the sequence specified in the STRING statement, to the data item referenced by identifier-3 until all data has been transferred or the end of the data item referenced by identifier-3 has been reached.

This behavior is repeated until all occurrences of literal-1 or data items referenced by identifier-1 have been processed.

4. If the POINTER phrase is specified, the data item referenced by identifier-4 shall have a value greater than zero at the start of execution of the STRING statement.
5. If the POINTER phrase is not specified, the following general rules apply as if the user had specified identifier-4 referencing a data item with an initial value of 1.
6. When characters are transferred to the data item referenced by identifier-3, the moves behave as though the characters were moved one at a time from the source into the character positions of the data item referenced by identifier-3 designated by the value of the data item referenced by identifier-4 (provided the value of the data item referenced by identifier-4 does not exceed the length of the data item referenced by identifier-3), and then the data item referenced by identifier-4 was increased by one prior to the move of the next character or prior to the end of execution of the STRING statement. The value of the data item referenced by identifier-4 is changed during execution of the STRING statement only by the behavior specified above.
7. At the end of execution of the STRING statement, only the portion of the data item referenced by identifier-3 that was referenced during the execution of the STRING statement is changed. All other portions of the data item referenced by identifier-3 will contain data that was present before this execution of the STRING statement.
8. Before each move of a character to the data item referenced by identifier-3, if the value associated with the data item referenced by identifier-4 is either less than one or exceeds the number of character positions in the data item referenced by identifier-3, the following occurs:

A. No further data is transferred to the data item referenced by identifier-3.

B. If the ON OVERFLOW phrase is specified, control is transferred to imperative-statement-1 and execution continues according to the rules for each statement specified in imperative-statement-1. If a procedure branching or conditional statement that causes explicit transfer of control is executed, control is transferred in accordance with the rules for that statement; otherwise, upon completion of the execution of imperative-statement-1, control is transferred to the end of the STRING statement.

C. If the ON OVERFLOW phrase is not specified, execution continues.

D. The NOT ON OVERFLOW phrase, if specified, is ignored.

9. If, at the time of execution of a STRING statement with the NOT ON OVERFLOW phrase, the conditions described in general rule 8 are not encountered, after completion of the transfer of data according to the other general rules, the ON OVERFLOW phrase, if specified, is ignored and control is transferred to the end of the STRING statement or, if the NOT ON OVERFLOW phrase is specified, to imperative-statement-2. If control is transferred to imperative-statement-2, execution continues according to the rules for each statement specified in imperative-statement-2. If a procedure branching or conditional statement that causes explicit transfer of control is executed, control is transferred in accordance with the rules for that statement; otherwise, upon completion of the execution of imperative-statement-2, control is transferred to the end of the STRING statement.
10. If identifier-1, or identifier-2, occupies the same storage area as identifier-3, or identifier-4, or if identifier-3 and identifier-4 occupy the same storage area, the result of the execution of this statement is undefined.

### Examples

Concatenating 3 variables discarding trailing spaces

```cobol
initialize str-result
string str-1 delimited by trailing spaces
       str-2 delimited by trailing spaces
       str-3
  into str-result
```

Concatenating variables and literals delimited by size and including new lines, validating overflow

```cobol
initialize cust-data
string "Customer Name : " cust-last-name ", " cust-first-name x"0d0a"
       "Customer Age  : " cust-age x"0d0a"
       "Customer Address : " cust-address
  into cust-data
    on overflow display message "Customer data is too large!"
end-string
```

Using pointer to indicate where to start concatenating

```cobol
*> my-str is defined as pic x(50)
initialize my-str
move 1 to idx
string "hello " "world!" into my-str pointer idx
move 25 to idx
string "good bye!" into my-str pointer idx
move 35 to idx
string "hi again!" into my-str pointer idx
*> Result in my-str: hello world!            good bye! hi again!
```
