## Compatibility improvements

isCOBOL 2025 R1 has been enhanced to improve compatibility with other COBOL dialects such as MicroFocus COBOL and IBM COBOL. The syntax improvements in the compiler are related to nested programs and XML. A new library routine has been added.

### Nested programs

Multiple programs can be included in the same source file repeating the PROGRAM-ID / END PROGRAM syntax. There are two different scenarios:

- If a program is included before the END PROGRAM clause of another program, it becomes a nested program, and it can be called only by its parent program.
- If a program is included after the END PROGRAM clause of another program, it becomes a sibling program, and it can be called by every other program in the runtime session.

For example, in the code:

```cobol
         PROGRAM-ID. customer.
         WORKING-STORAGE SECTION.
         ...
         PROCEDURE DIVISION.
             ...
             EXIT program.
         END PROGRAM customer.
 
         PROGRAM-ID. product.
         WORKING-STORAGE SECTION.
         ...
         PROCEDURE DIVISION.
             ...
             CALL "show" USING ...
             ...
           EXIT program.
 
           PROGRAM-ID. show.
           WORKING-STORAGE SECTION.
           ...
           LINKAGE SECTION.
           ...
           PROCEDURE DIVISION USING ...
           ...
           END PROGRAM show.
 
         END PROGRAM product.
```

There are three declared PROGRAM-IDs; “customer” and “product” that are sibling programs and can be called as normal programs, and “show”, which is a program-id declared inside the “product” program and therefore can only be called inside the “product” program. Executing the same CALL to “show” in a different program causes the runtime error “CALL not found” to be raised.

### XML improvements

XML PARSE is a statement used to parse an XML document into its individual components that are then passed, one at a time, to a user-written processing procedure. The XML GENERATE statement converts data to XML format. In version 2025 R1 the additional clauses VALIDATING and ENCODING are now supported to improve compatibility and enhance the feature:

- VALIDATING will validate the XML file during the PARSE using a schema file declared in the SPECIAL-NAMES
- ENCODING will set the encoding to be used during the XML PARSE and XML GENERATE statements

For example, the following code snippet:

```cobol
         CONFIGURATION SECTION.
         SPECIAL-NAMES.
              XML-SCHEMA XMLSCHART IS 'XMLSCHART.XSD'.
         PROCEDURE DIVISION.
         ...
           XML GENERATE OUTPUT-XML FROM INPUT-XML
               COUNT IN XML-SIZE
               WITH ENCODING 1208
           END-XML
         ...
           XML PARSE OUTPUT-XML
               VALIDATING WITH FILE XMLSCHART
               WITH ENCODING 1208
               PROCESSING PROCEDURE EVENT-HANDLER
           END-XML
```

declares the XML-SCHEMA named XMLSCHART under SPECIAL-NAMES, assigning it to a physical schema (.xsd) file. During the XML PARSE, the XMLSCHART schema is passed to the VALIDATING clause. Both statements, XML GENERATE and XML PARSE use the ENCODING clause to force a different encoding than the one used when running. In this case 1208 means UTF-8.

### Library routine

A new library routine named CBL_LOCATE_FILE has been implemented to enhance compatibility with MicroFocus COBOL. The CBL_LOCATE_FILE routine has two uses: it can be used to expand an environment variable in a file specification, where the environment variable contains a list of several paths. It can also determine whether an OPEN INPUT statement using a particular file specification finds the file on disk.

A code snippet like this:

```cobol
         WORKING-STORAGE SECTION.
         77  user-file-spec   pic x(128).
         77  user-mode        pic x comp-x.
         01  actual-file-spec.
             03 buffer-len    pic x(2) comp-x.
             03 buffer        pic x(128).
         77  exist-flag       pic x comp-x.
         77  path-flag        pic x comp-x.
         77  status-code      pic xx comp-5.
         ...
         PROCEDURE DIVISION.
         ...
             move "$PATH\dyncall.dll" to user-file-spec
             move 0 to user-mode
             initialize actual-file-spec
             move 128 to buffer-len
             call "CBL_LOCATE_FILE" using user-file-spec
                                          user-mode
                                          actual-file-spec
                                          exist-flag
                                          path-flag
                                returning status-code
```

checks if the dyncall.dll library is in the PATH.
