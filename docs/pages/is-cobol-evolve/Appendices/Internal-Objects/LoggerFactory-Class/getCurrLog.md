### getCurrLog

The getCurrLog method returns the instance of the current logger. The property [iscobol.tracelevel](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) must be set to a value greater than zero, otherwise no logger exists.

#### General format

```cobol
com.iscobol.logger.Logger getCurrLog ()
```

#### General rules

1. A [Logger Class (com.iscobol.logger.Logger)](../Logger-Class/Logger-Class) object is returned. If no log exists because [iscobol.tracelevel](../../../SDK-Users-Guide/Compiler-and-Runtime/Configuration/Configuration-Properties) is set to zero, then null is returned.

#### Code example

```cobol
...
configuration section.
repository.
    class LoggerFactory  as "com.iscobol.logger.LoggerFactory"
    class Logger  as "com.iscobol.logger.Logger"
    .
...
working-storage section.
...
77 objLogger object reference Logger.
...
procedure division.
...
set objLogger to LoggerFactory:>getCurrLog()
...
```
