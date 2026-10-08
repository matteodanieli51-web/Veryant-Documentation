## isCOBOL Compiler Enhancements

isCOBOL Evolve 2017 R1 includes several changes to the isCOBOL Compiler that improve productivity and simplify migration from other COBOLs.

### Compiler optimizations

Recompiling programs with 2017 R1 creates more optimized classes that use less memory and provide faster class-loading times. This optimization is enabled by default, no options required.

An additional compiler option, –oe, has been added to optimize the java code for the EVALUATE statement with string literals. This takes advantage of the Java statement “switch” on Strings, supported by JDK 1.7.

### Compiler warning detection

A new compiler option, -whttp, is now available to show Warnings for unsupported statements under isCOBOL EIS html based solution, useful when developing isCOBOL Mobile applications. This helps in migrating existing COBOL programs to web or Mobile Apps.

### Enhanced compatibility with other COBOLs

The WAIT LOCK clause in READ statements is now supported by the compiler, and is currently implemented in JIsam and C-tree interfaces, to fully support the Micro Focus COBOL syntax.

A new compiler option, -crlk, has been implemented to emulate the RM-COBOL style lock modes, whose behavior depends on DECLARATIVES for specific files.

A new configuration property,

```cobol
iscobol.ccopy.client_temp_as_base_dir=true
```

has been added, which will use the client’s temp folder in C$COPY when copying files in Thin Client architecture. This enhances compatibility with ACUCOBOL-GT.
