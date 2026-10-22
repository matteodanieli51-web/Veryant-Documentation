#### Generics

In Java, generics are declared by specifying the class type (or types) between the less sign and the greater sign after the class name. The same syntax can be used in isCOBOL.

The following Java code:

```cobol
import java.util.ArrayList;
...
        ArrayList<String> strings = new ArrayList<>();
        strings.add("aaa");
        strings.add("bbb");
        strings.add("ccc");
```

can be translated to:

```cobol
...
configuration section.
repository.
   class StringArrayList as "java.util.ArrayList<java.lang.String>"
...
working-storage section.
77 strings object reference StringArrayList.
...
procedure division.
...
   set strings to StringArrayList:>new().
   invoke strings:>add("aaa").
   invoke strings:>add("bbb").
   invoke strings:>add("ccc").
...
```
