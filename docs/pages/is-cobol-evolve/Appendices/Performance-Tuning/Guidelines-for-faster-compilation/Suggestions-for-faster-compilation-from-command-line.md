### Suggestions for faster compilation from command-line

The isCOBOL Compiler is a Java program. Every time you launch the Compiler, a JVM must be initialized. This operation may take a couple of seconds. If this couple of seconds is spent for each program, then the compilation of a series of programs may take several seconds. For this reason it’s good practice to compile multiple programs at once, using wildcard characters on the command line. For example a command like:

```cobol
iscc src/prog*.cbl
```

Takes less time than:

```cobol
iscc src/prog01.cbl
iscc src/prog02.cbl
iscc src/prog03.cbl
iscc src/prog04.cbl
iscc src/prog05.cbl
iscc src/prog06.cbl
iscc src/prog07.cbl
iscc src/prog08.cbl
iscc src/prog09.cbl
iscc src/prog10.cbl
```

The display on console of the Compiler output has a little cost. If you wish to save more seconds in the compilation of multiple programs, you should consider redirecting the Compiler output to a file that you will review when the Compiler terminates, e.g.

```cobol
iscc src/prog*.cbl 2>/tmp/iscc.out 1>&2
```

The Compiler can adopt an incremental compiling strategy, so that it will compile only those programs that had code changes since the last compilation. The incremental compiler is enabled by the [-incr=op](../../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#incr) option.

In conclusion, the command that provides the best performance at compile time is:

```cobol
iscc -incr=build src/prog*.cbl 2>/tmp/iscc.out 1>&2
```
