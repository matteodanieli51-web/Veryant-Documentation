## isCOBOL Compiler

Starting from isCOBOL 2019R1, OOP syntax has been enhanced to support the ANSI SO/IEC 1989:2014’s INTERFACE-ID paragraph.

The INTERFACE-ID paragraph indicates that this identification division is introducing an interface definition, specifying the name that identifies the interface and assigning interface attributes to the interface.

As an extension from ANSI SO/IEC 1989:2014, the isCOBOL 2019R1 Compiler also provides optional DEFAULT methods and auto-boxing of Java primitive data types.

New compiler options and new syntax have been added to enhance compatibility with other COBOL dialects.

### New OOP Syntax

The following program defines a new interface, and defines a default method:

```cobol
identification division.
INTERFACE-ID. myInterface as "myInterface".
identification division.
object.
procedure division.
identification division.
method-id. metInterface as "metInterface" DEFAULT.
procedure division.
main.
   display "metInterface"
   goback.
end method.
end object.
END INTERFACE.
```

The following code defines a class that implements the previous interface:

```cobol
identification division.
class-id. myClass as "myClass" implements myInterface.
configuration section.
repository.
   class myInterface as "myInterface".
identification division.
object.
procedure division.
identification division.
method-id. metClass as "metClass".
procedure division.
   display "metClass"
   goback.
end method.
end object.
```

The following program defines an object variable and instantiates it, then calls its default method:

```cobol
PROGRAM-ID. PROG.
CONFIGURATION SECTION.
REPOSITORY.
   CLASS myClass AS "myClass".
WORKING-STORAGE SECTION.
77 OBJ OBJECT REFERENCE myClass.
PROCEDURE DIVISION.
MAIN.
   set OBJ = myClass:>new().
   OBJ:>metInterface().
   OBJ:>metClass.
   GOBACK.
```

### Auto boxing on primitive types

Primitive types can now be used as if they were COBOL variables, making source code more readable and flexible:

```cobol
PROGRAM-ID. AUTO-BOXING.
WORKING-STORAGE SECTION.
77 var1-t object reference "boolean".
PROCEDURE DIVISION.
MAIN.
   set var1-t to true
   if var1-t
      display "true"
   else
      display "false"
   end-if
   GOBACK.
```

### New Compiler options

-vansi can be used to implicitly add FROM/UPON CONSOLE phrases to ACCEPT and DISPLAY statements. With this option the code:

```cobol
DISPLAY "ABC" line 2 col 2 reverse
ACCEPT VARX line 3 col 2 underline
```

will be translated as:

```cobol
DISPLAY "ABC" UPON CONSOLE
ACCEPT VARX FROM CONSOLE
```

Other compiler options added in isCOBOL 2019 R1:

- -dvext=nn to initialize external items to a default byte value
- -dvexta to initialize external items to a default byte value, for compatibility with ACUCOBOL-GT®
- • -dznt for compatibility with MicroFocus® NOTRUNC flag
- • -dzta for compatibility with MicroFocus® TRUNC”ANSI” flag
- • -sl to allow AREA B to extend to the end of the line, regardless of line length. The same format can also be achieved on a single source file by using the “>>IMP MARGIN-R IS AFTER END OF RECORD” compiler directive.

### New Syntax for compatibility

The following INSPECT statement clauses are now supported for compatibility with GnuCOBOL (formerly OpenCOBOL).

```cobol
INSPECT VARX TALLYING/REPLACING VAR9 FOR TRAILING "a" BEFORE "B"
INSPECT VARX REPLACING TRAILING "A" BY "B" BEFORE "C"

```

Background and foreground colors can now be specified by name instead of by number, improving compatibility with RM/COBOL.

The code below is now supported:

```cobol
DISPLAY "Text on Line 1" line 1 col 1 background BLUE
                                      foreground RED
```
