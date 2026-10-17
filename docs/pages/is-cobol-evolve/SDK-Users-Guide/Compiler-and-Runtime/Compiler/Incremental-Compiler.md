### Incremental Compiler

The Incremental Compiler is a compilation strategy in which only modified programs and programs that include modified COPY files get recompiled. When you compile your entire source code base using this new feature, the incremental compiler will result in a faster compilation step. The main advantage of this strategy is the performance boost with massive compilations.

The incremental compiler is enabled by the [\-incr=op](\) compiler option.

The op parameter can assume one of these values:

| | |
| --- | --- |
| build | Compile only those programs that had code changes after the previous compilation. <br>The first compilation done with this option generates a file named *incr.iscc* in the current directory. The *incr.iscc* contains the list of all the source files (main sources and copybooks) that were involved in the compilation.The next compilation done with this option checks the source files listed in the *incr.iscc* file against the corresponding class files and compiles only those source files whose last modification date is greater than the last modification date of the class. A different modification date of a source file or a copybook referenced by that source file triggers the compilation of the source file. <br>The name and location of the *incr.iscc* file can be customized by passing an alternative pathname after the build option with a semicolon separator, i.e. <br>*build;/opt/cust.iscc* |
| clean | Removes the *incr.iscc* file so that the next compilation with the build option will behave like the first compilation. You should use this option only if there’s a change in the compiler options or properties (i.e. if you added a new compiler option or a new regular expression) and so a complete compilation is required. <br>The name and location of the *incr.iscc* file can be customized by passing an alternative pathname after the clean option with a semicolon separator, i.e. <br>*clean;/opt/cust.iscc* |
| clean,build | Perform ‘clean’ then ‘build’. <br>The name and location of the *incr.iscc* file can be customized by passing an alternative pathname after the clean,build option with a semicolon separator, i.e. <br>*clean,build;/opt/cust.iscc* |
| | |

**Note** - You can use the [\-verbose](\) option to know which source files has been recompiled and which ones have not.

#### Examples

Compile all the source files in the src folder of myapp with the incremental compiler:

```cobol
iscc -od=/dev/myapp/obj -sp=/dev/myapp/cpy -incr=build /dev/myapp/src/*.cbl

```

Compile all the source files of two applications with the incremental compiler by sharing the same custom iscc file:

```cobol
cd /dev/myapp1
iscc -od=obj -sp=cpy -incr=build;/dev/my.iscc src/*.cbl
cd /dev/myapp2
iscc -od=obj -sp=cpy -incr=build;/dev/my.iscc src/*.cbl
```
