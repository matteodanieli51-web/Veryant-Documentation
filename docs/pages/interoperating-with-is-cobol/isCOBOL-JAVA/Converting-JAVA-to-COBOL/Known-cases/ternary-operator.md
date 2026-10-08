#### The ternary operator

The ternary conditional operator ? allows Java programmers to define expressions. It's a condensed form of the if-else statement that also returns a value.

The following Java source

```cobol
result = var1 > var2 ? 1 : var1 < var2 ? -1 : 0;
```

can’t be translated directly to COBOL.

Before translating it to COBOL, you have to translate it to the corresponding if-else statement, that is:

```cobol
if(var1 == var2)
   result = 0;
else if(var1 > var2)
   result = 1;
else  
   result = -1;
```

This equivalent syntax is easily translatable to COBOL as follows:

```cobol
    if var1 = var2
       set result to 0
    else if var1 > var2
       set result to 1
    else  
       set result to -1
    end-if.
```
