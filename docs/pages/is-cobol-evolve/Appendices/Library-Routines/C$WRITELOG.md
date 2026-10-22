## C$WRITELOG

The C$WRITELOG library routine allows you to add custom information to the isCOBOL log file. The [iscobol.tracelevel](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) property must be set to a value greater than 0 or the routine will have no effect.

Every call to this routine generates a new line in the log.

All the messages written to the log by this routine are messages of type INFO. If you wish to write messages of different type, consider using the [Logger Class (com.iscobol.logger.Logger)](../Internal-Objects/Logger-Class/Logger-Class) internal object instead.

### Syntax:

```cobol
 CALL "C$WRITELOG" USING text-1 [, text-2] ... [, text-n]
                  GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *text-1*<br>*text-2*<br>*...*<br>*text-n* | any data item or literal | Specifies the text to be written into the log file.<br>At least one parameter must be passed. The others are optional.<br>Multiple parameters values are combined together in the same log line. |

### Return code:

*returnCode* can be any numeric data item and provides additional information:

|  |  |
| --- | --- |
| 1 | Operation successful |
| 0 | Operation failed, probably [iscobol.tracelevel](../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) is set to 0 |

### Examples:

**Example -** Write some custom information to the log

```cobol
call "c$writelog" using "Customer in debt " cust-code ". Debt Amount : " cust-amount-ed.
```
