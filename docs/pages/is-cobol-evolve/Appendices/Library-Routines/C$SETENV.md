## C$SETENV

The C$SETENV library routine sets a configuration property.

### Syntax:

```cobol
 CALL "C$SETENV" USING propertyName
                       propertyValue
                      [propertyType]
                GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *propertyName* | PIC X(n) or string literal. | Name of the property. |
| *propertyValue* | PIC X(n) or string literal | Value of the property. |
| *propertyType* | PIC 9(n) or numeric literal | Optional.<br>If omitted or zero, the property is set with the COBOL properties. It has the same effect as a SET ENVIRONMENT statement. This is useful to set any property documented at [Configuration Properties](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) (i.e. "code_prefix").<br>If this parameter is set to 1, the property is set with the Java properties. It internally uses the setProperty method of the java.lang.System class. This is useful to set properties for the configuration of third party Java classes. |

### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Operation succeeded. |
| -1 | Invalid parameters. |
| -2 | Setting failed due to Java exception or unchangeable COBOL property. |

### Examples:

**Example -** Set the value of the file.prefix configuration property

```cobol
*> define varname and varvalue as pic x(n)

move "file.prefix" to varname
move "c:/app1/dat1;c:/app1/dat2"
call "c$setenv" using varname varvalue
```
