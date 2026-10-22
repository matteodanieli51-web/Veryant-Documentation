### callStaticMethod

Invokes a static method of a given class client side in thin client environment.

#### General format

```cobol
Object callStaticMethod (class, name)
Object callStaticMethod (class, name[, object-parameter-1][, object-parameter-2][, object-parameter-3][, object-parameter-4][, object-parameter-5])
Object callStaticMethod (class, name, object-parameters)
Object callStaticMethod (class, name, signature, object-parameters)
```

#### Syntax rules

1. *class* is an alphanumeric data item or literal
2. *name* is an alphanumeric data item or literal
3. *object-parameter-1* to *object-parameter-5* are object reference to java.lang.Object
4. *signature* is an alphanumeric data item or literal
5. *object-parameters* is an object reference to java.lang.Object[]

#### General Rules

1. *class* and *name* is case sensitive.
2. *signature* is a comma separated list of Java data types that describe the parameters that will follow, e.g. ("int, int, String").
3. The object returned can be intercepted using COBOL data items if it’s a number or a string.
