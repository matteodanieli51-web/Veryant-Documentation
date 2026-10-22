### Constructor

#### General Format

```cobol
Logger()
```

#### General Rules

1. Use [LoggerFactory Class (com.iscobol.logger.LoggerFactory)](../LoggerFactory-Class/LoggerFactory-Class) to retrieve the instance of this class.

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
