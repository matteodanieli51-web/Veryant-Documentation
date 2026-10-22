### Files in instance objects

A file specified in an instance object means that the instance definition contains the FILE-CONTROL paragraph and the file section. One or more instance methods will contain the file processing statements such as [OPEN](../../Procedure-Division-Statements/OPEN), [CLOSE](../../Procedure-Division-Statements/CLOSE), [READ](../../Procedure-Division-Statements/READ) and [WRITE](../../Procedure-Division-Statements/WRITE). All of the instance methods have visibility to the records associated with the file.

When a class that contains a file specified in the instance definition is inherited, each direct or indirect descendent also inherits the file specification. The instance objects of each of these subclasses have their own file connector unless the EXTERNAL clause is specified for the file. Dynamic file assignment or file sharing may be used to resolve conflicts in accessing the physical files associated with these file connectors.

Specifying dynamic file assignment in the file control entry permits a class to be used to define a logical file of a given structure, and each instance can associate a different physical file with its own file connector and perform I-O on that physical file.

Sample code for dynamic file assignment is illustrated below. Note that the [MOVE](../../Procedure-Division-Statements/MOVE) statements only have an effect on the dynamic assignment when a subsequent [OPEN](../../Procedure-Division-Statements/OPEN) statement for the file connector is executed.

```cobol
CLASS-ID. Employee INHERITS Base.
...
OBJECT.
...
FILE-CONTROL.
    SELECT EMPLOYEE-FILE ASSIGN USING FILE-REF.
DATA DIVISION.
FILE SECTION.
FD  EMPLOYEE-FILE
...
WORKING-STORAGE SECTION.
01  FILE-REF               PIC X(16) VALUE SPACES.
...
PROCEDURE DIVISION.
METHOD-ID. readFile.
...
WORKING-STORAGE SECTION.
01  EMPLRCD.
    03 SSN                 PIC 9(9).
    03 NAME ...
PROCEDURE DIVISION.
...
    MOVE "external-ref01" TO FILE-REF
    OPEN INPUT EMPLOYEE-FILE
...
    READ EMPLOYEE-FILE NEXT RECORD INTO EMPLRCD
    CLOSE EMPLOYEE-FILE
    ...
    MOVE "external-ref02" TO FILE-REF
    OPEN INPUT EMPLOYEE-FILE
    ...
    READ EMPLOYEE-FILE NEXT RECORD INTO EMPLRCD
    ...
```
