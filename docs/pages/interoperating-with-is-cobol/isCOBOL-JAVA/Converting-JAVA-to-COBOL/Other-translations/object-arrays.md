#### Object arrays

In Java, array of objects are declared with the use of square brackets after the class name. Square brackets are used also to reference a specific item in the array. In Java, the first item of an array has index 0.

When translating object arrays syntax to COBOL, you still use square brackets in the class definition, but you use round brackets when referencing the array in Procedure Division.

The length property is used in the same way between Java and isCOBOL.

The following Java code:

```cobol
        String[] strings = new String[3];
        strings[0] = "aaa";
        strings[1] = "bbb";
        strings[2] = "ccc";
        System.out.println(strings.length);
```

can be translated to:

```cobol
...
configuration section.
repository.
   class JStringArr as "java.lang.String[]"
...
working-storage section.
77 strings object reference JStringArr.
...
procedure division.
...
   set strings to JStringArr:>new(3).
   set strings(0) to "aaa".
   set strings(1) to "bbb".
   set strings(2) to "ccc".
   display strings:>length upon sysout.
...
```
