## Lambda expressions

A lambda expression (also known as anonymous function) is a short block of code which takes in parameters and returns a value. Lambda expressions are similar to methods, but they do not need a name and they can be implemented right in the body of a method.

The syntax of a lambda expression is:

```cobol
->expression
```

isCOBOL supports lambda expressions inside COBOL classes by allowing you to specify a method name instead of a data-item name under the following conditions:

1. the type of the parameter must be a functional interface, that is an interface with only one method,
2. the method referenced via lambda must have the same signature (parameters, return type and thrown exceptions) of the method in the functional interface,
3. there must not be any space between '->' and the method name next to it,
4. the method must be referenced without parameters,
5. the method name must be univocal in its class.

**Note** - Lambda expressions are not supported in standard COBOL programs with PROGRAM-ID in their IDENTIFICATION DIVISION. They can be used only in COBOL classes with CLASS-ID in their IDENTIFICATION DIVISION.

### Example with Java functional interface

Java has several functional interfaces built in. One of these is [FilenameFilter](https://docs.oracle.com/javase/8/docs/api/java/io/FilenameFilter.html). Instances of classes that implement this interface are used to filter filenames. A FilenameFilter class is required for example by the [list](https://docs.oracle.com/javase/8/docs/api/java/io/File.html#list-java.io.FilenameFilter-) method of java.io.File.

The small COBOL class below lists all the cbl files in the current directory by printing their name on the system output. Files that don’t have a cbl extension are not listed. The filtering is performed by the filterFileName() method, that matches the [accept](https://docs.oracle.com/javase/8/docs/api/java/io/FilenameFilter.html#accept-java.io.File-java.lang.String-) method in the FilenameFilter interface and is invoked via lambda:

```cobol
 identification division.
 class-id. myclass as "myclass".
 
 environment division.
 configuration section.
 repository.
    class j-string     as "java.lang.String"
    class j-string-arr as "java.lang.String[]"
    class j-io-file    as "java.io.File"
    class j-system     as "java.lang.System"
    .
 identification division.
 factory.
  
 procedure division.
 
 identification division.
 method-id. main as "main".
 working-storage section.
 77 curr-dir  object reference j-io-file.
 77 file-list object reference j-string-arr.
 77 len       int.
 77 i         int.
 linkage section.
 01 args      object reference j-string-arr.
 procedure division using args.
 main.
    set curr-dir to j-io-file:>new(".").
    set file-list to curr-dir:>list(->myclass:>filterFileName).
    set len to file-list:>length.
    perform varying i from 0 by 1 until i >= len
       display file-list(i)
    end-perform
    goback.
 end method.
 
 identification division.
 method-id. filterFileName as "filterFileName".
 working-storage section.
 77 ret object reference "boolean".
 linkage section.
 01 f object reference j-io-file.
 01 n object reference j-string.
 procedure division using f, n
                returning ret.
 main.
    if n:>toLowerCase:>endsWith(".cbl")
       set ret to true
    else
       set ret to false
    end-if
    goback.
 end method.
 
 end factory.
 
 end class.
```
