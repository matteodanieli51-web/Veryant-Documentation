## Init-Signature

This property defines the signature of the constructor to be used when the Java-Bean control is being created.

It’s useful when the Java-Bean has more than one constructor and you wish to use one of them in particular. Consider the following JavaDoc for example:

```cobol
JControl(int param1, int param2)
JControl(int param1, long param2)
```

The equivalent COBOL definition to be used in Screen Section in case you wish to use the first constructor is:

```cobol
03 Java-Bean
   ...
   Init-Signature ("int, int")
   Object crtl
   ...
   .
```

**Note**: Since the property is parsed as a standard property by the Compiler, it can contain only object types that can be cast to COBOL items. It’s permissible to use int, long, or java.lang.String, for example, but not java.io.File, javax.swing.table.TableModel, java.util.Vector, etcetera.
