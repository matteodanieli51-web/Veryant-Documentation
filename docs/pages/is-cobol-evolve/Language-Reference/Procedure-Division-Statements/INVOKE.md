## INVOKE

### General Format

```cobol
INVOKE {Identifier-1} Method-name-1
       {Class-name-1} 
       {SELF        }
       {SUPER       }
 
  [ USING { [ BY {REFERENCE} ] { {Identifier-3 } [ AS {Class-Name-1} ] } ... } ... ]
                 {CONTENT  }     {Literal-2    }      {native-type }
                 {VALUE    }     {Arith-Expr-1 } 
                                 {OMITTED      } 
                                 {NULL         } 
                                 {TRUE         } 
                                 {FALSE        } 
 
  [ {RETURNING} INTO Identifier-4 ] [ AS Class-Name-1 ]
    {GIVING   }
 
  [ ON {EXCEPTION} Imperative-Statement-1]
       {OVERFLOW }
 
  [ NOT ON {EXCEPTION} Imperative-Statement-2]
           {OVERFLOW }
 
[END-INVOKE]
```

### Alternative syntaxes

The INVOKE statement can be expressed with the following alternate syntax:

```cobol
INVOKE    {Identifier-1}{:>} Method-name-1
          {Class-name-1}{::}
          {SELF        }
          {SUPER       }
 
  [ ( { [ BY {REFERENCE} ] { {Identifier-3 } [ AS {Class-Name-1} ] } ... } ...) ]
             {CONTENT  }     {Literal-2    }      {native-type }
             {VALUE    }     {Arith-Expr-1 } 
                             {OMITTED      } 
                             {NULL         } 
                             {TRUE         } 
                             {FALSE        } 
 
  [ {RETURNING} INTO Identifier-4 ] [ AS Class-Name-1 ]
    {GIVING   }
 
  [ ON {EXCEPTION} Imperative-Statement-1]
       {OVERFLOW }
 
  [ NOT ON {EXCEPTION} Imperative-Statement-2]
           {OVERFLOW }
 
[END-INVOKE]
```

The same feature provided by the INVOKE statement can be obtained with the following alternate syntax:

```cobol
[TRY]
  [ SET Identifier-4 [ AS Class-Name-1 ] {TO} ]
                                         {=}
   {Identifier-1}{:>} Method-name-1
   {Class-name-1}{::}
   {SELF        }
   {SUPER       }
          [({ [ BY {REFERENCE} ] { {Identifier-3 } [ AS {Class-Name-1} ] } ... } ...)]
                   {CONTENT  }     {Literal-2    }      {native-type }
                   {VALUE    }     {Arith-Expr-1 }
                                   {OMITTED     }
                                   {NULL        }
                                   {TRUE        }
                                   {FALSE       }
   Imperative-Statement-2
[CATCH EXCEPTION Imperative-Statement-1]
[END-TRY]
```

### Syntax rules

1. Identifier-1 shall be an object reference.
2. Method-name-1 shall be a alphanumeric or national data item or literal. When the separator between Identifier-1 and Method-name-1 is not a space, the literal can be expressed without quotes.
3. If Class-name-1 is specified, literal-1 shall be specified. The value of Method-name-1 shall be the name of a method defined in the factory interface of Class-name-1.
4. native-type can be any of the following keywords: BOOLEAN, BYTE, CHAR, DOUBLE, FLOAT, INT, LONG, SHORT, STRING
5. If identifier-1 is specified and it does not reference a universal object reference, Method-name-1 shall be specified. The value of Method-name-1 shall be the name of a method, subject to the following conditions:

A. If identifier-1 references an object reference described with a class-name and the FACTORY phrase, Method-name-1 shall be the name of a method contained in the factory interface of that class-name.

B. If identifier-1 references an object reference described with a class-name without the FACTORY phrase, Method-Name-1 shall be the name of a method contained in the instance interface of that class-name.

C. If SELF and the method containing the INVOKE statement is a factory method, Method-name-1 shall be the name of a method contained in the factory interface of the class containing the INVOKE statement.

D. If SELF and the method containing the INVOKE statement is an instance method, Method-name-1 shall be the name of a method contained in the instance interface of the class containing the INVOKE statement.

E. If SUPER and the method containing the INVOKE statement is a factory method, Method-name-1 shall be the name of a method contained in the factory interface of a class inherited by the class containing the INVOKE statement.

F. If SUPER and the method containing the INVOKE statement is an instance method, Method-name-1 shall be the name of a method contained in the instance interface of a class inherited by the class containing the INVOKE statement.

6. Identifier-3 shall be an address-identifier or shall reference a data item defined in the file, working-storage, or linkage section.
7. Identifier-3 shall not reference a data item defined in the file or working-storage section of a factory or instance object.
8. Identifier-4 shall reference a data item defined in the file, working-storage, or linkage section.
9. If identifier-3 references an address-identifier, identifier-3 is a sending operand.
10. If identifier-3 does not reference an address-identifier, identifier-3 is a receiving operand.
11. Arith-Expr-1 shall reference an arithmetic expression.
12. Identifier-4 is a receiving operand.
13. GIVING and RETURNING are synonymous.
14. EXCEPTION and OVERFLOW are synonymous.
15. BY REFERENCE, BY VALUE and BY CONTENT are supported only for standard COBOL variables and not for OBJECT REFERENCE items.
16. ":>" and "::" are synonymous.

### General rules

1. The instance of the program, function, or method that executes the INVOKE statement is the activating runtime element.
2. Identifier-1 identifies an instance object. If class-name-1 is specified, it identifies the factory object of the class referenced by that class-name. Method-name-1 identifies a method of that object that will act upon that instance object.
3. The sequence of arguments in the USING phrase of the INVOKE statement and the corresponding formal parameters in the USING phrase of the invoked method’s procedure division header determines the correspondence between arguments and formal parameters. This correspondence is positional and not by name equivalence.

**NOTE** - The first argument corresponds to the first formal parameter, the second to the second, and the nth to the nth.

4. If identifier-1 is null, the execution of the INVOKE statement is terminated.
5. Identifier-3 must be the same type as the receiving operand in the method constructor.
6. Execution of the INVOKE statement proceeds as follows:

A. Identifier-1 and identifier-3 are evaluated and item identification is done for identifier-4 at the beginning of the execution of the INVOKE statement. If an exception condition exists, no method is invoked and execution proceeds as specified in general rule 5E. If an exception condition does not exist, the values of identifier-3 or literal-2 are made available to the invoked method at the time control is transferred to that method.

B. The runtime system attempts to locate the method being invoked. If the method is not found or the resources necessary to execute the method are not available, the method is not activated, and execution continues as specified in general rule 5E.

C. The method specified by the INVOKE statement is made available for execution and control is transferred to the invoked method. Control is transferred to the invoked method in a manner consistent with the entry convention specified for the method.

D. After control is returned from the invoked method, if an exception condition is propagated from the invoked method, execution continues as specified in general rule 5E.

E. If an exception condition has been raised, if the ON EXCEPTION clause is defined, the control is transferred to imperative-statement-1; if the ON EXCEPTION clause is not defined, the exception will continue to propagate. If no exception condition has been raised, and if the NOT ON EXCEPTION clause is defined the control is transferred to imperative-statement-2 otherwise control is transfered to the end of the INVOKE

7. If a RETURNING phrase is specified, the result of the activated method is placed into identifier-4.
8. If an OMITTED phrase is specified, no argument is passed to the invoked method.
9. The AS clause allows you to perform a cast. When the data item is casted as STRING, its value is trimmed.
10. If a NULL phrase is specified, a null generic object reference is passed as argument to the invoked method.

### Examples

Invoke methods of a Java Class to get System Information using different syntaxes:

```cobol
configuration section.
repository.
    class Sys as "java.lang.System".
 
working-storage section.
77  buffer      pic x(50).
 
procedure division.
main.
    invoke Sys "getProperty" using "os.name" giving buffer.
    display "Operating System: " buffer.
 
    invoke Sys::"getProperty" ( "os.arch" ) giving buffer.
    display "OS Architecture: " buffer.
 
    invoke Sys::getProperty ( "java.version" ) returning buffer.
    display "Java Version: " buffer.
 
    set buffer to Sys:>getProperty ( "java.io.tmpdir" ).
    display "Java Version: " buffer.
```
