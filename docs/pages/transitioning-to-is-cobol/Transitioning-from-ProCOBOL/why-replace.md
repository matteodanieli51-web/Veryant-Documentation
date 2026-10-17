## Why replace Pro*COBOL?

Pro*COBOL is a precompiler that translates Embedded SQL code into calls to dedicated API functions written in C.

Since isCOBOL is able to call C functions, you could consider maintaining Pro*COBOL and using the isCOBOL Compiler to compile the translated source file (program.cbl) instead of the original source file (program.pco).

However, with isCOBOL you can execute Embedded SQL statements via JDBC, which is more natural with the Java core of isCOBOL.

Here is a list of advantages to discarding the Pro*COBOL precompiler in favor of a direct support of Embedded SQL via JDBC:

### One step compilation

The isCOBOL Compiler understands the Embedded SQL code without the need of precompiling. You can directly compile the original source file (program.pco).

### Clearer debug

Since no code translation occurred, the isCOBOL Graphical Debugger shows the Embedded SQL code exactly as you wrote it, allowing you to monitor the host variables used in the EXEC SQL blocks.

### Simpler installation

Pro*COBOL requires the Oracle Client installed on the machine where the program runs. The Oracle Client includes native libraries and therefore it must be of the same architecture of the runtime system (e.g. a 64 bit isCOBOL requires a 64 bit Oracle client).

When working with JDBC instead, you just need the JDBC driver library. This is usually a single jar file written in Java without native dependencies, so it is portable on every system and architecture.

### Thread safety

Pro*COBOL is not thread safe so it’s not advisable to use it in application server environments like the isCOBOL Thin Client or Tomcat.
JDBC drivers instead are thread safe and therefore suitable to be used in application server environments.

### Portability to other RDBMS

If the COBOL application uses standard SQL rather than Oracle specific SQL syntax, you can easily run it on other RDBMS (for example MySQL, PostgreSQL or Microsoft SQL Server). Just add the proper JDBC driver library to the Classpath and adjust the value of iscobol.jdbc.driver and iscobol.jdbc.url configuration properties.

Programs precompiled with Pro*COBOL instead are suitable only for the Oracle database.
