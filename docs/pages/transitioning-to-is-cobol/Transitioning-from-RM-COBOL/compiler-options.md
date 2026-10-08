## Compiler options

- When compiling source files of a RM/COBOL application, the following options should always be used:

```cobol
-cr -ce=cbl -crko -crlk -dcii -dvext=32 -pt0 -va
```

- Many RM/COBOL applications imply the SIGN IS TRAILING SEPARATE clause for signed data items. RM/COBOL version 1.6 behaved this way. RM/COBOL version 2.x can optionally behave this way. If the application was written originally with version 2.0 or later, then it might not behave this way.

You will need to examine the source to see if the "S" picture element counts in the size of an item or not. It is important to determine whether or not the sign counts in the size, particularly if you plan to convert existing data files, otherwise records loaded from RM/COBOL files may not match the record layout described in the program.

To imply the SIGN IS TRAILING SEPARATE clause with isCOBOL, use the following compiler option:

```cobol
-ds
```

- With RM/COBOL, the default intensity during ACCEPT for UNIX machines is high intensity and for MS-DOS machines is low intensity. With isCOBOL every ACCEPT uses low intensity by default. If you need to force a default high intensity on ACCEPT, use the following compiler option:

```cobol
-vh
```

- Many RM/COBOL applications use a special mode of memory management. In this mode, all of the currently active programs must fit in 64K bytes, but programs that are not currently active need not. This has the effect of dynamically canceling inactive subprograms as needed to gain memory. To obtain a similar behavior with isCOBOL, use the following compiler option:

```cobol
-zi
```
