## JSON GENERATE

### General Format

```cobol
JSON GENERATE Identifier-1 FROM Identifier-2
 
     [ COUNT IN Identifier-3 ]
 
     [ NAME OF Identifier-4 IS Literal-1 ]
 
     [ SUPPRESS Identifier-5 ]
 
     [ ON EXCEPTION Imperative-Statement-1 ]
 
     [ NOT ON EXCEPTION Imperative-Statement-2 ]
 
 [ END-JSON ]
```

### Syntax Rules

1. Identifier-1 must be either: an elementary data item of category alphanumeric; an alphanumeric group item; an elementary data item of category national; or a national group item.
2. Identifier-1 must not be defined with the JUSTIFIED clause.
3. Identifier-1 can be subscripted or reference modified. Identifier-4 or identifier-5 cannot be reference modified or subscripted.
4. Identifier-1 must be large enough to contain the generated JSON text. Typically, it should be from 2 to 3 times the size of identifier-2, depending on the lengths of the data-names within identifier-2.
5. If the SUPPRESS phrase is in effect, identifier-1 must still be large enough to contain the generated JSON text before suppression.
6. Identifier-3 is a numeric data item.
7. Literal-1 must be an alphanumeric or national literal containing the name to be generated in the JSON text corresponding to identifier-4.
8. Identifier-5 must reference a data item that is subordinate to identifier-2 and that is not otherwise ignored by the operation of the JSON GENERATE statement.

### General Rules

1. Identifier-1 is the receiving area for the generated JSON text.
2. If identifier-1 is not large enough, an exception condition exists at the end of the JSON GENERATE statement. If the COUNT phrase is specified, identifier-3 contains the number of character encoding units that were actually generated.
3. Identifier-2 is the group or elementary data item to be converted to JSON format.
4. If the COUNT phrase is specified, Identifier-3 contains the count of generated JSON character encoding units. If Identifier-1 is of category national, the count is in double-bytes. Otherwise, the count is in bytes.
5. The NAME phrase enables you to override the default JSON names derived from Identifier-2 or its subordinate data items.
6. The SUPPRESS phrase enables you to selectively generate output for the JSON GENERATE statement by allowing you to identify and unconditionally exclude items that are subordinate to Identifier-2.
7. If identifier-5 specifies a group data item, that group data item and all subordinate data items are excluded. Duplicate specifications of identifier-5 are permitted.
8. If the ON EXCEPTION phrase is specified, control transfers to Imperative-statement-1 when an error occurs during generation of the JSON document.
9. If the ON EXCEPTION phrase is not specified, the NOT ON EXCEPTION phrase, if any, is ignored, and control is transferred to the end of the JSON GENERATE statement in the event of an error.
10. If an exception condition does not occur during generation of the JSON document, control is passed to Imperative-statement-2, if specified; otherwise, control is passed to the end of the JSON GENERATE statement.

### Examples

Generate JSON code from group data item

```cobol
       WORKING-STORAGE SECTION.
       01 GRP.
          05 AC-NO PIC AA9999 VALUE 'SX1234'.
          05 MORE.
             10 STUFF PIC S99V9 OCCURS 2.
          05 SSN PIC 999/99/9999 VALUE '987-65-4321'.
       01 RESULT PIC X(80).
       01 I BINARY PIC 99.
       PROCEDURE DIVISION.
       MAIN.
           MOVE 7.8 TO STUFF(1), MOVE -9 TO STUFF(2)
           JSON GENERATE RESULT FROM GRP COUNT I
             NAME OF STUFF IS 'Value' SUPPRESS SSN
           
           DISPLAY I
           DISPLAY RESULT(1:I)
           GOBACK.
***********
*********** The example produces the following output:
*********** 54
*********** {"GRP":{"Ac-No":"SX1234","More":{"Value":[7.8,-9.0]}}}
```
