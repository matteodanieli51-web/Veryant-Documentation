### Compiler Options

The -help option displays all available options:

#### Default Options

The following options are used by default. You can disable them by specifying them with the “-no” prefix. For example, by adding “-no-b” to the Compiler command line, the -b option will not be used.

| | |
| :--- | :--- |
| -b | Treat characters as bytes in STRING, UNSTRING, and INSPECT statements. By default isCOBOL internally converts strings into Unicode. The -b option makes isCOBOL work directly on the string without any conversion.The option takes effect on standard alphanumeric data items, while national data items are not affected. |
| -cghv | Use group host variables in ESQL statements. This option is useful when the program contains a group variable that is an exact match with the list of fields used in the query. In this case the user is not forced to list all the subordinate items in the ESQL statement, but can use only the name of the group variable. |
| -g | Include SMAP information. When an Exception occurs during the runtime session, the Exception stack will contain COBOL source code references, so it’s easier for the programmer to identify the statement that caused the Exception.This feature doesn’t work if program is compiled with the javac option "-g:none".This feature doesn’t work if iscobol.exception.java is set to true in the configuration.This feature follows the Java indications about non-Java languages remapping. Third party tools (e.g. some profilers) that are not aware of these indications might show java source locations in the stacks, even though -g has been used. |
| -oe | Optimize EVALUATE with string literals. When a EVALUATE statement tests string literals, isCOBOL uses the Java SWITCH statement instead of the EVALUATE implementation. |
| | |

#### Common Options

These options allow you to pass a configuration file and enable the compilation in debug mode.

| | |
| --- | --- |
| -c=*config_file* <span id="c"></span> | Use the configuration file identified by *config_file*. See Configuration for the list of the configuration properties that are applicable to the Compiler. The properties found in the configuration file are appended to the existing configuration. |
| -conly=*config_file* <span id="conly"></span> | Use only the configuration file identified by *config_file*. See Configuration for the list of the configuration properties that are applicable to the Compiler. |
| -d <span id="d"></span> | Include basic debug information.Not all the debugger features are enabled when this option is used.You might consider using -dx to have all the debugger features enabled, though -dx produces bigger class files. |
| -dx <span id="dx"></span> | Enable extended debugger functions. This option implies -d.In addition to the standard debug features, all the variables in the class are generated, including those not used in the program and the literal constants that are generated during the execution and not as static fields in the generated class. When a program is compiled with -dx, the Debugger is able to query and set all the items of the program Data Division including the items that are not used in the Procedure Division and the IDE allows the source code to be changed while debugging. With -dx the Debugger is able to skip statements (except DECLARE statements) through the jump command. |
| | |

#### Compatibility Options

These options enable behaviors that are compatible with other COBOLs.

| | |
| --- | --- |
| -ca <span id="ca"></span> | Acucobol compatibility flag: <br>• Use of the ALLOWING clause in OPEN statements is supported.<br>• Different INSPECT TALLYING behavior (see Language Reference for details).<br>• STRING dest-item can be JUSTIFIED<br>• UNSTRING delimiter can be a numeric USAGE DISPLAY item• NEXT SENTENCE statement<br>• Different handling of END-ACCEPT<br>• Implied -defCHAR during EDBI routines generation |
| -caec | WITH CONVERSION is assumed for MOVEs from alphanumeric items to edited items. |
| -cax <span id="cax"></span> | Specifies the default file assignment as external. |
| -ccbas | Count bytes instead of characters in FIXED/ANSI source files.This option is useful during the compilation of source files that include double-byte characters. Without this option, text written after column 72 may be considered as written before column 72 due to the double-byte characters in the source line. |
| -ccmf | Pass literals to the called program with Micro Focus rules. BY REFERENCE: A numeric literal is passed as an integer 32-bit comp-x item if it is not negative or as an integer 32-bit comp (binary) item if it is negative, even if the literal is not an integer. A decimal point in the numeric literal is ignored. An alphanumeric literal is passed in the same way as when the BY CONTENT clause is used.BY VALUE: If a numeric literal is specified, then the data description of the item is equivalent to a signed numeric item USAGE BINARY.BY CONTENT: if a literal is specified, then the implied data description of the item is equivalent to an alphanumeric data item with the same size as the literal and with its contents set to the value of the literal. <br>**Note** - this option affects also the calls to library routines. |
| -cdlz | Shows USAGE DISPLAY memory content. This option affects the internal definition of variables. If external variables are used, then all programs have to be compiled with this option, otherwise a mismatch error is received. This option shouldn’t be used with programs that display a graphical user interface.Note that this option affects also the debugging of the program, as the Debugger will show memory content of USAGE DISPLAY items instead of showing their value. |
| -cfl | Compatibility setting for file SEQUENTIAL is LINE SEQUENTIAL. When this is not set, files with ORGANIZATION IS SEQUENTIAL are treated as BINARY SEQUENTIAL. |
| -cfp36 | Intermediate results are always calculated to 36 digits. <br>isCOBOL arithmetic uses 3 types of number:<br>(A) fixed point numbers with number of digits less or equal to 18;<br>(B) fixed point numbers with number of digits greater than 18;<br>(C) floating point numbers; <br>Without this option, when an arithmetic operation occurs, the most wide type is used to perform the operation, i.e: <br>(A) +-*/ (A) -> (A)<br>(A) +-*/ (B) -> (B)<br>(B) +-*/ (B) -> (B)<br>(A) +-*/ (C) -> (C)<br>(B) +-*/ (C) -> (C)<br>(C) +-*/ (C) -> (C) <br>The option causes that the two operation whose result can be wider than the operands, i.e. division and multiplication, will be performed using the (B) type, i.e.: <br>(A) */ (A) -> (B)<br>(A) \*/ (B) -> (B)<br>(B) \*/ (B) -> (B)<br>(A) \*/ (C) -> (C)<br>(B) \*/ (C) -> (C)<br>(C) \*/ (C) -> (C) |
| -cko <span id="cko"></span> | List keys in offset order. Without this option keys are listed following the order they’re declared in the FILE-CONTROL paragraph. It changes the order in which keys are registered in the physical file, that can be verified with file management utilities such as jutil and ctutil. As a consequence, this option affects XML/ISS dictionaries as well as the I$IO and file interfaces where keys are pointed by ordinal number. |
| -ci | ICOBOL compatibility. <br>• LOCK MODE IS MANUAL WITH LOCK ON MULTIPLE RECORDS is implied unless -cm option is used as well.<br>• alternate keys are considered WITH DUPLICATES by default. |
| -clk0 | Makes parameters to the program remain linked during subsequent calls of the program. All linkage items retain any linkage established during previous invocations unless the calling program provides a parameter or a SET statement is used to change the linkage. |
| -cm <span id="cm"></span> | Micro Focus compatibility flag. It supports the following: <br>• NEXT SENTENCE statement<br>• if LOCK MODE is omitted, opening a file causes it to become EXCLUSIVE, unless the file is opened for INPUT.<br>• duplicated constants definitions<br>• the syntax H”xx” is treated as a number instead of a string<br>• items that are not Usage Display can be used in UNSTRING statements<br>• EQUALS, IS UNEQUAL TO and EXCEEDS operators<br>• STRING dest-item can be JUSTIFIED<br>• UNSTRING dest-item is not required to be USAGE DISPLAY<br>• UNSTRING source-item can be numeric-edited<br>• LENGTH OF is internally represented as COMP-5<br>• b"binaryValue" and o"octalValue" syntax<br>• REWRITE allowed on print files<br>• BEFORE 1 assumed for WRITE without ADVANCING clause on line sequential files<br>• COMP-1 is translated to FLOAT.<br>• COMP-2 is translated to DOUBLE.<br>• OCCURS indexes are not considered EXTERNAL even if they’re declared within an EXTERNAL group item.<br>• ability to omit the index when referencing OCCURS data items (the first occurrence is assumed)<br>• different handling of literals passed in a CALL statement In addition, SORT RETURN and SORT MESSAGE internal variables are created. SORT-MESSAGE is never used while SORT-RETURN is checked before every RELEASE and RETURN statement and if it contains 16 the sort is aborted and the control returns to the instruction following the SORT statement. |
| -cmc | Assume WITH CONVERT in every applicable MOVE |
| -cms | Microsoft COBOL compatibility flag. It supports the following: <br>• ACCEPT (line, column) identifier<br>• DISPLAY (line, column) identifier \| literal \| ERASE<br>• the usage COMPUTATIONAL (COMP) is equivalent to usage DISPLAY<br>• new usage COMPUTATIONAL-0 (COMP-0) that is equivalent to SHORT <br>In addition, LIN and COL internal variables are created. As a consequence the reserved word COL cannot be used. |
| -cndbcs | Use DBCS instead of Unicode in PIC N without USAGE NATIONAL |
| -cnlz | Leading zeros are shown when numeric data items are displayed on a character based screen. |
| -cod0 | Changes OCCURS DEPENDING ON behaviour.This affects data items that appear after a variable-length table in the same record; that is, after an item with an OCCURS DEPENDING clause, but not subordinate to it. With -cod0, these items have fixed addresses, and begin after the end of the space allocated for the table at its maximum length. This is the default behavior if the -cod1 option is not used. |
| -cod1 | Changes OCCURS DEPENDING ON behaviour.This affects data items that appear after a variable-length table in the same record; that is, after an item with an OCCURS DEPENDING clause, but not subordinate to it. With -cod1, these items always immediately follow the table, regardless of its current size; this means their addresses change as the table's size changes. |
| -coe <span id="coe"></span> | Closes all files opened by the program when the program exits. This option has priority over the iscobol.file.close_on_exit (boolean) configuration setting. For example, if a program is compiled with -coe, files will be closed even if it sets iscobol.file.close_on_exit=false with a SET ENVIRONMENT statement before exiting. |
| -cp <span id="cp"></span> | Enable full pointer support. Use this option if you need to call C functions that reuse pointers. Programs compiled with this option can run along with programs compiled without this option in the same COBOL application, but they cannot share parameters each other. Configuration properties can be used to share information between these two different kind of programs. Programs compiled with this option can’t call C functions with CALL CLIENT statements in a thin client environment. When this option is used, the -m1 option and the two experimental options -xms and -xmsn are automatically used as well. You can disable the -m1 option by adding "-no-m1" to the compiler options. Pointers are 4 bytes in size by default. Use -d64 to make pointers 8 bytes in size. |
| -cpanv | Allow ++INCLUDE statements. These statements are internally translated to COPY statements. |
| -cr | RM/COBOL compatibility flag. It supports the following: <br>• DISPLAY WINDOW-CONTROL-BLOCK syntax<br>• DISPLAY statement without LINE clause<br>• ERASE without EOS or EOL clauses moves the cursor at line 1 position 1<br>• PROGRAM-ID special register<br>• NEXT SENTENCE statement<br>• LINE + 1 assumed for DISPLAY where only POS is specified |
| -crlk | RM style lock mode: any READ LOCK on a file that does not have an applicable DECLARATIVE section is automatically translated into READ LOCK WAIT. |
| -crko | List keys in offset order in RM/COBOL compatibility. Without this option keys are listed following the order they’re declared in the FILE-CONTROL paragraph. This option differs from -cko on split keys composed of multiple segments. When using -cko, only the first segment of the key is evaluated for the offset. When using -crko, instead, all the segments of the key are evaluated for the offset. This option changes the order in which keys are registered in the physical file, that can be verified with file management utilities such as jutil and ctutil. As a consequence, this option affects XML/ISS dictionaries as well as the I$IO and file interfaces where keys are pointed by ordinal number. |
| -crv | Compatibility setting for implicit record varying size for files with multiple record definitions with different lengths. When this is not set, files with multiple record definitions with different lengths are treated as fixed length and the maximum record length is used. This option affects files that include two or more record definitions with different length as well as files that include OCCURS DEPENDING, as long as they don’t specify record sizes through the RECORD VARYING IN SIZE clause. When RECORD VARYING IN SIZE is present, the minimum and maximum record sizes are specified by this clause and the length of the record definitions is not considered. |
| - <span id="csdb2"></span> | Treat ESQL in compatibility with IBM DB2. <br>• the SQL-INIT-FLAG data item is implicitly defined<br>• support for SQLDA for dynamic SQL (db2 prep style)<br>• peculiar handling on functions with date and time parameters<br>• support for DECLARE hostvar FOR BIT DATA<br>• support for VALUES INTO statement |
| -csl | Treat the COBOL name in ASSIGN clause as a literal. This allows a mapping to be created for the file name if the iscobol.file.env_naming (boolean) configuration property is set to true. |
| -csora | Treat ESQL in compatibility with Oracle Pro*COBOL. <br>• support for SQLDA for dynamic SQL (procob style)<br>• support for RETURNING clause in DELETE, INSERT and UPDATE<br>• different handling of EXEC SQL AT |
| -csqn <span id="csqn"></span> | Compatibility setting: SQL returns an error if a host variable without indicator variable is set to null. In this error condition, the host variable content is not initialized. The error number stored in SQLCODE is 1405. It can be customized by setting iscobol.esql.value_sqlcode_on_null, but not by setting iscobol.esql.sqlcode.1405. |
| -csqq | Quotes inside ESQL statements are left as they are by the Compiler. Without this option, all kinds of quotes are translated to single quotes by the Compiler. |
| -csqq2 | Quotes inside ESQL statements are switched by the Compiler: single quotes become double quotes and double quotes become single quotes. |
| -cudc | Treats numeric USAGE DISPLAY data as characters in comparisons and moves. <br>This option affects the comparison between numbers whose usage is DISPLAY in particular cases, using a byte by byte comparison instead of comparing the numeric representation. <br>The byte by byte comparison is used when: <br>• two unsigned numbers with usage DISPLAY with the same length and the same number of decimal digits are compared<br>• an unsigned integer number and an alphanumeric elementary item with the same length are compared<br>• an unsigned number with usage DISPLAY is compared with ZERO (ZEROES ZEROS) or 0. In this case the comparison is made comparing each digit within the number, byte by byte, with the character '0'.<br>• an unsigned number with usage DISPLAY is compared with SPACE (SPACES) or " ". In this case the comparison is made comparing each digit within the number, byte by byte, with the character " ". <br>This option affects the MOVE statement when one operand is an unsigned numeric data item USAGE DISPLAY, a numeric constant or a numeric literal and the other one is an unedited alphanumeric item. <br>• When the sender operand is an alphanumeric data item and the receiver operand is a numeric data item USAGE DISPLAY, then a byte by byte move is performed as if the sender operand should contain only one digit, that is the string representation of an integer number, but no check is performed on the real content: e.g.:       <br>MOVE "FA" TO PIC-XX      <br>MOVE PIC-XX TO PIC-9 = A      <br>MOVE PIC-XX TO PIC-99 = FA      <br>MOVE PIC-XX TO PIC-999 = 0FA      <br>MOVE PIC-XX TO PIC-Z = A      <br>MOVE PIC-XX TO PIC-ZZ = FA      <br>MOVE PIC-XX TO PIC-ZZZ = 0FA      <br>MOVE PIC-XX TO PIC-V9 = 0      <br>MOVE PIC-XX TO PIC-9V9 = A0      <br>MOVE PIC-XX TO PIC-9V99 = A00 <br>• When the sender operand is an unsigned numeric USAGE DISPLAY data item and the receiving operand is a non edited alphanumeric data item, then a byte by byte move is performed as if the first operand were an alphanumeric item itself.<br>• When the sender and the receiver operands have an identical PICTURE and USAGE, a byte by byte move is performed as if both operands were alphanumerics |
| -cv <span id="cv"></span> | IBM COBOL compatibility flag. It supports following syntaxes: <br>• EXAMINE<br>• EXHIBIT<br>• EJECT<br>• SKIP<br>• IF OTHERWISE<br>• NOTE<br>• TRANSFORM<br>• ADVANCING (WRITE statement)<br>• AFTER POSITIONING<br>• USE GIVING<br>• TIME-OF-DAY<br>• WHEN-COMPILED<br>• WRITE ADVANCING Special-Name<br>• VALUE OF<br>• CURRENT-DATE<br>• RECORDING MODE (FD clause)<br>• AFP-5A, C01 and CSP in Special-Names<br>• numeric FILE STATUS<br>• multiple FILE STATUS<br>• PROCESS and CBL directives<br>• MOVE with multiple TO keywords<br>• USE FOR DEBUGGING and WITH DEBUGGING MODE <br>• Occurs indexes are initialized to 1.<br>• Occurs indexes are not considered EXTERNAL even if they’re declared within an EXTERNAL group item.<br>• Ability to omit the index when referencing OCCURS data items (the first occurrence is assumed). <br>• Characters before the last hyphen in the name of files assigned to EXTERNAL are ignored. <br>• SORT RETURN, SORT MESSAGE and TALLY internal variables are created. SORT-MESSAGE is never used while SORT-RETURN is checked before every RELEASE and RETURN statement and if it contains 16 the sort is aborted and the control returns to the instruction following the SORT statement. TALLY is usually used by EXAMINE statements. <br>• COMP-1 is translated to FLOAT.<br>• COMP-2 is translated to DOUBLE. <br>• SYNCHRONIZED clause also affects group items. <br>• unbalanced parentheses are allowed. |
| -cva | IBM arithmetic compatibility. <br>If the dest-item of a calculation does not include the decimal part, the result of internal operations made to set that result lose their decimal part as well.<br>The option affects both numeric and numeric-edited data items. <br>For example:compute res = (11/4) * 4 <br>If res is declared as PIC 99 or PIC Z9, it will be set to 8<br>If res is declared as PIC 99v99 or PIC Z9.99, it will be set to 11.00<br>If the -cva option is not used, the result of the above calculation will always be 11. |
| -cva2 | IBM arithmetic compatibility with powers and decimals treated differently. <br>If the dest-item of a calculation does not include the decimal part, the result of internal operations made to set that result uses up to n decimals, where n is the number of decimal digits of the operand with the highest decimal precision. <br>If the expression of the COMPUTE statement contains a power whose exponent is:<br>• a number<br>• a data-item with decimals<br>• an expression containing only numbers or data-items with decimals <br>then standard -cva rules are not applied.<br>For all other cases, the behavior is the same as when the -cva option is set. |
| | |

#### Data Options

These options let you customize the way numeric data is stored and represented.

| | |
| --- | --- |
| -align=number | Allows you to specify the data alignment modulus. For example, "-align=8" specifies that data should be aligned on eight-byte boundaries. The default value is 1 |
| -d1 | Binary data whose length is <= 2 are stored in 1 byte |
| -d5 | Treat BINARY as COMP-5. Note that only items explicitly defined as BINARY are affected. COMP and COMP-4 are not affected despite they’re equivalent to BINARY. In order to treat COMP and COMP-4 as COMP-5, use -rm=newmeaning,word..., e.g. -rm=COMP-5,COMP-4. |
| -d64 <span id="d64"></span> | Use 64-bit pointers for USAGE POINTER data items. This option should be used only in conjunction with -cp. Without this option, pointers are 4 bytes in size.With this option, pointers are 8 bytes in size. |
| -dca | Use ACUCOBOL numeric format. The compiler uses this convention by default if no other convention is specified.See USAGE clause for details about how numeric data items are affected by this option. |
| -dcb | Use MBP COBOL numeric formatSee USAGE clause for details about how numeric data items are affected by this option. |
| -dcd | Use Data General numeric format for binary items.See USAGE clause for details about how numeric data items are affected by this option. |
| -dcdm | Store any data item whose underlying type is binary in the minimum number of bytes needed to hold it. Normally, binary types are stored in two, four, or eight bytes. This option can be used to emulate the ACUCOBOL -dm option. |
| -dci | Use IBM sign encoding and IBM COMP sizes. COMP sizes are 1 (only if -d1 option is also used), 2, 4, 8, 12 or 16 depending on the item picture.See USAGE clause for details about how numeric data items are affected by this option. |
| -dcii | Use IBM sign encoding and IBM COMP sizes. COMP sizes are 2, 4, 8 or 16 depending on the item picture.See USAGE clause for details about how numeric data items are affected by this option. |
| -dcm | Use Micro Focus sign encoding and Micro Focus COMP sizes.See USAGE clause for details about how numeric data items are affected by this option. |
| -dcmi | Use Micro Focus sign encoding and IBM COMP sizes (like MF -C IBMCOMP). This option has the same effect of -dcm except that the length of COMP items is calculated in the same way as -dca. See USAGE clause for details about how numeric data items are affected by this option. In addition, the SYNCHRONIZED clause affects also group items. |
| -dcn | Use NCR COBOL numeric format.See USAGE clause for details about how numeric data items are affected by this option. |
| -dcr | Use Realia sign storage convention.Sign information for S9(n) variables is stored using the conventions for Realia COBOL, and their conversion to binary decimal is the same as that performed by the Realia compiler. |
| -dcv | Use numeric sign formats that are compatible with VAX COBOL. These are identical to the IBM formats, except that unsigned COMP-3 fields place X"0C" in the sign position, instead of X"0F". |
| -di | Initialize values of WORKING-STORAGE SECTION data items and indexes by type. <br>• numeric items are initialized to zero (overriding existing initialization set through the -dv option)<br>• numeric-edited data items are initialized as follows: digits in the position of 9 symbols are initialized to zero, other digits are initialized to space; currency symbols and separators are preserved<br>• alphabetic and alphanumeric items are initialized to the value specified using the -dv option or ASCII spaces if -dv is omitted<br>• occurs indexes are initialized to 1 <br>This option does not affect items declared with VALUE or EXTERNAL clauses or those subordinate to a REDEFINES phrase. |
| -dia | Initialize values of WORKING-STORAGE SECTION data items and indexes by type. <br>• numeric items are initialized to zero (overriding existing initialization set through the -dv option)<br>• numeric-edited data items are initialized to spaces<br>• alphabetic and alphanumeric items are initialized to the value specified using the -dv option or ASCII spaces if -dv is omitted<br>• occurs indexes are initialized to 1 <br>This option does not affect items declared with VALUE or EXTERNAL clauses or those subordinate to a REDEFINES phrase. |
| -ds | USAGE DISPLAY numeric items with no SIGN clause are treated as if they were described with the SIGN IS TRAILING SEPARATE clause. |
| -dv=char | Initialize each otherwise undefined byte in WORKING-STORAGE SECTION and FILE SECTION to the specified value when a program is first loaded or canceled and then called. char is the decimal representation of the character. For example, to fill the item memory area with 'A' use -dv=65. Use -dv=0 for low-values and -dv=32 for ASCII spaces. Note that the -dv option does not affect data items declared with VALUE or EXTERNAL clauses. In order to initialize EXTERNAL data items, use either -dvext or -dvexta. If -dv is omitted then the compiler behaves as if -dv=32 was specified (i.e. data items specified without a VALUE clause are filled with ASCII spaces by default). Note that when compiling with -di the value specified with -dv affects only alphabetic, alphanumeric, alphanumeric edited and numeric edited items including those that are declared FILLER. When used with -di, -dv does not affect numeric, pointer or index items. See the -di option for more information. |
| -dvext=char | Initialize each otherwise undefined byte of EXTERNAL data items in WORKING-STORAGE SECTION and FILE SECTION to the specified value when a program is first loaded or canceled and then called. char is the decimal representation of the character. For example, to fill the item memory area with 'A' use -dvext=65. Use -dvext=0 for low-values and -dvext=32 for ASCII spaces. If -dvext and -dvexta are omitted then the compiler behaves as if -dvext=0 was specified (i.e. EXTERNAL data items specified without a VALUE clause are filled with low-values by default). |
| -dvexta=char | Initialize each otherwise undefined byte of EXTERNAL data items in WORKING-STORAGE SECTION to the specified value when a program is first loaded or canceled and then called. char is the decimal representation of the character. For example, to fill the item memory area with 'A' use -dvexta=65. Use -dvexta=0 for low-values and -dvexta=32 for ASCII spaces. If -dvext and -dvexta are omitted then the compiler behaves as if -dvext=0 was specified (i.e. EXTERNAL data items specified without a VALUE clause are filled with low-values by default). |
| -dz <span id="dz"></span> | Relax size-checking rules. When this option is in effect, the values that can be held in binary and packed-decimal data types are limited only by the number of bytes of storage. The picture is not used for determining the largest value that these types can hold, and when moving to a nonnumeric destination the largest possible value determines the number of digits moved. |
| -dznt | Relax size-checking rules in compatibility with Micro Focus NOTRUNC directive. When this option is in effect, the values that can be held in binary data types are limited only by the number of bytes of storage. However, the PICTURE is used when moving data from a binary number to a nonnumeric data item. |
| -dzta | Relax size-checking rules in compatibility with Micro Focus TRUNC”ANSI” directive. Each numeric data item stores values up to its PICTURE in size, but COMP-5 items ignore the PICTURE when determining the largest value they can hold. However, COMP-5 items do use their PICTURE when moving a value to a nonnumeric data item. |
| | |

#### External File Options

These options enable the generation of dictionary files that describe the COBOL FDs.

| | |
| --- | --- |
| -edm | Create the External Data Map XML file for all the data items in the program’s DATA DIVISION, including those items that are implicitly defined (i.e. RETURN-CODE). The XML file is named .xml. |
| -edo=DirName | Specifies the directory for Data Map files. If the directory does not exist or doesn’t have the correct permissions, the Data Map file will not be generated. |
| -efa | Create an External File Description XML file for every indexed, sequental and relative file described in the program’s FILE SECTION. The XML file is named .xml. The XML file name can be altered by the EFD FILE Directive. <br>See External File Description dictionaries for more information. <br>**Note** - no External File Description XML is generated for print and sort files. |
| -efc <span id="efc"></span> | Create the External File Description ISS file(s) for the indexed files described in the program.ISS files are required by some ctutil functions when working with c-tree. The iscobol.sqlserver.iss (boolean) feature needs these files as well. <br>See External File Description dictionaries for more information. |
| -efd | Create an External File Description XML file for every indexed file described in the program’s FILE SECTION. The XML file is named .xml. The XML file name can be altered by the EFD FILE Directive. <br>See External File Description dictionaries for more information. |
| -efo=DirName | Specifies the directory for EFD files. If the directory does not exist or doesn’t have the correct permissions, the EFD file will not be generated. |
| | |

#### File Options

These options affect the data files management.

| | |
| --- | --- |
| -fl | Single record locking is default for files WITH ROLLBACK. Normally, WITH ROLLBACK causes multiple locking rules to be in effect for a file. When this option is used, the WITH ROLLBACK clause does not affect whether single or multiple record locking rules are followed. Single locking becomes the default. You may enable multiple locking either by specifying WITH LOCK ON MULTIPLE RECORDS in a file's SELECT statement or by using APPLY LOCK-HOLDING ON file in the I-O CONTROL paragraph. |
| -flsu <span id="flsu"></span> | Specifies a Unicode-enabled sequential access mode file handler for LINE SEQUENTIAL files. With this option, text files are read and written using the Java classes java.io.FileReader and java.io.FileWriter which access files sequentially rather than in random access mode and also preserve Unicode characters. This option should be used when reading or writing device files and pipes (i.e. files that are not disk files). This is to avoid illegal operations and to properly convert between the Java internal format (i.e. Unicode) and the desired external format. Note that the external format can be specified using the Java file.encoding property. The -flsu option is also useful when programs share sequential files between platforms with different line separators (e.g. program A creates the file on Linux and program B must be able to read the file on Windows). The -flsu option causes sequential files to be assigned to PRINT if no other assignment is specified. When using this option, OPEN I-O, REWRITE and READ PREVIOUS are not supported for LINE SEQUENTIAL files. |
| -fm | LOCK MODE IS MANUAL is implied.This option has priority over -cm and -ci in terms of default lock mode. |
| -fsv | All RECORD SEQUENTIAL files have variable-length records. The Compiler assumes that the FD includes RECORD CONTAINS 1 TO n CHARACTERS clause, where n is the length of the largest record description in the FD. Explicit RECORD or VARYING clauses in the FD are ignored. |
| | |

#### Java Options

These options let you choose what Java output must be produced (.java, .class or both) and allow you to specify some options for the javac compiler.

| | |
| --- | --- |
| -jc | Generate the ‘.class’ file. This is the default behavior unless -jj option is used. |
| -jj <span id="jj"></span> | Generate the ‘.java‘ file. By default the .java file is removed after a correct compilation. Use this option to keep the .java file on disc.<br>If this option is not used in conjunction with -jc, the Compiler will generate only the .java file and not the .class file; in this case the Compiler can’t embed neither the source code for debug nor the resources referenced |
| -jo=Option... | Passes the specified options to the 'javac' compiler. Multiple values must be separated by spaces. <br>Example:-jo="-source 1.8 -target 1.8 -J-Xss3m" <br>See also iscobol.compiler.javac.options |
| | |

#### Listing Options

These options enable and configure the generation of list files.

| | |
| --- | ---|
| -la | Output full listing to a '.list' file. The list file contains the whole source code, including all the copybooks (except those copybooks for which the SUPPRESS clause is used in the COPY statement).Source lines that were excluded due to compiler directives are marked with "\|X".The original source format is preserved in the list file.Comments are generated in ANSI Fixed format, marked by an asterisk at column 7. <br>This option overrides the -lf option. <br>**Note**: The listing is generated before the syntax analysis and every dot out of quotes is considered as end of the statement, therefore, if you don’t enclose copybook names between quotes, you might obtain an uncompilable list file. |
| -ld | Output full listing and datamap to a '.list' file. The list file contains the whole source code, including all the copybooks (except those copybooks for which the SUPPRESS clause is used in the COPY statement).Source lines that were excluded due to compiler directives are marked with " \|X". <br>The datamap information is stored at the bottom of the list file and provides the following information for each data item described in the program Data Division: source line, item name, offset (in case the item is part of a group item), physical length, section in which the item is defined, type flags, item type and how the item is referenced in the Procedure Division. <br>This option assumes the -lf option. <br>**Note**: The listing is generated before the syntax analysis and every dot out of quotes is considered as end of the statement, therefore, if you don’t enclose copybook names between quotes, you might obtain an uncompilable list file. |
| -lf | Output full listing to a '.list' file. The list file contains the whole source code, including all the copybooks (except those copybooks for which the SUPPRESS clause is used in the COPY statement).Source lines that were excluded due to compiler directives are marked with "\|X".The original source format is translated to free format with comments marked by '*>' at column 1. <br>In most of the cases the .list' file can be compiled as it is a standard COBOL program written in free format. <br>**Note**: The listing is generated before the syntax analysis and every dot out of quotes is considered as end of the statement, therefore, if you don’t enclose copybook names between quotes, you might obtain an uncompilable list file. |
| -lfo | Creates only a full listing of the program. This option is the same as -lf except that the Compiler doesn’t compile to a Java class, it just generates the listing file and exits. |
| -lo=DirName | Specify the directory where ‘.list’ files are to be stored. If the directory does not exist or doesn’t have the proper permissions, the list file is not generated. This option forces the generation of list files even if -lf was not used. |
| -po | Output full listing to a '.list' file in ANSI fixed format with lines numbering. The list file contains all the source code, all the copybooks are merged into it (unless the SUPPRESS clause is used in the COPY statement) and in most of the cases it can be compiled as it is a standard COBOL program. The line number is printed in the sequence number area (from column 1 to column 6).If used along with -ld, only the source part is generated in ANSI fixed format, the datamap is always in FREE format. <br>This option is guaranteed to work correctly only if the original program is already in ANSI fixed format, otherwise results are unpredictable. <br>**Note**: The listing is generated before the syntax analysis and every dot out of quotes is considered as end of the statement, therefore, if you don’t enclose copybook names between quotes, you might obtain an uncompilable list file. |
| | |

#### Memory Options

These options affect the memory management.

| | |
| --- | --- |
| -m1 | Put all of WORKING-STORAGE into a contiguous block of memory. |
| | |

#### Miscellaneous Options

These options activate miscellaneous behaviors.

| | |
| --- | --- |
| -brand=*Text* | Text will be displayed with the compiler options in the list file as well as in the program information returned in one of the following methods:<br>• on the command line, through the -info runtime option,<br>• in your program, by invoking the COMPILED-INFO function,<br>• in your own preprocessors, by looking at the compilerOptions parameter of the process method (see Preprocessor programs for more details). |
| -edc | Removes output class files if compilation fails. This option works only when the source file has been recognized as a COBOL program or class. If some of the class files cannot be deleted for some reason, the compiler doesn’t signal it. The number of removed classes is shown at the bottom of the compiling result. |
| -ef | Output errors to a '.err' file. The file has the same name as the source and is created only if there are compiler errors or warnings. The Compiler automatically removes the ‘.err’ file before starting to compile the source, so existing err files disappear after a correct compilation. The Compiler output is also traced on the system output. |
| -eo=*DirName* | Specifies the directory for error files. If the directory does not exist or doesn’t have the correct permissions, the err file will not be created. |
| -es | Stop compilation and return a non-zero exit code if an error occurs. This option is useful when compiling multiple sources at once. |
| -esme=*n* | Sets the maximum number of errors printable by the Compiler to n, where n is a positive number.When multiple source files are compiled at once (e.g. if you use wildcards in the source name), the option limits the number of errors for each single source file, not for the whole compilation. |
| -help | Display the list of all compiler options with a quick explanation for each one of them and exit. |
| -helpx | Display the list of all compiler options including experimental options with a quick explanation for each one of them and exit. |
| -incr=*op* <span id="incr"></span> | Enable incremental compiling.<br>*op* can be either "build", "clean" or "clean,build".<br>See Incremental Compiler for more information. |
| -noarcc <span id="noarcc"></span> | Disable the Automatic compilation of referenced COBOL classes |
| -sqlj | Generate SQLJ code for the embedded SQL of the program.<br>See SQLJ for more information. |
| -sysc <span id="sysc"></span> | Allows you to override COBOL library routines. This option is useful for overriding COBOL library routines such as C$SYSTEM and for speeding up CALLs to subprograms that are called frequently. The -sysc option causes the compiler to place the Java class in the com.iscobol.lib package (or com.iscobol.lib_n package when compiling with -cp). The isCOBOL runtime framework searches for programs in this package before searching other places such as paths specified in iscobol.code_prefix. To execute programs compiled with -sysc, they must be found in a path or jar file listed in the Java class path.With the -sysc option, the compiler adds "package com.iscobol.lib;" (or "package com.iscobol.lib_n;") to the top of the generated Java source code for the program class. For example, if a program named MYPROG is compiled with -sysc then the generated Java class will be named com.iscobol.lib.MYPROG.The -sysc option should be used only for CALLed subprograms. If it is used for main programs or COBOL objects there is no error at compile time, but the generated object cannot be executed. |
| -tasks | Prints tasks in the compiler output.<br>All comments starting with “todo” are considered tasks. |
| -v | Display the Compiler version number and exit. |
| -verbose | Display verbose output, e.g. the count of errors, informational and warnings. |
| -ze | Automatically execute the program when the compilation is finished. |
| -zi | Set the program to INITIAL. RESIDENT programs are not affected by this option. |
| -zmf | Generates optimized class. <br>Only batch programs without user interface can be compiled with this option.<br>Only ANSI-85 syntax is supported.<br>ESQL is not supported.<br>A new generation engine is used, so the console output could be slightly different.<br>This option can’t be used in the IDE, it’s supported only on the command line.<br>This option can’t be used along with -d and -dx, hence programs compiled with this option can’t be debugged.<br>The activity of programs compiled with this option is not traced in the logfile. |
| -zy | Use 4-digit year in ACCEPT FROM DAY/DATE. Treat ACCEPT FROM DATE as ACCEPT FROM CENTURY-DATE and ACCEPT FROM DAY as ACCEPT FROM CENTURY-DAY |
| | |

#### Output Options

These options affect the generation of the output class.

| | |
| --- | --- |
| -od=*DirName* | Specify the output directory for classes. If the directory does not exist or doesn’t have the proper permissions, the compilation will fail. |
| -ostrip <span id="ostrip"></span> | Discard variable names from object files. Variable names are stripped from the compiled object. This option helps save memory and sometimes increases performance, however, exception messages shown by the JVM are less clear and the program cannot be compiled in debug mode. |
| | |

#### Perform Stack Options

These options affect the management of the perform stack. he -pt options control the behavior of returns from code executed during a PERFORM statement:

| | |
| :--- | :--- |
| -pt0 | Non-recursive PERFORM, RM/COBOL style. The exit point of any PERFORM statement currently being executed is recognized if reached; the return jump taken is the first reached. PERFORM statements with the same exit point cannot be nested; if they are they do not return correctly. The end of a section is regarded as a separate point from the end of its last paragraph. |
| -pt1 | Recursive PERFORM, Micro Focus COBOL and ACUCOBOL-GT style. Only the exit point of the innermost PERFORM currently being executed is recognized and its return jump taken. This is also the default behavior if no perform stack option is used. |
| -pt2 | Pseudo non-recursive PERFORM, OS/VS COBOL style. The exit point of any PERFORM statement currently being executed is recognized if reached; the return jump taken is the first reached. PERFORM statements with the same exit point can be nested to a depth of two (one inner and one outer). If they are nested deeper, they do not return correctly. The end of a section is regarded as a separate point from the end of its last paragraph. |
| | |

Use -pt0 for compatibility with RM/COBOL, -pt1 for compatibility with the default behavior of Micro Focus COBOL and ACUCOBOL-GT, and -pt2 for compatibility with mainframe behavior of OS/VS COBOL, DOS/VS COBOL, VS COBOL II and COBOL/370.

For more information consult the documentation provided with the specific COBOL dialect

#### Keywords Options

These options allow you to remove keywords or change their meaning.

| | |
| --- | --- |
| -rc=*word,customword...* <span id="rc_word_customword"></span> | Change reserved words. Multiple values must be separated by commas.<br>Single words (such as DISPLAY, ACCEPT, or ADD) can be changed, but complex statements (such as READ PREVIOUS or NEXT SENTENCE) cannot.<br>For example, -rc=ACCEPT,GETDATA treats the word GETDATA as ACCEPT. <br>It’s not possible to replace a keyword with another keyword using this option. Use -rm if you need to replace a keyword with another keyword. |
| -rm=*newmeaning,word...* <span id="rm_newmeaning_word"></span> | Change the meaning of reserved words. Multiple values must be separated by commas. This option allows you to deem NULL as LOW-VALUES, COMP-5 as COMP, etcetera.<br>For example, -rm=LOW-VALUES,NULL treats NULL as LOW-VALUES. <br>Note that the option replaces only the exact keyword while it doesn’t affect synonyms, so replacing LOW-VALUES will not replace LOW-VALUE as well and replacing COMP-5 will not replace COMPUTATIONAL-5 as well, etcetera. Be sure to specify all the necessary replacements according to the keywords used in your source code. |
| -rw=*word...* | Suppress reserved words. Multiple values must be separated by commas. This is useful when one or more keywords are used as item names.<br>For example, if the program contains the following variables:<br>77 PRINTER PIC X(32). <br>77 TAB     PIC X(18). <br>Then the following option is necessary in order to compile it correctly: -rw=PRINTER,TAB. |
| | |

#### Source Options

These options affect the processing of the source files.

| | |
| --- | --- |
| -apost | Causes figurative constant QUOTE/QUOTES to be evaluated single quotes. |
| -big <span id="big"></span> | Use this option to compile big programs. <br>Several classes are generated. The number of generated classes is conditioned by the iscobol.compiler.max_constants \* and iscobol.compiler.max_paragraphs * configuration properties. <br>This option is useful to avoid the "too many constants" error that may appear when compiling huge programs.<br>In rare cases, this option can be used in conjuncion with -sns=Statements in order to get rid of the "code too large" error. <br>Programs compiled with this option are not optimized, so it’s suggested to use this option only for those programs that actually require it. You can activate the option using the IMP OPTION Directive in the first line of the source file in order to avoid a dedicated compile command. |
| -ce=*Ext1...* | Set the default extension for source and copybooks. When it is specified, any source or copy library file name that does not explicitly specify an extension has the default extension appended to it. Multiple values must be separated by the ";" character. On Linux/Unix both ";" and ":" are accepted as separator character. |
| -exec=*Macro* | Allow the compilation of the specified EXEC macro. <br>*-exec=html* enables the HTML compiler with the following limitations:<br>• if the source code is written in ANSI mode, then the -sa option is mandatory,<br>• the statements EXEC HTML, END-EXEC and COPY "" must be alone on a single line,<br>• in the HTML code an host variable is a valid COBOL name prefixed by colon, unless the character before the colon is a letter (e.g. parsing the string text:var1, var1 is not considered host variable),<br>• expressions as indexes are not supported as well as the compilation option -cod1,<br>• the listing obtained by the HTML compiler is not compilable. |
| -noexec | Skip EXEC statements. |
| -s78c | Level 78 implies the end of the previous 01 group item. |
| -sa <span id="sa"></span> | Force Fixed (aka ANSI) source format. <br>The same effect can be obtained via the SOURCE Directive, specifying >>SOURCE FORMAT FIXED at the top of the source file. |
| -sc | Force all CALL statements to be static. In order to correctly compile a program with this option, all programs called by the program you’re compiling must be available in the CLASSPATH. During the runtime session CALLs will perform better, but classes will always be loaded from the CLASSPATH and never from iscobol.code_prefix paths. |
| -scnl | Converts copyfile names to lower case. |
| -scnu | Converts copyfile names to upper case. |
| -sdcs | Allows the currency sign to be changed at runtime. It works in conjunction with the iscobol.runtime.currency * configuration property.<br>This option has no effect on programs that explicitly define one or more currency symbols in their Special-Names. |
| -sddp | Allows the DECIMAL-POINT clause to be reverted at runtime.<br>When a program is compiled using this option, the absence or presence of the clause DECIMAL POINT IS COMMA is used only to retrieve the position of the thousands separators and decimal separator inside edited pictures and numeric literals.<br>The actual character used in any display or print statement at runtime is controlled by the configuration property<br>iscobol.runtime.decimal_point_is_comma (boolean) * . |
| -sevc | Supports the syntax:<br>copy "filename" of "$COPYDIR".<br>and<br>copy "$COPYDIR/filename".<br>Environment variables in COPY file names are resolved. |
| -sf <span id="sf"></span> | Forces Free source format. <br>The same effect can be obtained via the SOURCE Directive, specifying >>SOURCE FORMAT FREE at the top of the source file. |
| -sl | Allows AREA B to extend to the end of the line, regardless of line length, in Fixed (aka ANSI) format. <br>The same effect can be obtained via the IMP MARGIN-R IS AFTER END OF RECORD Directive, specifying >>IMP MARGIN-R IS AFTER END OF RECORD at the top of the source file. |
| -smat <span id="smat"></span> | Allows the mixing of source files and copybooks written in Fixed and Terminal formats. This is useful when you’re writing the main source code using the Fixed format and you need to insert some copybooks that are written in Terminal format, or vice versa. <br>The rules that the compiler uses to determine the source format are as follows:if the first byte of the first non-empty line is either a number from 0 to 9 or space, then Fixed (aka ANSI) format is assumed, else Terminal format is assumed. A line is considered empty when it has no text or is all spaces. <br>As result, a valid comment on the first line establishes the format in a portable way. <br>The -smat option has two effects: <br>1) If the file is not in Fixed (aka ANSI) format, then the file is in Terminal format<br>2) The analysis is repeated again for each copy file |
| -smfu | Treat hyphen and underscore as different characters in identifiers. <br>With this option the following code: <br>77 data-item-1 pic x(10).<br>77 data_item_1 pic 9(9). <br>doesn't produce an ambiguos identifier error. |
| -sns=*Statements* <span id="sns"></span> | Use this option to avoid "code too large" compiler errors or to optimize the compiled class file. This option sets the maximum number of COBOL statements that the compiler should attempt to keep together in a single generated Java method. A reasonable value for this option is 200. Try lower values if the "code too large" error persists. <br>In rare cases, the -big option has to be used as well in order to get rid of the "code too large" error. <br>Reason for the "code too large" error: one of the static constraints on the instructions in Java virtual machine code in a class file is that the bytecode size of a single method must be less than 65536 bytes. For COBOL this means that the compiler code generator must split large COBOL paragraphs and sentences into multiple Java methods. See https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-4.html for more information. |
| -sp=*Copypath...* | Specify all paths in which COPY files and resources can be found. Multiple values must be separated by the ";" character. On Linux/Unix both ";" and ":" are accepted as separator character. <br>The current directory is always assumed as first path of the Copypath. <br>The location of isCOBOL’s default copybooks can be specified with this option. If not specified, the Compiler automatically searches for them in the directory "../sample/isdef", resolved from the location of the iscobol.jar library. For more information about isCOBOL’s default copybooks see Copybooks. |
| -ssnl | Subroutine names identified by string literals in CALL statements are converted to lower case.<br>Note that the case is considered only when calling C functions, COBOL programs are always referenced by uppercase names. |
| -ssnu | Subroutine names identified by string literals in CALL statements are converted to upper case.<br>Note that the case is considered only when calling C functions, COBOL programs are always referenced by uppercase names. |
| -st <span id="st"></span> | Forces Terminal source format. <br>The same effect can be obtained via the SOURCE Directive, specifying >>SOURCE FORMAT TERMINAL at the top of the source file. |
| -stl=*Length* | Set the length of a tab character (the default value is 8). Multiple lengths are allowed, for example: “-stl=4,8” sets the first tab to 4 characters in length, and the rest to 8 characters in length. |
| -sv <span id="st"></span> | Forces Variable source format. <br>The same effect can be obtained via the SOURCE Directive, specifying >>SOURCE FORMAT VARIABLE at the top of the source file. |
| | |

#### Screen Options

These options affect the output on video.

| | |
| --- | --- |
| -va | AUTO assumed on all ACCEPT statements. |
| -vansi | Treat simple ACCEPT and DISPLAY statements in accordance with ANSI semantics. Specifying this option is the same as specifying FROM CONSOLE for all simple ACCEPT statements and UPON CONSOLE for all simple DISPLAY statements. You can change this behavior for individual ACCEPT or DISPLAY statements by specifying an explicit FROM/UPON phrase. |
| -vh | HIGHLIGHT assumed on all ACCEPT and DISPLAY statements. |
| -vu | WITH UPDATE assumed on all ACCEPT statements. |
| -vx | Allows exception keys to be entered by the user for any ACCEPT statement. This option assumes ON EXCEPTION CONTINUE for each ACCEPT that does not specify the ON EXCEPTION clause. |
| | |

#### Warning Options

These options enable the generation of additional compiler warnings to help you in cleaning and optimizing the code.

| | |
| --- | --- |
| -watn | Show warnings for MOVEs of alphanumeric items to numeric items.<br>Note that all figurative constants except ZERO and ZEROES are alphanumeric. |
| -wd2 | Show warnings for features that are currently not supported by WebDirect. This option helps the programmer understand how their program will behave when running with WebDirect. |
| -wdbz | Show warnings for possible divide by zero without ON SIZE ERROR. |
| -whttp <span id="whttp"></span> | Show warnings for statements that are not supported by EIS. |
| -wlu | Show warnings for LINKAGE/USING mismatch, if there are parameters that are defined in the program LINKAGE SECTION but not in the PROCEDURE DIVISION USING phrase. |
| -wmwc | Show warnings for long variables in MOVE WITH CONVERSION. <br>It affects also the MOVE with conversion from alphanumeric to numeric edited, hence warnings may be shown also for normal MOVE from alphanumeric to numeric edited if -caec is used in addition to this option. |
| -wr | Extends the REDEFINES TOO LONG warning also to group items.<br>Without this option the warning is returned only when both the redefined item and the redefining item have a picture. |
| -wref | Show warnings for reference modifiers out of range. <br>**Note**: with this option the error #173 Reference modifier out of range is returned as a Warning instead of a Severe error. |
| -wu | Show warnings for variables that are not used. This option is useful for programmers that wish to perform code cleaning by removing useless variable definitions. Consider that by default, the compiler does not allocate data division items that are not used, so this option is useful only to reduce the number of source lines and not the memory usage. |
| | |
