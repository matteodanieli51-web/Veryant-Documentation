## TRY

The TRY statement is used as an exception handler.

### General Format

```cobol
TRY Imperative-Statement-1
 
  [ CATCH {Exception-Class} Imperative-Statement-2 ] ...
 
  [ CATCH EXCEPTION Imperative-Statement-3 ]
 
  [ FINALLY Imperative-Statement-4 ]
 
END-TRY
```

### Syntax rules

1. Imperative-Statement-1, Imperative-Statement-2, Imperative-Statement-3, and Imperative-Statement-4 represent either one or more imperative statements or a conditional statement optionally preceded by one or more imperative statements.
2. Exception-Class is a [User-defined word](../Preface/Definitions#user-defined-word), as defined in the Definitions section in the Preface of this document.
3. Imperative-Statement-1, Imperative-Statement-2, Imperative-Statement-3, and Imperative-Statement-4 may each contain a TRY statement. In this case, the TRY statement is said to be nested.
4. At least a CATCH clause must be specified.
5. The FINALLY clause can be omitted.

### General rules

1. Exception-Class must appear in the [REPOSITORY Paragraph](../Environment-Division/Configuration-Section/Repository) and reference a class of type java.lang.Trowable.
2. The class referenced by Exception-Class must be trown by Imperative-Statement-1. Consult the javadoc of the methods used by Imperative-Statement-1 for a list of thrown exceptions.
3. A try statement executes one or more imperative statements. If an exception is thrown and the try statement has one or more CATCH clauses that can catch it, then control will be transferred to the first such catch clause.
4. If the FINALLY clause is specified, then Imperative-Statement-4 is executed, no matter whether the try block completes normally or abruptly, and no matter whether a catch clause is first given control.
5. Separate lines of code that might throw an exception can be put into their own TRY blocks, or all the potential problem code can be put into the same TRY block and managed by separate handlers.
6. To associate an exception handler with a TRY block, you must use a CATCH clause.
7. The CATCH EXCEPTION clause catches the generic java.lang.Exception.
8. Imperative-Statement-2 and Imperative-Statement-3 can take advantage of the [EXCEPTION-OBJECT](../Data-Division/Data-Names/EXCEPTION-OBJECT) internal object, that is automatically set by the runtime, in order to retrieve deatails such as the error message or the exception stack.

### Examples

The following code snippets are utilities that checks if a given file exists.

The first snippet catches the generic exception and uses EXCEPTION-OBJECT to advise the user of the error encountered:

```cobol
       CONFIGURATION SECTION.
       REPOSITORY.
           CLASS JFILE AS "java.io.File"
           .
 
       WORKING-STORAGE SECTION.
       77  W-STATUS PIC 9(9).
       88  FILE-NOTFOUND   VALUE 0.
       88  FILE-EXISTS     VALUE 1.
       88  ERROR-CONDITION VALUE 2.
                                      
       LINKAGE SECTION.        
       77  FILENAME PIC X(256).
 
       PROCEDURE DIVISION USING FILENAME.
       MAIN.
           TRY 
             IF JFILE:>new(FILENAME):>exists()
                SET FILE-EXISTS TO TRUE
             ELSE
                SET FILE-NOTFOUND TO TRUE
             END-IF
           CATCH EXCEPTION
             SET ERROR-CONDITION TO TRUE
             DISPLAY MESSAGE EXCEPTION-OBJECT:>getMessage()
           FINALLY
             GOBACK W-STATUS
           END-TRY.
```

The second snippet catches the SecurityException thrown by the exists() method of java.io.File, as described in the method javadoc: [https://docs.oracle.com/javase/8/docs/api/java/io/File.html#exists--](https://docs.oracle.com/javase/8/docs/api/java/io/File.html#exists--):

```cobol
       CONFIGURATION SECTION.
       REPOSITORY.
           CLASS JFILE  AS "java.io.File"
           CLASS SECEXC AS "java.lang.SecurityException"
           .
 
       WORKING-STORAGE SECTION.
       77  W-STATUS PIC 9(9).
       88  FILE-NOTFOUND   VALUE 0.
       88  FILE-EXISTS     VALUE 1.
       88  SECURITY-ERROR  VALUE 2.
 
       LINKAGE SECTION.        
       77  FILENAME PIC X(256).
 
       PROCEDURE DIVISION USING FILENAME.
       MAIN.
           TRY 
             IF JFILE:>new(FILENAME):>exists()
                SET FILE-EXISTS TO TRUE
             ELSE
                SET FILE-NOTFOUND TO TRUE
             END-IF
           CATCH SECEXC
             SET SECURITY-ERROR TO TRUE
             DISPLAY MESSAGE EXCEPTION-OBJECT:>getMessage()
           FINALLY
             GOBACK W-STATUS
           END-TRY.
```
