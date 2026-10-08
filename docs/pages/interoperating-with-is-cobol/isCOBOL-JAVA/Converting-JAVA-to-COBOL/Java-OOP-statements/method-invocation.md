#### Method Invocation

The syntax of a standard Java object method invocation is:

```cobol
[result] = ObjectName.method [(parameters)];
```

The equivalent COBOL syntax is:

```cobol
[SET result TO] ObjectName:>method [(parameters)]
```

Where:

- ObjectName can be:
  - a. the name of a data-item that contains the object reference, if we’ve created a new instance of the object (e.g. as shown above with java.io.BufferedReader)
  - b. the logical-class-name as defined in the REPOSITORY, if we’re invoking a static method (e.g. methods in the class "java.lang.String")

- result can be any COBOL data-item that is of suitable type to receive the method's return value.

**NOTE:** While ObjectName is not case sensitive because it is COBOL data-item, the name of the method is case sensitive because Java language is case sensitive.

The following Java syntax:

```cobol
[ObjectType] resultingObjectName = ObjectName.method [(parameters)];
```

is translated to COBOL as:

```cobol
SET resultingObjectName TO ObjectName:>method [(parameters)] [AS ObjectType]
```

- [AS ObjectType] is not always necessary. In most cases the isCOBOL Compiler automatically performs the proper type cast while compiling the OOP statement.

**Note:** isCOBOL doesn’t support autoboxing, you can’t pass native data types where Object are required. For example, consider the following constructor:

```cobol
myMethod (Object...)
```

When the parameters are primitive types, you can use the cast syntax in the translation. For example:

```cobol
int i = 0;
long l = 2;
myMethod (i, l);
```

Can be translated to:

```cobol
[...]
myMethod (0 as int, 2 as long);;
[...]
```

In most cases the compiler takes care of performing the proper cast, so you could just pass the values. However, specifying a cast is a good practice.
