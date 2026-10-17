### Object references

An object reference is a data item that contains a reference to an object. The content of the object reference is used to locate the object and information associated with the object.

An application may ensure at compile time that an object of one class, say employee, will never be used as an object of an unrelated class, say account. This is done by using an object reference described with either a classname, an interface-name, or an ACTIVE-CLASS phrase. If a class-name is specified, the data item can only be used to reference an object of the class specified, or one of its subclasses, as discussed in [Inheritance](../Other-object-oriented-programming-features/Inheritance). If an interface-name is specified, the data item can only be used to reference an object described with an IMPLEMENTS clause that references the interface specified, as discussed in [Class polymorphism](../Other-object-oriented-programming-features/Polymorphism). If the ACTIVE-CLASS phrase is specified, the data item can only be used to reference an object of the same class as that of the object with which the method was invoked. Object references for ACTIVE-CLASS are of special significance as returning items. This capability is needed for defining a new method in the BASE class that works as documented without violating the conformance rules, and it allows writing user methods that do object creation in conformance with the definition of the class hierarchy.

Alternatively, an application may use a universal object reference, one that can refer to any object. A data item is defined as a universal object reference by omitting all optional phrases from the OBJECT REFERENCE phrase of the USAGE clause. Runtime validation may be used to ensure that an object has the correct interface as described in [Conformance](../Other-object-oriented-programming-features/Conformance) for parameters and returning items, but this approach does require more runtime resources.

#### Examples:

The definition of a data item that can refer only to an object of the CheckingAccount class or one of its subclasses is:

```cobol
    01 an-account USAGE IS OBJECT REFERENCE CheckingAccount.
```

The definition of a data item that can hold a reference to any object is as follows:

```cobol
    01 an-object USAGE IS OBJECT REFERENCE.
```
