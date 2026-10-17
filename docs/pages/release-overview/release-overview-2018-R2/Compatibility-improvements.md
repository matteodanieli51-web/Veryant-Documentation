## Compatibility improvements

Additional ESQL syntax supported in Pro\*COBOL is now supported in isCOBOL, simplifying migration from Pro\*COBOL to JDBC.

New syntax, library routines and configuration properties are supported to enhance compatibility with other COBOL dialects.

### New ESQL syntax:

- Support for ESQL LOCK TABLE statement to acquire a lock on a table or portion of a table.

Code snippet:

```cobol
           exec sql 
                lock table customers
                           in row exclusive mode
                           nowait
           end-exec.
```

- The FOR clause and the use of array items (OCCURS) without an index is now supported on several ESQL statements. The runtime repeats a statement multiple times when an OCCURS data item is used among host variables. For example, the following code:

```cobol
       working-storage section.
       77 ins-values pic x(10) occurs 4.
       procedure division.           
           move "aaa" to ins-values(1).
           move "bbb" to ins-values(2).
           move "ccc" to ins-values(3).
           move "ddd" to ins-values(4).
           exec sql
                for 3
                insert into tbl1 (column1) values (:ins-values)
           end-exec.
```

will cause the runtime to repeat the INSERT statement 3 times, using ins-values(1), ins-values(2) and ins-values(3) respectively. Without the FOR clause, the statement would be executed 4 times, one for each item in ins-values.

- The RETURNING clause is now supported, allowing retrieval of updated values after a statement has been executed, for example:

```cobol
           exec sql      
                 insert into emptbl
                  (empno,
                   ename,
                   deptno
                   )
                 values
                  ('12', 'John Doe', 'dep1')
                   returning empno, ename, deptno into
                   :new_emp_number, :new_emp_name, :new_dept
           end-exec.
```

- The INTO clause of SELECT and FETCH ESQL statements can now be bound to an OCCURS data item, for example:

```cobol
     working-storage section.
     77 col-val pic x(10) occurs 3.
     procedure division.
         exec sql
             select column1 into :col-val from tbl1
         end-exec.
```

The above statement will read 5 records from table tbl1 and store the values of field column1 in col-val(1), col-val(2), col-val(3).

### Improved COBOL compatibility

isCOBOL now provides even better compatibility with other COBOL dialects.

- Properties in CLASS-ID programs are now supported. The CLASS-ID program sets the property as it would do with a standard variable, for example:

```cobol
identification division.
Class-id. myClass.
identification division.
factory.
working-storage section.
01 myProp pic 9(10) comp property.
procedure division.              
identification division.       
method-id. myMethod
procedure division.
main.
    move 2 to myProp.
```

- Legacy programs and CLASS-ID programs that reference the class above can also reference the property in the REPOSITORY paragraph, and use it as a standard COBOL variable, for example:

```cobol
             configuration section.
             repository.
                 class myClass as "myClass"
                 property myProp.
             procedure division.
             main.
                 display myProp of myClass.
```

- ACTIVE-CLASS syntax is now supported, allowing you to identify a specific instance of the current class or one of its subclasses. Code snippet:

```cobol
             method-id. getInstance as "getInstance".
             working-storage section.
             77 cls-instance object reference active-class.
             procedure division returning cls-instance.
             main.
                 invoke self "new" giving cls-instance.
```

- New Micro Focus® directives are now supported:

```cobol
      $SET INDD"<filename>"
      $SET OUTDD"<filename [recsize] [filetype]>"
```

To enable you to map the system input (SYSIN) and system output (SYSOUT) to disk files. Each program can use different disk files. This is explained in detail later in this document.

### New library routine

A new library routine has been implemented to provide better compatibility with RM/COBOL®:

- C$WRU returns the name of the calling program.

The following code snippet shows the usage of the C$WRU library routine

```cobol
01 WHO-CALLED-ME.                                               
     05 THE-CALLING-PROGRAM PIC X(30)  VALUE SPACES.          
     05 THE-CALLING-LINE    PIC S9(6)  BINARY.                
     05 THE-LINE-NUM        PIC S9(02) BINARY.                
PROCEDURE DIVISION.
     CALL 'C$WRU' USING THE-CALLING-PROGRAM                     
                        THE-CALLING-LINE                       
                        THE-LINE-NUM.   
```

### New configuration property

The new *iscobol.memory.alpha_edited=true* configuration property has been implemented to manage the VALUE clause of alphanumeric edited items in compatibility with Micro Focus®, AcuCOBOL-GT® and RM/COBOL®.
