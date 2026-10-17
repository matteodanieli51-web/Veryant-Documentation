### Class loading

In order for the JVM to find Java class files, they must be located in a directory contained in the class path, or stored in a JAR file that is listed in the class path. The Java compiler also uses the class path to locate classes referenced by the source file it is compiling.

The class path is most commonly specified in an environment variable named CLASSPATH. Other Java utilities, such as javap, also use the class path.

On Windows, the class path is a semicolon-delimited list of directories and/or JAR files, similar to the format of the PATH variable, except that in addition to directories, you can specify JAR files. The Java class loader treats JAR files just like directories.

Class path entries can contain the basename wildcard character *, which is considered equivalent to specifying a list of all the files in the directory with the extension .jar or .JAR.

For example:

```cobol
CLASSPATH=C:\myclasses;C:\myjars\*;C:\otherjars\app.jar
```

The above class path setting allows Java to load:

- all the class files located in c:\myclasses
- all the class files located in every jar file under c:\myjars
- all the class files located in the file c:\otherjars\app.jar

The class path can be specified either as a sytem environment variable or through a command line option. This command

```cobol
set CLASSPATH=C:\myclasses;C:\myjars\*;C:\otherjars\app.jar
java MAIN_PROG
```

is equivalent to

```cobol
java -cp C:\myclasses;C:\myjars\*;C:\otherjars\app.jar MAIN_PROG
```

#### COBOL programs classes

Unlike standard Java classes, COBOL programs’ classes can be loaded either from the class path or from the code prefix, depending on the configuration property [iscobol.code_prefix](\).

If [iscobol.code_prefix](\) is set, the isCOBOL runtime framework searches for COBOL program classes in the paths specified by the property. Whether [iscobol.code_prefix](\) is set or not, isCOBOL will always look for classes in the paths specified in the class path. If the same class is found in both code prefix paths and class paths, then the class is loaded from the class path. For this reason, it’s not good practice to add the same path to both the class path and [iscobol.code_prefix](\).

Classes loaded from the code prefix can be cancelled and reloaded multiple times during the runtime session. Classes loaded from the class path are loaded once and then kept in memory for the whole runtime session.

Classes loaded from the code prefix are reloaded in these situations:

- Default situation:
  - [iscobol.code_prefix.reload *](\) is set to 1,
  - the program was cancelled by the [CANCEL](\) statement or because it’s an INITIAL program,
  - the program class file changed on disc since the last time the program was called.

- Optimized situation:
  - [iscobol.code_prefix.reload *](\) is set to 0 or 2
  - the program was unloaded from the JVM by the [C$UNLOAD](\) library routine.

The second situation provides better performance because the runtime doesn’t have to access the disc at every CALL in order to find out if the program class file changed.

Only standard COBOL Programs (e.g. PROGRAM-ID programs) and the COBOL classes (e.g. CLASS-ID programs) that are invoked by reloaded standard COBOL Programs will be reloaded. Directly called COBOL classes can not be reloaded.

In application server environments, the reloading of a class affects all the clients.
