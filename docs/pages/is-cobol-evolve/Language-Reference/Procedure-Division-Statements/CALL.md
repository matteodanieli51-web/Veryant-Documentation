## CALL

#### Format 1

```cobol
CALL {CLIENT} Program-Name
     {IN THREAD}
  [ HANDLE IN Handle-1 ] 
 
  [ USING { [ BY {REFERENCE} ] { {Parameter} } ... } ... ]
                 {CONTENT  }     {OMITTED  }
                 {VALUE    }     
 
  [ {RETURNING} INTO Return-Val ]
    {GIVING   }
 
  [ ON {EXCEPTION} Statement-1]
       {OVERFLOW }
 
  [ NOT ON {EXCEPTION} Statement-2]
           {OVERFLOW }
 
[END-CALL]
```

#### Format 2

```cobol
CALL RUN Program-Name
 
  [ USING { [ BY {REFERENCE} ] { {Parameter} } ... } ... ]
                 {CONTENT  }     {OMITTED  }
                 {VALUE    }     
 
  [ {RETURNING} INTO Return-Val ]
    {GIVING   }
 
  [ ON {EXCEPTION} Statement-1]
       {OVERFLOW }
 
  [ NOT ON {EXCEPTION} Statement-2]
           {OVERFLOW }
 
[END-CALL]
```

#### Format 3

```cobol
CALL PROGRAM Program-Name
 
  [ USING { [ BY {REFERENCE} ] { {Parameter} } ... } ... ]
                 {CONTENT  }     {OMITTED  }
                 {VALUE    }     
 
  [ {RETURNING} INTO Return-Val ]
    {GIVING   }
 
  [ ON {EXCEPTION} Statement-1]
       {OVERFLOW }
 
  [ NOT ON {EXCEPTION} Statement-2]
           {OVERFLOW }
 
[END-CALL]
```

### Syntax Rules

#### All Formats

1. Program-Name shall be defined as an alphanumeric data item or String literal.
2. Parameter shall reference an address-identifier or a data item defined in the file, working-storage, and linkage. It can reference an arithmetic expression when passed BY VALUE.
3. Return-Val shall reference a data item defined in the file, working-storage or linkage.
4. The USING clause can appear either before or after the GIVING clause.

#### Formats 1 and 2

5. Return-Val shall not be object-reference.
6. If the BY REFERENCE phrase is specified or implied for a Parameter, it shall be neither a strongly-typed group item.

### General Rules

#### All Formats

1. The instance of the program, or method that executes the CALL statement is the activating runtime element.
2. The sequence of arguments in the USING phrase of the CALL statement and the sequence of formal parameters in the USING phrase of the called program’s procedure division header determine the correspondence between arguments and formal parameters. This correspondence is positional and not by name equivalence.

**NOTE** - The first argument corresponds to the first formal parameter, the second to the second, and the nth to the nth.

3. Program-Name and Parameter are evaluated and item identification is done for Return-Val at the beginning of the execution of the CALL statement. If an exception condition exists, no program is called and execution proceeds as specified in general rule 6. If an exception condition does not exist, the value of identifier-2 is made available to the called program at the time control is transferred to that program.
4. The program being called is identified by its program-name or its location, which is determined as follows:

A. If Program-Name references an alphanumeric or national data item, program-name is the program-name of the program being called

B. If the program being called is a COBOL program, the runtime system attempts to locate the program being called.

5. If a fatal exception condition has not been raised, the program specified by the CALL statement is made available for execution and control is transferred to the called program.
6. If the program was not successfully called the following actions occur:

A. If the ON OVERFLOW or ON EXCEPTION phrase is specified in the CALL statement, control is transferred to Statement-1. Execution then continues according to the rules for each statement specified in Statement-1. If a procedure branching or conditional statement that causes explicit transfer of control is executed, control is transferred in accordance with the rules for that statement; otherwise, upon completion of the execution of Statement-1, control is transferred to the end of the CALL statement and the NOT ON EXCEPTION phrase, if specified, is ignored.

ii. If an ON OVERFLOW nor an ON EXCEPTION phrase is specified, an error is returned

B. If the program was successfully called, after control is returned from the called program the ON OVERFLOW or ON EXCEPTION phrase, if specified, is ignored. Control is transferred to the end of the CALL statement or, if the NOT ON EXCEPTION phrase is specified, to Statement-2. If control is transferred to Statement-2, execution continues according to the rules for each statement specified in Statement-2.

7. If a RETURNING phrase is specified, the result of the activated program is placed into Return-Val.
8. BY CONTENT, BY REFERENCE and BY VALUE phrases are transitive across the parameters that follow them until another BY CONTENT, BY VALUE or BY REFERENCE phrase is encountered. If neither the BY CONTENT nor the BY VALUE nor the BY REFERENCE phrase is specified prior to the first parameter, the BY REFERENCE phrase is assumed.
9. BY REFERENCE causes the address of the data item to be passed to the receiving program. BY CONTENT and BY VALUE cause the address of a copy of the data item to be sent, therefore any changes made to the parameter in the called program are not seen by the caller. When passing parameters to C functions with either BY CONTENT or BY REFERENCE clauses, isCOBOL passes the address of the data item, unless the data item is an integer, in that case the item value is passed.
10. When a literal is passed, it’s passed as a USAGE DISPLAY data item whose size is the size of the literal, unless the program is compiled with the [-ccmf](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#compatibility-options) flag, in that case the literal is treated as follows:

- BY REFERENCE: A numeric literal is passed as an integer 32-bit comp-x item if it is not negative or as an integer 32-bit comp (binary) item if it is negative, even if the literal is not an integer. A decimal point in the numeric literal is ignored. An alphanumeric literal is passed in the same way as when the BY CONTENT clause is used.
- BY VALUE: If a numeric literal is specified, then the data description of the item is equivalent to a signed numeric item USAGE BINARY.
- BY CONTENT: if a literal is specified, then the implied data description of the item is equivalent to an alphanumeric data item with the same size as the literal and with its contents set to the value of the literal.

11. When a resource property is passed, it’s passed as a USAGE NATIONAL data item whose size is the size of the property name (e.g. twice as the number of characters in the property name).
12. Dynamic length items are always passed BY REFERENCE.
13. The program identified by *Program-Name* is searched among the paths specified by the [iscobol.code_prefix](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#general-runtime-configuration) setting. If the code-prefix is not set, then the program is searched in the Classpath.
14. Extensions in *Program-Name* are automatically stripped by the runtime.
15. Paths in *Program-Name* are considered only if [iscobol.code_prefix](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#general-runtime-configuration) is set. Relative paths in *Program-Name* are appended to the code-prefix paths.
16. You can install a hook class for the CALL statement via the [iscobol.call_cancel.hook](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#general-runtime-configuration) configuration property.
17. A special register named RETURN-CODE is automatically created by the compiler and is shared by all programs of a run unit. This special register is defined as:

```cobol
77 RETURN-CODE SIGNED-LONG EXTERNAL.
```

If you call a C program , the return value of the C function is placed into this register. If you call the [SYSTEM](\) library routine, the status of the call is placed into this register. The verbs [EXIT](../Procedure-Division-Statements/EXIT), [STOP](../Procedure-Division-Statements/STOP), and [GOBACK](../Procedure-Division-Statements/GOBACK) can also place a value into the RETURN-CODE register. The compiler also creates an unsigned version of the return code called RETURN-UNSIGNED. It has the following implied definition:

```cobol
77 RETURN-UNSIGNED REDEFINES RETURN-CODE UNSIGNED-LONG EXTERNAL.
```

If the RETURNING phrase is used, then the return value of the called program is moved to *Return-Val*. This is accomplished by the following rule:

- If *Return-Val* is a signed data item, then the value of RETURN-CODE is moved to *Return-Val*.
- If *Return-Val* is unsigned, then RETURN-UNSIGNED is moved instead.

You should avoid using RETURN-CODE or RETURN-UNSIGNED for *Return-Val*. This is pointless because, after assigning a value to *Return-Val*, the CALL statement restores the previous value of RETURN-CODE.

#### Format 1

1. The runtime framework searches for a called subroutine in this order:

A. If the name is the exact name of a shared library then that shared library is loaded into memory. Otherwise

B. the entry points in the already loaded user subroutines are searched. If not found

C. the statically declared C functions are searched. If not found

D. the C functions available in the already loaded shared libraries are searched. If not found

E. the isCOBOL library subroutines are searched. If not found

F. the user subroutines are searched. If not found

G. the runtime decorates the subroutine name with a shared library name (e.g. *foo* may become *foo.dll* or *libfoo.so*, depending on the O.S.) and tries to load it. If the library is successfully loaded, then the runtime looks for a function with the same name (*foo*), otherwise

H. the remote subroutines available, if any, are searched.

**Note** - The above search is only performed the first time the subroutine is called. Once found, the runtime keeps track of it's location. The next time the same subroutine is called, the runtime looks for it directly in the right place. This improves the performance of the CALL statement.

2. The THREAD clause makes the called program run asynchronously with the calling program.

When a program is called asynchronously, it’s good practice to pass parameters BY VALUE. Passing parameters BY REFERENCE may produce unexpected results.

Return-Val is set with the called program exit status when the thread terminates.

When a program is called asynchronously, the runtime looks for it only locally ignoring [iscobol.remote.code_prefix](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#general-runtime-configuration).

3. The CLIENT clause is used when running in ApplicationServer mode to execute the called program on a client machine. The called program on the client can be either a COBOL program, a library routine or a C function. If running without ApplicationServer, the CLIENT clause is ignored.

A program compiled with [-cp](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#compatibility-options) option can call a C function with a CALL CLIENT statement as long as the arguments are not numeric data-items passed BY VALUE and are not pointers. If the C function requires either numeric data-items passed BY VALUE or pointers, it's possible to use the CALL CLIENT statement to call a COBOL program compiled with [-cp](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#compatibility-options) option on the client PC and have this COBOL program call the C function.

4. On AIX systems some libraries (such as libdb2.a) can be called by dynamically specifying the member names. To achieve it with isCOBOL, use the following syntax:

```cobol
CALL "/lib/foo.a(member.o)"
```

5. On Windows systems it is possible to specify the calling convention when the DLL library is loaded. The convention can be specified by adding a slash character followed by the desired convention at the end of the DLL name. Use the following syntax to load a DLL library with CDECL convention:

```cobol
CALL "foo.dll/0"
```

Use the following syntax to load a DLL library with PASCAL convention:

```cobol
CALL "foo.dll/1"
```

The choosen convention will be adopted by the runtime when calling the functions stored in the loaded DLL library, regardless of the [iscobol.dll_convention](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#general-runtime-configuration) setting.

#### Format 2

1. The CALL RUN statement makes the called program run synchronously or asynchronously in a separate thread. Return-Val is set with the called program exit status when the thread terminates.
2. The called program doesn’t inherit the environment set by the calling program, but starts in a clean environment instead.
3. The synchronicity is controlled by the [iscobol.call_run.sync (boolean)](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#general-runtime-configuration) configuration setting. By default, this call is asynchronous.

#### Format 3

1. CALL PROGRAM works as the [CHAIN](./CHAIN) statement. It causes the current run unit to terminate and initiates a new run unit, but in this case USING parameters are passed to data items specified in the Linkage Section.

#### Recursive calls

A program may directly or indirectly call itself. Such a CALL statement is considered a recursive call. By default, isCOBOL shares the program data with all recursive calls. Set [iscobol.recursion_data_global (boolean) \*](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#general-runtime-configuration) to false in order to make isCOBOL create a new copy of data for each instance of the program.

### Examples

Format 1 - Call a program passing parameters, receiving return code and validating exception.

```cobol
call "program1" using parm-1 parm-2
  giving ret-code
  on exception display message "Could not call program1"
end-call
```

Format 1- Call a program on a different thread to run it in parallel with calling program saving the thread handle in p1-handle.

```cobol
working-storage section.
77 p1-handle  usage handle of thread.
...
procedure division.
main.
  call thread "program1" handle in p1-handle
```

Format 1 - Call a program client side when running from thin-client

```cobol
call client "program1"
```

Format 2 - Call a program and run it in parallel with current one (on different thread).

```cobol
call run "program1"
```

Format 3 - Call a program terminating the current run unit and starting a new one

```cobol
call program "program1"
```
