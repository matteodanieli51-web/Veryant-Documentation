### EDBI Generation at compile time (one step)

EDBI routines can be generated automatically by the Compiler.

We can compile the program as follows:

```cobol
iscc -c=compiler.properties PROG-FILE1.cbl
```

The file compiler.properties should include one or more DatabaseBridge configuration entries. For the moment, we just activate the database bridge feature. It will generate a generic EDBI routine. So, compiler.properties contains:

```cobol
iscobol.compiler.easydb=1
```

At the end of the compilation process, you will find a folder named "easydb" with one file inside:

- genEDBI-file1.cbl : the bridge program that allows FILE1 to be used as a table on relational databases.

We’ve just demonstrated how to create a generic EDBI routine. Generic EDBI routines have some limitations, for example they don't manage locks and they can't check for table existence upon OPEN, so it's better to generate a more specific routine, depending on the RDBMS that we're going to use. With the next step, we’re going to generate a EDBI routine that is suitable for the Oracle database. To achieve it, change compiler.properties as follows:

```cobol
iscobol.compiler.easydb=1
iscobol.compiler.easydb.oracle=1
```

Then compile again with the command:

```cobol
iscc -c=compiler.properties PROG-FILE1.cbl
```

At the end of the compilation process, you will find a folder named "easydb" with one file inside:

- oraEDBI-file1.cbl : the bridge program that allows FILE1 to be used as a table on Oracle databases.

Refer to the installed sample README file for instructions about the deployment and testing of these items.

An alternative way to activate the DatabaseBridge facitlity is to set the necessary properties directly in the source code, using the SET Directive. For example:

```cobol
      $set "easydb" "1"
      $set "easydb.oracle" "1"
       PROGRAM-ID. PROG-FILE1.
```

In this case, no specific configuration is required at compile time, so the compile command is just:

```cobol
iscc PROG-FILE1.cbl
```

See [DatabaseBridge (EasyDB) Configuration](\) for the list of all the available compiler properties.
