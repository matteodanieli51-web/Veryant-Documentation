### EDBI Generation with EDBIIS (two steps)

The EDBIIS command allows you to generate EDBI routines by processing XML data dictionaries.

In order to generate XML data dictionaries, compile the program as follows:

```cobol
iscc -efd PROG-FILE1.cbl
```

At the end of the compilation process, you will find one additional file in your working directory:

- file1.xml : the data dictionary that describes FILE1.

Note - the way numeric fields are described in the dictionary is affected by the configuration property [iscobol.compiler.efd_field_name_num (boolean)](\).

Assuming that you want to generate a EDBI routine to use FILE1 on Oracle databases, you can run the following command:

```cobol
edbiis -do file1.xml
```

It will generate:

- EDBI-file1.pco : the bridge program that allows FILE1 to be used as a table on Oracle databases.

See [Command Line Options](../../DatabaseBridge-generator-edbiis#command-line-options) for the list of all the available edbiis options.
