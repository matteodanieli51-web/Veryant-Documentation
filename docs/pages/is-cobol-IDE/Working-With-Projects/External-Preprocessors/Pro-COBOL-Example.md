### Pro\*COBOL Example

#### Procob

The syntax of the 'Procob' Preprocessor is as follows:

```cobol
procob iname=inputfile oname=outputfile […]
```

The script needed to integrate the 'Procob' Preprocessor should be like this:

On Windows:

```cobol
runprocob.bat:
    procob iname=%1 oname=%2
```

On UNIX/Linux

```cobol
runprocob.sh:
    procob iname=$1 oname=$2
```

Integration of more Preprocessors:

Using a script file, it is possible to execute two or more Preprocessors. For example, if the user wants execute both the 'Procob' and 'Kixclt' Preprocessors, he should create a script like this:

On Windows:

```cobol
runprocobkixclt.bat:
kixclt -o %2.pco %1.cl2
procob iname=%2.pco oname=%2.cbl
    delete %2.pco
```

On UNIX/Linux

```cobol
runprocobkixclt.sh:
kixclt -o $2.pco $1.cl2
procob iname=$2.pco oname=$2.cbl
    rm –f $2.pco
```
