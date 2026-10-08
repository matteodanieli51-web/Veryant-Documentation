# Managing relative and sequential files on the database

DatabaseBridge allows you to manage relative and sequential files as database tables.

The table generated for a relative or sequential file includes two additional fields:

| | |
| --- | --- |
| RELSEQ_DUMMY_KEY | A numeric column that stores the ordinal number of the record. This field is used to read the records in the order they were written, the same behavior as data in disk files.This is the primary key of the table. |
| RELSEQ_DUMMY_RLEN | A numeric column that stores the record length of the current record. The value may change from record to record if the file has a variable length record. |
| | |

## EDBI Generation at compile time (one step)

EDBI routines can be generated automatically by the Compiler.

We can compile programs as follows:

```cobol
iscc -c=compiler.properties <program_name>.cbl
```

The file compiler.properties should include one or more DatabaseBridge configuration entries.

In order to activate the support for relative and sequential files, at least these two entries must be included:

```cobol
iscobol.compiler.easydb=1
iscobol.compiler.easydb.index_only=0
```

At the end of the compilation process, you will find additional source files in your working directory:

- <\prefix>EDBI-<\filename>.cbl : the bridge program that allows the file identified by filename to be used as a table on relational databases. The prefix depends by the destination database; for example, if *iscobol.compiler.easydb.oracle=1* is used, then oraEDBI-<\filename>.cbl is generated.

An alternative way to activate the DatabaseBridge facitlity is to set the necessary properties directly in the source code, using the SET Directive. For example:

```cobol
      $set "easydb" "1"
      $set "easydb.oracle" "1"
      $set "easydb.index_only" "0"
       PROGRAM-ID. PROG-FILE1.  
```

In this case, no specific configuration is required at compile time, so the compile command is just:

```cobol
iscc <program_name>.cbl
```

**Note** - the setting *easydb.light_cursors* is not supported for relative and sequential files.

## EDBI Generation with EDBIIS (two steps)

The EDBIIS command allows you to generate EDBI routines by processing XML data dictionaries.

In order to generate XML data dictionaries for relative and sequential files, compile the program as follows:

```cobol
iscc -efa <program_name>.cbl
```

At the end of the compilation process, you will find additional files in your working directory:

- <\filename>.xml : the data dictionary that describes the file identified by filename.

In order to generate EDBI routines, use the following command:

```cobol
edbiis <options> <filename>.xml
```

For example, in order to generate EDBI routines for the Oracle database, you can run:

```cobol
edbiis -do <filename>.xml
```

It will generate:

- EDBI-<\filename>.pco : the bridge program that allows the file identified by filename to be used as a table on Oracle databases.

**Note** - the options *-dmld*, *-dmlu*, *-dpld* and *-dplu* are not supported for relative and sequential files.

## Compiling EDBI user's routines

If you used the automatic routine generation done by the Compiler, your EDBI routine will be automatically compiled using the same compiler options that were used for the original program.

If you generated the EDBI routines using EDBIIS, instead, then it’s your duty to compile them. Take care to use the same data options that you are using with your COBOL application. For example, if you are compiling your programs with -ds for trailing separate sign, use -ds also to compile the EDBI routines.

## Setting the isCOBOL environment

In order to have relative and sequential files managed as database tables, add the following entries to the runtime configuration:

```cobol
iscobol.file.linesequential=easydb
iscobol.file.relative=easydb
iscobol.file.sequential=easydb
```

Ensure that [iscobol.jdbc.driver](\) and [iscobol.jdbc.url](\) are also set in order to allow the connection to the database.
