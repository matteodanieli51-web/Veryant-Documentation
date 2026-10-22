## Constructors

A constructor is called each time a new instance of a class (that is, an object) is created. Constructors are used to initialize the instance variables of that object. A class, and therefore a java-bean, may have several constructors with different parameters. By default, isCOBOL uses the constructor without parameters. To use a different constructor, the Init-Params property must be specified.

```cobol
Init-Params ( {Parameter} ... )
```

When the parameter type is ambiguous, the Init-Signature property must be specified.

```cobol
Init-Signature "ParameterType-1 [, ParameterType-2] ..."
```

Since the Init-Params and Init-Signature determine what constructor is used to create the new instance of the java-bean, they are used only when the java-bean is being created and therefore they can be specified only in a screen item or in a DISPLAY statement, not in a MODIFY statement.

Note: These properties are parsed as standard properties by the Compiler, so they can contain only object types that can be cast to COBOL items. It’s allowed to use int, long, or java.lang.String, for example, but not java.io.File, javax.swing.table.TableModel, java.util.Vector, etcetera.
