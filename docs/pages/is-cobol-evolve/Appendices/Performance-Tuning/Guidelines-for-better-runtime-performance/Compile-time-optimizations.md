### Compile-time optimizations

The first area on which to focus the attention when tuning performance is the compilation of the source files. Starting with small and optimized classes is an important step that will help improving performance at run time.

#### Latest Compiler

The isCOBOL Compiler is constantly improved so, after you upgrade your isCOBOL SDK, it’s good practice to re-compile your programs using the current Compiler.

#### Smaller classes

Smaller classes are loaded faster that means less time is required to start the program the first time.

The size of a Java class file is influenced by additional information that are stored for debug purposes. In order to obtain the smaller class files you can choose to remove these information. The disadvantage is that error messages and exception stacks produced by the Framework at run time will be more poor. To remove debug information:

- avoid using [-d](../../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#d) and [-dx](../../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#dx) compiler option

This will cause debug information to be excluded from the class. If you were using [-big](../../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#big) option along with [-d](../../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#d) and [-dx](../../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#dx) because of a "too many constants" javac error, try avoiding [-big](../../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#big) as well. The “too many constants” error might not occur anymore when the class is smaller due to the lack of debug information.

- avoid using [-big](../../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#big) option if not necessary

Generally speaking the [-big](../../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#big) option should be used only when necessary. If and only if the compilation of a program fails with the "too many constants" or "code too large" Java errors, then [-big](../../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#big) should be considered. Compiling a program with [-big](../../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#big) despite it’s not necessary generates additional classes and makes the program slower at run time. Consider that the [-big](../../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#big) option can be included at the top of the source in the programs that require it, using the IMP OPTION directive.

```cobol
           >>IMP OPTION "-big"
       IDENTIFICATION DIVISION.
       PROGRAM-ID. HugeProgram.
```

In this way you avoid putting [-big](../../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#bg) in your compiler scripts with the risk of using this option also for programs that don’t need it.

- add -jo=-g:none to the compiler options

This will cause Java source references to be excluded from the class.

**Warning** - as side effects, the Code Coverage and Unit Test features will not work correctly and the exception stacks shown by the runtime will provide less information.

- add [-ostrip](../../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#ostrip) to the compiler options

This will cause COBOL variables description to be excluded from the class.

**Warning** - as a side effect, all the exception messages where a variable name is usually shown will not include the variable name anymore, hence features like [iscobol.array_check \*](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#array_check), [iscobol.checkdiv \*](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#checkdiv) and [iscobol.substring.check \*](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#substring_check) will be less helpful.

- Consider removing [COPY](../../../Language-Reference/Compiler-Directing-Statements/COPY) RESOURCE statements from your source files, especially if you’re including the same resource file in several programs.

The time spent for the class loading is the sum between the time spent to read the class file from disk and the time spent to register class definitions in the metaspace. With that said, you should optimize not only the size in KB on disk, but also the amount of items and methods in the class. This kind of information can be obtained by processing the class with [javap](https://docs.oracle.com/javase/8/docs/technotes/tools/windows/javap.html).

#### Smaller methods

Java performs better if methods are small. It’s better to have a lot of small methods rather than few huge methods. This rule doesn’t affect only object oriented programming; consider that each paragraph of a standard COBOL program becomes a method in the compiled Java class. If your program is made of huge paragraphs, in order to split them in multiple small methods, you might consider compiling with [-sns=Statements](../../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#sns) option. Use rather low values, like 200.

#### Relaxed size checking on computational data-items

The [-dz](../../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#dz) compiler option improves performance by relaxing size checking on computational numeric items.

#### Arithmetic operations on integers

If you need to perform additions or subtractions on integer numeric items (for example incrementing a counter), define your item as:

```cobol
77 num OBJECT REFERENCE "int".
```

instead of:

```cobol
77 num PIC 9(4).
```

This will cause isCOBOL to use a primitive int to store the data instead of creating an object instance for it, causing the arithmetic operation to be faster.

For PERFORM VARYING cycles the best performance is obtained through the inline declaration of the counter as a primitive numeric type. For example:

```cobol
       ...
       77 cnt object reference "int"
       ...
       perform varying cnt from 1 by 1 until cnt > max-iterations
       ...
```

performs well, but:

```cobol
       ...
       perform varying cnt as "int" from 1 by 1 until cnt > max-iterations
       ...
```

performs better.
