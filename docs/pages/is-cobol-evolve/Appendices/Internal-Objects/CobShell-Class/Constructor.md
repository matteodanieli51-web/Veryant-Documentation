### Constructor

Creates a new instance of the CobShell class.

#### Format 1

```cobol
CobShell (Script-Name)
```

#### Syntax rules

- *Script-Name* is a alphanumeric data item or string literal.

#### General rules

- *Script-Name* should point to a disk file. Relative paths are resolved according to the JVM working directory.

#### Code example

```cobol
       configuration section.
       repository.
           class cobshell as "com.iscobol.cobshell.CobShell"
       ...
       working-storage section.
       77  joe object reference cobshell.
       ...
       procedure division.
       ...
           try
              set joe  to cobshell:>new ("validator.joe")
           catch exception
              display exception-object
           end-try.
```

#### Format 2

```cobol
CobShell (Script-Name, Arguments)
```

#### Syntax rules

- *Script-Name* is a alphanumeric data item or string literal.
- *Arguments* is a variable number of java.lang.Object instances. COBOL data items and literals can be used as well.

#### General rules

- *Script-Name* should point to a disk file. Relative paths are resolved according to the JVM working directory.
- *Arguments* are the values that you would pass if you run the script on the command-line.

#### Code example

```cobol
       configuration section.
       repository.
           class cobshell as "com.iscobol.cobshell.CobShell"
       ...
       working-storage section.
       77  joe object reference cobshell.
       ...
       procedure division.
       ...
           try
              set joe  to cobshell:>new ("script1.joe", 1, "XYZ")
           catch exception
              display exception-object
           end-try.
```
