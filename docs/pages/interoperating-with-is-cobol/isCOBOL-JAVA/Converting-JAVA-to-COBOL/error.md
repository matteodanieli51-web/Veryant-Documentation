### Error Handling

Java statements are usually bracketed in try/catch blocks, so the program can intercept and handle exception conditions. Some methods require a try/catch block and the compiler will return an error if one is not included. In any case, using try/catch is the preferred and recommended practice.

COBOL and Java have similar try/catch syntax.

The Java syntax is:

```cobol
try {
        java statements
    } catch (Exception e) {
        e.printStackTrace();
    }
```

The COBOL syntax is:

```cobol
try
   cobol statements
catch exception
   exception-object:>printStackTrace()
end-try
```
