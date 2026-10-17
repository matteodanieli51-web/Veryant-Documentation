### Factory objects

As stated previously, a class describes the data for each instance of the class and defines the methods that can be used by each instance of the class. Each class has one object, called the factory object, that is responsible for functions, such as creating a new instance of the class and managing data associated with all instances of the class.

A factory object can be thought of as an instance of a special kind of class and has data (factory data) and methods (factory methods). The data and methods for the factory object are defined as part of the class definition.

Every instance of a class is created by the factory object of that class. When an object is created, the data descriptions in the class are used to allocate storage for the instance.

#### Example:

The checking account class shown below describes a factory object, which is called the checking account factory object. To create a new checking account instance, a method in the checking account factory object is used. To keep track of the number of checking account instances a data item in the factory object can be used. Whenever a new instance is created, 1 can be added to the value; whenever an instance is removed, 1 can be subtracted from the value.

Sample code for the checking account factory object could be as follows:

```cobol
    CLASS-ID. CheckingAccount INHERITS Base.
    ENVIRONMENT DIVISION.
    CONFIGURATION SECTION.
    REPOSITORY.
       CLASS Base.
    FACTORY.
    DATA DIVISION.
    WORKING-STORAGE SECTION.
    01  number-of-accounts          PIC 9(5).
    PROCEDURE DIVISION.
    METHOD-ID. newAccount.
    create-account.
       add 1 to number-of-accounts.
    ...
    END METHOD.
    END FACTORY
    OBJECT.
    ...
```
