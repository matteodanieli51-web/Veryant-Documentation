### Main program

Most object oriented applications have a conventional program to start the processing. BANKMAIN serves this function in this sample bank application.

```cobol
PROGRAM-ID. BANKMAIN.
ENVIRONMENT DIVISION.
CONFIGURATION SECTION.
REPOSITORY.
CLASS Account.
DATA DIVISION.
WORKING-STORAGE SECTION.
01  an-object USAGE OBJECT REFERENCE Account.
PROCEDURE DIVISION.
go-now.
    INVOKE Account "new" RETURNING an-object.
    INVOKE an-object "displayUI".
    SET an-object to NULL.
    GOBACK.
```

The same code can also be written as follows:

```cobol
PROGRAM-ID. BANKMAIN.
ENVIRONMENT DIVISION.
CONFIGURATION SECTION.
REPOSITORY.
CLASS Account.
DATA DIVISION.
WORKING-STORAGE SECTION.
01  an-object USAGE OBJECT REFERENCE Account.
PROCEDURE DIVISION.
go-now.
    SET an-object TO Account:>new().
    an-object:>displayUI().
    SET an-object to NULL.
    GOBACK.
```
