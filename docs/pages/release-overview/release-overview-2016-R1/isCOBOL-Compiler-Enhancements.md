## isCOBOL Compiler Enhancements

isCOBOL Evolve 2016 R1 release, includes many changes on the isCOBOL Compiler that improve its power and flexibility and simplify some areas of migration to isCOBOL from other COBOLs and Java interoperating.

### Object Oriented syntax check improvements

A new compiler Warning was added for method invocation used without cast when the signature is ambiguous. This new Warning helps to identify lines that could be better written using the cast to be sure hitch on the method that will be invoked when running.

Compiling the code in the following example:

```cobol
          repository.
             class math as "java.lang.Math"
          working-storage section.
          77  w-result pic 9(18). 
          procedure division.
             set w-result = math:>max(11, 22)
```

will return this compiler Warning on the line where “max” method is invoked:

```cobol
--W: #222 The method signature is ambiguous, use a (better) cast: max;
```

This occurs because the java class has 2 methods with the same name and same number of parameters but different type:

```cobol
static int max(int a, int b)
static long max(long a, long b)
```

To avoid the Warning the programmer can easily set which cast needs to be applied on the method invocation. In the previous example:

```cobol
set w-result = math:>max(11 as long, 22 as long)
```

or

```cobol
set w-result = math:>max(11 as int, 22 as int)
```
