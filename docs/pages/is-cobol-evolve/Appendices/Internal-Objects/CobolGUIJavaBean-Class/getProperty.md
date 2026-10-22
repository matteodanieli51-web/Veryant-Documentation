### getProperty

Retrieves the value of a property of the java-bean in Screen Section. See [JAVA-BEAN](../../../User-Interface/Controls-Reference/JAVA-BEAN/JAVA-BEAN) for more information on java-beans in Screen Section.

#### General format

```cobol
Object getProperty (name)
```

#### Syntax rules

1. *name* is an alphanumeric data item or literal.

#### General Rules

1. *name* is case sensitive.
2. The object returned by getProperty() can be intercepted using COBOL data items if it’s a number or a string.
