### Object instantiations

The individual members of a class are called instance objects, or simply instances. For example, an individual checking account object can be called a checking account object instance, or a checking account instance. We will use the term instance to refer to an individual member of a class.

All instances of a class share the same data definition, but each instance has its own unique values.

The instances of a class also share the same methods. A method is defined once for the class, but each instance behaves as if it is the sole owner of the methods defined for the class. The methods are shared and can be used by all instances. This facility of object oriented programming environments permits the data for each instance to be hidden (encapsulated) because it can be accessed only via the methods of the class.

The conventions used in all of the code fragments and the sample bank application are as follows:

- Class names and interface names use camel case, the first letter of each word is capitalized. For example, the class checking account is "CheckingAccount".
- Method names use lower case for the first word and camel case for subsequent words, for example, the method deposit is "deposit"; and the method calculate charges is "calculateCharges".
- Data item names always consist of at least two lower case words separated by a "-", for example, customer name is "customer-name", an object is "an-object", and so forth.

#### Example:

Each checking account is represented by an account instance. Each instance has its own copy of the data described by the class, the customer's name, the current balance, and the date opened. Each instance uses the methods defined for the class to carry out its functions, for example, the deposit method credits the account.

Within the body of program code that defines a class, instances of the checking account class could be defined as follows:

```cobol
    ...
    OBJECT.
    DATA DIVISION.
    WORKING-STORAGE SECTION.
    01  checking-account.
        03 customer-name   PIC X(35).
        03 current-balance PIC S9(9)V99.
        03 date-opened     PIC 9(8).
    ...
    PROCEDURE DIVISION.
    METHOD-ID. deposit.
        method code
    END METHOD.
    ...
    METHOD-ID. withdraw.
        method code
    END METHOD.
    ...
    END OBJECT
```
