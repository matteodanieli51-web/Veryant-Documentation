#### Source code preprocessing via regular expressions

The isCOBOL Compiler offers the ability to preprocess COBOL source files through regular expressions.

This feature is activated by the configuration property [iscobol.compiler.regexp \*](\). If the property is not set, then no preprocessing is performed. If the property is set, then the source code is preprocessed at compile time.

The property [iscobol.compiler.regexp \*](\) can be set to one or more pairs of strings enclosed between double quotes, in the format:

```cobol
iscobol.compiler.regexp= "match" "replacement" "match" "replacement" ...
```

Each pair of strings identifies a replacement that will be applied to the source before the Compiler processes it.

The first string of each pair is a match string and must respect Java specifications ([https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html](https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html) ).

**Note** - The backslash character (\\), if used, must be doubled due to the property file format.

The second string of each pair is the replacement string. Every time the first string matches it is replaced by the second string.

Regular expressions are resolved sequentially in the order they appear in the [iscobol.compiler.regexp \*](\) value for every line of code. More than one replacement might be performed on the same line; for example, having the following setting:

```cobol
iscobol.compiler.regexp="A.A" "ABA" "B.B" "BCD"
```

the text AXAB will be transformed in ABCD (ABAB after the first replacement and ABCD after the second replacement, that is applied on the result of the first).

Replacements affect all the text in the source code, including string literals.

The list file produced by the Compiler includes the result of the text replacement (see [Listing Options](\) for information about how to obtain a list fie).

The Debugger shows the result of the text replacement unless the [iscobol.compiler.debug.replaced\_source (boolean)](\) configuration property is set to false during the compilation or the Debugger is loading the source code from disk instead of extracting it from the class file.

##### Examples

**Example** - The following regexp replaces DISPLAY UPON SYSERR statements with calls to the C$WRITELOG routine, without case sensivity and regardless of how many spaces are between words.

```cobol
iscobol.compiler.regexp="(?i)(DISPLAY)(.+)\\s+(UPON)\\s+(SYSERR)" "CALL 'C\\$WRITELOG' USING \$2"
```
