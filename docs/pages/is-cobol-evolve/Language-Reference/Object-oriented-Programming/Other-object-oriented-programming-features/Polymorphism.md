### Polymorphism

Polymorphism is supported by COBOL in two different ways. Class polymorphism is supported through class inheritance and the use of interfaces. Parametric polymorphism is supported through method overloading.

#### Class polymorphism

Class polymorphism is generally provided through the class inheritance. In COBOL, the use of interfaces also provides class polymorphism, too.

An interface definition defines a subset of methods of any class implementing that interface. It provides a view of the methods that can be invoked for the class, including the names and parameter specifications for each method. That is, only method prototypes are described in the source unit of an interface definition.

A class may implement several interfaces. Each interface may include one or more of the methods of that class.

An object that implements all of the methods defined in an interface conforms to that interface. The application class hierarchy forms a hierarchy of conforming interfaces.

#### Example:

A banking application may have defined a method in the Account class that prints the data values associated with each instance, for example, current owner and balance. Likewise, a method in the Customer class can print the name and address of the customers it represents. If there is a need for a generalized routine that prints things, with correct page formatting, a class can be defined that contains the methods associated with printing. Any object that implements this class can then be printed by this routine. This illustrates polymorphism.

Sample code for the Print Class is shown below:

```cobol
    CLASS-ID. PrintReport.
    ENVIRONMENT DIVISION.
    CONFIGURATION SECTION.
    PROCEDURE DIVISION.
    METHOD-ID. printRpt.
    END METHOD.
    ...
```

#### Ad-Hoc polymorphism

Through the use of the REDEFINES clause a programmer can pass different classes of data to a method at runtime. As long as the data passed to the method is the same length, the determination of what data is passed can be determined through class condition tests in the method.

#### Example:

```cobol
    Method-id. AddIt.
    Working-Storage section.
    01  Out.
        02 Out-X                  pic X(4).
        02 Out-9 redefines Out-X  pic 9(4).
    Linkage section.
    01  In1.
        02 In1-X                  pic XX.
        02 In1-9 redefines In1-X  pic 99.
    01  In2.
        02 In2-X                  pic XX.
        02 In2-9 redefines In2-X  pic 99.
    Procedure division using In1, In2 returning Out.
        If In1-9 is numeric and In2-9 is numeric
            Compute Out-9 = In1-9 + In2-9
        Else
            String In1-X, In2-X delimited by size into Out-X
        End-if.
        End method.
```

Invoking AddIt with the input parameters of 'AB' and 'CD' would produce the result 'ABCD', whereas invoking AddIt with the input parameters of '01' and '02' would produce '0003'.

Unfortunately, object references cannot be redefined. This limits COBOL's support of ad-hoc polymorphism to items of a class and category that can exist within a weakly typed structure.
