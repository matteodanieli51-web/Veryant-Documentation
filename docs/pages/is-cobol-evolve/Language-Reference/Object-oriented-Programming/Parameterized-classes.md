## Parameterized classes

A parameterized class is a skeleton class definition that when passed the appropriate parameters will create a new class tailored to perform a given function. Parameterized classes allow developers to create classes that have common behavior. For example, a single parameterized collection class can be used to define many types of collection classes.

### Example:

Let's consider container classes which are typically used to hold references to objects of a given class. In a banking application, a specific type of container class, say AccountCollection, could be used to hold the list of identifiers to each account object. To generate a collection class that is capable of holding or managing only identifiers of checking account objects, the class name CheckingAccount is specified as a parameter when the collection class is created.

Suppose AccountCollection is a parameterized class whose definition is given elsewhere. Part of its class definition is as follows:

```cobol
CLASS-ID. AccountCollection INHERITS Base USING X.
ENVIRONMENT DIVISION.
CONFIGURATION SECTION.
REPOSITORY.
CLASS Base
CLASS X.
....
```

In another source unit, the following would create a class which is a collection of checking accounts and an object reference for this new kind of class.

```cobol
ENVIRONMENT DIVISION.
CONFIGURATION SECTION.
REPOSITORY.
CLASS CheckingAccountCollection EXPANDS AccountCollection USING CheckingAccount.
...
DATA DIVISION.
WORKING-STORAGE SECTION.
01 a-checking-account-collection USAGE OBJECT REFERENCE CheckingAccountCollection.
...
```
