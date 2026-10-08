## New syntax

The COBOL syntax supported by isCOBOL contains some interesting extensions introduced by the ANSI 2002 standard. With isCOBOL, programmers can take advantage of:

- Variable length alphanumeric items.

```cobol 
77 my-var PIC X ANY LENGTH.
```

- Dynamic occurs.

```cobol 
01 my-table OCCURS DYNAMIC CAPACITY num-items.
  03 my-item1 PIC X(10).
  03 my-item2 PIC 9(5).
```

- The ability to measure the length of a string into PIC X items with one single statement.

```cobol 
INSPECT my-var TALLYING var-length FOR CHARACTERS BEFORE INITIAL TRAILING SPACE.
```

- The ability to interact with Java objects and create new objects using the proper syntax.

```cobol 
SET the-result TO my-object:>my-method ( parameter-1, parameter-2 )
```

- The new statement ASSERT to raise exception if the assertion is false when executing with the -ea Java option. This is particularly useful for debugging purpose as in Visual C and Java languages. Code example:

```cobol 
ASSERT (var1 = 1 or var2 = 2) 
     otherwise "Exception message to raise, " VAR1, VAR2.
```

- Called programs can return an alphanumeric exit status, e.g.

```cobol 
 GOBACK "OK".
```

This kind of exit status can’t be intercepted through the RETURN-CODE special register, but can be intercepted through an alphanumeric data item, e.g.

```cobol 
 working-storage section.
 ...
 77 rc pic x(4).
 ...
 procedure division.
 ...
     call "callee" using p1, p2
                  giving rc.
 ...
```
