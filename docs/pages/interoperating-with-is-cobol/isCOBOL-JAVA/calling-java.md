# isCOBOL and Java

## Calling Java programs or methods

This chapter describes how a COBOL program can call a Java program using isCOBOL.

A COBOL program can call a Java program using the [CALL](\) statement as long as the Java program implemenents the *com.iscobol.rts.IscobolCall* interface and exposes the following public method:

```cobol
public abstract java.lang.Object call(java.lang.Object[])
```

Sample programs for this task are installed with isCOBOL in the subfolder *sample/is-java/iscobol-call-java*.

A COBOL program can invoke any Java method using object oriented syntax or the [INVOKE](\) statement.

Sample programs for this task are installed with isCOBOL in the subfolder *sample/is-java/iscobol-call-java-object*.
