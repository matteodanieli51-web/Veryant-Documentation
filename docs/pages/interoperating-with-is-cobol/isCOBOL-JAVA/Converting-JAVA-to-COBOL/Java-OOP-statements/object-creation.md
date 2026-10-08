#### Object Creation

The syntax of a standard Java object creation statement is:

```cobol
[ObjectType] ObjectName = new classname [(parameters)];
```

The equivalent COBOL syntax is:

```cobol
SET ObjectName TO logical-class-name:>new [(parameters)]
```

Where:

- ObjectName is the name of the instance created by the “new” method. In Java programs, the ObjectName is implicitly defined, while COBOL programs must define it in the WORKING-STORAGE SECTION as follows:

```cobol
77 ObjectName OBJECT REFERENCE logical-class-name.
```

- logical-class-name is the logical name specified in the REPOSITORY paragraph.

For example, the statement in Java:

```cobol
BufferedReader bf = new BufferedReader(new InputStreamReader(uc.getInputStream()));
```

is translated to COBOL as:

```cobol
CONFIGURATION SECTION.
REPOSITORY.
   class jBufferedReader  as "java.io.BufferedReader".
 
WORKING-STORAGE SECTION.
77  bf   object reference jBufferedReader.
 
PROCEDURE DIVISION.
set bf to 
    jBufferedReader:>new(jInputStreamReader:>new(uc:>getInputStream())).
```
