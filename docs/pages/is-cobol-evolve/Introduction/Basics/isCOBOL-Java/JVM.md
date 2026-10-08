### The Java Virtual Machine (JVM)

The JRE contains the JVM which executes Java bytecode objects such as those produced by the isCOBOL Compiler. The JVM is native binary executable machine code. It is located in one or more Dynamic Link Libraries (DLLs) on Windows or shared libraries on UNIX.

The JRE provides an executable named “java” that uses the JVM to execute a main program. After compiling with the isCOBOL Compiler, you can execute a COBOL main program named MAINPROG with “java MAINPROG” (The name must be in all uppercase because Java class names are case sensitive).

**NOTE** - The JVM DLL or shared object can also be used directly by other executables such as a Java Enterprise Edition (Java EE) server or a transaction processor.
