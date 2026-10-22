## Compatibility with other COBOLs

To enhance the compatibility with MicroFocus and IBM COBOL, a new compiler configuration iscobol.compiler.command_line_linkage=true can be used to preload a linkage data item in the main program. This allows passing a command line parameter directly to a linkage data item in the executed program, and the parameters received in chaining are automatically set in the LINKAGE SECTION.

Also, a compiler directive $SET is now available to specify this feature on a specific COBOL source program, for example:

```cobol
      $SET "COMMAND_LINE_LINKAGE" "1".
       PROGRAM-ID. MY_PROG. 
```

A possible use of this feature, besides compatibility with other dialect, is when running a batch program that is usually called from another COBOL program, which passes needed arguments in the LINKAGE SECTION. If such program needs to be run stand-alone from the command line, using the above option will allow to specify the arguments in the command line, and they will be copied from the chaining parameters to the LINKAGE SECTION, allowing it to run unmodified.

Binary and Octal values can now be also specified using the MicroFocus syntax b"binaryValue" and o"octalValue" when compiling with –cm compiler option. Without this option the isCOBOL compiler only supports the equivalent syntax B#binaryValue are O#octalValue.

This is a snippet of code now supported:

```cobol
       78  CONST-BINARY value B"101".
       78  CONST-OCTAL  value O"12345670".
 
       MOVE B"101"      TO MYVAR1.
       MOVE O"12345670" TO MYVAR2.
```
