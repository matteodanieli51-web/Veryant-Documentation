## C$VERSION

The C$VERSION retrieves the isCOBOL framework version.

### Syntax:

```cobol
 CALL "C$VERSION" USING version
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *version* | PIC X(n) | After this routine has been called this data item contains the isCOBOL version framework. |

You can get the same result with this statement:

```cobol
ACCEPT version FROM ENVIRONMENT "runtime.version"
```

### Examples:

**Example -** Get the isCOBOL runtime version

```cobol
*> define str1 as pic x(n)

call "c$version" using str1
*> the value of str1 will be in this format: isCOBOL release yyyyR9 build#999.99-yyyymmdd-99999
```
