## isCOBOL Compiler Enhancements

isCOBOL Evolve 2018 R1 implements new compiler options and new syntax to improve productivity.

### New compiler options

*-wmwc* to show warnings for long variables in MOVE… WITH CONVERT statements.

This option is useful for developers that need to check at compile time the MOVE statements that may produce wrong runtime behavior when a type conversion may cause data truncation.

*-watn* to show warnings when moving alphanumeric variables to numeric variables. This option is useful to check at compile time MOVE statements used to assign alphanumeric variables to numeric ones, which are unpredictable without the –cudc compiler option.

### New syntax supported

BINARY(n) syntax can now be used on group level and is applied on all child elements.

As an example, the following variable declaration:

```cobol
01 ARG-DESCRIPTION BINARY(2).
   02 ARG-TYPE        PIC 99.
   02 ARG-DIGIT-COUNT PIC 99.
   02 ARG-SCALE       PIC S99.
```

is equivalent to:

```cobol
01 ARG-DESCRIPTION.
   02 ARG-TYPE        PIC 99 BINARY(2).
   02 ARG-DIGIT-COUNT PIC 99 BINARY(2).
   02 ARG-SCALE       PIC S99 BINARY(2).
```

TYPEDEF syntax is now supported. It allows to define a type to be used in other variable declaration. It is similar to the existing SAME AS clause, but the TYPEDEF variable does not actually define a variable, but only a type definition for other variables to use.

Code snippet to define a type definition and use it to define 2 variables:

```cobol
77 type1 PIC 9(9)v9(6) IS TYPEDEF.
01 var1 usage type1.
01 var2 usage type1.
```
