## Init-Params

This property defines the list of parameters to be passed to the Java-Bean control constructor when it is being created.

It’s useful when the Java-Bean has a particular constructor that requires some parameters. Consider the following java snippet for example:

```cobol
JControl ctrl = new JControl(param1, param2);
```

The equivalent COBOL definition to be used in Screen Section is:

```cobol
03 Java-Bean
   ...
   Init-Params (param1, param2)
   Object crtl
   ...
   .
```

**Note**: Since the property is parsed as a standard property by the Compiler, it can only contain object types that can be cast to COBOL items. It’s permissible to use int, long, or java.lang.String, for example, but not java.io.File, javax.swing.table.TableModel, java.util.Vector, etcetera.
