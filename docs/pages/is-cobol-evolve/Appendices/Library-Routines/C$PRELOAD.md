## C$PRELOAD

The C$PRELOAD routine runs asynchronously and instantiates all the COBOL programs contained in a given jar library or folder. This will speed up subsequent calls to these programs.

**Note -** only programs with a PROGRAM-ID are considered by this routine. Programs with a CLASS-ID and programs with a FUNCTION-ID are discarded, instead.

### Syntax:

```cobol
 CALL "C$PRELOAD" USING classesContainer
                 GIVING returnCode
```

### Parameters:

|  |  |  |
| --- | --- | --- |
| *classesContainer* | PIC X(n) | Specifies the location of the class files to be preloaded. It can be either a folder of classes or one jar file name.<br>If a folder is passed,<br>If a jar file file is passed, |

### Return code:

*returnCode* can be any signed numeric data item and provides additional information:

|  |  |
| --- | --- |
| 0 | Error occurred. The classes container is either not found or invalid. |
| 1 | The classes are going to be preloaded. |
| 2 | The preloading is in progress. |
| 3 | The classes have been successfully preloaded. |

The following constants are available in the [iscobol.def](../Copybooks/iscobol.def) copybook:

```cobol
78  cprel-error                                  value 0.
78  cprel-starting                               value 1.
78  cprel-in-progress                            value 2.
78  cprel-completed                              value 3.
```

### Examples:

**Example -** Load myApp.jar in memory to speed up subsequent calls to myApp classes. Note: The path to the jar with the jar name must be found in the Classpath

```cobol
call "c$preload" using "myApp.jar".
```
