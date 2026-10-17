## C$GETENV

The C$GETENV library routine returns the current value of a configuration property.

The routine can be used to inquire both isCOBOL and Java configuration properties.

When looking for an isCOBOL property, the “iscobol.” prefix must not be specified.

### Syntax:

```cobol
 CALL "C$GETENV" USING propertyName
                       propertyValue
                GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *propertyName* | PIC X(n) or string literal | Name of the property. |
| *propertyValue* | PIC X(n) | Value of the property. |

### Return code:

*returnCode* is a signed numeric data item:

|  |  |
| --- | --- |
| 0 | The property is found. |
| -1 | The property is not found. |

For your convenience, below is a list of common Java properties that you can inquire with this routine:

| Property Name | Value Description |
| --- | --- |
| java.version | The Java version number |
| java.vm.name | The JVM implementation name |
| java.vm.vendor | The JVM implementation vendor |
| java.class.version | The Java class format version number |
| java.home | The Java installation directory |
| java.io.tmpdir | The default directory in which Java should create temporary files |
| line.separator | The line separator (e.g. “\n” on Linux) |
| path.separator | The path separator (e.g. “;” on Windows) |
| os.name | The operating system/kernel name on which the program runs |
| os.version | The operating system version |
| os.arch | The operating system architecture |
| user.name | The user's account name |
| user.country | The two-letter country code of the default locale |
| user.language | The default language |
| user.timezone | The default time zone |
| user.home | The user home directory |
| user.dir | The user's current working directory |
| java.class.path | The paths of jar files, zip files, and directories used for finding Java classes. |
| java.library.path | The directory path used for finding native libraries |
| file.encoding | The character encoding for the default locale |
| sun.arch.data.model | The type of address/data manipulation supported for the processor/architecture |
| sun.cpu.endian | The byte order of the CPU |

### Examples:

Example - Get the iscobol.file.prefix and iscobol.code_prefix value

```cobol
*> define varname and varvalue as pic x(n)

move "file.prefix" to varname
call "C$GETENV" using varname varvalue
display "iscobol.file.prefix = " varvalue
move "code_prefix" to varname
call "C$GETENV" using varname varvalue
display "iscobol.code_prefix = " varvalue
```
