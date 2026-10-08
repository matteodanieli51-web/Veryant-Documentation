## isCOBOL Compiler

isCOBOL Compiler 2024 R2 supports incremental compilation through new options as well as implementing COBOL Boolean and USAGE BIT syntax. It also improves the OOP (Object Oriented Programming) syntax by allowing the VALUE clause in object reference data items.

### Incremental compilation

The Incremental Compiler is a compilation strategy in which only programs with modified text, COPY files, or INCLUDE files get recompiled. The changes will be merged with previously compiled code to form new Java code. When you compile your entire source code base using this new feature, the incremental compiler will result in a faster compilation step. The main advantage of this strategy is the performance boost with massive compilations; for example, when using CI (Continuous Integration) tools where source code in often recompiled to keep classes up to date with changes made in source code during development. Until the previous release a complete recompilation was done running a command such as:

```cobol
iscc -options *.cbl
```

To enable the incremental compilation, use the new -incr option passing the value “build”, such as:

```cobol
iscc -options -incr=build *.cbl
```

The build operation uses the incr.iscc file contained in the current folder to check if a source file needs to be recompiled because of a change after the last successful compilation. The compiler checks the timestamp of the source file and compares it to the timestamp of the .class file.

The incr.iscc file name and location can be customized by passing an alternative pathname after the build and clean options with a semicolon separator, for example:

```cobol
iscc -options -incr=build;..\resources\CompInfo folder1\*.cbl
```

uses CompInfo from ..\resources instead of incr.iscc from the current directory.

Only one alternative pathname can be supplied.

The use of a customized pathname allows you also to reuse the same file for different compilations, such as

```cobol
cd source1
iscc -options -incr=build;..\resources\CompInfo folder1\*.cbl
cd ..\source2
iscc -options -incr=build;..\resources\CompInfo folder2\*.cbl
```

To force full recompilation, the clean parameter can be passed to the -incr option, for example:

```cobol
iscc -options -incr=clean,build *.cbl
```

The values passed to the -incr option are equivalent to the isCOBOL IDE Eclipse plugin, where you have the options to build the project or clean and then build. Now this feature is also available to developers. If you prefer to use a command-line approach and batch compilation typical for massive build operations, you can now take use incremental compilation.

### COBOL Boolean and USAGE BIT support

A new type of PICTURE named 1 is supported to manage Boolean data items. Boolean variables are typically used for flag or a list of flags data items that can be set to true or false and then used in conditions in the program logic. To simplify migration of numeric variables to Boolean variables, two new functions are supported.

- INTEGER-OF-BOOLEAN to convert an integer value to a Boolean value
- BOOLEAN-OF-INTEGER to convert a Boolean value to an integer value

The PICTURE 1 also supports the USAGE BIT clause to manage the variable with bit series.

This is an example on using the Boolean data type:

```cobol
       ...
       01 bit-item PIC 1(8) USAGE BIT.
       01 num-item PIC 9(5).
       01 num-item-2 PIC 9(5).
       ...
           MOVE 123 to num-item
           MOVE FUNCTION BOOLEAN-OF-INTEGER(num-item, 8) TO bit-item.
           display bit-item | this shows 01111011
           if bit-item(1:1) | this is false
              display "bit 1 is true"
           else
              display "bit 1 is false"
           end-if
           if bit-item(2:1) | this is true
              display "bit 2 is true"
           else
              display "bit 2 is false"
           end-if
       ...
           COMPUTE num-item-2 = FUNCTION INTEGER-OF-BOOLEAN (bit-item).
           display num-item-2 | this shows 123
```

### Additional compiler options

The additional compiler options implemented in this release are: -brand and -csqq2.

The -brand="value" option stores custom information in the class. This feature is useful when a piece of information needs to be stored in the .class file at compile time and can then be accessed by the running code.

For example, a code snippet like:

```cobol
           move function compiled-info() to w-compinfo
           initialize w-count
           inspect w-compinfo tallying w-count for all "-brand="
           if w-count = 0
              display "Program compiled without -brand option"
           else
              inspect w-compinfo tallying w-count 
                    for characters before "-brand="
              add 7 to w-count 
              move w-compinfo(w-count:4) to w-myvers convert
           end-if
           if w-myvers > 132
              call "newprog" using w-params
           end-if
```

will execute the CALL “newprog” only if the value passed to the -brand option is > 133, making the execution dependent on how the program has been compiled. Compiling with these commands:

```cobol
iscc -brand=132 MYPROG.cbl
```

or:

```cobol
iscc -brand=133 MYPROG.cbl
```

makes the difference. To check for the brand information in a class, run the following command:

```cobol
iscrun -info MYPROG
```

This will return the information that has been stored along with all other compiler options:

```cobol
...
Compile flags: -g -oe -brand=133 -b -cghv
...
```

The preprocessor can also get this information by using the configuration iscobol.compiler.custompreproc. This will allow for different preprocessing logic to be applied depending on the value set with the -brand option.

The -csqq2 option is used to switch double and single quotes in ESQL code. This option is useful in sources where the quotes have not been written in the ESQL standard ruleset. By default, double quotes are used for identifiers and single quotes are used for alphanumeric values. But in cases where the sources contain the opposite situation, for example:

```cobol
EXEC SQL 
     INSERT INTO 'MixedCase' ('CharCol', 'NumCol') 
          VALUES ("abc", 1)
END-EXEC
```

Compiling with the new -csqq2 option will treat the code as:

```cobol
EXEC SQL 
     INSERT INTO "MixedCase" ("CharCol", "NumCol") 
          VALUES ('abc', 1)
END-EXEC
```

The SQL code will be executed correctly and the standards for JDBC drivers.

### VALUE clause in object reference

The VALUE clause is used in working-storage data items to initialize a value at the beginning of the program. Starting from 2024 R2, the VALUE clause is also supported for object reference, allowing initialization at program startup for this kind of data as well.

Code like the following:

```cobol
       repository.
           class jstring as "java.lang.String"
           class jint as "java.lang.Integer"
       ...
       77 j1 object reference jstring value jstring:>new("Value1").
       77 j2 object reference jstring value "Value2".
       77 jint1 object reference jint value jint:>new(123).
       77 jint2 object reference jint value 456.
```

Will instantiate the 4 objects already with the provided values. Basically, it is the same as executing the following SET statements at the beginning of the procedure division:

```cobol
           set j1 = jstring:>new("Value1")
           set j2 = "Value2"
           set jint1 = jint:>new(123)
           set jint2 = 456
```
