### Classes

As a first step in converting the example Java program to COBOL, gather the classes used.

Java source usually begins with a list of "import" statements that specify the classes used by the program.

The syntax in Java is:

```cobol
import [packagename.]classname;
```

When writing COBOL, necessary classes must be listed in the REPOSITORY paragraph, in the CONFIGURATION SECTION.

The syntax for COBOL is:

```cobol
class logical-class-name as "[packagename.]classname"
```

Where:

- logical-class-name is any valid COBOL name of your choice. It is used to reference the class in the COBOL code.
- [packagename.]classname is the full name of the class, the same name used in the "import" statement in the Java code.

For example, to convert the following Java statement to COBOL:

```cobol
import java.io.BufferedReader;
```

Specify the class in the REPOSITORY paragraph as follows:

```cobol
CONFIGURATION SECTION.
REPOSITORY.
  class jBufferedReader  as "java.io.BufferedReader"
  .
```

In Java programs, classes of the package “java.lang”, like java.lang.String, are always available, and therefore do not need to be imported; but COBOL programs MUST explicitly import these classes . For example,

```cobol
class JString            as "java.lang.String"
```

Java offers a shortcut to import all the classes of a package with a single import statement.

The Java syntax is:

```cobol
import packagename.*
```

COBOL does not have an equivalent syntax, requiring instead that each class be declared in the REPOSITORY paragraph.

The Java program “import” statements below:

```cobol
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;
```

Are translated to the following COBOL declarations:

```cobol
CONFIGURATION SECTION.
REPOSITORY.
   class jBufferedReader  as "java.io.BufferedReader"
   class jInputStreamReader as "java.io.InputStreamReader"
   class jURL     as "java.net.URL"
   class jURLConnection   as "java.net.URLConnection"
   class jString    as "java.lang.String"
   class jSystem    as "java.lang.System"
   .
```

**NOTE:** Multiple class declarations in the REPOSITORY paragraph are separated by newline characters, not by periods. Ending the paragraph with a period on a line by itself allows additional class declarations to be inserted.

Once the classes are declared, the COBOL procedure division code must be written following the Java source example.
