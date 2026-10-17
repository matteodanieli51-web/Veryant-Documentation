## isCOBOL Compiler Enhancements

isCOBOL Evolve 2018 R2 implements new compiler options and new syntax to better support COBOL applications that use DBCS (Double Byte Character Strings) such as Japanese, Chinese and Korean without Unicode encoding.

The Compiler can now automatically compile classes used by the program being compiled.

### New compiler options

- -ccbas to count bytes instead of characters for fixed (aka ANSI) source code

This option helps when compiling source files that contain DBCS text. By default, the isCOBOL compiler counts characters in order to determine the text positions of the various areas of the Fixed (ANSI) COBOL source format, while Asian compilers count the bytes instead. Source files written for Asian COBOLs may not cleanly compile without the –ccbas option.

- -cndbcs to use the DBCS instead of Unicode in PIC N without the USAGE NATIONAL clause.

A data item such as:

```cobol
77 n-item pic n(10).
```

stores data in UTF-16 Big Endian by default. When compiling the program with –cndbcs data will be stored using the current encoding. If both Unicode and DBCS data items are needed in the same application, they can be declared as follows:

```cobol
77 dbcs-item    pic n(10). 
77 unicode-item pic n(10) USAGE NATIONAL.
```

### Automatic class compilation

When you compile COBOL programs (PROGRAM-ID) or COBOL classes (CLASS-ID) that reference additional COBOL classes (CLASS-ID), the Compiler now automatically compiles the referenced source code.

For example, considering the following three source code files:

Prog.cbl:

```cobol
          identification division.
          program-id. Prog.
          environment division.
          configuration section.
          repository.
              class Class2 as "Class2".
          procedure division.
          main.
              Class2:>method1().
              goback.
```

Class1.cbl:

```cobol
       identification division.
       class-id. Class1 as "Class1".
       identification division.
       factory.
       procedure division.
       identification division.
       method-id. method1 as "method1".
       procedure division.
       main.
      * do something here 
       end method.
       end factory.
```

Class2.cbl:

```cobol
       identification division.
       class-id. Class2 as "Class2" inherits Class1.
       environment division.
       configuration section.
       repository.
           class Class1 as "Class1". 
       identification division.
       factory.
       procedure division.   
      *add some methods here    
       end factory.
```

When compiling Prog.cbl, the Class1.cbl and Class2.cbl source files are automatically compiled, both when compiling from the IDE or from the command line.

### SYSIN and SYSOUT mapping

Two new compiler properties have been added to allow you to map the system’s standard input (SYSIN) and standard output (SYSOUT) to disk files.

```cobol
iscobol.compiler.indd=<filename>
iscobol.compiler.outdd=<filename [recsize] [filetype]>
```

For example, let’s consider using the following compiler configuration properties:

```cobol
iscobol.compiler.indd=input.txt
iscobol.compiler.outdd=output.txt
```

If a program is compiled with those properties, it will read a line from the file input.txt instead of accepting the user input when it performs an ACCEPT dest-item FROM SYSIN. When the program performs a DISPLAY … UPON SYSOUT, it will write a line to the file output.txt instead of printing on the console.

To allow programs to use program-specific input and output files, these’ two properties can also be used as compiler directives inside the source code. For example:

```cobol
      $SET INDD "input-prog1.txt"
      $SET OUTDD "output-prog1.txt"
       program-id. prog1.
```
