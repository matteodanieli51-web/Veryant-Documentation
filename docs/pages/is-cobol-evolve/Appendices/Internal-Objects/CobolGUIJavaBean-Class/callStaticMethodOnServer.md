### callStaticMethodOnServer

Invokes a static method of a given class server side using the remote calls technology. See [Remote objects](../../../../is-cobol-AS/Remote-objects) for more information about remote calls.

#### General format

```cobol
Object callStaticMethodOnServer (class, name)
Object callStaticMethodOnServer (class, name[, object-parameter-1][, object-parameter-2][, object-parameter-3][, object-parameter-4][, object-parameter-5])
Object callStaticMethodOnServer (class, name, object-parameters)
Object callStaticMethodOnServer (class, name, signature, object-parameters)
```

#### Syntax rules

1. *class* is an alphanumeric data item or literal
2. *name* is an alphanumeric data item or literal
3. *object-parameter-1* to *object-parameter-5* are object reference to java.lang.Object
4. *signature* is an alphanumeric data item or literal
5. *object-parameters* is an object reference to java.lang.Object[]

#### General Rules

1. *class* and *name* is case sensitive
2. *signature* is a comma separated list of Java data types that describe the parameters that will follow, e.g. ("int, int, String")
3. The runtime invokes the specified method locally, first. If it does not find the class or the method locally and the configuration property [iscobol.remote.code_prefix](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) is set to a valid value, thenit invokes the method remotelly.
4. For security reasons, the method will be invoked on the server side only if it is defined as alias name.See [Using Aliases](../../../../is-cobol-AS/Remote-objects) for more information about aliases. The method alias name must be in the format *className.methodName*, case-sensitive.
5. The object returned can be intercepted using COBOL data items if it’s a number or a string.
