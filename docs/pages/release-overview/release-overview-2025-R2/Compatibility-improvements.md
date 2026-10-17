## Compatibility improvements

isCOBOL 2025 R2 has been enhanced to improve compatibility with other COBOL dialects, such as MicroFocus COBOL and IBM COBOL. The compiler has been improved with added functions, custom functions can now be declared using the FUNCTION-ID syntax, and the CURRENCY symbols have been improved.

### Functions

A typical COBOL program source code includes calling intrinsic functions that are part of the isCOBOL library. In this new release, four new functions have been implemented to provide better compatibility with other COBOL dialects.

Two of these handle the conversion from characters to bits and vice versa. These functions are BIT-OF and BIT-TO-CHAR.

Two handle the conversion from characters to hexadecimal values: HEX-OF and HEX-TO-CHAR

These functions require one alphanumeric parameter. The following is a code snippet that demonstrates how to use the new routines.

```cobol
    WORKING-STORAGE SECTION.
       77  w-char pic x.
       77  w-hex  pic x(2).
       77  w-8bit pic x(8).
       PROCEDURE DIVISION.
       ...
           move "A" to w-char
           move function bit-of(w-char) to w-8bit
           display w-8bit
           move function bit-to-char(w-8bit) to w-char
           display w-char
           display function hex-of(w-char)
           move "42" to w-hex
           display function hex-to-char(w-hex)
```

Custom functions, also known as user-defined functions, are supported in this new release, allowing developers to write their own function definitions that can then be invoked using the same FUNCTION keyword.

A new function must be declared using FUNCTION-ID paragraph, then it can be accessed from any other source code by declaring it in the repository.

For example, the following code declares and implements a new function using the function-id paragraph:

```cobol
    function-id. myfunction as "myfunction".
       working-storage section.
       77  myresult pic x(9).
       linkage section.
       77  myparam  pic x(5).
       procedure division using myparam 
                      returning myresult.
           ...
           string myparam delimited by size 
                  "-END"  delimited by size 
                     into myresult
           goback.
           end function myfunction
```

And the code below shows how to declare and use the function from another COBOL source.

```cobol
    configuration section.
    repository.
        function myfunction as "myfunction"
        ...
    working-storage section.
    77  w-par  pic x(5).
    77  w-res  pic x(9).
    procedure division.
        ...
        move function myfunction(my-par) to w-res      display $myfunction(mypar)
```

The returning item of the user-defined function, in this example, is a string that is created by appending the string argument received as parameter and the suffix “-END”. In the second source file, the function is invoked in the move statement, and the resulting string is used in the display statement.

### CURRENCY symbols

In COBOL, the CURRENCY SIGN in the SPECIAL-NAMES is used in the PICTURE clause to represent a monetary value. The new isCOBOL release supports the declaration of multiple currency signs and adds support for the WITH PICTURE SYMBOL clause that is used in the item definition to provide the correct currency.

For example, the following code snippet declares three different currency signs:

```cobol
    configuration section.
    special-names.
        currency sign is "USD " with picture symbol "$"
        currency sign is "EUR " with picture symbol "€"
        currency sign is "CHF " with picture symbol "F"
        ...
    working-storage section.
    01  w-price       pic 9(4)v99.
    01  w-usd-price   pic $$,$$$.99.
    01  w-eur-price   pic €€,€€€.99.
    01  w-chf-price   pic FF,FFF.99.
    procedure division.
    ...
        move 1234.89 to w-price
        move w-price to w-usd-price, w-eur-price, w-chf-price
        display w-usd-price
        display w-eur-price
        display w-chf-price
```

The output of the program in execution is:

```cobol
USD 1,234.89
EUR 1,234.89
CHF 1,234.89
```
