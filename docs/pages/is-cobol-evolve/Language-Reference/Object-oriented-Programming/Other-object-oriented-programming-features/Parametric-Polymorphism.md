### Parametric Polymorphism

Method overloading provides the ability to declare two or more methods of the same name, but with a different number of parameters and types. Each method has a method resolution signature that consists of the method name and all of the relevant information from the definition of each of the parameters, and from the returning item. During the resolution of the method, the signature derived from the invocation is compared with all methods of the same name. If the signatures match exactly, that method is bound. If not, the method that most closely matches the signature while still conforming is bound.

No two methods within a class may have the same signature.

#### Example:

Suppose we have three methods that print. The first method invokes the print method of whatever object pointer is passed to it. The second formats a packed decimal field and prints it, the third prints a variable length character string.

```cobol
    Method-id. PrintIt.
    Linkage section.
    01  In-o                   usage object.
    Procedure division using In-o.
        invoke in-o "PrintMe".
    End Method.
    Method-id. PrintIt.
    Working-Storage section.
    01  Out-p                  pic ZZZ,ZZZ,ZZZ.
    Linkage section.
    01  In-p                   pic 9(9).
    Procedure division using In-p.
        move In-p to Out-p.
        display out-p.
    End Method.
    Method-id. PrintIt.
    Working-Storage section.
    01  Out-p                  pic $$$,$$$.99.
    Linkage section.
    01  In-p                   pic s9(5)v99 packed-decimal.
    Procedure division using In-p.
        move In-p to Out-p.
        display out-p.
    End Method.
    Method-id. PrintIt.
    Linkage section.
    01  In-x                   pic x(20).
    01  In-len                 pic 9(4).
    Procedure division using In-x, In-len.
        display in-x(1:in-len).
    End Method.
```

If we invoke PrintIt with an object reference as in

```cobol
    Invoke aClass "PrintIt" using anObject.
```

or

```cobol
    aClass:>PrintIt (anObject).
```

we would invoke the first method, which would invoke the "PrintMe" method of anObject. If we invoked PrintIt as follows:

```cobol
    Invoke aClass "PrintIt" using "FooBar", 3.
```

or

```cobol
    aClass:>PrintIt ("FooBar", 3).
```

we would invoke the last method, and display "Foo".

Invoking Printit with a numeric as follows:

```cobol
    Invoke aClass "PrintIt" using 32
```

or

```cobol
    aClass:>PrintIt (32)
```

could match either the second or the third method, since the literal "32" is treated as USAGE DISPLAY. When there are two methods that match equally well, the first of the methods that match is the method to which we will resolve. In this case, it would be the second method, and we would display "32". Placing the method that is preferred first in the compilation unit assures that the method will be select when the choice is ambiguous.
