### Displaying on the console

Java uses the print() method of the java.lang.System class to print text either on the system output or on the system error. Although you could translate this method invocation to object oriented COBOL, it’s better using the DISPLAY statement, as it makes the source more readable and lets you skip the declaration of the System class in the program REPOSITORY.

For example, the following Java code:

```cobol
System.out.println("hello");
System.err.println("error!");
```

can be translated to:

```cobol
    REPOSITORY.
        class JSystem as "java.lang.System"
        ...
    PROCEDURE DIVISION.
        ...
        JSystem:>out:>println("hello");;
        JSystem:>err:>println("error!");;
```

But, even better, it can be translated to:

```cobol
    DISPLAY "hello" UPON SYSOUT.
    DISPLAY "error!" UPON SYSERR.
```
