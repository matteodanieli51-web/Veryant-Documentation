# Compiler Errors

The isCOBOL Compiler produces a wide range of informative messages, including different kinds of Errors and Warnings.

Each message is preceded by its type.

| | |
| --- | --- |
| S | Severe Error |
| E | Error |
| I | Informational |
| W | Warning |
| | |

The compiler will resolve any issues reported as Errors, Informational messages and Warnings and will generate a class object. Severe errors will prevent the compiler from creating a final object.

Each message is followed by information about file name, row and column where the error has been found.

Examples:

```
--W: #126 OCCURS DEPENDING must be last in group: V2; file = tt.cbl, line = 7, col 6
--E: #152 Variable has zero length: V10; file = tt.cbl, line = 9, col 3
--S: #109 Numeric variable required, found: V10; file = tt.cbl, line = 13, col 13
```

In this appendice you find the following lists of compiler errrors:

- [Common error messages](./Compiler-Errors#common-error-messages)
- [Common Java compiler errors](./Compiler-Errors#common-java-compiler-errors)
- [Severe Errors](./Compiler-Errors#severe-errors)
- [Errors, Informationals and Warnings](./Compiler-Errors#errors-informationals-and-warnings)

## Common error messages

The following list contains the most common messages produced by the Compiler during the parsing of the cobol code.

| Message | Meaning |
| --- | --- |
| 'maximize' feature not available for <br>FLOATING window RESIZABLE | Floating windows can’t be minimized, maximized or restored. The compiler advises you about this limitation when it finds the RESIZABLE attribute in the DISPLAY FLOATING WINDOW statement. |
| 'void' type not allowed here | A method that does not return any result has been used inside a cobol statement (Object Oriented Programming). |
| $EFD directive required | This warning is returned when the physical name of a file is a variable and -efd or -efc options are used. In this case the Compiler doesn’t know how to name the efd file and uses the name of the variable. In order to tell the Compiler how to name the efd file, $EFD directive must be used. See [Using EFD directives](../../is-cobol-db-bridge/Using-EFD-directives) for more information about this. <br><br>This warning is printed at the end of the Compiler output and is not included in the count of warnings. This is because the generation of EFD and ISS dictionaries is a separate task performed by the Compiler after the whole program has been compiled. |
| $EFD invalid name | This warning is returned when the name you provided includes characters that are not suitable for a database column name, i.e . parenthesis, question marks, spaces, quotes, etcetera... |
| a USE phrase cannot be here | A USE phrase has been found outside of DECLARATIVES. |
| Ambiguous identifier | A data-item found in the statement is defined more than once in DATA DIVISION or a paragraph name is duplicated in the same SECTION. |
| ANY LENGTH variable expected | An INITIALIZE WITH SIZE statement has been used on an item that is not ANY LENGTH. |
| Behavior differs from ACU's | Although the Acucobol feature is supported by isCOBOL, its behavior is different. A typical example is the SET THREAD PRIORITY statement. |
| Cannot invoke an instance method <br>from a factory method SELF | The SELF keyword can be used only in OBJECTs Procedure Division. If you need to invoke a self method in a FACTORY Procedure Division use the logical name of the class, instead. |
| Cannot open file | The required copybook cannot be open. Copybooks are searched in the current directory and in all of the paths listed in -sp compiler option. If -ce compiler option is used, the desired extension is appended to the copybook name before opening it. When working on platforms different than Windows, the case of the copybook name in the cobol source code must match the case of the disk file name and the Compiler must have read permission on that file. <br><br>This error is returned also when the Compiler is not able to write the intermediate java file due to permission issues or wrong output directory during the compilation process. |
| Class not found | One of the classes defined in the REPOSITORY paragraph cannot be found. Please check the CLASSPATH. |
| Class-Id differs from source name | The name specified in CLASS-ID paragraph does not match with the name of the disk source file. |
| Clause clash | There is a conflict between two clauses. Consider having ORGANIZATION SEQUENTIAL and ACCESS DYNAMIC in the same file definition, for example. |
| Constant already defined | The same constant has been defined more than once in the program. Maybe the same constant appears in more copybooks or a copybooks has been included more times in the same program.Duplicated constants are allowed if -cm compiler option is used. |
| Directive ignored | This warning is returned for lines that are recognized as compiler directives but have no effect in isCOBOL. |
| Directive not closed | A compiler directive has not been closed properly with the corresponding END-*Directive* |
| Duplicate key definition: <keyname\> | A key has the same definition (same segments in the same order) as another key. For example:<br>ALTERNATE KEY KEY1 = ARC-D1, ARC-K1<br>ALTERNATE KEY KEY2 = ARC-D1, ARC-K1<br>It is allowed by some file handlers (e.g. c-tree) but not by others (e.g. JIsam). |
| Duplicate primary key | The record key clause of an indexed file has been specified more than once. |
| Duplicated $EFD directives not allowed, <br>only the last is considered. | The same EFD directive have been used more than one time on the same data item. <br><br>Example:        <br><br>$EFD NAME=datep       <br>$EFD NAME=datePurchased          <br>05 DATE-PURCHASED PIC 9(8). <br><br>The above field will be named ‘datePurchased’. |
| Dynamic-capacity tables and <br>standards tables cannot be mixed | This error is returned when OCCURS DYNAMIC item is found in the same group variable of OCCURS n TIMES item. |
| EFC field occurs greater then 2000 are not supported | You can’t link a c-tree file that includes a OCCURS field with more than 2000 occurrences in the c-tree SQL Engine. |
| EFD directive in wrong format | The value of an EFD directive is missing or incorrect. Consult [Using EFD directives](../../is-cobol-db-bridge/Using-EFD-directives) chapter for details. |
| End statement required | A cobol statement has not been properly closed by dot or END-*statement*. |
| ESQL cursor already declared | A cursor has been declared more than once in a ESQL program. Cursors cannot be declared more than once in the same program, not even they are bind to different queries. |
| Exception already caught | The same exception has been caught two times, for example:<br>try   <br>object:>method()<br>catch IOException    <br>\|handle error here<br>catch SecurityException    <br>\|handle error here<br>catch IOException   <br>\|handle error here<br>end-try.<br>(Object Oriented Programming) |
| Exception block required | A method has been invoked without catching its exceptions. If INVOKE statement has been used, add ON EXCEPTION clause to it. If the direct syntax has been used, instead, place your statement into a TRY/CATCH block, for example:<br>try   <br>object:>method()<br>catch exception    <br>\|handle the error here<br>end-try.<br>(Object Oriented Programming) |
| Exception not raised | The specific exception is not raised by the method, check method documentation for details and correct the CATCH clause of the TRY/CATCH block.(Object Oriented Programming) |
| EXIT PERFORM outside of PERFORM | An EXIT PERFORM statement has been found outside of a PERFORM block. |
| Expected/found token mismatch | An unrecognized token has been found inside a statement in place of the expected keyword. |
| File not found | The source file cannot be found by the Compiler. If you're compiling on platforms different than Windows, be aware that the case of the source name passed to the Compiler must match the case of the disk file. |
| Function not found | The specific function is not available. See [Intrinsic Functions](./Intrinsic-Functions/Intrinsic-Functions) for the list of all supported internal functions. |
| Group items cannot be used except <br>in INTO or VALUES clause | A group data item has been used as parameter in a WHERE clause in ESQL. Only elementary data items are allowed among the criteria of a WHERE clause. Consider to redefine the group data item with an elementary item and use the redefining item in the WHERE clause. |
| Identifier expected, found | An unexpected token has been found in place of an expected identifier. |
| Illegal condition | The specific condition cannot be resolved. <br><br>This error can be returned either as a severe error or as a non-blocking error. <br><br>A possible situation in which this error appears as severe error is when the program contains "IF data-item THEN" or "IF NOT data-item THEN", but data-item is not a condition (its level number is not 88). <br><br>A possible situation in which this error appears as non-blocking error is when the program contains "IF data-itemX = data-item9v9 THEN" having data-itemX with picture X(3) and data-item9v9 with picture 9v9. |
| Illegal picture | The picture of an elementary data item is invalid. |
| Illegal receiver from source type | A MOVE statement is invalid for the Compiler because the source-item and the dest-item are incompatible.<br>This error is also returned when you set an 88 level item to a value different than 'true' and 'false'. |
| Incompatible options | Two or more of the specified Compiler options cannot be used together, for example: -dci -dcm. |
| Incompatible options: -pt0/-pt2 used for OO programs | The options -pt0 and -pt2 cannot be used to compile object oriented programs. |
| Incomplete copy statement | This error is returned when the COPY statement and the name of the copybook are not in the same row. |
| Incomplete replace statement | This error is returned when the REPLACE statement and its parameters are not in the same row. |
| Incorrect string literal | A text string has not been correctly enclosed between quotes. |
| Interface-Id differs from source name | The name specified in INTERFACE-ID paragraph does not match with the name of the disk source file. |
| Internal error EIS: Missing License | A valid isCOBOL EIS license is required in order to compile<br><br>• a program that uses the HTTPHandler class,<br>• a program that uses the HTTPClient class,<br>• a program that includes CGI syntax (e.g. EXEC HTML),<br>• a program compiled with -wd2 option |
| Invalid ALL phrase, ALL removed | This error is returned when the Compiler finds the ALL keyword followed by a numeric literal. In this case the ALL keyword is ignored. For example, IF item-1 = ALL 1 is considered as IF item-1 = 1. |
| Invalid arguments | This error is returned when a method is invoked with the wrong number or the wrong type of parameters. (Object Oriented Programming) |
| Invalid clause | This error is returned when a clause is used out of context.<br>A possible condition for this error is when you assign the EXTERNAL clause to a thread local data item. |
| Invalid concatenation | This error is returned when the & operator is used to concatenate resource strings (e.g. r"string"), numeric literals or data items. The concatenation is allowed only between string literals. Hex notation (e.g. x"41") is allowed.<br>When a numeric literal or a data item is included in the concatenation, this error is severe and prevents the compilation to complete.<br>When a resource string is included in the concatenation, this error is not severe; the compilation proceeds treating the resource string as a standard string (E.g. "A" & r"abc" will produce "Aabc"). |
| Invalid currency sign | The following characters can’t be used as CURRENCY SIGN: '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'G', 'N', 'P', 'R', 'S', 'U', 'V', 'X', 'Z', ' ', '*', '+', '-', ',', '.', ':', ';', '/', '\'', '(', ')', '\"', '='. |
| Invalid file name | The name of the source file does not follow Java rules. For example, this error is returned when the source file name begins with a number or if it contains spaces. |
| Invalid level number | The level number of a group item is not valid. A potential situation in which this error appears is the following SCREEN SECTION entry:<br>01 screen1.     <br>03 entry-field, line 2, col 2.           <br>05 push-button, line 5, col 3.<br>A control cannot be child of another control. |
| Invalid open mode | The open mode has not been specified or is not supported by the specific file type. |
| Invalid Program/Class Id | The PROGRAM-ID or CLASS-ID paragraphs are missing or contain typos. |
| Invalid SQL directive: <type\> type is invalid | The SQL type specified in the *iscobol.compiler.esql.procedure* property or in the HOSTVAR directive doesn’t match any known SQL type. Refer to the [java.sqlTypes javadoc](https://docs.oracle.com/javase/8/docs/api/java/sql/Types.html) for the list of supported types. |
| Invalid SQL directive: error parameters < 2 | The number of parameters in the *iscobol.compiler.esql.procedure* property or in the HOSTVAR directive is not sufficient. Ensure to specify all the mandatory parameters. |
| Invalid value | The VALUE clause of a data-item contains a value that is incompatible with the item picture. |
| Line truncated | A statement exceeds the AREA B limit in the current source format (e.g. it exceeds column 72 in a FIXED source) therefore it’s truncated and may not work at runtime. |
| Malformed option: compiler.regexp=# | The regular expression specified by [iscobol.compiler.regexp *](../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#compiler_regexp) property is not valid. The number of strings in the value can’t be odd. |
| Maybe a directive | The word includes syntax usually adopted for compiler directives, but it doesn’t match with any known compiler directive. |
| Method not found | The specific method is not found in the invoked class. Consider that the method name is case sensitive (Object Oriented Programming). |
| Missing dot | A paragraph is not correctly closed. This error may be caused by other errors encountered inside the paragraph code. |
| Missing EFD/EFC key name | A field of a key referenced in FILE-CONTROL is hidden in the FD because of an EFD directive used. The most common case is using EFD USE GROUP on the parent item of the key segment. |
| Missing FD for file | A file has been defined in FILE-CONTROL but its description is not available in FILE SECTION. |
| Missing license: <br>The license key is missing, invalid or has expired! <br>Check your properties files <br>or contact Veryant or your distributor for technical support. | The license for the Compiler is either expired or missing. |
| Missing picture clause | The picture of an elementary data item is missing. |
| Missing primary key | The RECORD KEY clause is missing in the Indexed file definition in FILE-CONTROL. |
| Missing Procedure Division | The program lacks of the PROCEDURE DIVISION. |
| Missing receiver | This error is caused by an incomplete MOVE statement., |
| Missing record for file | FILE SECTION contains an FD entry without any record definition. |
| Missing relative key | The RELATIVE KEY clause is missing in the Relative file definition in FILE-CONTROL. |
| Missing resource file | The file referred to in a COPY RESOURCE statement was not found and therefore was not included in the compiled object. |
| Missing SELECT for file | The FD of a file has been defined in FILE SECTION but the file description is not available in FILE-CONTROL. |
| Must be one-dimensional table | When the FROM, USING or VALUE phrases of a Screen Section item are associated to an Occurs data-item, the Occurs data-item must be one-dimensional. |
| Not a sort file | A SORT statement has been issued on a file that is not a sort file. |
| OCCURS DEPENDING must be last in group | If placed inside a group item, an OCCURS DEPENDING item must be the last in the group. |
| Only a host variable or <br>a literal is allowed here | Returned for a query like this: <br><br>exec sql  <br>update tbl1 set c1 = c1 + 1 where current of cur2<br>end-exec. <br><br>When you have CURRENT OF in the WHERE clause, then you can only use host variables or literals in the UPDATE statement. The following UPDATE would compile with no errors: <br><br>exec sql  <br>update tbl1 set c1 = 3 where current of cur2<br>end-exec. |
| Only one-dimensional table allowed here | Only one dimensional OCCURS items can be used in GUI controls properties with the clauses TABLE and MULTIPLE. |
| Option has no effect | This message is returned when a compiler option will not produce the desired effect in the compiled program. <br><br>A possible condition for this message is when the change of a reserved word issued through [-rc=word,customword...](../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#rc_word_customword) and [-rm=newmeaning,word...](../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#rm_newmeaning_word) options cannot be made on the source code. <br><br>Another possible condition is when the [-d64](../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#d64) option is not used in conjunction with the [-cp](../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#cp) option. |
| Paragraph name found in Area B | This warning is returned when the name of a paragraph or a section is written in the Area B of the current source format. It’s never returned with the Free source format, as there are no areas in it. |
| Procedure name not found | The paragraph or section referenced at this line can’t be found in the source.<br>This error might also be returned when compiling CLASS-ID programs if you reference a paragraph defined out of the current scope. A typical example is having a global Screen Section defined under FACTORY or OBJECT whose embedded procedures point to paragraphs defined inside the CLASS-ID methods. |
| Program-Id differs from source name | The name specified in PROGRAM-ID paragraph does not match with the name of the disk source file. |
| Receiver is read only | The destination data item can’t be updated by the current statement. It happens for example when trying to alter the CAPACITY item of a dynamic capacity table using a MOVE statement, while the SET statement should be used instead. |
| RECORD KEY not in FD | The field associated to a indexed file record key is not found the record definition, it’s found somewhere else in DATA DIVISION instead. This invalidates the file record key. |
| RECORD KEY outside smallest record | The offset of one or more of the record key segments is greater than the minimum record size of the file. |
| Record len is not equal than declared size | The record length specified in RECORD clause of a file FD does not match with the length of the level 01 item in that FD. |
| REDEFINES too long | The redefining item is larger in size than the redefined item. |
| Reference modifier out of range | This error is returned when a data-item is referenced over its size by constant offset and length. For example consider having 77 WRK-ITEM1 PIC X(10) in DATA DIVISION and performing the following check in PROCEDURE DIVISION: IF WRK-ITEM1(12:1) = SPACES... |
| RETURNING not supported by every database. <br><statement\>  | This warning is returned when the RETURNING clause is found in an embedded SQL block. <statement\> can be DELETE, INSERT or UPDATE.<br>The compiler advises that we could have errors at runtime if the destination database doesn’t support this feature. For example, it’s known that PostgreSQL supports it, but Microsoft SQL Server and MySQL don’t. |
| Screen name not allowed in this context | Screen names can be used only in DISPLAY, ACCEPT, MODIFY and INQUIRE statements. They cannot be used in other statements. For example, they cannot be tested using IF or EVALUATE, they cannot be copied using MOVE, etcetera. |
| Servicebridge not generated due to <br>OCCURS DYNAMIC without CAPACITY | This warning is returned when you activated the ServiceBridge feature in the Compiler and the compiled program includes dynamic capacity tables in the Linkage Section. All the dynamic capacity tables in the Linkage Section of the program must specify the CAPACITY clause, otherwise the service bridge program is not generated. |
| Should be elementary:  | In a DECLARE statement and in short-form method declaration you can use elementary typedefs.<br>This error is raised if you use a complex typedef, i.e. a typedef that includes a group data item. |
| SMAP information not included | This warning is returned when you compile the program with *-jj* option and without either *-jc* option or *-jo=-g:none*. This kind of compilation generates a java source that you c an compile later using the Java compiler (javac). With this approach the SMAP information is not included in the class, so the class will not be suitable for Code Coverage and Unit Test. |
| Subscript required | A data item that is part of an OCCURS has been referenced without specifying the index between parenthesis or, vice versa, a data item that is not part of an OCCURS has been referenced using an index. <br><br>When compiling with either the [-cm](../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#cm) option or the [-cv](../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#cv) option it’s possible to reference a data item with the OCCURS clause without specifying the index. In this case, the first occurrence is considered and the non-blocking error [299](./Compiler-Errors#299) is returned. |
| Symbol not in linkage | One of the items listed in the USING clause of PROCEDURE DIVISION is not defined in LINKAGE SECTION. |
| Syntax error | This error is returned whenever an unrecognized token is found and there isn't a specific error message for it. |
| The ALTER statement encourages the use of <br>unstructured programming practices | This message has different severities depending on the kind of source file where it’s generated.<br>When compiling a source file with PROGRAM-ID, the message is just an informational that advises you’re using bad programming techniques.<br>When compiling a source file with CLASS-ID, the message is a severe error that prevents the source from being compiled, as the ALTER statement is not supported in object oriented programming. |
| The method signature might be ambiguous | This warning is returned when you invoke a method by passing parameters that are compatible with more than one of the method signatures. It’s also returned if you invoke a method of a generic class. |
| Too many parameters the bean code can not be generated! <br><ServiceBridge bean suffix\><nameProgram\>; | This warning is returned when the program’s Linkage Section includes more than 255 data items and iscobol.compiler.servicebridge.bean is set in the configuration. The bean can’t be generated because Java doesn’t allow more than 255 parameters in a method. |
| Type clash | In object oriented programming, this error indicates that the object is not suitable for the statement in which it has been referenced.<br>For example, the UNSTRING statement doesn’t let you split a java.lang.String object, so a statement like<br>UNSTRING obj-string DELIMITED BY "x" INTO dest-var<br>where obj-string is OBJECT-REFERENCE "java.lang.String", generates a Type clash error. <br><br>This error could be also a false positive when an object oriented statement is used after a statement that allows more parameters and was not closed, for example:<br>MOVE 123 to dest-var<br>JSystem:>setProperty("id", "a100")<br>Since the MOVE statement allows more destination items, the next JSystem invocation is incorrectly considered as a second destination of the MOVE statement and generates a Type clash error.<br>You can resolve this false positive in multiple ways, e.g.<br>• close MOVE the statement with an END clause:<br>MOVE 123 to dest-var END-MOVE<br>JSystem:>setProperty("id", "a100")<br>• close MOVE the statement with a double semicolon (equivalent of adding a CONTINUE statement between MOVE and JSystem):<br>MOVE 123 to dest-var;;<br>JSystem:>setProperty("id", "a100")<br>• use an explicit INVOKE statement with JSystem:<br>MOVE 123 to dest-var<br>INVOKE JSystem:>setProperty("id", "a100") |
| Unbalanced parenthesis | The number of "(" into a statement does not match the number of ")".<br>This error is severe unless the [-cv](../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#cv) option is used. |
| Undeclared cursor | An ESQL statement is trying to operate on a cursor that has not been defined. Involved ESQL statements are: [OPEN](../Language-Reference/Embedded-SQL-Statements/OPEN), [FETCH](../Language-Reference/Embedded-SQL-Statements/FETCH) and [CLOSE](../Language-Reference/Embedded-SQL-Statements/CLOSE). |
| Undefined constant | The program tests a Compiler constant that has not been defined. See [Compiler Directives](../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Directives/Compiler-Directives) for details about Compiler constants definition and testing. |
| Undefined data item | The specific data-item is not defined in DATA DIVISION. |
| Undefined data item SQLCA | The PROCEDURE DIVISION contains ESQL statements, but the copybook SQLCA is missing in the WORKING-STORAGE. This copybook is mandatory for programs that take advantage of ESQL statements. |
| Unexpected end of program | The last statement in PROCEDURE DIVISION has not been properly closed by dot or END-*statement* . |
| Unexpected token | The specific token was not expected by the Compiler in that part of the source. |
| Unknown token | The specific token is not recognized by the Compiler. |
| Unmatched END-*statement* | An END-*statement* has been found, but there is no matching statement above of it. |
| Unsupported compiler directive | The specific Compiler directive is not supported by isCOBOL. See [Compiler Directives](../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Directives/Compiler-Directives) for the list of all supported Compiler directives. |
| Unsupported feature | The specific syntax is recognized as unsupported feature. A typical example is the STATIC-LIST style for COMBO-BOX control. |
| Unsupported option | The specific option is not recognized by the Compiler. Use -help option to make the Compiler print a list of all supported options. |
| Usage should be DISPLAY | A data-item that is not USAGE DISPLAY has been used among the source items of a STRING statement. The runtime will handle the case by considering the memory content of the data-item. This error is just informational. |
| User defined error | Error traced due to >>ERROR directive. See [Compiler Directives](../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Directives/Compiler-Directives) for details about the >>ERROR directive. |
| VALUE size error | The length of the value specified in the VALUE clause of a data-item is greater than the size of the picture. |
| Variable has zero length | This error is usually returned for variables without pictures that are parent of 88 level items, for example:<br>01  flag.     <br>88  flag-true value "T" false "F". |
| Variable not used | This warning message is returned for each useless data-item found in the source if -wu compiler option is used. |
| WHEN EFD/EFC name not found # | An invalid field name has been used in a WHEN condition. The compiler is not able to find the named field among the fields of the FD where the condition was used. |
| WHEN OTHER not last | The WHEN OTHER condition should be the last one into an EVALUATE statement. |
| With decimal point comma, <br>comma can not be separator between two digits: #, | This warning is returned when a comma is used as separator of multiple values and the DECIMAL-POINT IS COMMA clause is specified in the Special Names paragraph.<br>For example the following item would produce the warning:<br>88 CONDITION-1 VALUE IS 1,2. |
| Wrong compiler directive | A Compiler directive has not been used with the proper syntax. See [Compiler Directives](../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Directives/Compiler-Directives) for details about Compiler directives. |
| Wrong copy statement | A COPY statement is either incomplete or not correctly terminated by dot. |
| Wrong replace statement | A REPLACE statement is either incomplete or not correctly terminated by dot. |

If the parsing of the cobol code completes correctly, the isCOBOL Compiler invokes the Java Compiler in order to generate the final class file.

## Common Java compiler errors

During this second phase of the compilation process, the following error messages may show up.

| | |
| --- | --- |
| java.lang.OutOfMemoryError: Java heap space | This error means that the JVM ran out of memory while compiling the source. <br>To avoid it, you must increase the memory limit by adding -Xmx256m Java option. <br>256 means 256 MB and it specifies the maximum amount of RAM that the JVM can allocate. If it’s not enough, try with higher values. |
| code too large | This error means that, due to huge paragraphs in the source code, a java method over 64KB of bytecode has been generated and cannot be compiled. <br>To avoid this error try using -sns=200 Compiler option. <br>This setting will break huge paragraphs in smaller paragraphs of 200 lines in size. <br>If the problem still exists, try with lower values. <br>If -sns does not resolve the problem, a manual intervention on the source may be necessary.<br>Before proceeding with the manual intervention, try using [-big](../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#big) in conjunction with -sns. |
| Error writing file: too many constants | This error means that too many Java constants were created and the program cannot be compiled. <br>This error is usually returned when compiling very huge source files. <br>To avoid it, add -big option to the Compiler options. <br>Use -big only for programs that returns this error. <br>Other programs may experience performance slowdown if compiled with -big option. |
| The system is out of resources.<br>Consult the following stack trace for details.<br>java.lang.StackOverflowError | This error means that the thread stack area in the Java compiler was overloaded. To avoid it, increase the thread stack size using the Xss Java option. e.g.<br>iscc -J-Xss1m myProg.cbl <br><br>If you’re compiling with the IDE, add *-J-Xss1m* to the value of the *-jo* option in the project or program’s compiler options. |
| | |

## Error numbers list

The below tables list the error numbers followed by their description.

### Severe Errors

| | |
| --- | --- |
| 1 | Incorrect string literal |
| 2 | Unknown token |
| 3 | Cannot open file |
| 4 | Unexpected compiler directive |
| 5 | Unsupported compiler directive |
| 6 | Incomplete copy statement |
| 7 | Incomplete replace statement |
| 8 | Wrong copy statement |
| 9 | Wrong replace statement |
| 10 | File not found |
| 11 | Syntax error |
| 12 | Unexpected end of program |
| 13 | Missing dot |
| 14 | Missing SECTION keyword |
| 15 | Unexpected token |
| 16 | Invalid currency sign |
| 17 | Identifier expected, found |
| 18 | Missing keyword |
| 19 | Unsupported feature |
| 20 | Malformed variable name |
| 21 | String value expected found |
| 22 | Integer value expected found |
| 23 | Numeric value expected found |
| 24 | Data name expected found |
| 25 | Missing clause |
| 26 | Undefined file |
| 27 | Invalid level number |
| 28 | Missing picture clause |
| 29 | Invalid clause |
| 30 | Invalid value |
| 31 | Expected/found token mismatch |
| 32 | Illegal picture |
| 33 | Missing |
| 34 | Picture too big |
| 35 | Undefined data item |
| 36 | Ambiguous identifier |
| 37 | Must be a GROUP item |
| 38 | Invalid file name |
| 39 | Cannot open file |
| 40 | Cannot write file |
| 41 | Subscript required |
| 43 | Illegal condition |
| 44 | Unbalanced parenthesis |
| 45 | Unmatched |
| 46 | Integer variable expected |
| 47 | Procedure name required |
| 48 | Clause clash |
| 49 | Numeric expression expected |
| 50 | Invalid THRU clause |
| 51 | Missing FD for file |
| 52 | Picture should be XX |
| 53 | Missing SELECT for file |
| 54 | Invalid open mode |
| 55 | Subscript not allowed here |
| 56 | Invalid key |
| 57 | Missing relative key |
| 58 | Missing primary key |
| 59 | Illegal receiver from source type |
| 60 | Invalid ALL USAGE |
| 61 | Internal error |
| 62 | Object wrong type for subject |
| 63 | Class already specified |
| 64 | a USE phrase cannot be here |
| 65 | duplicate USE phrase |
| 66 | String variable expected |
| 67 | Duplicate procedure name |
| 68 | Usage must be DISPLAY |
| 69 | Must be size 1 in this context |
| 70 | Illegal size |
| 71 | Unknown OBJECT value |
| 72 | Positive integer required |
| 73 | Missing Procedure Division |
| 74 | Class not found |
| 75 | Type clash |
| 76 | Invalid constructor |
| 77 | Method not found |
| 78 | Exception block required |
| 79 | Invalid return type |
| 80 | Invalid argument(s) |
| 81 | Object reference variable expected |
| 82 | Invalid class name |
| 83 | Invalid method name |
| 84 | Cannot invoke an instance method from a factory method |
| 85 | EXIT PERFORM outside of PERFORM |
| 86 | Invalid Program/Class Id |
| 88 | SUPER not allowed here |
| 89 | Invoke with SUPER must be the first statement |
| 90 | 'S' ignored |
| 91 | Duplicate statement |
| 92 | Repeated or conflicting option |
| 93 | Undeclared cursor |
| 94 | Undeclared prepare |
| 95 | Unsupported fetch |
| 96 | Handle variable expected |
| 97 | String literal expected, found |
| 98 | Statement not allowed here |
| 100 | Wrong compiler directive |
| 101 | Missing record for file |
| 102 | Wrong SELECT for sort file |
| 103 | Invalid operation on sort file |
| 104 | Not a sort file |
| 105 | Procedure name not found |
| 109 | Numeric variable required, found |
| 110 | Statement not allowed on pointer |
| 111 | Undefined constant |
| 112 | User defined error |
| 113 | Function not found |
| 114 | VALUE in REDEFINES ignored |
| 115 | Clause not allowed here |
| 116 | Incompatible options |
| 117 | Missing linage clause |
| 118 | WHEN OTHER not last |
| 119 | $EFD directive required |
| 120 | $EFD directive in wrong format |
| 121 | Only levels 01 & 77 allowed in this context |
| 122 | Illegal expression |
| 123 | Conflicting phrases |
| 124 | Invalid resource name |
| 125 | Illegal DEPENDING ON |
| 127 | Only 2 level of OCCURS allowed. |
| 128 | USAGE conflict |
| 129 | Different number of SYMBOLIC names and values |
| 130 | Missing method name |
| 131 | Exception already caught |
| 132 | Exception not raised |
| 133 | EXCEPTION not last |
| 135 | Procedure name not unique |
| 136 | ESQL statement not allowed here |
| 137 | ESQL cursor already declared |
| 138 | Dynamic-capacity tables and standards tables cannot be mixed |
| 139 | Symbol not in linkage |
| 140 | Invalid XML structure |
| 141 | Numeric literal too large |
| 143 | Native character specified twice |
| 144 | Invalid name |
| 145 | Duplicate method signature |
| 146 | Unsupported option |
| 147 | Option(s) requires WORKING-STORAGE SECTION. on a single line |
| 148 | Behavior differs from ACU's |
| 149 | 'void' type not allowed here |
| 153 | File in multiple areas |
| 155 | Duplicate |
| 156 | Missing receiver |
| 157 | Constant already defined |
| 158 | Invalid concatenation |
| 159 | Option has no effect |
| 160 | SIZE or LINES phrase required |
| 161 | Attempting to override a method that doesn’t exist |
| 162 | Attempting to use incompatible return type |
| 163 | Only one-dimensional table allowed here |
| 164 | ESQL invalid STRLITERAL |
| 165 | Screen name not allowed in this context |
| 166 | Stack overflow |
| 168 | RECORD KEY not in FD |
| 170 | VALUE size error |
| 174 | Incomplete statement |
| 175 | Duplicate primary key |
| 176 | Duplicate attribute |
| 177 | Invalid OCCURS KEY |
| 178 | RECORD KEY outside smallest record |
| 180 | Variable not allowed here |
| 181 | Operand not declared |
| 182 | Not a detail group |
| 183 | Invalid line |
| 184 | Invalid column |
| 185 | Not a CONTROL |
| 186 | Not with CONTROL FOOTING group |
| 187 | Missing clause in RD |
| 188 | Period missing. Period Assumed. |
| 189 | Wrong subscript(s) |
| 190 | Undeclared database |
| 191 | Constant already defined with different value |
| 194 | The ALTER statement encourages the use of unstructured programming practices. |
| 195 | The ALTER statement is only supported with the -aa compiler option. |
| 196 | Invalid host variable |
| 197 | ESQL invalid end statement |
| 198 | Source literal not numeric |
| 199 | Illegal redefines. |
| 201 | Reference modification not allowed here |
| 202 | Data item too long |
| 203 | Malformed option |
| 204 | Too many options |
| 205 | Not allowed in a nested program |
| 206 | Not allowed in an unnamed method |
| 208 | Invalid regular-expression pattern |
| 209 | Not allowed in class |
| 212 | Assumed to be a paragraph without final dot |
| 213 | Condition name not allowed here |
| 214 | Not an interface |
| 215 | Must be public |
| 216 | Interface method missing |
| 218 | Numeric literal treated as alphanumeric |
| 219 | Invalid ALL phrase, ALL removed |
| 225 | Duplicate definition |
| 226 | $ELK directive in wrong format |
| 228 | Only a host variable or a literal is allowed here |
| 230 | $ELK directive has wrong value |
| 235 | SYMBOLIC value must be between 1 and 256 |
| 237 | SET PROPERTY must have a single USING parameter |
| 238 | SET PROPERTY must not have the RETURNING phrase |
| 239 | GET PROPERTY must not have the USING phrase |
| 240 | GET PROPERTY must have the RETURNING phrase |
| 241 | Illegal sending item |
| 243 | Invalid SQL directive |
| 244 | $SQL directive in wrong format |
| 245 | XML file is invalid and easydb can not be activated! |
| 246 | Syntax not allowed in interface |
| 247 | STATIC clause required |
| 248 | Procedural statements not allowed in interface, use the DEFAULT clause in the METHOD-ID |
| 249 | Data items not allowed in interface |
| 255 | Dynamic table expected |
| 256 | ANY LENGTH variable expected |
| 259 | Source and destination of MOVE POSITIONAL DELIMITED DEFAULT must have the same structure |
| 261 | DEPENDING ON subsidiary to OCCURS only allowed under -cod1 |
| 273 | Group items cannot be used except in INTO or VALUES clause |
| 274 | Invalid lambda expression |
| 275 | Ambiguous lambda method name |
| 276 | Invalid DB2 SQLDA |
| 279 | Syntax not allowed in object reference |
| 284 | Picture should be NUMERIC SIGNED |
| 293 | THREAD-LOCAL ignored |
| 294 | THREAD-LOCAL ignored on external data item |
| 295 | Custom Preprocessor  |
| 296 | Data item length exceeds 2 GB |
| 298 | Abstract class cannot be instantiated |
| 301 | VARARGS must be the last parameter |
| 305 | ANY LENGTH variable is not allowed |
| 307 | Invalid configuration property value |
| 308 | 'BY VALUE' clause required |
| 310 | Invalid binary digit |
| 311 | Invalid hex digit |
| 312 | Invalid octal digit |
| 315 | ALTER paragraph must contain only GO TO without DEPENDING |
| 316 | Invalid XML Schema |
| 319 | Receiver is read only |
| 320 | Should be elementary |
| | |

### Errors, Informationals and Warnings

The following error conditions don’t make the compilation fail. They’re just warnings. You can change their severity or block them from being returned by setting [iscobol.compiler.messagelevel.(error-number)=(action)](../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#compiler_messagelevel) in the Compiler configuration.

| | |
| --- | --- |
| 42 | Program id differs from source name |
| 87 | REDEFINES too long |
| 99 | Record len is not equal to declared size |
| 106 | Directive ignored |
| 107 | Parameters differs from ACU's |
| 108 | Variable not used |
| 126 | OCCURS DEPENDING must be last in group |
| 134 | OPEN INPUT with LOCK may not work! |
| 142 | Operation not permitted on |
| 150 | Static context expression evaluated only once! |
| 151 | National with -b option may not work! |
| 152 | Variable has zero length |
| 154 | End statement required |
| 158 | Invalid concatenation |
| 167 | Redefines not allowed as key |
| 169 | LOCK not supported |
| 171 | variable record len not supported for relative file |
| 173 | Reference modifier out of range |
| 179 | WD2 Unsupported |
| 192 | Directive not closed |
| 193 | With decimal point comma, comma can not be separator between two digits |
| 194 | The ALTER statement encourages the use of unstructured programming practices. |
| 200 | Maybe a directive |
| 207 | Duplicate EFD/EFC name |
| 210 | Duplicate key definition |
| 211 | Variable(s) declared in LINKAGE isn't in the USING clause |
| 217 | WHEN EFD/EFC name not found |
| 220 | Possible divide by ZERO without ON SIZE ERROR |
| 221 | duplicated $EFD directives not allowed, only the last is considered. |
| 222 | The method signature might be ambiguous |
| 223 | Nested COPY ... REPLACING may cause unexpected results |
| 224 | This variable contains a KEY that will be lost in iss file because in REDEFINE |
| 227 | ELK Directive ignored |
| 229 | Missing EFD/EFC key name |
| 231 | EFC field occurs greater then 2000 are not supported |
| 232 | EIS Unsupported |
| 233 | Illegal MOVE CONVERT size |
| 234 | MOVE from alphanum to numeric |
| 236 | VALUE has already been specified |
| 242 | Incorrect optional parameters for OUTDD, defaults will be used |
| 250 | Too many parameters the bean code can not be generated! |
| 251 | Line truncated |
| 252 | Ignored color name |
| 253 | Paragraph name found in Area B |
| 254 | Procedure name same as data name |
| 257 | Dynamic items will be ignored |
| 258 | Gradient settings will be ignored |
| 260 | $EFD date string shorter than field |
| 262 | Data item without VALUE involved in MOVE POSITIONAL DELIMITED DEFAULT |
| 263 | OCCURS DYNAMIC data item without INITIALIZED involved in MOVE POSITIONAL DELIMITED DEFAULT |
| 264 | Subscript out of bounds |
| 265 | Sql indicator not declared |
| 266 | SELECTION-MODE will be ignored with TABLE-VIEW style |
| 267 | Error no Java compiler, ensure you're running with a JDK |
| 268 | Missing out directory |
| 269 | SMAP information not included |
| 270 | Since OCCURS DYNAMIC the bean code will be generated with only one 'run' method! |
| 271 | Deprecated feature |
| 272 | servicebridge not generated due to OCCURS DYNAMIC without CAPACITY |
| 277 | NO-BOX style will be ignored in TAB-CONTROL allow-container/accordion |
| 278 | Missing CLSID |
| 280 | Background Bitmap settings will be ignored |
| 281 | Class-Id differs from source name |
| 282 | Interface-Id differs from source name |
| 283 | open IO not supported |
| 285 | Missing resource file |
| 286 | servicebridge bean not generated because more than 48 levels used in linkage |
| 287 | Continuation character expected, end of literal assumed |
| 288 | Usage should be DISPLAY |
| 289 | Wrong SELECT for xml file |
| 290 | SD expected for sort file |
| 291 | XD expected for xml file |
| 292 | 'maximize' feature not available for FLOATING window RESIZABLE |
| 297 | Illegal condition |
| 299 <span id="299"></span> | Subscript required, first occurrence assumed |
| 300 | Classname assumed to be <class\> [] |
| 302 | REMAINDER without GIVING |
| 303 | DRAG-MODE ignored for TREE-VIEW with TREE-TABLE property |
| 304 | DRAG-MODE ignored for this GUI component |
| 306 | $EFD invalid name |
| 309 | Illegal character found in column 7. Blank assumed |
| 313 | Sign in VALUE clause ignored |
| 314 | VALUE too long for data item or has too many decimal positions |
| 317 | Alphanumeric literal has zero length, space assumed |
| 318 | Unexpected token(s) in directive |
| 321 | The comment-entry following "DATE-WRITTEN" was found in area "A". The comment-entry must be written in area "B" on one or more lines |
| 322 | RETURNING not supported by every database |
| 323 | Currency symbol defined in program, '-sdcs' ignored |
| 327 | STOP statement will suspend the program execution when running without Debugger |
| | |
