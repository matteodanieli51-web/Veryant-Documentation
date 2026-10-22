## isCOBOL Database Bridge

isCOBOL Database Bridge, the seamless RDBMS Interface for indexed COBOL Files, now also support binary sequential, line sequential and relative files.

This new feature allows you to take advantage of all the features provided through the RDBMS; for example online backup, encryption, users managements rights etc.

As default. isCOBOL Database Bridge generates just indexed COBOL files. A new compilation property has been added to also enable sequential and relative file generation:

```cobol
iscobol.compiler.easydb.index_only=false
```

The edbiis standalone command can now process any XML file created by the compiler using –efa option.

To run a COBOL program that needs to map sequential and relative COBOL files into an RDBMS, you should set the following properties:

```cobol
iscobol.file.sequential=easydb
iscobol.file.linesequential=easydb
iscobol.file.relative=easydb
```
