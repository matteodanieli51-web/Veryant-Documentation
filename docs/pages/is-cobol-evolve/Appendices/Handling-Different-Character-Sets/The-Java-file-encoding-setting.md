## The Java file.encoding setting

If national items cannot be used, and standard alphanumeric items are used instead, special characters are handled by the Framework according to the current encoding set in the environment. To force the Framework to use a particular encoding overriding the operating system settings, you must set the *file.encoding* Java property. For example, in order to force UTF-8 as current encoding for the COBOL application, you add the following entry to the runtime command-line:

```shell
-J-Dfile.encoding=UTF-8
```

When managing special characters using standard alphanumeric items, you must pay attention to offsets. For example, if you reference a variable by specifying offset and length between parenthesis, like:

```cobol
MOVE var(2:) TO dest.
```

consider that 2 means the second byte and not the second digit, so, if the first character of *var* needs two or more bytes to be represented with the current encoding, the result of the COBOL operation will be a truncated string.

The Java *file.encoding* is also useful at compile time. If you have special characters in your source code and their ASCII value doesn’t match with the current operating system encoding, you should tell the compiler about it. For example, in order to compile a source written on Linux using UTF-8 on a Windows system where the system encoding is not UTF-8, you can use:

```cobol
iscc -J-Dfile.encoding=UTF-8 prog.cbl
```

**Note** - Java 21 uses UTF-8 by default, regardless of the underlying operating system. Using Java 21 on Windows, if you want Java to use the default encoding in the system like it happened with previous Java versions, you can specify the correct encoding through the *file.encoding* property. For example, on a Windows system whose code page is 1252, you can compile as follows:

```cobol
iscc -J-Dfile.encoding=cp1252 prog.cbl
```
