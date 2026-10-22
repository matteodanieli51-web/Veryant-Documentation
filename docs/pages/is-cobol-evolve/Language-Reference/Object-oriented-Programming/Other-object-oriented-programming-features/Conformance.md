### Conformance

Conformance allows the compiler to check the application code and determine if any class hierarchy inconsistencies can occur at runtime. A data item can be constrained to be an object reference for only objects of a specific class or its subclasses by inserting the class name after the USAGE IS OBJECT REFERENCE clause. Additionally, the compiler can determine if the arguments passed to a method match the parameters specified in the USING phrase of the procedure division header. Arguments must match the parameters exactly to ensure conformance.

#### Example:

One part of a banking application can be written to deal with any kind of account. Data items that have been declared such as:

```cobol
    01 an-account USAGE OBJECT REFERENCE Account.
```

can reference any object of the account class or any object of a class that inherits from the account class. The rules of conformance ensure that the subclasses of the account class can be used in exactly the same way as objects of the account class itself. The underlying implementation of a subclass may be different from the original account class, but the interface is guaranteed to be compatible.

A different part of the banking application can be written to deal only with a specific kind of account. For example, the data item an-account would be defined as follows to hold a reference to a checking account object or to any object of a class that inherits from the CheckingAccount class. Note that in this example, no classes inherit from the CheckingAccount class.

```cobol
    01 an-account USAGE OBJECT REFERENCE CheckingAccount.
```

If a source element contains code that attempts to put a reference to an Account object into the data item declared to contain a checking account object, the compiler will warn the user that there is a potential error. It should be noted that the compiler cannot necessarily determine that this actually is an error, only that it might be an error. Additionally, the compiler can check to ensure that the arguments and parameters match.

The policy for conformance checking is conservative and errs on the side of caution.

These are some examples of restrictions imposed by compile time conformance checking, even though at runtime a conformance violation might not actually exist:

1. Let's assume there is a class A with a subclass A1, and a source element containing the following definitions:

```cobol
01 or-1 object reference A.
01 or-2 object reference A1.
```

The statement

```cobol
SET or-2 to or-1
```

is invalid, because or-1 may contain, for example, a reference to class A, which is not valid in or-2. At runtime, or-1 might actually contain a reference to A1, which would be a valid content of or-2. This is, however, not predictable at compile time. Therefore, the SET rules require that the class of the sending operand, A in this case, is the same class or a subclass of the class of the receiving operand (A1), which is not the case.

2. Although returning an object reference for ACTIVE-CLASS is generally allowed, there are still restrictions due to the compile-time checking requirement. The compiler does not know the object that will be used to invoke the method; it does, however, know the object reference that is used to invoke the method containing the object reference to be returned. It is possible for the compiler to derive some information about the item to be returned.

Consider the following class:

```cobol
Class-id. C inherits B.
Factory.
   Method-id. M
   Working-Storage section.
   01 or-1 object reference active-class.
   Procedure division returning or-1.
   End method.
End class.
```

Consider:

```cobol
Invoke C "M" returning anObj.
```

The compiler knows that the object returned by method M is of class C or some subclass of C. This knowledge can be used to detect some errors. For example, suppose we have this class hierarchy:

```cobol
B
|
C
|
D
```

Consider the following statements:

```cobol
01 or-B object reference B.
01 or-C object reference C.
01 or-D object reference D.
 
Invoke C "M" returning or-B
Invoke C "M" returning or-C
Invoke C "M" returning or-D
```

The compiler can statically determine that the first and second invokes are valid but the 3rd invoke is invalid, since it might result in storing an object of type C in an object reference of type D.

3. In principle, method invocation on a specific object identified at runtime is permitted for any method that is defined for that object. Compile time checking, however, restricts the eligible methods to those that are known at compile time. For example, if the specified object reference is restricted to a specific class, a method with this name must be defined in the class specified in the object reference. Thus it is possible to invoke an overriding method defined in a subclass of the specified class, but not a method that is defined only in the subclass, but not in the parent class.

Let C-1 be a class with a subclass C-2, where C-1 contains a method M-1 and C-2 contains a method M-2. Assume further a client program or method contains:

```cobol
01 or-1 object reference C-1.
 
Invoke or-1 "M-1"
```

This is valid. Even when or-1 actually references an object of C-2, there is no problem, because it is still the same M-1 in class C-1. Also, there is no problem when M-1 is defined in C-2 as a method overriding the M-1 of C-1, because the signature of the overriding M-1 is still the same.

But:

```cobol
Invoke or-1 "M-2"
```

is invalid, even when or-1 actually references an object of C-2, because the signature of M-2 is not known at compile time, and there is no way of conformance checking at compile time.

Note, however, that the object modifier can be used to get type-safe access to M2, with conformance checking at runtime:

```cobol
Invoke or-1 as C2 "M-2"
```
