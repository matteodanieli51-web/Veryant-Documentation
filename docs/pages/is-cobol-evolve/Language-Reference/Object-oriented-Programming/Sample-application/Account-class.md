### Account class

The source code for the account class is illustrated below. The class has two factory methods:

- addAccount adds 1 to the value of number-of-accounts, and
- removeAccount subtracts 1 from the value of number-of-accounts.

The account class also has six instance methods:

- newAccount creates a new instance of an account object,
- displayUI displays the value of the account balance or performs another function based on a user's request,
- balance retrieves the balance of the account,
- deposit adds an amount to the current balance of the account,
- withdraw subtracts an amount from the current balance of the account,
- initializeAccount moves initial values into the instance data.

```cobol
CLASS-ID. Account.
ENVIRONMENT DIVISION.
CONFIGURATION SECTION.
REPOSITORY.
IDENTIFICATION DIVISION.
FACTORY.
DATA DIVISION.
WORKING-STORAGE SECTION.
01  number-of-accounts     PIC 9(5) VALUE ZERO.
PROCEDURE DIVISION.
 
IDENTIFICATION DIVISION.
METHOD-ID. addAccount as "addAccount".
PROCEDURE DIVISION.
method-start.
    ADD 1 TO number-of-accounts.
END METHOD.
 
IDENTIFICATION DIVISION.
METHOD-ID. removeAccount as "removeAccount".
PROCEDURE DIVISION.
main-entry.
    SUBTRACT 1 FROM number-of-accounts.
END METHOD.
END FACTORY.
 
IDENTIFICATION DIVISION.
OBJECT.
DATA DIVISION.
WORKING-STORAGE SECTION.
01  account-balance        PIC S9(9)V99.
01  account-number         PIC X(9).
01  the-date               PIC 9(8).
PROCEDURE DIVISION.
 
IDENTIFICATION DIVISION.
METHOD-ID. newAccount as "new".
DATA DIVISION.
PROCEDURE DIVISION.
begin-here.
    INVOKE SELF "initializeAccount" USING BY CONTENT number-of-accounts.
END METHOD.
 
IDENTIFICATION DIVISION.
METHOD-ID. displayUI as "displayUI".
DATA DIVISION.
WORKING-STORAGE SECTION.
01  in-data.
    03 action-type         PIC X.
    03 in-amount           PIC S9(9)V99.
    03 in-wrk              PIC X(12).
PROCEDURE DIVISION.
method-start.
    DISPLAY "Enter D for Deposit, B for Balance or W for Withdrawal"
    ACCEPT in-data
    EVALUATE action-type
    WHEN "D"
         PERFORM get-amount
         INVOKE SELF "deposit" USING in-amount
    WHEN "W"
         PERFORM get-amount
         INVOKE SELF "withdraw" USING in-amount
    WHEN "B"
         INVOKE SELF "balance"
    WHEN OTHER
         DISPLAY "Enter valid transaction type."
         GOBACK
    END-EVALUATE
    GOBACK
    .
get-amount.
    DISPLAY "Enter amount 9(9).99"
    ACCEPT in-wrk
    COMPUTE in-amount = FUNCTION NUMVAL (in-wrk)
    .
END METHOD.
 
IDENTIFICATION DIVISION.
METHOD-ID. balance as "balance".
DATA DIVISION.
WORKING-STORAGE SECTION.
01  display-balance        PIC $ZZZ,ZZZ,ZZ9.99.
PROCEDURE DIVISION.
disp-balance.
    MOVE account-balance to display-balance
    DISPLAY "Your Account Balance is:" display-balance
END METHOD.
 
IDENTIFICATION DIVISION.
METHOD-ID. deposit as "deposit".
DATA DIVISION.
LINKAGE SECTION.
01  in-deposit             PIC S9(9)V99.
PROCEDURE DIVISION USING in-deposit.
make-deposit.
    ADD in-deposit TO account-balance
END METHOD.
 
 
IDENTIFICATION DIVISION.
METHOD-ID. withdraw as "withdraw".
DATA DIVISION.
LINKAGE SECTION.
01  in-withdraw            PIC S9(9)V99.
PROCEDURE DIVISION USING in-withdraw.
withdraw-start.
    IF account-balance >= in-withdraw
       SUBTRACT in-withdraw FROM account-balance
    ELSE
       DISPLAY "Your Balance is Inadequate"
    END-IF
END METHOD.
 
IDENTIFICATION DIVISION.
METHOD-ID. initializeAccount as "initializeAccount".
DATA DIVISION.
LINKAGE SECTION.
01  new-account-number     PIC 9(5).
PROCEDURE DIVISION USING new-account-number.
Begin-initialization.
    MOVE ZERO TO account-balance
    MOVE new-account-number TO account-number
    ACCEPT the-date FROM CENTURY-DATE
END METHOD.
END OBJECT.
```

The following statements from the above code

```cobol
INVOKE SELF "initializeAccount" USING BY CONTENT number-of-accounts
INVOKE SELF "deposit" USING in-amount
INVOKE SELF "withdraw" USING in-amount
INVOKE SELF "balance"
```

could also be written as

```cobol
SELF:>initializeAccount (number-of-accounts)
SELF:>deposit (in-amount)
SELF:>withdraw (in-amount)
SELF:>balance ()
```

The main advantages in using the object:>method syntax instead of INVOKE are:

- the code is more similar to Java code, so it’s easier to write down a cobol program that uses objects by converting an existing Java sample.
- more statements can appear in the same exception block. E.g., the following code

```cobol
INVOKE myObj "method1" 
  ON EXCEPTION
     DISPLAY MESSAGE exception-object:>getMessage()
END-INVOKE.
INVOKE myObj "method2" 
  ON EXCEPTION
     DISPLAY MESSAGE exception-object:>getMessage()
END-INVOKE.
```

can be written as

```cobol
TRY
   myObj:>method1();
   myObj:>method2();
CATCH EXCETPION
   DISPLAY MESSAGE exception-object:>getMessage()
END-TRY.
```

- Nested method invocation can be used. E.g., consider having an object named objParent, that provides a method called getChild. The getChild method returns and instance of objChild object, that has a method called doSomething. In order to use the doSomething method with INVOKE statement, two steps are required:

```cobol
INVOKE objParent "getChild" GIVING objChild.
INVOKE objChild "doSomething".
```

With the object:>method syntax, instead, the objective can be achieved with one single statement:

```cobol
objParent:>getChild:>doSomething().
```

**Note** - object:>method could be considered as a parameter of a previous COBOL statement if

- the previous COBOL statement supports multiple parameters (e.g. MOVE or DISPLAY)
- the previous COBOL statement isn’t closed

If it’s not possible to close the previous statement with a dot, use two semicolons.

For example, the following code is not accurate and leads to compiler errors and unwanted runtime behaviors:

```cobol
if test-var = 1
   move 0 to test-var
   myObj:>myMethod1()
end-if
display test-var
myObj:>myMethod2()
```

myObj:>myMethod1 would be considered as a second parameter of the previous MOVE while the result of myObj:>myMethod2 would be displayed along with test-var.

The above code can be corrected as follows:

```cobol
if test-var = 1
   move 0 to test-var;;
   myObj:>myMethod1()
end-if
display test-var.
myObj:>myMethod2()
```
