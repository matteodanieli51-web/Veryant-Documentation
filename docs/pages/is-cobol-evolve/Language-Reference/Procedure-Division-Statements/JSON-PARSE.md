## JSON PARSE

### General Format

```cobol
JSON PARSE Identifier-1 INTO Identifier-2
 
     [ WITH DETAIL ]
 
     [ NAME OF Identifier-3 IS Literal-1 ]
 
     [ SUPPRESS Identifier-4 ]
 
     [ ON EXCEPTION Imperative-Statement-1 ]
 
     [ NOT ON EXCEPTION Imperative-Statement-2 ]
 
 [ END-JSON ]
```

### Syntax Rules

1. Identifier-1 must reference one of the following: an elementary data item of category alphanumeric; an alphanumeric group item.
2. Identifier-1 must not be defined with the JUSTIFIED clause.
3. Identifier-1 can be subscripted or reference modified. Identifier-2 cannot be reference modified, but it can be subscripted.
4. Identifier-2 must be an alphanumeric group item, or elementary data item of category alphanumeric.
5. Identifier-3 must reference Identifier-2 or one of its subordinates.
6. Identifier-3 may be specified more than once, but only the last specification is used.
7. Literal-1 must be alphanumeric or a national literal containing the JSON name to be associated with identifier-3.
8. Identifier-4 must reference an item that is subordinate to Identifier-2.
9. Duplicate specifications of Identifier-4 are permitted.

### General Rules

1. Identifier-1 is the data item that contains the JSON text.
1. If identifier-1 contains invalid JSON syntax, the statement terminates with an exception condition, and Identifier-2 may be partially modified.
2. Identifier-2 is the group or elementary item populated with the JSON text.
3. The NAME OF phrase enables you to use a different data name than the one required by the matching algorithm when matching the name of a JSON name/value pair to a COBOL data item. The NAME OF phrase must not result in an ambiguous name specification, and is in effect during the execution of the JSON PARSE statement.
4. The SUPPRESS phrase enables you to exclude items that are subordinate to Identifier-2 from being parsed.
5. When an exception occurs, if the ON EXCEPTION phrase is specified, control is passed to Imperative-statement-1, and the NOT ON EXCEPTION phrase, if specified, is ignored. If the ON EXCEPTION phrase is not specified, control is transferred to the end of the statement. Such conditions can occur when the JSON text is ill-formed or there are problems populating Identifier-2 with the JSON text (i.e. when one of the data-items in Identifier-2 doesn’t have a matching item in the JSON stream and the [iscobol.json_parse.read_on_mismatch (boolean)](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#general-runtime-configuration) property is not set to true in the configuration).
6. If an exception does not occur, and the NOT ON EXCEPTION phrase is specified, control is passed to imperative-statement-2; otherwise control is transferred to the end of the statement, and special register JSON-CODE contains zero after statement execution.

### Examples

Parse a JSON string and move the values to a group data item

```cobol
       WORKING-STORAGE SECTION.
       01 JSON-DATA PIC X(80) VALUE
           '{"GRP":{"Ac-No":"SX1234","More":{"Value":[7.8,-9.0]}}}'.
       01 GRP.
          05 AC-NO PIC AA9999.
          05 MORE.
             10 STUFF PIC S99V9 OCCURS 2.
          05 SSN PIC 999/99/9999 VALUE '987-65-4321'.
       01 I BINARY PIC 99.
       PROCEDURE DIVISION.
       MAIN.
           MOVE 7.8 TO STUFF(1), MOVE -9 TO STUFF(2)
           JSON PARSE JSON-DATA INTO GRP 
             NAME OF STUFF IS 'Value' SUPPRESS SSN
           
           DISPLAY "AC-NO:    " AC-NO.
           DISPLAY "STUFF(1): " STUFF(1).
           DISPLAY "STUFF(2): " STUFF(2).
           
           GOBACK.
***********
*********** The example produces the following output:
*********** AC-NO:    SX1234
*********** STUFF(1): 7.8
*********** STUFF(2): -9.0
```
