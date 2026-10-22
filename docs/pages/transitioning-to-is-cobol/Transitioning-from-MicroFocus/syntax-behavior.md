## Syntax and Behavior

- The PROGRAM-ID paragraph must be explicitly declared. If the program name specified in this paragraph is different than the source file name, Micro Focus uses the program name to name the compiled object while isCOBOL uses the source file name and prints a warning.
- If a paragraph is declared, then its parent section must be declared as well. For example, INPUT-OUTPUT SECTION must be declared above FILE-CONTROL.
- The $SET OVERRIDE directive that changes the meaning of a reserved word is not supported. The same effect can be obtained by compiling with -rc= option.
- The syntax for inline comments with isCOBOL is *|comment*, not *//comment*.
- The syntax z"String" is not supported by isCOBOL. In order to append 0x00 to a text string you must take advantage of string concatenations. For example:

```cobol
move z"my-literal" to an-item
```

can be changed to:

```cobol
move "my-literal" & x"00" to an-item
```

- Micro Focus provides the ability to define new COBOL types in a C language style using type definition, while isCOBOL not.
- EVENT-POINTER, MONITOR-POINTER, MUTEX-POINTER, SEMAPHORE-POINTER, PROCEDURE-POINTER, PROGRAM-POINTER and THREAD-POINTER are not supported by isCOBOL.
- COMMON and EXTERNAL clauses are not supported in PROGRAM-ID.
- CALL-CONVENTION is not supported. You can configure the call convention by setting iscobol.dll_convention in the configuration.
- The following syntaxes are not supported for ASSIGN TO phrase in FILE-CONTROL:
  - FROM dataname
  - LINE ADVANCING
  - LPT1, LPT2, ...
  - PRN
- SUPPRESS is not supported in file keys description.
- The RETURN clause is not supported in I-O CONTROL paragraph.
- The VALUE clause is not supported in REDEFINES.
- The COMMUNICATION SECTION is not supported by isCOBOL.
- BY REFERENCE/VALUE/CONTENT cannot be used for parameters list either after PROCEDURE DIVISION USING or ENTRY...USING or in CHAIN and INVOKE statements. This syntax is supported only by CALL statement.
- The ACCEPT of a data-item does not show the initial value of the item unless you specify the WITH UPDATE clause. You can assume this clause for all ACCEPT statements by compiling with -vu option.
- The ACCEPT of a non-edited data item fills the item differently. Suppose to have a variable defined as PIC 9(3) with a value of 123. When the ACCEPT is performed, if the user inputs 5, the value of the variable with Micro Focus becomes 523, while isCOBOL stores 005.
- ACCEPT FROM EXCEPTION STATUS is not supported. A similar effect can be obtained by specifying the ON EXCEPTION and NOT ON EXCEPTION clauses in the ACCEPT.
- ACCEPT FROM USER NAME is not supported. You can retrieve the user name using the C$GETENV library routine, .e.g.

```cobol
      *     accept wk-usr from user name.
           call "c$getenv" using "user.name" wk-usr
```

- ACCEPT FROM CRT is not supported.
- The MODE IS BLOCK clause is not supported in ACCEPT.
- The WITH TIMEOUT clause is not supported in ACCEPT, you must replace it with a BEFORE TIME clause in order to obtain the same effect.
- The ALTER statement is not currently supported by isCOBOL.
- ADDRESS OF data-item cannot be passed as parameter between programs or used as program exit status.
- The AS clause is not supported in CALL.
- The FOR REMOVAL clause in CLOSE statement is not supported. Replace it with WITH LOCK in order to obtain the same effect.
- The WITH DISP clause is not supported in CLOSE.
- OPEN and CLOSE statements cannot be used on pointers. You can use it only on files.
- DISPLAY SPACES doesn’t clear the screen unless you specify the ERASE EOS clause.
- The ENTER statement, that allows to switch to another programming language, is not supported by isCOBOL.
- The CHANGED flag of the EXHIBIT statement is ignored.
- INITIALIZE category TO VALUE is not supported by isCOBOL.
- The ON statement is not supported by isCOBOL.
- The RESERVED clause is not supported in OPEN statement.
- The WITH WAIT clause is not supported in READ statement.
- START THREAD is not supported by isCOBOL.
- The ADVANCINT TAB/FORMATTED clause is not supported in WRITE statement.
- The $ character as first digit of physical file name is not supported by isCOBOL.
- VALUE NEXT syntax requires -m1 and -align=8 compile flags to reproduce the Micro Focus behavior.
- Copybooks whose content is not terminated by a dot are not allowed. There are two solutions:
  - add a dot after the last line of the copybook content, or
  - use two dots to close the COPY statement (e.g. COPY "mycopy.prd"..)
