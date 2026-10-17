## SQLJ

### Introduction

SQLJ enables programmers to embed SQL statements in Java code in a way that is compatible with the Java design philosophy. A SQLJ program is a Java program containing embedded SQL statements that comply with the International Standardization Organization (ISO) standard SQLJ Language Reference syntax. The standard covers only static SQL operations, which are predefined SQL operations that do not change in real time while a user runs the application. Typical applications contain more static SQL operations than dynamic SQL operations.

SQLJ consists of a translator and a run-time component and is smoothly integrated into your development environment. You can run the translator to translate and compile the code in a single step using the sqlj utility. The translation process replaces embedded SQL statements with calls to the SQLJ run time, which processes the SQL statements. In ISO standard SQLJ this is typically, but not necessarily, performed through calls to a JDBC driver. To access a database, you would typically use a JDBC driver. When you run the SQLJ application, the run time is started to handle the SQL operations.

The SQLJ translator is conceptually similar to other precompilers and enables you to check SQL syntax, verify SQL operations against what is available in the schema, and check the compatibility of Java types with corresponding database types. In this way, you can catch errors during development rather than a user catching the errors at run time.

SQLJ is currently supported by Oracle and IBM DB2.

### How to generate SQLJ code through the compiler

To generate SQLJ code for your embedded SQL, use the [-sqlj](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#miscellaneous-options) compiler option.

The compiler produces an intermediate .sqlj source file and automatically invokes the SQLJ translsator to compile the .sqlj source file to class. In the end you obtain a class and a profile file produced by the SQLJ translator. The .sqlj source file is removed from disc, unless you have the [-jj](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#java-options) option in your compiler command line.

The SQLJ translator (*sqlj.exe* on Windows, *sqlj* on Unix/Linux) must be available in the Path, otherwise the above process fails and you obtain only the .sqlj source file, that you will have to compile later by running the SQLJ translator yourself.

If the SQLJ translator is not available in the Path, you can inform the compiler about the *sqlj* utility location through the following configuration setting:

```cobol
iscobol.compiler.sqlj=/path/to/sqlj_executable
```

The [iscobol.compiler.sqlj.options \*](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties#databasebridge-and-jdbcesql-configuration) configuration setting allows you to specify some *sqlj* command options. Refer to the SQLJ documentation of your database for the list of available options.

### SQLJ usage example for IBM DB2

The following steps are necessary to compile and run the isCOBOL’s ESQL sample on IBM DB2 using SQLJ:

1. compile the program with the [-sqlj](../../SDK-Users-Guide/Compiler-and-Runtime/Compiler/Compiler-Options#miscellaneous-options) option

```cobol
iscc -sqlj ESQL-SAMPLE.cbl
```

2. run *db2sqljcustomize* to to create a customized serialized profile

```cobol
db2sqljcustomize -user richler -password mordecai
     -url jdbc:db2:⁄server:50000⁄sample -collection duddy
     -bindoptions "EXPLAIN YES" ESQL_SAMPLE_SJProfile0.ser
```

3. run *db2sqljbind* to bind DB2 packages for the serialized profile that was previously customized

```cobol
db2sqljbind -user richler -password mordecai
     -url jdbc:db2:⁄⁄server:50000⁄sample -bindoptions "EXPLAIN YES"
     ESQL_SAMPLE_SJProfile0.ser
```

4. run the program

```cobol
iscrun ESQL_SAMPLE
```

**Note** - *db2sqljcustomize* and *db2sqljbind* were not available on old DB2 versions. The deprecated *db2profc* utility can be used instead on old DB2 versions.
