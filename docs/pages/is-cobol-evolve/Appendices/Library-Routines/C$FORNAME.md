## C$FORNAME

The C$FORNAME library routine tells if a given class is available in the Classpath.

### Syntax:

```cobol
 CALL "C$FORNAME" USING className
                       [exceptionMessage]
                 GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *className* | PIC X(n) | Specifies the name of the class to be searched.<br>If the class is included in a package, the package name should be specified as well.<br>The value of this parameter is case sensitive. |
| *exceptionMessage* | PIC X(n) | This optional parameter receives the Java exception behind a "class not found" error or spaces if the class was correctly found. |

### Return code:

*returnCode* can be any numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | The class is available. |
| 1 | Class not found. |

### Examples:

**Example -** Verify if the Oracle JDBC driver class can be loaded:

```cobol
call "c$forname" using "oracle.jdbc.OracleDriver"
if return-code = 0
   display message "Oracle JDBC driver is available"
else
   display message "Oracle JDBC driver not available"
end-if
```
