### Method prototypes

Method prototypes are method skeletons that define the method name, parameters, and information necessary to describe those parameters such as that specified in the REPOSITORY paragraph and the SPECIAL-NAMES paragraph. They do not include the procedural code. In essence they provide all of the information required to invoke a method. Method prototypes are used to specify interfaces and are specified in interface definitions.

#### Example:

The method prototype for the calculateInterest method of the SavingsAccount class is as follows:

```cobol
    METHOD-ID. calculateInterest.
    DATA DIVISION.
    LINKAGE SECTION.
    01  interest-rate       PIC S9(3)v9999.
    01  interest-amount     PIC S9(9)V99.
    PROCEDURE DIVISION USING interest-rate RETURNING interest-amount.
    END METHOD.
```
