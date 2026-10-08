## Compiler

### Overview

The job of any compiler is to convert human-readable source code to an object that a computer can run. To accomplish this, isCOBOL performs the following steps:

1. The COBOL source code is translated to a Java source code. The name of the Java source file is obtained by converting the name of the COBOL source file to upper-case and replacing dashes by underscores. For example, A COBOL source file whose name is *Hello-World.cbl* generates *HELLO_WORLD.java*.
2. If no errors occur, then Compiler looks for an existing class file (e.g. *HELLO_WORLD.class*) and deletes it, if it exists.
3. Finally, the Compiler compiles the Java source code generating a Java class file. The Java source code is then deleted unless you use the [-jj](./Compiler-Options#jj) option.

There are situations in which more than one class file is generated.

- If the source code contains PERFORM THREAD statements, a class file for each thread is generated in addition to the program class file. These classes are named using a progressive number (*program$1, program$2*, ..., etc).
- If the source code contains the THREAD-LOCAL-STORAGE SECTION or the IS THREAD-LOCAL clause, an additional class is generated. This class is named using the "_my_thloc_stg" suffix (i.e. *program$_my_thloc_stg*).
- If the program is object-oriented, a class file for each method is generated in addition to the program class. These classes are named using the method name (i.e. *program$method*).
- If the -big compiler option is used, some class files are generated in addition to the program class file. These classes are named using the program name, the “inner” and “CONST” keywords, and progressive numbers. The –big behavior can be configured by the [iscobol.compiler.max_constants \*](../Configuration/Configuration-Properties#compiler_max_constants) and [iscobol.compiler.max_paragraphs \*](../Configuration/Configuration-Properties#compiler_max_paragraphs) properties.
- if the program contains ESQL statements with more than 700 host variables, additonal classes are generated (each containing a maximum of 700 variables). These classes are named using a progressive number (program$1, program$2, ..., etc). This behavior can be configured by the [iscobol.compiler.max_hostvars \*](../Configuration/Configuration-Properties#compiler_max_hostvars) property.
- If the source code contains SORT-RETURN and/or SORT-MESSAGE special registers, an additional class is generated. The class is named *program*$SortAbort.
- If either the -d compiler option or the -dx compiler option is used and the program uses inline data items or items declared through the DECLARE statement, an additional class for each scope where these data items are used is generated. These classes are named using the “LocalVars” suffix and a progressive number (e.g. program$LocalVars$1, program$LocalVars$2, ..., etc).

The command to execute the compiler is:

```cobol
iscc Options SourceCode
```

**Note**: On Windows this command should be launched from inside the isCOBOL Shell. Otherwise you need to set the ISCOBOL and ISCOBOL_JDK_ROOT environment variables before using iscc.

### Compiling multiple source files at once

The isCOBOL compiler supports the \* wildcard in the SourceCode parameter.

For example, the following compilations:

```cobol
iscc prog1.cbl
iscc prog2.cbl
iscc prog3.cbl
iscc prog4.cbl
```

can be done all at once with the command:

```cobol
iscc prog*.cbl
```

When you compile multiple source files with one command and a COBOL error occurs (for example "[Unexpected token](../../../Appendices/Compiler-Errors)), the Compiler continues to the next source file. However, if a Java error occurs (for example "[code too large](../../../Appendices/Compiler-Errors)"), the Compiler stops and won't compile subsequent source files.

### Automatic compilation of referenced COBOL classes

If a COBOL program references a COBOL class with object oriented syntax, the COBOL class is automatically compiled if necessary.

Consider the following source files, for example:

prog1.cbl

```cobol
       program-id. prog1.
       configuration section.
       repository.
           class class1 as "class1".
       procedure division.
       main.
           invoke class1 "method1".
           goback.
```

class1.cbl

```cobol
       class-id. class1 as "class1".
       identification division.
       factory.
       procedure division.
       identification division.
       method-id. method1 as "method1".
       procedure division.
       main.
      *    method code here
       end method method1.
       end factory.
```

When *prog1.cbl* is compiled, if *CLASS1.class* is not found in the Classpath, then the Compiler tries to compile *class1.cbl* before proceeding with the compilation of *prog1.cbl*.

This feature can be disabled by adding the [-noarcc](./Compiler-Options#noarcc) option to the Compiler command line.

### Exit status

The Compiler returns 0 if the compilation is OK and a number greater than 0 if the compilation fails. When you compile multiple source files at once, if any of these files produce severe errors, then the return code will be greater than zero.

The following table lists the possible exit status codes returned by the Compiler:

| **Exit Code** | **Meaning** |
| :--- | :--- |
| 0 | No errors |
| 1 | An error occurred during the compilation from Java source to class file. <br>Refer to [Common Java compiler errors](../../../Appendices/Compiler-Errors) for a list of common Java errors and how to resolve them. |
| 4 | Compilation failed due to Severe errors |
| 5 | Invalid command line (e.g. unsupported option) |
