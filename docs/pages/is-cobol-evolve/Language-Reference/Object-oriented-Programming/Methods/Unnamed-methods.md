### Unnamed methods

Unnamed methods are methods without name. An unnamed method is declared by giving him an empty physical name. The following syntaxes are equivalent and produce unnamed methods:

1.

```cobol
METHOD-ID. somename as "".
```

2.

```cobol
METHOD-ID. "".
```

An unnamed method cannot have arguments, it cannot return values and it cannot raise exceptions. The keywords OVERRIDE, PUBLIC, PRIVATE and PROTECTED are ignored by the Compiler in this context.

These methods can be both factory methods or instance methods: in the former case the method is invoked when the class is created before the invocation of any other class method; this feature is also known as "static initialization block" or "static initializer". In the latter case the method is invoked before any constructor; this feature is also known as "non-static initialization block" or "non-static initializer".

Unnamed methods are useful to define constants. For example, the following code:

```cobol
       IDENTIFICATION DIVISION.
       METHOD-ID.  "".
       WORKING-STORAGE SECTION.
       LINKAGE SECTION.        
       PROCEDURE DIVISION.
       MAIN.              
           set const1 = 13.
       END METHOD.  
       END FACTORY .
```

produces the following constant in the class:

```cobol
public static int CONST1;
```
