### setProperty

Sets the value of a property of the java-bean in Screen Section. See [JAVA-BEAN](../../../User-Interface/Controls-Reference/JAVA-BEAN/JAVA-BEAN) for more information on java-beans in Screen Section.

#### General format

```cobol
int setProperty (name, value)
```

#### Syntax rules

1. *name* is an alphanumeric data item or literal.
2. *value* is an object reference to java.lang.Object. For numeric and alphanumeric values, COBOL data items or literals can be used.

#### General Rules

1. *name* is case sensitive.
2. setProperty() returns 0 on success and -1 on failure.
