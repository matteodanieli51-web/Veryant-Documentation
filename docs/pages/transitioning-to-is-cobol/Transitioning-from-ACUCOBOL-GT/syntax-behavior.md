## Syntax and Behavior

- The PROGRAM-ID paragraph must be explicitly declared, and the name of the program must match the name of the source file.
- If a paragraph is declared, then its parent section must be declared as well. For example, INPUT-OUTPUT SECTION must be declared above FILE-CONTROL.
- Only numeric data items can be used to receive the special register CRT STATUS.
- USAGE POINTER data items are translated into numeric items and cannot be passed to external C language functions, unless the “-cp” compiler option is used. If “-cp” is used, pointers are natively handled and can be passed to external C language functions.
- The LOCK THREAD and UNLOCK THREAD statements are not supported. Synchronization can be achieved using the [SYNCHRONIZED](\) statement.
- The CANCEL SORT instruction is not supported.
- A Picture description cannot be distributed on multiple lines. The following code would not compile:

```cobol
       01 COM-02                 PIC XBXBXBXBXBXBXBXBXBXBXBXBXBXBX
      -    BXBXBXBXBXBXBXBXBXBXBXBXBXBXBXBX.
```

- OCCURS indexes are checked only at runtime, not at compile-time.
- If the JUSTIFIED clause is declared for a control, it must appear immediately after the PICTURE clause.
- It's not possible to ACCEPT or DISPLAY a control that has subordinate controls directly below it. Consider the following screen, for example:

```cobol
01  SCREEN.
    03 FR FRAME.
       05 EF ENTRY-FIELD.
```

You can ACCEPT and DISPLAY EF, but you can’t ACCEPT or DISPLAY FR. In order to ACCEPT or DISPLAY FR, you should define it at the same level of EF.

- The TERMINAL-ABILITIES structure set by ACCEPT FROM TERMINAL-INFO has the following differences between Acu and isCOBOL:
  - The TERMINAL-NAME field is set to “Windows” by Acu while isCOBOL sets it to “xterm”;
  - The CLIENT-MACHINE-NAME field includes the process ID in Acu while isCOBOL returns only the machine name.
- The SYSTEM-INFORMATION structure set by ACCEPT FROM SYSTEM-INFO has the following differences between Acu and isCOBOL:
  - The OPERATING-SYSTEM returns the full name of the operating system in isCOBOL. Such name is usually truncated due to the field picture.

The STATION-ID field is not set by the isCOBOL runtime, but its value can be set via configuration.

- The "RECEIVE MyMessage FROM ANY THREAD" statement must include the NO WAIT statement, or its equivalent, BEFORE TIME 0. Any other timeout is not supported. For example, the following code below will not compile:

```cobol
RECEIVE MyMessage FROM ANY THREAD
RECEIVE MyMessage FROM ANY THREAD BEFORE TIME 1
```

It must be changed to:

```cobol
RECEIVE MyMessage FROM ANY THREAD NO WAIT
RECEIVE MyMessage FROM ANY THREAD BEFORE TIME 0
```

- ActiveX support is not provided. Third-party tools must be used. Contact your Veryant representative for more information.
- Data items defined as USAGE UNSIGNED-LONG or USAGE SIGNED-LONG are 8 bytes long. To declare a 4-byte native data item, it must be PIC 9(9) COMP-5 or PIC S9(9) COMP-5.
- If used, the ENTRY Statement must be declared at the beginning of the paragraph.
- Items defined in the LINKAGE section must be referenced also in the USING phrase. In ACUCOBOL-GT it is not mandatory. You can use the [\-wlu](\) compiler option to find out this kind of issue in the source files.
- Subordinate items of a group item in the LINKAGE section cannot be referenced in the USING phrase. The entire group must be referenced. The following syntax is not supported by isCOBOL:

```cobol
LINKAGE SECTION.
01 GROUP-ITEM.
   03 ITEM-1 PIC XX.
   03 ITEM-2 PIC X(10).
 
PROCEDURE DIVISION USING ITEM-2.
```

The following is supported instead:

```cobol
LINKAGE SECTION.
01 GROUP-ITEM.
   03 ITEM-1 PIC XX.
   03 ITEM-2 PIC X(10).
 
PROCEDURE DIVISION USING GROUP-ITEM.
```

- A window handle defined as PIC X(10) cannot be redefined by a USAGE HANDLE OF WINDOW item. However isCOBOL allows MODIFY on PIC X(10) as well as on USAGE HANDLE items.
- [isCOBOL Reserved Words](\) cannot be used as variable or constant names by default. In order to use them as variable or constant names, they must be treated as common words by using -rc compiler option.
- ACCEPT SYSTEM-INFORMATION FROM SYSTEM-INFO returns the complete name of the Operating System.
- File-Status codes are ANSI-2002 compliant by default. To use ANSI-85 codes instead, add the following line to the isCOBOL properties file:

```cobol
iscobol.file.status=com.iscobol.io.FileStatus85
```

- Environment variables that belong to the system environment can be retrieved only when using a Java Virtual Machine version 1.5 or above.
- The CALL RUN statement creates a new thread. Environment variables and external variables are initialized to their default value.
- The STOP THREAD statement requires a YIELD statement to work correctly, otherwise, the thread will not be released. For example:

```cobol
           perform thread show-time handle t1.
           ...
           STOP THREAD t1.
           ...
           perform thread show-time handle t1.
           ...
       show-time.
           perform until 1 = 2
             accept w-time from time
             display w-time line 2 pos 70
             YIELD
           end-perform.
```

- If your application has recursive programs, and you don’t want the data shared between different copies of the same program, add the following line to your configuration file:

```cobol
iscobol.recursion_data_global=False
```

- The FOR ANY THREAD clause in WAIT statement is not supported.
- The syntax "-D" at the beginning of a physical file name is not supported.
- The syntax "-Q" at the beginning of a physical file name doesn’t support CHARSET and COLS options.
- In ACUCOBOL-GT USAGE HANDLE items are automatically synchronized to offsets that are a multiple of 4. It doesn’t happen in isCOBOL. This difference might cause problems if USAGE HANDLE items are part of group items like for example record definitions, as it changes the size of the group item. In order to have USAGE HANDLE synchornized, you should change

```cobol
01 my-group.
   ...
   05 my-item USAGE HANDLE.
   ...
```

to

```cobol
01 my-group.
   ...
   05 my-item PIC 9(9) COMP-5 SYNC.
   ...
```

- Copybooks whose content is not terminated by a dot are not allowed. There are two solutions
  - add a dot after the last line of the copybook content, or
  - use two dots to close the COPY statement (e.g. COPY "mycopy.prd"..)
- When a numeric data-item is used as configuration variable value in a SET ENVIRONMENT statement, Acucobol stores leading zeroes as well, isCOBOL instead stores only the numeric value, unless you compile with the -cdlz option.
- MOVE CORRESPONDING can have only one receiver data item in isCOBOL.
- The help cursor mode in help automation is not supported.
- The statement WRITE print-record AFTER ADVANCING 0 LINES doesn’t reset the caret position in isCOBOL, hence the new text is appended to the previous text instead of overwriting it.
- ACUCOBOL-GT allows you to nest embedded procedures several times before having issues. In isCOBOL, nesting embedded procedures might cause the program to hang at an ACCEPT of the screen. In order to identify these problem areas, set [iscobol.gui.nested_embedded_proc_check (boolean)*](\) to true in the configuration.
- ACUCOBOL-GT allows you to call COBOL programs and C functions on the client PC in a thin client environment by prefixing the routine name with @[DISPLAY]:. The DLL_CONVENTION setting is considered also by the client-side call. The same behavior can be obtained in isCOBOL by using the CALL CLIENT statement for both the DLL_CONVENTION setting and the routine name. The following syntax

```cobol
           SET ENVIRONMENT "DLL_CONVENTION" TO "1"
           CALL "@[DISPLAY]:GetComputerNameA"  
```

can be translated to

```cobol
           CALL CLIENT "C$SETENV" USING "DLL_CONVENTION" "1"
           CALL CLIENT "GetComputerNameA" 
```
