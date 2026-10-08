## Configuration

The behavior of Compiler, Runtime Framework and utilities can be customized with properties defined in a configuration file, that contains a list of properties consisting of the name of the property and its value, separated by an equals symbol (=), a colon (\:) or a space:

```cobol
Property=Value
Property:Value
Property Value
```

Property may contain the following characters only: lower-case letters (unless specified otherwise in this document), digits, periods and underscores to separate words Spaces, hyphens and any other characters are not allowed. The prefix "iscobol." is mandatory for any property, unless they’re set as system environment variables.

*Value* is trimmed. Leading and trailing spaces are removed. If you need to keep leading spaces, then start with a “\” (backslash).

The backslash character can be used to

- preserve leading spaces in the property value, e.g.

```cobol
myproperty=\ this is the value
```

- split the property value on multiple lines, e.g.

```cobol
myproperty=this \
           is \
           the \
           value
```

- escape characters, e.g.

```cobol
myproperty=C:\\folder1\\folder2
```

Common escape sequences:

| Escape sequence | Meaning |
| --- | --- |
| \\\ | backslash |
| \f | form feed (0x0C) |
| \n | line feed (0x0A) |
| \r | carriage return (0x0D) |
| \u#### | unicode representation (#### are the hex representation of the digit in UTF-16 BE encoding) |

The property value can include delimited free text (comment) or Java properties values. See [iscobol.conf.var_delimiters](./Configuration-Properties) for more details.

### Configuration files

Unless [iscobol.conf.only \*](./Configuration-Properties) is set (or the corresponding command line option \-conly is used, where applicable), isCOBOL can use several configurations at the same time. They are loaded in the following order, and the properties they contain are set in the order in which they appear in the respective files:

1. system environment variables

**Note** - isCOBOL only looks for system environment variables whose name is in upper case. This is not a problem on case insensitive systems like Windows. On case sensitive systems like Linux, instead, the system environment variable will not be found if its name is in lower or mixed case. Before looking for a configuration property among system environment variables, the Runtime automatically converts the property name to upper-case and replaces any dot with underscore.

2. /etc/iscobol.properties;
3. iscobol.properties located in the user home directory;
4. iscobol.properties located in the Java Classpath;
5. \-Discobol.conf=*ownconfigurationfile* or, where applicable, -c *ownconfiguration* file set at the command line;
6. $ISCOBOL/iscobol.properties
7. \-Discobol.\* (set at the command line).
8. \-Discobol.remote_conf=*remoteconfigurationfile* and -c *remoteconfigurationfile* (set at the client command line in Thin Client environment)

in addition to these configuration files, if iscobol.properties is located in a non-standard directory, you can also specify

```cobol
-Discobol.conf=class_name
```

to indicate the proper location. In this example, iscobol.properties is loaded in the same directory as class_name. The class_name needs to be loaded from a .jar file or from a folder (though typically with a package) which also contains iscobol.properties. This jar file or folder must be found in CLASSPATH.

You may also use a configuration file located on a web site by specifying:

```cobol
-Discobol.conf=http://www.yourwebsite.com/iscobol.properties
```

### Property values

When a property is set more than one time, the most recently set value is used. The properties appearing in the command line have the highest priority, overriding any other previously set value.

Boolean properties are True when their first character is "O", "o", "T", "t", "Y", "y", a digit from "1" to "9" or the word "ON" (case insensitive). Any other value is considered as False.

The value of a property can be retrieved in a COBOL program with the following statement:

```cobol
ACCEPT PropertyValue FROM ENVIRONMENT "PropertyName"
```

The value of a property can be temporarily set, for the duration of the working session, with the following statement:

```cobol
SET ENVIRONMENT "PropertyName" TO PropertyValue
```

*PropertyName* should not begin with "iscobol.". That prefix is automatically added by the Runtime.

*PropertyName* is case insensitive. The Runtime normalizes it before searching for it in the environment.

The value of a property can also be retrieved via the [C$GETENV](\) library routine and can be set via the [C$SETENV](\) library routine. These routines might be useful in a thin client environment as they allow you to manage the client-side environment if you call them with a CALL CLIENT statement.
