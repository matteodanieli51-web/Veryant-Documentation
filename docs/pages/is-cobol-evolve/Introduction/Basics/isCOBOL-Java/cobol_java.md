## isCOBOL and Java

isCOBOL Evolve is tightly integrated with Java technology. In a nutshell, the isCOBOL Compiler translates COBOL source code into Java classes that are executed with the Java Virtual Machine (JVM).

Developers continue normal COBOL programming with isCOBOL Evolve. Behind-the-scenes, the isCOBOL Compiler translates COBOL source code into Java source code every time you compile. The isCOBOL Compiler feeds this Java source code to the Java compiler, which produces Java bytecode objects which can be executed with a JVM. This process is transparent for developers.

**NOTE** - Although the Java source code is temporary intermediate output, you can compile with a special “-jj” option if you ever want to retain this code.
