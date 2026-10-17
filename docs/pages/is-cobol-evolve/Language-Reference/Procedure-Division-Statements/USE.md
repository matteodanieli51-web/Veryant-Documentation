## USE

#### Format 1

```cobol
USE [GLOBAL] AFTER STANDARD {EXCEPTION} PROCEDURE ON { { File-1 } ... } 
                            {ERROR    }              { INPUT          } 
                                                     { OUTPUT         } 
                                                     { I-O            } 
                                                     { EXTEND         } 
                                                     { TRANSACTION    } 
```

#### Format 2

```cobol
USE AT PROGRAM { START }
               { END   }
```

#### Format 3

```cobol
USE FOR DEBUGGING ON { ProcedureName    }
                     { ALL PROCEDURES   }
```

### Syntax rules

1. A USE statement, when present, shall immediately follow a section header in the declaratives portion of the procedure division and shall appear in a sentence by itself. The remainder of the section shall consist of zero, one, or more procedural paragraphs that define the procedures to be used.
2. *File-1* shall not be a sort or a merge file.
3. Within a declarative procedure, there shall be no reference to any nondeclarative procedures except in a RESUME statement.
4. Procedure-names within a declarative section may be referenced in a different declarative section or in a nondeclarative procedure only with a PERFORM statement.
5. The files implicitly or explicitly referenced in the USE statement need not all have the same organization or access.
6. The words ERROR and EXCEPTION are synonymous and may be used interchangeably.
7. The INPUT, OUTPUT, I-O, and EXTEND phrases may each be specified only once in the declaratives portion of a given procedure division.
8. The same file-name shall not appear in more than one USE AFTER EXCEPTION statement within the same procedure division.
9. The Format 3 USE statement is supported only under the [-cv](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#compatibility-options) compiler option.

### General rules

1. The USE statement is never executed; it merely defines the conditions calling for the execution of the USE procedures.
2. During the execution of a USE procedure, if a statement raises an exception condition that would cause the execution of a USE procedure that had previously been activated and had not yet returned control to the activating entity, an overflow exception condition is set to exist.
3. A declarative is selected for execution by analyzing the USE statements in the source element in the order in which they are specified. The first declarative that satisfies the selection criteria is executed and no other declaratives are executed.
4. For source elements contained within other source elements, multiple declaratives may be eligible for selection for a given exception condition. The declarative selected for execution is determined in the following order of precedence:

A. the qualifying declarative in the source element that contains the statement that caused the condition to exist,

B. a qualifying declarative with the GLOBAL attribute in the next inclusive directly containing source element. This step is repeated with the next higher directly containing source element until a declarative is selected or the outermost source element is reached.

#### Format 1

5. Within a given procedure division, a USE statement specifying File-1 takes precedence over any USE statements specifying an INPUT, OUTPUT, I-O, or EXTEND phrase.
6. The procedures associated with a USE statement are executed by the input-output control system after completion of the standard input-output exception routine upon the unsuccessful execution of an input-output operation unless an AT END or INVALID KEY phrase takes precedence. The rules concerning when the procedures are executed are as follows:

A. If file-name-1 is specified, the associated procedure is executed when the condition described in the USE statement occurs.

B. If INPUT is specified, the associated procedure is executed when the condition described in the USE statement occurs for any file open in the input mode or in the process of being opened in the input mode, except those files referenced by file-name-1 in another USE statement specifying the same condition.

C. If OUTPUT is specified, the associated procedure is executed when the condition described in the USE statement occurs for any file open in the output mode or in the process of being opened in the output mode, except those files referenced by file-name-1 in another USE statement specifying the same condition.

D. If I-O is specified, the associated procedure is executed when the condition described in the USE statement occurs for any file open in the I-O mode or in the process of being opened in the I-O mode, except those files referenced by file-name-1 in another USE statement specifying the same condition.

E. If EXTEND is specified, the associated procedure is executed when the condition described in the USE statement occurs for any file open in the extend mode or in the process of being opened in the extend mode, except those files referenced by file-name-1 in another USE statement specifying the same condition.

#### Format 2

7. A Format 2 USE statement creates a START or END procedure for the program. No more than one START and one END procedure is allowed for each program.

A. A START procedure executes immediately before the first normal COBOL statement in the Procedure Division when the program is in its initial state. The START procedure executes only once regardless of the number of times the program is entered, until the program is cancelled from memory. A START procedure executes regardless of which entry point is used to start the program when a program contains multiple entry points.

B. An END procedure executes immediately before the program is placed into its initial state or it is about to leave memory, providing the program has been entered at least once.

#### Format 3

8. A Format 3 USE statement identifies the items in the source program that are to be monitored by the associated debugging procedure.
9. The DEBUG procedure is executed only if the program includes WITH DEBUGGING MODE in the Source-Computer paragraph and if the [iscobol.use_for_debugging (boolean) \*](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#general-runtime-configuration) configuration property is set to true in the configuration.
10. It’s possible to specify a DEBUG procedure for specific paragraphs and sections as well as a generic DEBUG procedure for all the paragraphs and sections in the program. Use the syntax “ON ProcedureName”, where ProcedureName is the name of a paragraph or section, to attach a DEBUG procedure to a specific paragraph or section. Use “ON ALL PROCEDURES” to attach the same DEBUG procedure to all the paragraphs and sections in the program.
11. Within a DEBUG procedure the special register DEBUG-NAME is set to the name of the current paragraph or section.

### Examples

In the DECLARATIVES section, create the file if it doesn’t exist

```cobol
       ...
       PROCEDURE DIVISION.
       DECLARATIVES.
       FILE1-ERR SECTION.
           USE AFTER STANDARD ERROR ON file-1.
       FILE1-ERR-LOGIC.
           if file-status = "35"
              open output file-1
           end-if.
       FILE1-ERR-EX.
           exit.
       END DECLARATIVES.
       MAIN-LOGIC.
           open i-o file1.
           ...
```
