### callMethod

Invokes a method of the java-bean in Screen Section. See [JAVA-BEAN](../../../User-Interface/Controls-Reference/JAVA-BEAN/JAVA-BEAN) for more information on java-beans in Screen Section.

#### General format

```cobol
Object callMethod (name)
Object callMethod (name[, object-parameter-1][, object-parameter-2][, object-parameter-3][, object-parameter-4][, object-parameter-5])
Object callMethod (name, object-parameters)
Object callMethod (name, signature, object-parameters)
```

#### Syntax rules

1. *name* is an alphanumeric data item or literal
2. *object-parameter-1* to *object-parameter-5* are object reference to java.lang.Object
3. *signature* is an alphanumeric data item or literal
4. *object-parameters* is an object reference to java.lang.Object[]

#### General Rules

1. *name* is case sensitive.
2. *signature* is a comma separated list of Java data types that describe the parameters that will follow, e.g. ("int, int, String").
3. The object returned can be intercepted using COBOL data items if it’s a number or a string.
