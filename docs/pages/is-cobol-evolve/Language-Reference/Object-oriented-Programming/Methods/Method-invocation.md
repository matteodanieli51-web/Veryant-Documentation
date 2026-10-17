### Method invocation

Any program or method can invoke a method to act on an object. The name of the method specified on the invocation statement will be the method executed. The invocation statement also allows arguments to be passed to the method and also allows the method to return a result.

#### Example:

Whenever an application needs to use an object, it invokes a method to act on the instance object. Let's assume the CheckingAccount class contains the methods deposit, withdraw and balance and that an-account references an instance of the Account class. The syntax to deposit an amount to an account is as follows:

```cobol
INVOKE an-account "deposit" USING in-amount
```

Similarly, the syntax to determine the current balance of an account is:

```cobol
INVOKE an-account "balance" RETURNING current-balance
```

An equivalent statement illustrating inline method invocation is:

```cobol
 MOVE an-account:>balance TO current-balance
```

When the application needs to determine the balance of a specific account, a conventional program or a method will request the instance to activate its balance method. Code fragments to accomplish this are shown below:

Assume a program wants to determine the balance of a checking account.

##### Program Code

```cobol
 
    WORKING-STORAGE.
    ...
    01 a-checking-account-object USAGE IS OBJECT REFERENCE CheckingAccount
    ...
    77 the-balance PIC S9(8)V99 VALUE ZERO.
    ...
    PROCEDURE DIVISION.
    ...
       INVOKE a-checking-account-object "balance" RETURNING the-balance. *> assume the object
                                                  *> referenced by a-checking-account-object
                                                  *> contains the reference to the desired
                                                  *> account
```

##### Checking Account Class

```cobol
    ...
    OBJECT.
    DATA DIVISION.
    WORKING-STORAGE SECTION.
 
 
    01  checking-account.
        03 customer-name    PIC X(35).
        03 current-balance  PIC S9(9)V99.
        03 date-opened      PIC 9(8).
    ...
    PROCEDURE DIVISION.
    ...
    METHOD-ID. balance.
    DATA DIVISION.
    ...
    LINKAGE SECTION.
    01  ls-balance          PIC S9(8)V99.
    ...
    PROCEDURE DIVISION RETURNING ls-balance.
    return-balance.
       MOVE current-balance TO ls-balance.
       EXIT PROGRAM.
    END METHOD.
    ...
```
